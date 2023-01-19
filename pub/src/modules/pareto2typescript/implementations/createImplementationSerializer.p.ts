import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as malgorithm from "../../algorithm"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateImplementationSerializer = ($d) => {

    return ($, $i) => {
        function serializeExpression($: malgorithm.TExpression, $i: mfp.ILine) {
            switch ($[0]) {
                case 'call':
                    pl.cc($[1], ($) => {
                        $i.snippet(`${$.function}(`)
                        $i.snippet(`)`)
                    })
                    break
                case 'contextChange':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pl.cc($.${$.property}, ($) => `)
                        serializeFunctionBlock($.block, $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'groupInitializer':
                    pl.cc($[1], ($) => {
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $d.cb_dictionaryForEach($.properties, ($) => {
                                $i.line(($i) => {
                                    $i.snippet(`'${$.key}': `)
                                    serializeExpression($.value, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                case 'implementMe':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pl.implementMe(\`${$}\`)`)
                    })
                    break
                case 'mapArray':
                    pl.cc($[1], ($) => {
                        $i.snippet(`$.map(($) => `)
                        serializeFunctionBlock($.block, $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'mapDictionary':
                    pl.cc($[1], ($) => {
                        $i.snippet(`$.map(($) => `)
                        serializeFunctionBlock($.block, $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'propertySelection':
                    pl.cc($[1], ($) => {
                        $i.snippet(`$.${$.name}`)
                    })
                    break
                case 'switch':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pl.cc($, ($) => {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`switch ($) {`)
                                $i.indent(($i) => {
                                    $d.cb_dictionaryForEach($.cases, ($) => {
                                        $i.line(($i) => {
                                            $i.snippet(`case '${$.key}': `)
                                            serializeFunctionBlock($.value, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                            })
                        })
                        $i.snippet(`})`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeCallbackBlock($: malgorithm.TCallbackBlock, $i: mfp.ILine) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                if ($.innerCallbacks !== undefined) {
                    pl.cc($.innerCallbacks, ($) => {
                        $d.cb_dictionaryForEach($, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`function ${$.key}() `)
                                serializeCallbackBlock($.value.block, $i)
                            })
                        })
                    })
                }
                $.statements
                pl.implementMe(`SFSDFSDR`)
            })
            $i.snippet(`}`)
        }
        function serializeFunctionBlock($: malgorithm.TFunctionBlock, $i: mfp.ILine) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                if ($.innerFunctions !== undefined) {
                    pl.cc($.innerFunctions, ($) => {
                        $d.cb_dictionaryForEach($, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`function ${$.key}() `)
                                serializeFunctionBlock($.value.block, $i)
                            })
                        })
                    })
                }
                $i.line(($i) => {
                    $i.snippet(`return `)
                    serializeExpression($.returnExpression, $i)
                })
            })
            $i.snippet(`}`)
        }
        $d.cb_dictionaryForEach($.implementations, ($) => {
            function body($i: mfp.ILine) {
                switch ($.value.type[0]) {
                    case 'callback':
                        pl.cc($.value.type[1], ($) => {
                            $i.snippet(`($) => `)
                            serializeCallbackBlock($.block, $i)
                        })
                        break
                        case 'function':
                            pl.cc($.value.type[1], ($) => {
                                $i.snippet(`($) => `)
                                serializeFunctionBlock($.block, $i)
                            })
                            break
                    default: pl.au($.value.type[0])
                }
            }
            $i.file(`${$.key}.generated.ts`, ($i) => {
                $i.literal(`import * as pl from 'pareto-core-lib'`)
                $i.literal(``)

                $i.literal(`import * as api from "../api"`)

                $i.line(($i) => {
                    $i.snippet(`export const $$: api.C${$.key} = `)
                    if ($.value.constructor) {
                        $i.snippet(`($d) => {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`return `)
                                body($i)
                            })
                        })
                        $i.snippet(`}`)
                    } else {
                        body($i)
                    }
                })
            })
        })
    }
}

