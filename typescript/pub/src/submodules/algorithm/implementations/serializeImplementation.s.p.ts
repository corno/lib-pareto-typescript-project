import * as pl from 'pareto-core-lib'

import * as g_this from "../glossary"
import * as g_fp from "lib-fountain-pen"
import * as g_foreach from "res-pareto-foreach"

import { A } from "../api.generated"

export const $$: A.serializeImplementation = ($d) => {

    return ($, $i) => {
        // function serializeExpression($: api.TExpression, $i: g_fp.B.Line) {
        //     switch ($[0]) {
        //         case 'call':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['call', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'function': "${$.function}"`)
        //                         $i.snippet(`,`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)
        //             })
        //             break
        //         case 'contextChange':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['contextChange', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'block': `)
        //                         serializeFunctionBlock($.block, $i)
        //                         $i.snippet(`,`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)
        //             })
        //             break
        //         case 'groupInitializer':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['groupInitializer', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'properties': d({`)
        //                         $i.indent(($i) => {
        //                             $d.dictionaryForEach($.properties, ($) => {
        //                                 $i.nestedLine(($i) => {
        //                                     $i.snippet(`"${$.key}": `)
        //                                     serializeExpression($.value, $i)
        //                                     $i.snippet(`,`)
        //                                 })
        //                             })
        //                         })
        //                         $i.snippet(`})`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)

        //             })
        //             break
        //         case 'implementMe':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['implementMe', "${$}"]`)
        //             })
        //             break
        //         case 'mapArray':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['mapArray', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'block': `)
        //                         serializeFunctionBlock($.block, $i)
        //                         $i.snippet(`,`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)
        //             })
        //             break
        //         case 'mapDictionary':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['mapDictionary', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'block': `)
        //                         serializeFunctionBlock($.block, $i)
        //                         $i.snippet(`,`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)

        //             })
        //             break
        //         case 'propertySelection':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['propertySelection', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'name': ${$.name},`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)
        //             })
        //             break
        //         case 'switch':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`['switch', {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`'cases': d({`)
        //                         $i.indent(($i) => {
        //                             $d.dictionaryForEach($.cases, ($) => {
        //                                 $i.nestedLine(($i) => {
        //                                     $i.snippet(`"${$.key}": `)
        //                                     serializeFunctionBlock($.value, $i)
        //                                     $i.snippet(`,`)
        //                                 })
        //                             })
        //                         })
        //                         $i.snippet(`})`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)

        //             })
        //             break
        //         default: pl.au($[0])
        //     }
        // }
        // function serializeFunctionBlock($: api.TFunctionBlock, $i: g_fp.B.Line) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`'innerFunctions': d({`)
        //             $i.indent(($i) => {
        //                 if ($.innerFunctions !== undefined) {
        //                     $d.dictionaryForEach($.innerFunctions, ($) => {
        //                         $i.nestedLine(($i) => {
        //                             $i.snippet(`"${$.key}": {`)
        //                             $i.indent(($i) => {
        //                                 // $i.nestedLine(($i) => {
        //                                 //     $i.snippet(`'definition': `)
        //                                 //     serializeFunction($, $i)
        //                                 //     $i.snippet(`,`)
        //                                 // })
        //                                 $i.nestedLine(($i) => {
        //                                     $i.snippet(`'block': `)
        //                                     serializeFunctionBlock($.value.block, $i)
        //                                     $i.snippet(`,`)
        //                                 })
        //                             })
        //                             $i.snippet(`},`)
        //                         })
        //                     })
        //                 }
        //             })
        //             $i.snippet(`}),`)

        //         })
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`'returnExpression': `)
        //             serializeExpression($.returnExpression, $i)
        //             $i.snippet(`,`)
        //         })
        //     })
        //     $i.snippet(`}`)
        // }
        // function serializeCallbackBlock($: api.TCallbackBlock, $i: g_fp.B.Line) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`'innerCallbacks': d({`)
        //             $i.indent(($i) => {
        //                 if ($.innerCallbacks !== undefined) {
        //                     $d.dictionaryForEach($.innerCallbacks, ($) => {
        //                         $i.nestedLine(($i) => {
        //                             $i.snippet(`"${$.key}": {`)
        //                             $i.indent(($i) => {
        //                                 // $i.nestedLine(($i) => {
        //                                 //     $i.snippet(`'definition': `)
        //                                 //     serializeFunction($, $i)
        //                                 //     $i.snippet(`,`)
        //                                 // })
        //                                 $i.nestedLine(($i) => {
        //                                     $i.snippet(`'block': `)
        //                                     serializeCallbackBlock($.value.block, $i)
        //                                     $i.snippet(`,`)
        //                                 })
        //                             })
        //                             $i.snippet(`},`)
        //                         })
        //                     })
        //                 }
        //             })
        //             $i.snippet(`}),`)

        //         })
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`'statements': d({`)
        //             $i.indent(($i) => {
        //                 $.statements.forEach(($) => {
        //                     switch ($[0]) {
        //                         case 'dependencyCall':
        //                             pl.ss($, ($) => {
        //                                 $.callback
        //                                 $.data
        //                             })
        //                             break
        //                         case 'interfaceCall':
        //                             pl.ss($, ($) => {
        //                                 $.callback
        //                                 $.data
        //                                 $.property
        //                             })
        //                             break
        //                         case 'innerCallbackCall':
        //                             pl.ss($, ($) => {
        //                                 $.data
        //                             })
        //                             break
        //                         case 'switch':
        //                             pl.ss($, ($) => {
        //                             })
        //                             break
        //                         default: pl.au($[0])
        //                     }
        //                     pd.implementMe(`SSDFSS`)
        //                 })
        //             })
        //             $i.snippet(`}),`)
        //         })
        //     })
        //     $i.snippet(`}`)
        // }
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'implementations': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.implementations, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": {`)
                            $i.indent(($i) => {

                                $i.nestedLine(($i) => {
                                    $i.snippet(`'constructor': ${$.value.constructor ? `true` : `false`}`)
                                    $i.snippet(`,`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'type': `)
                                    switch ($.value.type[0]) {
                                        case 'asynchronous function':
                                            pl.ss($.value.type, ($) => {
                                                $i.snippet(`['function', {`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'block': `)
                                                        //serializeFunctionBlock($.block, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        case 'synchronous function':
                                            pl.ss($.value.type, ($) => {
                                                $i.snippet(`['function', {`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'block': `)
                                                        //serializeCallbackBlock($.block, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        case 'procedure':
                                            pl.ss($.value.type, ($) => {
                                                $i.snippet(`['function', {`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'block': `)
                                                        //serializeCallbackBlock($.block, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        case 'interface initializer':
                                            pl.ss($.value.type, ($) => {
                                                $i.snippet(`['function', {`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'block': `)
                                                        //serializeCallbackBlock($.block, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        default: pl.au($.value.type[0])
                                    }
                                    $i.snippet(`,`)
                                })
                            })
                            $i.snippet(`},`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
        })
        $i.snippet(`}`)
    }
}

