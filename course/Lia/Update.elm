module Lia.Update exposing (Msg(..), generate, get_active_section, update)

import Array exposing (Array)
import Json.Encode as JE
import Lia.Effect.Update as Effect
import Lia.Helper exposing (ID)
import Lia.Index.Update as Index
import Lia.Markdown.Update as Markdown
import Lia.Model exposing (..)
import Lia.Parser exposing (parse_section)
import Lia.Types exposing (Mode(..), Section, Sections)
import Lia.Utils exposing (set_local)


type Msg
    = Load ID
    | InitSection
    | PrevSection
    | NextSection
    | DesignTheme String
    | DesignLight
    | ToggleLOC
    | UpdateIndex Index.Msg
    | UpdateMarkdown Markdown.Msg
    | SwitchMode
    | ToggleSound


update : Msg -> Model -> ( Model, Cmd Msg, Maybe ( String, JE.Value ) )
update msg model =
    case ( msg, get_active_section model ) of
        ( ToggleLOC, _ ) ->
            ( { model | loc = not model.loc }, Cmd.none, Nothing )

        ( UpdateIndex childMsg, _ ) ->
            let
                index =
                    model.sections
                        |> Array.map .code
                        |> Array.toIndexedList
                        |> Index.update childMsg model.index_model
            in
            ( { model | index_model = index }, Cmd.none, Nothing )

        ( UpdateMarkdown childMsg, Just sec ) ->
            let
                ( section, cmd, log ) =
                    Markdown.update childMsg sec
            in
            ( set_active_section model section, Cmd.map UpdateMarkdown cmd, log )

        ( DesignTheme theme, _ ) ->
            ( { model
                | design =
                    { light = model.design.light
                    , theme = set_local "theme" theme
                    }
              }
            , Cmd.none
            , Nothing
            )

        ( DesignLight, _ ) ->
            ( { model
                | design =
                    { light =
                        set_local "theme_light" <|
                            if model.design.light == "light" then
                                "dark"
                            else
                                "light"
                    , theme = model.design.theme
                    }
              }
            , Cmd.none
            , Nothing
            )

        ( Load idx, Just _ ) ->
            if (-1 < idx) && (idx < Array.length model.sections) then
                let
                    unused =
                        case model.uid of
                            Just uid ->
                                set_local uid idx

                            Nothing ->
                                0
                in
                update InitSection (generate { model | section_active = idx })
            else
                ( model, Cmd.none, Nothing )

        ( InitSection, Just sec ) ->
            case model.mode of
                Textbook ->
                    ( model, Cmd.none, Nothing )

                _ ->
                    let
                        ( sec_, cmd_, log_ ) =
                            Markdown.initEffect model.sound sec
                    in
                    ( set_active_section model sec_, Cmd.map UpdateMarkdown cmd_, log_ )

        ( NextSection, Just sec ) ->
            if (model.mode == Textbook) || not (Effect.has_next sec.effect_model) then
                update (Load <| model.section_active + 1) model
            else
                let
                    ( sec_, cmd_, log_ ) =
                        Markdown.nextEffect model.sound sec
                in
                ( set_active_section model sec_, Cmd.map UpdateMarkdown cmd_, log_ )

        ( PrevSection, Just sec ) ->
            if (model.mode == Textbook) || not (Effect.has_previous sec.effect_model) then
                update (Load <| model.section_active - 1) model
            else
                let
                    ( sec_, cmd_, log_ ) =
                        Markdown.previousEffect model.sound sec
                in
                ( set_active_section model sec_, Cmd.map UpdateMarkdown cmd_, log_ )

        ( SwitchMode, Just _ ) ->
            ( { model
                | mode =
                    set_local "mode"
                        (case model.mode of
                            Presentation ->
                                Slides

                            Slides ->
                                Textbook

                            Textbook ->
                                Presentation
                        )
              }
            , Cmd.none
            , Nothing
            )

        ( ToggleSound, Just sec ) ->
            let
                ( sec_, cmd_, log_ ) =
                    Markdown.initEffect (not model.sound) sec
            in
            ( { model | sound = set_local "sound" (not model.sound) }, Cmd.map UpdateMarkdown cmd_, log_ )

        _ ->
            ( model, Cmd.none, Nothing )


get_active_section : Model -> Maybe Section
get_active_section model =
    Array.get model.section_active model.sections


set_active_section : Model -> Section -> Model
set_active_section model section =
    { model | sections = Array.set model.section_active section model.sections }


generate : Model -> Model
generate model =
    case get_active_section model of
        Just sec ->
            set_active_section model <|
                case Lia.Parser.parse_section model.definition sec.code of
                    Ok ( blocks, codes, quizzes, surveys, effects ) ->
                        { sec
                            | body = blocks
                            , error = Nothing
                            , visited = True
                            , code_vector = if_update sec.code_vector codes
                            , quiz_vector = if_update sec.quiz_vector quizzes
                            , survey_vector = if_update sec.survey_vector surveys
                            , effect_model = effects
                        }

                    Err msg ->
                        { sec
                            | body = []
                            , error = Just msg
                        }

        Nothing ->
            model


if_update : Array a -> Array a -> Array a
if_update orig new =
    if Array.isEmpty orig then
        new
    else
        orig


log : String -> Maybe JE.Value -> Maybe ( String, JE.Value )
log topic msg =
    case msg of
        Just m ->
            Just ( topic, m )

        _ ->
            Nothing
