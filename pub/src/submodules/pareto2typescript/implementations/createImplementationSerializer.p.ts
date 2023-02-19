import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as malgorithm from "../../algorithm"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateImplementationSerializer = ($d) => {

    return <Annotation>($: malgorithm.T.Implementation<Annotation>, $i: mfp.IWriter) => {
        $d.dictionaryForEach($.implementations, ($) => {
            $i.file(`XXXXXXXXXXXXXXXX${$.key}`, ($i) => {
                $i.line(`import * as api from "../api"`)
                $i.line(``)
                $i.line(`import * as mfp from "lib-fountain-pen"`)
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export const $$: api.C${$.key} = `)
                    if ($.value.constructor) {
                        $i.snippet(`($d) => {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                function doSynchronousExpression($: malgorithm.T.SynchronousExpression<Annotation>, $i: mfp.ILine) {
                                    switch ($[0]) {
                                        case 'call':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'contextChange':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'groupInitializer':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'implementMe':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'mapArray':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'mapDictionary':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'propertySelection':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'string literal':
                                            pl.cc($[1], ($) => {
                                                $i.snippet($)
                                            })
                                            break
                                        case 'switch':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        default: pl.au($[0])
                                    }
                                }
                                function doImplementationType($: malgorithm.T.ImplementationType<Annotation>, $i: mfp.ILine) {

                                    switch ($[0]) {
                                        case 'asynchronous function':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'interface initializer':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        case 'procedure':
                                            pl.cc($[1], ($) => {
                                                function doBlock(
                                                    $: malgorithm.T.ProcedureBlock<Annotation>,
                                                    $i: mfp.ILine,
                                                ) {

                                                    $i.snippet(`{`)
                                                    $i.indent(($i) => {
                                                        if ($.innerFunctions !== undefined) {
                                                            $d.dictionaryForEach($.innerFunctions, ($) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`function ${$.key}($: api.T.${$d.createIdentifier($.key)}, $i: mfp.ILine) `)
                                                                    doImplementationType($.value.type, $i)
                                                                })
                                                            })
                                                        }
                                                        $.statements.forEach(($) => {
                                                            switch ($[0]) {
                                                                case 'dependencyCall':
                                                                    pl.cc($[1], ($) => {

                                                                    })
                                                                    break
                                                                case 'interfaceCall':
                                                                    pl.cc($[1], ($) => {
                                                                        $i.nestedLine($i => {
                                                                            $i.snippet(`$i`)
                                                                            $['child path'].forEach(($) => {
                                                                                $i.snippet(`.${$}`)
                                                                            })
                                                                            $i.snippet(`(`)
                                                                            switch ($.data[0]) {
                                                                                case 'not set':
                                                                                    pl.cc($.data[1], ($) => {

                                                                                    })
                                                                                    break
                                                                                case 'set':
                                                                                    pl.cc($.data[1], ($) => {
                                                                                        $i.snippet(`"`)
                                                                                        doSynchronousExpression($, $i)
                                                                                        $i.snippet(`", `)
                                                                                    })
                                                                                    break
                                                                                default: pl.au($.data[0])
                                                                            }
                                                                            switch ($.callback[0]) {
                                                                                case 'not set':
                                                                                    pl.cc($.callback[1], ($) => {

                                                                                    })
                                                                                    break
                                                                                case 'set':
                                                                                    pl.cc($.callback[1], ($) => {
                                                                                        $i.snippet(`($i) => `)
                                                                                        doBlock($, $i)
                                                                                    })
                                                                                    break
                                                                                default: pl.au($.callback[0])
                                                                            }
                                                                            $i.snippet(`)`)
                                                                        })
                                                                    })
                                                                    break
                                                                case 'innerCallbackCall':
                                                                    pl.cc($[1], ($) => {

                                                                    })
                                                                    break
                                                                case 'switch':
                                                                    pl.cc($[1], ($) => {

                                                                    })
                                                                    break
                                                                default: pl.au($[0])
                                                            }
                                                        })
                                                    })
                                                    $i.snippet(`}`)
                                                }
                                                doBlock($.block, $i)
                                            })
                                            break
                                        case 'synchronous function':
                                            pl.cc($[1], ($) => {

                                            })
                                            break
                                        default: pl.au($[0])
                                    }
                                }
                                $i.snippet(`return ($, $i) => `)

                                doImplementationType($.value.type, $i)
                            })
                        })
                        $i.snippet(`}`)
                    }
                })
            })
        })
        // function serializeExpression($: malgorithm.TExpression, $i: mfp.ILine) {
        //     switch ($[0]) {
        //         case 'call':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`${$.function}(`)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'contextChange':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`pl.cc($.${$.property}, ($) => `)
        //                 serializeFunctionBlock($.block, $i)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'groupInitializer':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`{`)
        //                 $i.indent(($i) => {
        //                     $d.dictionaryForEach($.properties, ($) => {
        //                         $i.nestedLine(($i) => {
        //                             $i.snippet(`'${$.key}': `)
        //                             serializeExpression($.value, $i)
        //                             $i.snippet(`,`)
        //                         })
        //                     })
        //                 })
        //                 $i.snippet(`}`)
        //             })
        //             break
        //         case 'implementMe':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`pd.implementMe(\`${$}\`)`)
        //             })
        //             break
        //         case 'mapArray':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`$.map(($) => `)
        //                 serializeFunctionBlock($.block, $i)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'mapDictionary':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`$.map(($) => `)
        //                 serializeFunctionBlock($.block, $i)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'propertySelection':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`$.${$.name}`)
        //             })
        //             break
        //         case 'switch':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`pl.cc($, ($) => {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`switch ($) {`)
        //                         $i.indent(($i) => {
        //                             $d.dictionaryForEach($.cases, ($) => {
        //                                 $i.nestedLine(($i) => {
        //                                     $i.snippet(`case '${$.key}': `)
        //                                     serializeFunctionBlock($.value, $i)
        //                                 })
        //                             })
        //                         })
        //                         $i.snippet(`}`)
        //                     })
        //                 })
        //                 $i.snippet(`})`)
        //             })
        //             break
        //         default: pl.au($[0])
        //     }
        // }
        // function serializeCallbackBlock($: malgorithm.TCallbackBlock, $i: mfp.ILine) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         if ($.innerCallbacks !== undefined) {
        //             pl.cc($.innerCallbacks, ($) => {
        //                 $d.dictionaryForEach($, ($) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`function ${$.key}() `)
        //                         serializeCallbackBlock($.value.block, $i)
        //                     })
        //                 })
        //             })
        //         }
        //         $.statements
        //         pd.implementMe(`SFSDFSDR`)
        //     })
        //     $i.snippet(`}`)
        // }
        // function serializeFunctionBlock($: malgorithm.TFunctionBlock, $i: mfp.ILine) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         if ($.innerFunctions !== undefined) {
        //             pl.cc($.innerFunctions, ($) => {
        //                 $d.dictionaryForEach($, ($) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`function ${$.key}() `)
        //                         serializeFunctionBlock($.value.block, $i)
        //                     })
        //                 })
        //             })
        //         }
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`return `)
        //             serializeExpression($.returnExpression, $i)
        //         })
        //     })
        //     $i.snippet(`}`)
        // }
        // $d.dictionaryForEach($.implementations, ($) => {
        //     function body($i: mfp.ILine) {
        //         switch ($.value.type[0]) {
        //             case 'callback':
        //                 pl.cc($.value.type[1], ($) => {
        //                     $i.snippet(`($) => `)
        //                     serializeCallbackBlock($.block, $i)
        //                 })
        //                 break
        //             case 'function':
        //                 pl.cc($.value.type[1], ($) => {
        //                     $i.snippet(`($) => `)
        //                     serializeFunctionBlock($.block, $i)
        //                 })
        //                 break
        //             default: pl.au($.value.type[0])
        //         }
        //     }
        //     $i.file(`${$.key}.generated.ts`, ($i) => {
        //         $i.line(`import * as pl from 'pareto-core-lib'`)
        //         $i.line(``)

        //         $i.line(`import * as api from "../api"`)

        //         $i.nestedLine(($i) => {
        //             $i.snippet(`export const $$: api.${$d.createIdentifier(`C${$.key}`)} = `)
        //             if ($.value.constructor) {
        //                 $i.snippet(`($d) => {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`return `)
        //                         body($i)
        //                     })
        //                 })
        //                 $i.snippet(`}`)
        //             } else {
        //                 body($i)
        //             }
        //         })
        //     })
        // })
    }
}

