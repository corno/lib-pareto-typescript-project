import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const icreateSerializer: api.CcreateSerializer = ($d) => {
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
                                    serializeBlock($.block, $i)
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
                        $i.snippet(`['implementMe', null]`)
                    })
                    break
                case 'mapArray':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['mapArray', {`)
                        $i.indent(($i) => {
                            $i.line(($i) => {
                                $i.snippet(`'block': `)
                                serializeBlock($.block, $i)
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
                                serializeBlock($.block, $i)
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
                                            serializeBlock($, $i)
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
        function serializeBlock($: api.TFunctionBlock, $i: mfp.ILine) {
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
                                        $i.line(($i) => {
                                            $i.snippet(`'block': `)
                                            serializeBlock($.block, $i)
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
                                                        serializeBlock($.block, $i)
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

