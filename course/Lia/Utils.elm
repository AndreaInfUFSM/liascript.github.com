module Lia.Utils exposing (eval_delayed, evaluateJS, evaluateJS2, formula, get_local, guess, highlight, load_js, set_local, stringToHtml)

import Html exposing (Html)
import Html.Attributes as Attr
import Json.Encode
import Lia.Helper exposing (ID)
import Native.Utils
import Task exposing (attempt)


highlight : String -> String -> Html msg
highlight language code =
    stringToHtml <| Native.Utils.highlight language code


guess : String -> String
guess code =
    Native.Utils.highlightAuto code


formula : Bool -> String -> Html msg
formula displayMode string =
    stringToHtml <| Native.Utils.formula displayMode string


evaluateJS : String -> Result String String
evaluateJS code =
    Native.Utils.evaluate code


eval_delayed : Int -> String -> ()
eval_delayed time code =
    Native.Utils.evalJS time code


load_js : String -> Result String String
load_js url =
    Native.Utils.load_js url


evaluateJS2 : (Result err ok -> msg) -> ID -> String -> Cmd msg
evaluateJS2 resultToMessage idx code =
    attempt resultToMessage (Native.Utils.evaluate2 idx code)


stringToHtml : String -> Html msg
stringToHtml str =
    Html.span [ Attr.property "innerHTML" (Json.Encode.string str) ] []


get_local : String -> Maybe String
get_local key =
    Native.Utils.get_local key


set_local : String -> a -> a
set_local key value =
    let
        unused =
            Native.Utils.set_local key (toString value)
    in
    value
