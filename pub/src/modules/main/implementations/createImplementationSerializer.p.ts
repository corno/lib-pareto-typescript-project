import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as malgorithm from "../../algorithm"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateImplementationSerializer = ($d) => {
    const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

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
                            $.properties.forEach(compare, ($, key) => {
                                $i.line(($i) => {
                                    $i.snippet(`'${key}': `)
                                    serializeExpression($, $i)
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
                        $i.snippet(`$.map(($, key) => `)
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
                                    $.cases.forEach(compare, ($, key) => {
                                        $i.line(($i) => {
                                            $i.snippet(`case '${key}': `)
                                            serializeFunctionBlock($, $i)
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
        function serializeFunctionBlock($: malgorithm.TFunctionBlock, $i: mfp.ILine) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                if ($.innerFunctions !== undefined) {
                    pl.cc($.innerFunctions, ($) => {
                        $.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`function ${key}() `)
                                serializeFunctionBlock($.block, $i)
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
        $.implementations.forEach(compare, ($, key) => {
            function body($i: mfp.ILine) {
                switch ($.type[0]) {
                    case 'function':
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`($) => `)
                            serializeFunctionBlock($.block, $i)
                        })
                        break
                    default: pl.au($.type[0])
                }
            }
            $i.file(`${key}.generated.ts`, ($i) => {
                $i.literal(`import * as pl from 'pareto-core-lib'`)
                $i.literal(``)

                $i.literal(`import * as api from "../api"`)

                $i.line(($i) => {
                    $i.snippet(`export const $$: api.C${key} = `)
                    if ($.constructor) {
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

