console.log("service-worker.js")

// advanced config for injectManifest approach
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// Detailed logging is very useful during development
workbox.setConfig({debug: false})

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute( /\/$/, new workbox.strategies.NetworkFirst() )
workbox.routing.registerRoute( /\/*/, new workbox.strategies.NetworkFirst() )
workbox.routing.registerRoute( /.+\/*/, new workbox.strategies.NetworkFirst() )

workbox.routing.registerRoute(
  /https:\/\/code\.responsivevoice\.org/,
  new workbox.strategies.StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([{"revision":"0d7ce80ec0272c4d9ac95d9daf4bc634","url":"ace.e0822dde.js"},{"revision":"31355cf078ba8861cc42ef69ace62a47","url":"app.3a5dd0ec.js"},{"revision":"8c5e27176a6d95deb7c1709095355872","url":"echarts.f75c04ea.js"},{"revision":"5c0c8a28f5a265c35286069ec2134c1c","url":"editor/ace.js"},{"revision":"7dee01c2845913c033bc571fb1bfe086","url":"editor/ext-beautify.js"},{"revision":"a30b7db4a546aa0bbbb0942aa613cc6a","url":"editor/ext-code_lens.js"},{"revision":"5191f0a2e50009f1a58dbaaf8c7eed03","url":"editor/ext-elastic_tabstops_lite.js"},{"revision":"6a4ba29960c107bb43623d987fab6c59","url":"editor/ext-emmet.js"},{"revision":"bff25dbf657a07d2df49accf1a604843","url":"editor/ext-error_marker.js"},{"revision":"8a574d51b6e0cb41d759290bc9b036e2","url":"editor/ext-keybinding_menu.js"},{"revision":"3e9662da8b91e9b7c1a1cbb5d6ef3ae4","url":"editor/ext-language_tools.js"},{"revision":"5d4dfb04b610b3991e9fcfdb6a4f0f4b","url":"editor/ext-linking.js"},{"revision":"408586d36c79fd091b38ef4683a6a034","url":"editor/ext-modelist.js"},{"revision":"a9da887ab11f0e5b9ce475e1c9e7d290","url":"editor/ext-options.js"},{"revision":"988885ca86836a6bf39e11f204b027bc","url":"editor/ext-prompt.js"},{"revision":"9e2362dfea9ea452b229f98e5955fce8","url":"editor/ext-rtl.js"},{"revision":"c3ad58df7587107f71fc1d511624250d","url":"editor/ext-searchbox.js"},{"revision":"5e9294adf93adb6eeb777e5976ce03bf","url":"editor/ext-settings_menu.js"},{"revision":"d06418ea6ef96f11a0b4f4f8e8457eb1","url":"editor/ext-spellcheck.js"},{"revision":"d9a200d4315c9a1619a12797a1eebb4d","url":"editor/ext-split.js"},{"revision":"4d49c932936b8f14e56ef06a545dac3c","url":"editor/ext-static_highlight.js"},{"revision":"dae83b0db0db201784db10174a2c0fa0","url":"editor/ext-statusbar.js"},{"revision":"c3269ef39fda22c8f920cb2649180e66","url":"editor/ext-textarea.js"},{"revision":"30e2d98c0a34cea5a7bfa0323673fcd6","url":"editor/ext-themelist.js"},{"revision":"a69009c59ec6f8498daae63971bd7814","url":"editor/ext-whitespace.js"},{"revision":"c1ef21692ff39cece0a331882fc9a94e","url":"editor/keybinding-emacs.js"},{"revision":"8d3d61ca57c26ffe219758416a90c332","url":"editor/keybinding-sublime.js"},{"revision":"12ece11d157158c3e76837f5fceb4bf1","url":"editor/keybinding-vim.js"},{"revision":"d2cb2a1e7d0eedcf406b636fbf6e7d49","url":"editor/keybinding-vscode.js"},{"revision":"9565ba96fc7434d4ebe12064592cf416","url":"editor/mode-abap.js"},{"revision":"44a1ca4f411810a2c1e56bcf46093244","url":"editor/mode-abc.js"},{"revision":"0405a5464c2c732ac96670ba1b7fd8ff","url":"editor/mode-actionscript.js"},{"revision":"fd7581d205a86f49908eda19424983f9","url":"editor/mode-ada.js"},{"revision":"36506050262b63143e227c8f0d2917db","url":"editor/mode-alda.js"},{"revision":"101447858061e58943416475a64afc33","url":"editor/mode-apache_conf.js"},{"revision":"ee742017ec781b6913821d4bd600db28","url":"editor/mode-apex.js"},{"revision":"08a8cce831a81e31f9089196656a1bf2","url":"editor/mode-applescript.js"},{"revision":"fd1a3b43c7540c8c8905d7eea012d741","url":"editor/mode-aql.js"},{"revision":"8373f2944e9da5dda7661fba6a7f0dc5","url":"editor/mode-asciidoc.js"},{"revision":"bd6d1808dcb54fc5a3571806b3596943","url":"editor/mode-asl.js"},{"revision":"1a784aeea47abf27999d46e4489f973f","url":"editor/mode-assembly_x86.js"},{"revision":"902febbf3a9a4045673eec5d0c0e8891","url":"editor/mode-autohotkey.js"},{"revision":"c7d3041669874ef8ad71f336ae87e32a","url":"editor/mode-batchfile.js"},{"revision":"ff72d8d4d9dbe0d6e70a6753489fec9c","url":"editor/mode-c_cpp.js"},{"revision":"d9e505c7cbb934f632a1da3dd274d7fc","url":"editor/mode-c9search.js"},{"revision":"f1652c3e7ea4e0fbf49af070421e8ad6","url":"editor/mode-cirru.js"},{"revision":"58215a333255b67dd31e2880b094251e","url":"editor/mode-clojure.js"},{"revision":"0411d98c44936e186ddf191991425e79","url":"editor/mode-cobol.js"},{"revision":"1972ee3a1d76ed24aa02ea61b6d51a15","url":"editor/mode-coffee.js"},{"revision":"0347a9473846dfd0b2816cde1e41123f","url":"editor/mode-coldfusion.js"},{"revision":"0156a7c3c544b84214bf80e6d1bd1650","url":"editor/mode-crystal.js"},{"revision":"24ae8b605e0957c023f2c545b0b0c423","url":"editor/mode-csharp.js"},{"revision":"f586e17cd1ea25148e8ffe9b63fb2292","url":"editor/mode-csound_document.js"},{"revision":"60a14b5c6a7c38d2bbf4a3d2f572977c","url":"editor/mode-csound_orchestra.js"},{"revision":"380ea645ff6fed6ce5d8e0aa5562cfde","url":"editor/mode-csound_score.js"},{"revision":"9d71b9820d289193eaff5eaf27fef7f2","url":"editor/mode-csp.js"},{"revision":"836be80db07e71e609173cbdc6432fcb","url":"editor/mode-css.js"},{"revision":"d7b4834b069e89f139c070dc3d183a37","url":"editor/mode-curly.js"},{"revision":"604774e5942ccd0179c0ac33519864a0","url":"editor/mode-d.js"},{"revision":"bf1014be8124fb582d2d7b94206ccced","url":"editor/mode-dart.js"},{"revision":"c3a745d0b3274c787a5b9ac225aeadc0","url":"editor/mode-diff.js"},{"revision":"ed144289d5ad392d11966860c48c67cf","url":"editor/mode-django.js"},{"revision":"55d175a63235ad785ee82417a99db705","url":"editor/mode-dockerfile.js"},{"revision":"cc0519b6f6308f2f9cf062fdb0cd018c","url":"editor/mode-dot.js"},{"revision":"6a0973d17f1ab68887a1164ed0cf3bdf","url":"editor/mode-drools.js"},{"revision":"a728972178956c784592f291cf5e6c32","url":"editor/mode-edifact.js"},{"revision":"581af32744c82553383a97bd0dcd1912","url":"editor/mode-eiffel.js"},{"revision":"9eeb896e339dde020acae09e63f8518a","url":"editor/mode-ejs.js"},{"revision":"bb736bb16827a36442a0f5efefc8d9f9","url":"editor/mode-elixir.js"},{"revision":"af24c9cedc7295cdfe53f1cc4ec44c93","url":"editor/mode-elm.js"},{"revision":"2d678814e872ac51e1a7842090283543","url":"editor/mode-erlang.js"},{"revision":"01da0b465eafcfc2810bd896463ac177","url":"editor/mode-forth.js"},{"revision":"d21aca4e2e8c71fc99f2927318f1c8fc","url":"editor/mode-fortran.js"},{"revision":"1ec5a8936d691fa969b2f740708bdaa0","url":"editor/mode-fsharp.js"},{"revision":"5ba2b3bcc56ce04517a3e96124277eb2","url":"editor/mode-fsl.js"},{"revision":"eb54ef6e809142904345efb5ca3b3e9f","url":"editor/mode-ftl.js"},{"revision":"475a05d86b21251ff0f04001e3faa145","url":"editor/mode-gcode.js"},{"revision":"44017c99d2b42aafad5fbe5761cf5295","url":"editor/mode-gherkin.js"},{"revision":"766f1a752d39d4a4d78023b167d00c69","url":"editor/mode-gitignore.js"},{"revision":"b2db0817e9295582ca44ca456e19ae4c","url":"editor/mode-glsl.js"},{"revision":"e2e8785e01c61f2a872ec761c04d4c51","url":"editor/mode-gobstones.js"},{"revision":"7f3c242d61bed2fb99e7cf150ea50fb3","url":"editor/mode-golang.js"},{"revision":"e37df7bbb738ae30fa0238f78cfc1b0e","url":"editor/mode-graphqlschema.js"},{"revision":"c1cabc180d30830b8b5979b44f0825bc","url":"editor/mode-groovy.js"},{"revision":"d1bd42b3a501b6c9ede63da117417312","url":"editor/mode-haml.js"},{"revision":"3321cd3ff35c64d073ce9c0e155733a0","url":"editor/mode-handlebars.js"},{"revision":"ac9180844f3e81f574b9129c7d3de15b","url":"editor/mode-haskell_cabal.js"},{"revision":"6feee712c423da0922209ece9da1e3d0","url":"editor/mode-haskell.js"},{"revision":"6005b9535dde621b9ec698e8d32c498a","url":"editor/mode-haxe.js"},{"revision":"8a27e45ff6269fded458c7b6b6037fe1","url":"editor/mode-hjson.js"},{"revision":"fda55e919a9cf66306ce09a9bfdb4f1e","url":"editor/mode-html_elixir.js"},{"revision":"d7507bf58c9960acdaefc4f7f92b8f4b","url":"editor/mode-html_ruby.js"},{"revision":"1f3528fbac6b4a68500b466508f38f9b","url":"editor/mode-html.js"},{"revision":"c2f15e1dcea856b54c8a3aa929cb033f","url":"editor/mode-ini.js"},{"revision":"5ec110176954ebf4c0d40283370a853d","url":"editor/mode-io.js"},{"revision":"bd12ee72dc7fd96382f0ee3fd0c9660c","url":"editor/mode-jack.js"},{"revision":"9c4b4aece76133f89ec353fe62ab2596","url":"editor/mode-jade.js"},{"revision":"c26a41e437fcb7aafd388a1f2f688eb1","url":"editor/mode-java.js"},{"revision":"cfeb080bbab42b58506c7596b61a1bfe","url":"editor/mode-javascript.js"},{"revision":"cdd79580f6f800830fa104cd927eed0e","url":"editor/mode-json.js"},{"revision":"5ceef9e4deae1719f9969ec6f13efb0f","url":"editor/mode-json5.js"},{"revision":"d96726cf599d8e58cce14a479d4fbb7f","url":"editor/mode-jsoniq.js"},{"revision":"5535fb9fdd6ea214057b538590e0abe3","url":"editor/mode-jsp.js"},{"revision":"3d85c1dddb6f352187fb79292f4d34a2","url":"editor/mode-jssm.js"},{"revision":"39eba2d3af7a1bfb9286075310593906","url":"editor/mode-jsx.js"},{"revision":"a31d257cf729e268a4c44697a8e4a99f","url":"editor/mode-julia.js"},{"revision":"2d82132251a4e067c821c5478a8c7e03","url":"editor/mode-kotlin.js"},{"revision":"2784efaf1f85d5b5e1af7855eb9d96b0","url":"editor/mode-latex.js"},{"revision":"41820f53b4543d8f0dcd7712cfa32c39","url":"editor/mode-less.js"},{"revision":"4dacd15cd1cde58fe26a1de800a759b6","url":"editor/mode-liquid.js"},{"revision":"8f1bf08aac055ed6ba204d20447a35d4","url":"editor/mode-lisp.js"},{"revision":"5eee9192b874911f584a0dbb055cb641","url":"editor/mode-livescript.js"},{"revision":"db801ca5d9c52aedb26ef7286a7d1dd7","url":"editor/mode-logiql.js"},{"revision":"37a56e440633b17598e87470c2c75cf6","url":"editor/mode-logtalk.js"},{"revision":"0cd0af5bfe4f4b453db2fc0803b91e06","url":"editor/mode-lsl.js"},{"revision":"8ef49e9f06fc0be6e765c98b9360a6a6","url":"editor/mode-lua.js"},{"revision":"cc90291aaafe54853ccbd06028d4e271","url":"editor/mode-luapage.js"},{"revision":"b1e5ef6ea4bf04c6003f49acf3464202","url":"editor/mode-lucene.js"},{"revision":"e1006d4c518310f6ff4dbcffbc21b248","url":"editor/mode-makefile.js"},{"revision":"38c01105bc728db9a14b963a4c63257d","url":"editor/mode-markdown.js"},{"revision":"5a491555c44355ed837e6cd8accff6ee","url":"editor/mode-mask.js"},{"revision":"56a36d379a0969374b751b74d1fe5436","url":"editor/mode-matlab.js"},{"revision":"db50739ade97d6547297fd042234da43","url":"editor/mode-maze.js"},{"revision":"6fe2398819a44f5b61bb9fd78f39109b","url":"editor/mode-mediawiki.js"},{"revision":"fb932c89faba8f12e8f7f765df1a5637","url":"editor/mode-mel.js"},{"revision":"81a0099e387626ce66c015a7e5d6d838","url":"editor/mode-mixal.js"},{"revision":"6fda934fe38a53b6ea7dae4de058f6c7","url":"editor/mode-mushcode.js"},{"revision":"bd5da5efd82f688648b28f49db8b3a3e","url":"editor/mode-mysql.js"},{"revision":"f0f221b78f476413e2ba2f2063181442","url":"editor/mode-nginx.js"},{"revision":"72b8cffc1f484dc9d669966fcc7cd9eb","url":"editor/mode-nim.js"},{"revision":"817b713c2300319e482ae21e7df10100","url":"editor/mode-nix.js"},{"revision":"bdf52a1d5288152388b079d0605feefc","url":"editor/mode-nsis.js"},{"revision":"f154d8902802f7ce92df0f891b500008","url":"editor/mode-nunjucks.js"},{"revision":"214cd7cfd7b60cb226db59598aaf7191","url":"editor/mode-objectivec.js"},{"revision":"fc7a312c2a946e839cf2ce677d09a1ef","url":"editor/mode-ocaml.js"},{"revision":"2e40620cbf4af7ca511d41c757bad623","url":"editor/mode-pascal.js"},{"revision":"9b78b9c39e1a262f47694aa84928f661","url":"editor/mode-perl.js"},{"revision":"2119e845826f29976f25500f5b385be5","url":"editor/mode-perl6.js"},{"revision":"3d3127c18a719c03eeb00e5fdfd10018","url":"editor/mode-pgsql.js"},{"revision":"ea378b1f78419927f855a86c04cfffff","url":"editor/mode-php_laravel_blade.js"},{"revision":"d675b8b2dfb26443b35ac57a172c82e9","url":"editor/mode-php.js"},{"revision":"4ca254d512f5b455cdefaeac101ad14c","url":"editor/mode-pig.js"},{"revision":"d86cc6d49f658806bd73214df8d339b3","url":"editor/mode-plain_text.js"},{"revision":"9ac5ae21caea53f57a08ce24930a120d","url":"editor/mode-powershell.js"},{"revision":"d4e2b8a6ee00034624ef1db4a6408ca3","url":"editor/mode-praat.js"},{"revision":"e5729d0ec6871131901aa721e1a70caa","url":"editor/mode-prisma.js"},{"revision":"0e17412a3d3f4ed30e6b6a6ebad94fd8","url":"editor/mode-prolog.js"},{"revision":"cf7b9d5e5b7a6f969008ed447483131f","url":"editor/mode-properties.js"},{"revision":"62d2f53b26a5196c7a4733e67634a890","url":"editor/mode-protobuf.js"},{"revision":"041f82f0083c957f676eb78fac911e43","url":"editor/mode-puppet.js"},{"revision":"48bbb07d79df76de7e39166764a9f256","url":"editor/mode-python.js"},{"revision":"179e7e79324ca47972818b275a6032b6","url":"editor/mode-qml.js"},{"revision":"6d589d6ffc67ae803314f282e82c8cfa","url":"editor/mode-r.js"},{"revision":"f6ce2c50d423e0d280c498326e4f5574","url":"editor/mode-razor.js"},{"revision":"27f83fdf6fe84064c899b40e95420f33","url":"editor/mode-rdoc.js"},{"revision":"88e11dc990f70c3592230605a9f99947","url":"editor/mode-red.js"},{"revision":"06ed29bf05e9657569414c48646ef183","url":"editor/mode-redshift.js"},{"revision":"ca7f5a739e96e18afa1cfc9267a6264a","url":"editor/mode-rhtml.js"},{"revision":"42602b6eecd2c2bd67e29eab9972acac","url":"editor/mode-rst.js"},{"revision":"a479011c85abaf1aade628d40e76c348","url":"editor/mode-ruby.js"},{"revision":"247fa9c96db9a15137c2a0bd5c7363ae","url":"editor/mode-rust.js"},{"revision":"00a85cb1440789467e1a6384e286d405","url":"editor/mode-sass.js"},{"revision":"98c5e7b8898c2a4726f3288117ffe83c","url":"editor/mode-scad.js"},{"revision":"b52ba92976782f672368db86f2df5827","url":"editor/mode-scala.js"},{"revision":"14f102a63e9d6f0187e8e822099d2f16","url":"editor/mode-scheme.js"},{"revision":"3add4652188e0bc4d09415003a97f4d4","url":"editor/mode-scss.js"},{"revision":"b8f3c0734e7d90837e86043194c114ec","url":"editor/mode-sh.js"},{"revision":"37d0c48cd5fdccdb3bf60a94154cd69e","url":"editor/mode-sjs.js"},{"revision":"bb1e1848925335dc9311eef260b3882e","url":"editor/mode-slim.js"},{"revision":"dafffc72e5bf26528514d1ebf8623212","url":"editor/mode-smarty.js"},{"revision":"2e9b6598d5f7a1a29fff7988cc6c9db6","url":"editor/mode-snippets.js"},{"revision":"0d3eebab4abd4773e353c3dd55b95881","url":"editor/mode-soy_template.js"},{"revision":"77f41123a22ca9050b969d03361a0a20","url":"editor/mode-space.js"},{"revision":"0f620f3654a624b5800e6e3503b04097","url":"editor/mode-sparql.js"},{"revision":"90fb2d005313e8dae15a735c64b5cd04","url":"editor/mode-sql.js"},{"revision":"b6e5deac75effcfeaf129f80588deb85","url":"editor/mode-sqlserver.js"},{"revision":"89ce11d3cf8121e606115544cd87bb77","url":"editor/mode-stylus.js"},{"revision":"d5dd98b941711d797aeafa10a047bc9a","url":"editor/mode-svg.js"},{"revision":"4c2bff03c88f74a2fc430599f11d7d4c","url":"editor/mode-swift.js"},{"revision":"1aab970e9dbbb46f6d6eab497f1ec642","url":"editor/mode-tcl.js"},{"revision":"12d3dab21c803b9dd13ba51a5152849e","url":"editor/mode-terraform.js"},{"revision":"736b65273e5807185c977a36fcbfdaab","url":"editor/mode-tex.js"},{"revision":"c01becee0a5e9e847c9dd4a789761925","url":"editor/mode-text.js"},{"revision":"1a292f5feba46cc88ce7ac79b4da3e59","url":"editor/mode-textile.js"},{"revision":"d25fc7cb10200a29f0e4d645360f3a44","url":"editor/mode-toml.js"},{"revision":"d8add6a447f46631173eb08081eb7d3c","url":"editor/mode-tsx.js"},{"revision":"73378d8e8d20b30b3f77cb48b5aea0cf","url":"editor/mode-turtle.js"},{"revision":"9d0e0859db5514da4d6343ccc5d05f25","url":"editor/mode-twig.js"},{"revision":"ecddb9bb267d3e1a2401abf3bb3cbfa1","url":"editor/mode-typescript.js"},{"revision":"9a4c1cbfa4503a422bceca6a10a597d2","url":"editor/mode-vala.js"},{"revision":"1fc312f6cedd9a5668da7523e1098e65","url":"editor/mode-vbscript.js"},{"revision":"fa5e8883af049144bc26f5a21818e40e","url":"editor/mode-velocity.js"},{"revision":"fe9d60a1e5293366caed70b23a66abb4","url":"editor/mode-verilog.js"},{"revision":"b543bab0240209ff77cd8912cd325996","url":"editor/mode-vhdl.js"},{"revision":"87464ac742fd68d4d28e74f2c140f0ed","url":"editor/mode-visualforce.js"},{"revision":"fcd8561abec3dd10ad5b48483f9ba5e2","url":"editor/mode-wollok.js"},{"revision":"9785371a49d2674f50bc4884eef35301","url":"editor/mode-xml.js"},{"revision":"ae26980a82cf9409f889eaa4a90a82de","url":"editor/mode-xquery.js"},{"revision":"140fa1b67e390b1f91c5b6e2d0f06d5e","url":"editor/mode-yaml.js"},{"revision":"67b8e3c0fccdbfa638aeafe4b1675d0e","url":"editor/mode-zeek.js"},{"revision":"c86ff36573bab9aa77f3d74211ac40ec","url":"editor/snippets/abap.js"},{"revision":"f7315bd8967a773bb6a60bbf07402e32","url":"editor/snippets/abc.js"},{"revision":"9fa130b33842c86a3e19209c2d637364","url":"editor/snippets/actionscript.js"},{"revision":"1db60511f0097168a32987c3e0388c05","url":"editor/snippets/ada.js"},{"revision":"650d86a4078bf6639701ffcb91238572","url":"editor/snippets/alda.js"},{"revision":"fa31b280de62069e898a96a4b8dd0f36","url":"editor/snippets/apache_conf.js"},{"revision":"c8aa86d6847e0a6a947a153eef10e546","url":"editor/snippets/apex.js"},{"revision":"07e7416631015b5a4e3d8134699f0008","url":"editor/snippets/applescript.js"},{"revision":"5100d398d4560cc2a24423e921adf9fe","url":"editor/snippets/aql.js"},{"revision":"0d7ad78da27f2f89135ef32ca4aa8907","url":"editor/snippets/asciidoc.js"},{"revision":"3199aa409707625dbf2fed0655dc0617","url":"editor/snippets/asl.js"},{"revision":"e4a225be9d40eae30a07d3b3789ce48e","url":"editor/snippets/assembly_x86.js"},{"revision":"5a5b25931c827093f6515df62eb8e5d1","url":"editor/snippets/autohotkey.js"},{"revision":"afd3daa6975f10b14e8bead215d41213","url":"editor/snippets/batchfile.js"},{"revision":"19ab6fa01583a575b8ea2eb766515b82","url":"editor/snippets/c_cpp.js"},{"revision":"576573e49215e9932fdd93e47b05a90c","url":"editor/snippets/c9search.js"},{"revision":"a7dc7222b496d27a2eb497733cf4649d","url":"editor/snippets/cirru.js"},{"revision":"144205f2408d4e98613ecd8fa60f8ac0","url":"editor/snippets/clojure.js"},{"revision":"947e929fb7d2111b394736e5b35da083","url":"editor/snippets/cobol.js"},{"revision":"1f2812094e54a4ade41f3360239390c6","url":"editor/snippets/coffee.js"},{"revision":"8e1518914dd63f5225315ce4ee3958bd","url":"editor/snippets/coldfusion.js"},{"revision":"fa072fc547accefb9bcc379c6b75230a","url":"editor/snippets/crystal.js"},{"revision":"e0a1b63f8c3889afbdcbc623a55c1e7e","url":"editor/snippets/csharp.js"},{"revision":"951120d33e8599d5bc62d4c8ec6769ca","url":"editor/snippets/csound_document.js"},{"revision":"ba022ca3d55f568e62e598df6476dc58","url":"editor/snippets/csound_orchestra.js"},{"revision":"2e839b54598f5ad32d8e149dd19bff3c","url":"editor/snippets/csound_score.js"},{"revision":"2de1bc5481136bbeda694c4fe2a15da5","url":"editor/snippets/csp.js"},{"revision":"6efbe290aa89ddce91b09e358a28c2ad","url":"editor/snippets/css.js"},{"revision":"14ec0a80eba8a60dcf75fad0971bf789","url":"editor/snippets/curly.js"},{"revision":"2b6b12cfabef9a2857b52f1f6e0be478","url":"editor/snippets/d.js"},{"revision":"bb94186839f8ea0f15e785315a4ba074","url":"editor/snippets/dart.js"},{"revision":"f22b3388439a40e0614d4a01d88c3f97","url":"editor/snippets/diff.js"},{"revision":"0b44c297d665731fdf5bb71da4ef3f18","url":"editor/snippets/django.js"},{"revision":"d5902de8f09fa5d0e42ad69137f45a00","url":"editor/snippets/dockerfile.js"},{"revision":"f771826d76e2f0671fd982afe325fa3b","url":"editor/snippets/dot.js"},{"revision":"5ab392eb4d99785a83d64b87396182a4","url":"editor/snippets/drools.js"},{"revision":"8c44d2fff96eefab93d9afa3acd790da","url":"editor/snippets/edifact.js"},{"revision":"bf2b95326a6f2560c446f370de05b4c9","url":"editor/snippets/eiffel.js"},{"revision":"81b4f5ed64b43b36ffb6eb9ed6901900","url":"editor/snippets/ejs.js"},{"revision":"dadd31fe1c900a7efb76d4c7a8e76497","url":"editor/snippets/elixir.js"},{"revision":"dcaea2a1d6f8ac4484067930debf0861","url":"editor/snippets/elm.js"},{"revision":"9bfe7ac74694eec3d001f66159117dd9","url":"editor/snippets/erlang.js"},{"revision":"89150eb3939d04260e38e099b711837d","url":"editor/snippets/forth.js"},{"revision":"c2fa5dd283b1fe3e2bee8e98130be203","url":"editor/snippets/fortran.js"},{"revision":"d50d67e6eed5af86d6e50f912a68d9ad","url":"editor/snippets/fsharp.js"},{"revision":"b8d1aee62bf15074ee7f7d193e13b976","url":"editor/snippets/fsl.js"},{"revision":"27bf8811ab5e36a7141c2d91f2990bd4","url":"editor/snippets/ftl.js"},{"revision":"3c097604f061da66bc24fde14d46f467","url":"editor/snippets/gcode.js"},{"revision":"e08fa30a43b649402084dcd0dd22e6f2","url":"editor/snippets/gherkin.js"},{"revision":"e1b246d55671257668e5d70439807cc3","url":"editor/snippets/gitignore.js"},{"revision":"c15d5891da2a4af88ccebc841e472b1b","url":"editor/snippets/glsl.js"},{"revision":"909ff12e4809cd8f5fac5a77635773fc","url":"editor/snippets/gobstones.js"},{"revision":"e97632882796d0d2d7317de9f74a1222","url":"editor/snippets/golang.js"},{"revision":"54f4b358dac7759611aff5c824bcd25d","url":"editor/snippets/graphqlschema.js"},{"revision":"a3c524bc50c4f2ed9db28cc0c0c9e1ac","url":"editor/snippets/groovy.js"},{"revision":"f1e3d2bf644cc705b404a9401113288e","url":"editor/snippets/haml.js"},{"revision":"f46cc593fa8a584f0bce19fe29d544d4","url":"editor/snippets/handlebars.js"},{"revision":"37f21fd9fd82a9bfbf8dfdcdac693151","url":"editor/snippets/haskell_cabal.js"},{"revision":"e708b1954ec0d44b61876b5f1a86a108","url":"editor/snippets/haskell.js"},{"revision":"ae6acf47c7bf840a0c4280b7d53ce08d","url":"editor/snippets/haxe.js"},{"revision":"2d657f249d0e2ebf16ccd9c57b85e7eb","url":"editor/snippets/hjson.js"},{"revision":"f1acf791bcf2956ec57d1dee86209062","url":"editor/snippets/html_elixir.js"},{"revision":"0f995ca166568d91e5c57a8fe2fa1d34","url":"editor/snippets/html_ruby.js"},{"revision":"ebff87672050299754f4abc4151cd656","url":"editor/snippets/html.js"},{"revision":"5bda33b2f02530d3335ad88e5ad330ff","url":"editor/snippets/ini.js"},{"revision":"fdc127154b469b1f717d08a6d1f725f4","url":"editor/snippets/io.js"},{"revision":"87e25507f559863959770fcd0968c3c6","url":"editor/snippets/jack.js"},{"revision":"348c2e77c48dd7d725f43b309e98c5eb","url":"editor/snippets/jade.js"},{"revision":"87f414d791ce330883c6030686683107","url":"editor/snippets/java.js"},{"revision":"57cdbde059060f1d5c354bde4a42b97d","url":"editor/snippets/javascript.js"},{"revision":"f89c4472821a242e9895d5eaacdb6c6b","url":"editor/snippets/json.js"},{"revision":"81349bf4810d173ae9bd8790b7dd7e2a","url":"editor/snippets/json5.js"},{"revision":"452b013b70e2d0c9d797fd1e788fb122","url":"editor/snippets/jsoniq.js"},{"revision":"8ba981843132a596bab9dc64f8c10f8a","url":"editor/snippets/jsp.js"},{"revision":"9cf6aa19868c8d871461bf9b5efc8202","url":"editor/snippets/jssm.js"},{"revision":"20c492ff9fd09239d642a85552b7e154","url":"editor/snippets/jsx.js"},{"revision":"5b6e35017c45c25319b5bed1d33c17bb","url":"editor/snippets/julia.js"},{"revision":"5e3411b4c7419c918925ba0402bcdafe","url":"editor/snippets/kotlin.js"},{"revision":"3640d8a613ebab363af7baa5b10a0277","url":"editor/snippets/latex.js"},{"revision":"2ed761fc69731019548d7377032e72cd","url":"editor/snippets/less.js"},{"revision":"a6ae117b8d7bd263597055512c21b3ec","url":"editor/snippets/liquid.js"},{"revision":"04158d6e2a1b232074315566ec05c92e","url":"editor/snippets/lisp.js"},{"revision":"0b58104ef6917658bfc80395acff0d42","url":"editor/snippets/livescript.js"},{"revision":"243ee5a820100a45670211c37ab56852","url":"editor/snippets/logiql.js"},{"revision":"cec3b5ec221114260a32280ee7154234","url":"editor/snippets/logtalk.js"},{"revision":"36c80099b2ae588fa73c6ab2f36e2854","url":"editor/snippets/lsl.js"},{"revision":"1294bf4a079ea0074de162b580325032","url":"editor/snippets/lua.js"},{"revision":"191fb0590101cbecd6fba2bc68196ed8","url":"editor/snippets/luapage.js"},{"revision":"6f240a1e972f22534da0e65bf7cb9f02","url":"editor/snippets/lucene.js"},{"revision":"a8c431b8580c50b9aa14e6f235f8ffe7","url":"editor/snippets/makefile.js"},{"revision":"3573b3c4a16b208bc4d24a4c352d8792","url":"editor/snippets/markdown.js"},{"revision":"2666b47557d4c8a7aaefb176a99b72e4","url":"editor/snippets/mask.js"},{"revision":"94da8478bdddeb3096165953a9217647","url":"editor/snippets/matlab.js"},{"revision":"724e2c5ac4355e6a104fdad85f9df943","url":"editor/snippets/maze.js"},{"revision":"1e6e9b5e84c5574f21c093015f4e4d87","url":"editor/snippets/mediawiki.js"},{"revision":"9b280935b51a992e6fb5b4566ada1eff","url":"editor/snippets/mel.js"},{"revision":"aa705ddee7006136dc373d627dc81548","url":"editor/snippets/mixal.js"},{"revision":"0e493b7068816753af2efb888efdcdc4","url":"editor/snippets/mushcode.js"},{"revision":"46a20fcc46bd47834a3008b337e9b775","url":"editor/snippets/mysql.js"},{"revision":"56e4afb289dc7471bc30e6040627defc","url":"editor/snippets/nginx.js"},{"revision":"b27b9294d835d41e5c0c4a85fc87c19a","url":"editor/snippets/nim.js"},{"revision":"83e57f7b6bb8132c4c792f855bc97ed5","url":"editor/snippets/nix.js"},{"revision":"2b46671536d39a5e6345ffceff3e2a69","url":"editor/snippets/nsis.js"},{"revision":"244a7e3bb7142dfba79a1fb18bf439cc","url":"editor/snippets/nunjucks.js"},{"revision":"c8ba71185f3ea30f58aee40a18dc2b85","url":"editor/snippets/objectivec.js"},{"revision":"ee505bee7e780e7c2c4eaf3eb9991809","url":"editor/snippets/ocaml.js"},{"revision":"f90d0faec18801e0c3e5b0ea3626ead6","url":"editor/snippets/pascal.js"},{"revision":"d0b08a6107e90cb9f8a7ee3e10d364c0","url":"editor/snippets/perl.js"},{"revision":"86e59f1146a67486018cc32d0cc2a765","url":"editor/snippets/perl6.js"},{"revision":"3b7185e879f76f8eae837322319226f0","url":"editor/snippets/pgsql.js"},{"revision":"1937912816ead8c2ad3372da18cf957d","url":"editor/snippets/php_laravel_blade.js"},{"revision":"119fa938b1d59c8d5b3ad37cf93cdef4","url":"editor/snippets/php.js"},{"revision":"eeb92d5a71154a6e74e5b6d8cf317868","url":"editor/snippets/pig.js"},{"revision":"8a7bd2781388d769c8c6284fd6acbb82","url":"editor/snippets/plain_text.js"},{"revision":"db34c9bc106034088af3463c930bed08","url":"editor/snippets/powershell.js"},{"revision":"2e966a8bde662bb6c5bc8c00172648b5","url":"editor/snippets/praat.js"},{"revision":"745a07efaeac9b5aea10268e71053f2d","url":"editor/snippets/prisma.js"},{"revision":"9ed31a5e4962e6789e95b90b44389d95","url":"editor/snippets/prolog.js"},{"revision":"694c414b150a01372728ccd093c5ad29","url":"editor/snippets/properties.js"},{"revision":"138943baf650b22516c879c81cb7bebd","url":"editor/snippets/protobuf.js"},{"revision":"1ecd9e32a4748749b677580db829bfc7","url":"editor/snippets/puppet.js"},{"revision":"7ed27d2b96f4179044a0b3e9a452768f","url":"editor/snippets/python.js"},{"revision":"b9fb08149997cd5e5e0a3ab89da4adcc","url":"editor/snippets/qml.js"},{"revision":"89b572c3ebb0e67295f59a649ff90856","url":"editor/snippets/r.js"},{"revision":"f766a3f36c9ed43057ce52c871e1ac80","url":"editor/snippets/razor.js"},{"revision":"22ef0df7c5b42cdcf6fcebe7283c2e1c","url":"editor/snippets/rdoc.js"},{"revision":"7f62c2836afe4049ea1dcc38cb9c1e88","url":"editor/snippets/red.js"},{"revision":"f3db0966cc859a452c2df7af86753f0a","url":"editor/snippets/redshift.js"},{"revision":"d335d5bc0fc0c363a4a5a4e7794796d5","url":"editor/snippets/rhtml.js"},{"revision":"dde6c2baebefc3088de9604dbab893be","url":"editor/snippets/rst.js"},{"revision":"d576053a0acb9119d1703b36607ce59c","url":"editor/snippets/ruby.js"},{"revision":"c3920f9f101e4f34d5478e794bbaaa81","url":"editor/snippets/rust.js"},{"revision":"e89c08d82964f36dfd672787b3fb15b7","url":"editor/snippets/sass.js"},{"revision":"092685484645fc7c1a3a0184d895e771","url":"editor/snippets/scad.js"},{"revision":"3b97b7d315718dfc8b0884367c3c93d5","url":"editor/snippets/scala.js"},{"revision":"7933cf3e5e515e8a3a8802411af602bc","url":"editor/snippets/scheme.js"},{"revision":"fb08893beff9e874884387cefdc6b303","url":"editor/snippets/scss.js"},{"revision":"477cb246c93ea54229734980aaa9359e","url":"editor/snippets/sh.js"},{"revision":"d6be3ec1b851a180b005ad74fe0742f5","url":"editor/snippets/sjs.js"},{"revision":"41a9e1cf5f84a0c643eb28a786be5b30","url":"editor/snippets/slim.js"},{"revision":"46f35fafd7f6035f74caafd257a3cb6b","url":"editor/snippets/smarty.js"},{"revision":"2162ac8d9c6ee3a78ccf2e19409da2ab","url":"editor/snippets/snippets.js"},{"revision":"3908cb71f426649ea0544e9e5926b5dd","url":"editor/snippets/soy_template.js"},{"revision":"d54f664307b83f02a6bc44f997974909","url":"editor/snippets/space.js"},{"revision":"423bd67ce3d91972c508005a351939ea","url":"editor/snippets/sparql.js"},{"revision":"e58f6cc02549feab282d22f44086d6dd","url":"editor/snippets/sql.js"},{"revision":"3a114419a88eeb27b63e1e9ca57ce44a","url":"editor/snippets/sqlserver.js"},{"revision":"e1a3ceafa32068ef8ba8f3ab22f12bb0","url":"editor/snippets/stylus.js"},{"revision":"f85e7cee93262a8a24dfc14a4bf72701","url":"editor/snippets/svg.js"},{"revision":"e13155fe4ee38bc34868934d83ecfdb4","url":"editor/snippets/swift.js"},{"revision":"e4975ff04b0fffe26ef77277e479bb4f","url":"editor/snippets/tcl.js"},{"revision":"867ab3ab337a27f6753b374507e3b7b5","url":"editor/snippets/terraform.js"},{"revision":"b4cc4921094025dc76ee27ac91d67905","url":"editor/snippets/tex.js"},{"revision":"2f25a4f48b95772b59f59484da6f6db9","url":"editor/snippets/text.js"},{"revision":"934b08f8bec207e8c16981fcca423cce","url":"editor/snippets/textile.js"},{"revision":"850c17a05f9bd7ab538092ed48f4b1f6","url":"editor/snippets/toml.js"},{"revision":"69d959df7fabff21d3e3252434de0f1e","url":"editor/snippets/tsx.js"},{"revision":"0a3cddd4ea0917731408ede0e482be45","url":"editor/snippets/turtle.js"},{"revision":"8effd9d0880833c7fbf3f760571197d7","url":"editor/snippets/twig.js"},{"revision":"951c759b1a624e806917aae213738333","url":"editor/snippets/typescript.js"},{"revision":"8d0db09f1d9ced0ba2ee9fc02661f2b2","url":"editor/snippets/vala.js"},{"revision":"ae175403f79f4b274d69b656a1ea7a61","url":"editor/snippets/vbscript.js"},{"revision":"af755bcfaed69ae33fe0c60b362f8628","url":"editor/snippets/velocity.js"},{"revision":"1e5246f8e6a03dd4197ea028ffcebe09","url":"editor/snippets/verilog.js"},{"revision":"476406bb0967503cedfbe1b2f22d52c1","url":"editor/snippets/vhdl.js"},{"revision":"c2364268f0f5bc4d55de2323b9ef5ebc","url":"editor/snippets/visualforce.js"},{"revision":"a4d7f630b4d2b2c58e2840c9463891f2","url":"editor/snippets/wollok.js"},{"revision":"322c5932f01478eb1377f05b85192be5","url":"editor/snippets/xml.js"},{"revision":"1ba36252686cbf95b2eadde24a061acf","url":"editor/snippets/xquery.js"},{"revision":"02e68efdd67430a5cb86178c824e6fed","url":"editor/snippets/yaml.js"},{"revision":"6b31d5539848f6c0778140f8ee0153d7","url":"editor/snippets/zeek.js"},{"revision":"65d1619fb3935a05990902246e3c1c0c","url":"editor/theme-ambiance.js"},{"revision":"fca1fd3a03a38cd5104746efe7bcf6d8","url":"editor/theme-chaos.js"},{"revision":"52a070e8c00b6a9ef1137c1d7f9ecd97","url":"editor/theme-chrome.js"},{"revision":"f1ce0ca51fcbd3ec9e47c0bc74aced39","url":"editor/theme-clouds_midnight.js"},{"revision":"75d68f98f81d9fd92bb6a951dad8d465","url":"editor/theme-clouds.js"},{"revision":"1fc885e6faf8a36dd6d29e39761cbd5a","url":"editor/theme-cobalt.js"},{"revision":"911ec6920c96ceaddefb6ea3da046f07","url":"editor/theme-crimson_editor.js"},{"revision":"718f06865ae6c52ea86d58d109922f01","url":"editor/theme-dawn.js"},{"revision":"d4cd83251fa105c125191910aaed0300","url":"editor/theme-dracula.js"},{"revision":"93d6770bb7789edf32665e3ceeb20b8c","url":"editor/theme-dreamweaver.js"},{"revision":"2a546004f61ae167c4e9c5fc3fafb522","url":"editor/theme-eclipse.js"},{"revision":"90a4d228cfeea5e5f8dd96f0a0ff138e","url":"editor/theme-github.js"},{"revision":"98adfb0e6de1309dc4fccc43167bd6f2","url":"editor/theme-gob.js"},{"revision":"1c276e336996ea07f3abd1df48d8ee37","url":"editor/theme-gruvbox.js"},{"revision":"ed6aff91cae6bff7b47ebeea5e5a8a5e","url":"editor/theme-idle_fingers.js"},{"revision":"c7a831b1e1fd7f1280db48af9ddb0a9a","url":"editor/theme-iplastic.js"},{"revision":"28059cb711e52225d04c45707a214eca","url":"editor/theme-katzenmilch.js"},{"revision":"35b142b2ed7e122864e44a2d1d5fb28d","url":"editor/theme-kr_theme.js"},{"revision":"5e7d6ad224fc6f9c54fabab5cfb64127","url":"editor/theme-kuroir.js"},{"revision":"8687930b3057f3b023b29dacbcfb3bf7","url":"editor/theme-merbivore_soft.js"},{"revision":"3f1b3f641fe44a3ba5736eb1e85b381f","url":"editor/theme-merbivore.js"},{"revision":"09ee03e5f7221f938037fce51ab901bf","url":"editor/theme-mono_industrial.js"},{"revision":"41b1975e9f7aa8bb8526273ff15487b0","url":"editor/theme-monokai.js"},{"revision":"ecb8304440d900fb48c1bf10c2322dd9","url":"editor/theme-nord_dark.js"},{"revision":"911978350ce81283f241ea507dfadee6","url":"editor/theme-pastel_on_dark.js"},{"revision":"06f0522377bc0d70432b087bd37ffdf6","url":"editor/theme-solarized_dark.js"},{"revision":"e5f391ed15940217eea430074be6f6e5","url":"editor/theme-solarized_light.js"},{"revision":"b6da2f6443d9ee1d11f1e7ca993ae6e8","url":"editor/theme-sqlserver.js"},{"revision":"f0c14f739bc70195ff1f59b545f457e5","url":"editor/theme-terminal.js"},{"revision":"4e69856949c082d482040ec5dd01d3e4","url":"editor/theme-textmate.js"},{"revision":"a8c476da88a902d575cd0d30ce003e14","url":"editor/theme-tomorrow_night_blue.js"},{"revision":"be04b6cdb50218c5395f7d4a93825f8d","url":"editor/theme-tomorrow_night_bright.js"},{"revision":"cb3cb76805e3875ba55e80887fd2a52d","url":"editor/theme-tomorrow_night_eighties.js"},{"revision":"394e41e3d90f9d8b65f868f782b51d07","url":"editor/theme-tomorrow_night.js"},{"revision":"3332a98e54c631b155b3bdfd48944088","url":"editor/theme-tomorrow.js"},{"revision":"29a7d32ee5acd0711cbcfff66777fb82","url":"editor/theme-twilight.js"},{"revision":"992d12460a13aad4f32e5cbd7f8c8452","url":"editor/theme-vibrant_ink.js"},{"revision":"e31e757281e4732028802c79d13eb606","url":"editor/theme-xcode.js"},{"revision":"11de9901c6cd0ce17379278dd63dea5d","url":"editor/worker-coffee.js"},{"revision":"6f45e3b3c64538a879cb74f3fa3fcfc8","url":"editor/worker-css.js"},{"revision":"d3192944569fec87981903d63b09624d","url":"editor/worker-html.js"},{"revision":"788826b2248a8a4c2aba0811d6c4de5d","url":"editor/worker-javascript.js"},{"revision":"11147321c6411fa0f7e7cffb31e5b64f","url":"editor/worker-json.js"},{"revision":"32eea400da6bee03cfaa425953ae1689","url":"editor/worker-lua.js"},{"revision":"ae246d12ca176ad1c5fad167ca7a40ed","url":"editor/worker-php.js"},{"revision":"733a7e4ec1dc1c977ff1acb52ac721a9","url":"editor/worker-xml.js"},{"revision":"4fa2386b82c6bcc25531cce425acf816","url":"editor/worker-xquery.js"},{"revision":"bfd5dd56f2436dbd00bf68c1ad934cf4","url":"img/barchart.png"},{"revision":"9576dc5ae6fd30a9416a4b2dba34c80e","url":"img/boxplot.png"},{"revision":"7bba4f74116269c33bd98c532b70a552","url":"img/candlestick.png"},{"revision":"8f0dd3515a2179c4279794adb1074ae1","url":"img/funnel.png"},{"revision":"f7d0277a5eecb99497a3f985254ba31d","url":"img/gauge.png"},{"revision":"ab92982d7bb5943ef26d56d0f0efd895","url":"img/graph.png"},{"revision":"ccabbf99fedddb5c1a61ab67b4e6311b","url":"img/heatmap.png"},{"revision":"43aa9891ea21687e3516e05063fe4909","url":"img/lineplot.png"},{"revision":"55944ce3d44edbd61a7ea1e3893d7969","url":"img/map.png"},{"revision":"e9d88aa319ad58bde4b531d0be3e085b","url":"img/parallel.png"},{"revision":"29b105cc61718dc0bb655e353be15c79","url":"img/piechart.png"},{"revision":"c1ed0706bd439dd9a19fe63c14148196","url":"img/radar.png"},{"revision":"48f9fc9ccbd63825ddf63578cc4aca41","url":"img/sankey.png"},{"revision":"ac4dcc59ec2dc0c958000f6faaa21ffd","url":"img/scatterplot.png"},{"revision":"7a450f311a23845b40ae70881c084137","url":"img/sunburst.png"},{"revision":"29f0f6c219209b69bc942c85a03cc56f","url":"img/table.png"},{"revision":"4e88c35a38ba99a2d8e96c4beb6589fe","url":"img/tree.png"},{"revision":"8b0e89ebb2e395408659494202e571a4","url":"img/treemap.png"},{"revision":"74efe43fd2da759270d57b56eaa6c159","url":"index.html"},{"revision":"b53101dcbbb0e5d00d91a032c7fa2899","url":"katex.849ebf02.js"},{"revision":"2c51d9d5ddcc1546b8c0073048a3cf33","url":"logo_192.c4a21617.png"},{"revision":"d1185259238e2c77af42275d6e4f78aa","url":"logo_512.7373a196.png"},{"revision":"318ee348a5f5665649ed7489abe9fb0a","url":"logo.1e973952.png"},{"revision":"cf07c9854e23e78474779c39f2f81716","url":"manifest.webmanifest"},{"revision":"6bed4ac5f4e1a16b788e67b98103f768","url":"oembed.d21a5a55.js"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-cyrillic-ext-regular.096de2e9.svg"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-cyrillic-regular.096de2e9.svg"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-greek-ext-regular.096de2e9.svg"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-greek-regular.096de2e9.svg"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-latin-ext-regular.096de2e9.svg"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-latin-regular.096de2e9.svg"},{"revision":"96a9bbe5d32f7fe96e844bcbf7b4e05d","url":"roboto-mono-v5-vietnamese-regular.096de2e9.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-cyrillic-ext-regular.ab9033c4.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-cyrillic-regular.ab9033c4.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-greek-ext-regular.ab9033c4.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-greek-regular.ab9033c4.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-latin-ext-regular.ab9033c4.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-latin-regular.ab9033c4.svg"},{"revision":"8681f434273fd6a267b1a16a035c5f79","url":"roboto-v18-vietnamese-regular.ab9033c4.svg"}]);
