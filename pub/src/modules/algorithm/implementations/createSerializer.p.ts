import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializer = ($d) => {
    const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

    return ($, $i) => {
        function serializeExpression($: api.TExpression, $i: mfp.ILine) {
            switch ($[0]) {
                case 'call':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['call', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'function': "${$.function}"`)
                                $i.snippet(`,`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'contextChange':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['contextChange', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'block': `)
                                serializeFunctionBlock($.block, $i)
                                $i.snippet(`,`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'groupInitializer':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['groupInitializer', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'properties': d({`)
                                $i.indent(($i) => {
                                    $.properties.forEach(compare, ($, key) => {
                                        $i.line(($i) => {
                                            $i.snippet(`"${key}": `)
                                            serializeExpression($, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`})`)
                            })
                        })
                        $i.snippet(`}]`)

                    })
                    break
                case 'implementMe':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['implementMe', "${$}"]`)
                    })
                    break
                case 'mapArray':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['mapArray', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'block': `)
                                serializeFunctionBlock($.block, $i)
                                $i.snippet(`,`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'mapDictionary':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['mapDictionary', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'block': `)
                                serializeFunctionBlock($.block, $i)
                                $i.snippet(`,`)
                            })
                        })
                        $i.snippet(`}]`)


                    })
                    break
                case 'propertySelection':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['propertySelection', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'name': ${$.name},`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'switch':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['switch', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'cases': d({`)
                                $i.indent(($i) => {
                                    $.cases.forEach(compare, ($, key) => {
                                        $i.line(($i) => {
                                            $i.snippet(`"${key}": `)
                                            serializeFunctionBlock($, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`})`)
                            })
                        })
                        $i.snippet(`}]`)


                    })
                    break
                default: pl.au($[0])
            }
        }
        // function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
        //     $.context dddd
        // }
        // function serializeFunction($: mglossary.TFunction, $i: mfp.ILine) {

        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         $i.line(($i) => {
        //             $i.snippet(`'data': `)
        //             serializeTypeReference($.data, $i)
        //             $i.snippet(`,`)
        //         })
        //         $i.line(($i) => {
        //             $i.snippet(`'returnValue': `)
        //             serializeTypeReference($['return value'], $i)

        //             $i.snippet(`,`)
        //         })
        //     })
        //     $i.snippet(`},`)
        // }
        function serializeFunctionBlock($: api.TFunctionBlock, $i: mfp.ILine) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.line(($i) => {
                    $i.snippet(`'innerFunctions': d({`)
                    $i.indent(($i) => {
                        if ($.innerFunctions !== undefined) {
                            $.innerFunctions.forEach(compare, ($, key) => {
                                $i.line(($i) => {
                                    $i.snippet(`"${key}": {`)
                                    $i.indent(($i) => {
                                        // $i.line(($i) => {
                                        //     $i.snippet(`'definition': `)
                                        //     serializeFunction($, $i)
                                        //     $i.snippet(`,`)
                                        // })
                                        $i.line(($i) => {
                                            $i.snippet(`'block': `)
                                            serializeFunctionBlock($.block, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                    $i.snippet(`},`)
                                })
                            })
                        }
                    })
                    $i.snippet(`}),`)

                })
                $i.line(($i) => {
                    $i.snippet(`'returnExpression': `)
                    serializeExpression($.returnExpression, $i)
                    $i.snippet(`,`)
                })
            })
            $i.snippet(`}`)
        }
        function serializeCallbackBlock($: api.TCallbackBlock, $i: mfp.ILine) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.line(($i) => {
                    $i.snippet(`'innerCallbacks': d({`)
                    $i.indent(($i) => {
                        if ($.innerCallbacks !== undefined) {
                            $.innerCallbacks.forEach(compare, ($, key) => {
                                $i.line(($i) => {
                                    $i.snippet(`"${key}": {`)
                                    $i.indent(($i) => {
                                        // $i.line(($i) => {
                                        //     $i.snippet(`'definition': `)
                                        //     serializeFunction($, $i)
                                        //     $i.snippet(`,`)
                                        // })
                                        $i.line(($i) => {
                                            $i.snippet(`'block': `)
                                            serializeCallbackBlock($.block, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                    $i.snippet(`},`)
                                })
                            })
                        }
                    })
                    $i.snippet(`}),`)

                })
                $i.line(($i) => {
                    $i.snippet(`'statements': d({`)
                    $i.indent(($i) => {
                        $.statements.forEach(($) => {
                            switch ($[0]) {
                                case 'dependencyCall':
                                    pl.cc($[1], ($) => {
                                        $.callback
                                        $.data
                                    })
                                    break
                                case 'interfaceCall':
                                    pl.cc($[1], ($) => {
                                        $.callback
                                        $.data
                                        $.property
                                    })
                                    break
                                case 'innerCallbackCall':
                                    pl.cc($[1], ($) => {
                                        $.data
                                    })
                                    break
                                case 'switch':
                                    pl.cc($[1], ($) => {
                                    })
                                    break
                                default: pl.au($[0])
                            }
                            pl.implementMe(`SSDFSS`)
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)
        }
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'implementations': d({`)
                $i.indent(($i) => {
                    $.implementations.forEach(compare, ($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`"${key}": {`)
                            $i.indent(($i) => {

                                $i.line(($i) => {
                                    $i.snippet(`'constructor': ${$.constructor ? `true` : `false`}`)
                                    $i.snippet(`,`)
                                })
                                $i.line(($i) => {
                                    $i.snippet(`'type': `)
                                    switch ($.type[0]) {
                                        case 'function':
                                            pl.cc($.type[1], ($) => {
                                                $i.snippet(`['function', {`)
                                                $i.indent(($i) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`'block': `)
                                                        serializeFunctionBlock($.block, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        case 'callback':
                                            pl.cc($.type[1], ($) => {
                                                $i.snippet(`['function', {`)
                                                $i.indent(($i) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`'block': `)
                                                        serializeCallbackBlock($.block, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        default: pl.au($.type[0])
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

