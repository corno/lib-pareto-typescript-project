import * as pl from 'pareto-core-lib'

import * as g_algorithm from "../../algorithm"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.serializeStates = ($d) => {
    return <GAnnotation>($: g_algorithm.T.States<GAnnotation>, $i: g_fp.SYNC.I.Block) => {
        function serializeType($: g_algorithm.T.Type<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'null':
                    pl.ss($, ($) => {
                        $i.snippet(`null`)
                    })
                    break
                case 'boolean':
                    pl.ss($, ($) => {
                        $i.snippet(`boolean`)
                    })
                    break
                case 'reference':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier(`S${$}`))
                    })
                    break
                case 'number':
                    pl.ss($, ($) => {
                        $i.snippet(`number`)
                    })
                    break
                case 'string':
                    pl.ss($, ($) => {
                        $i.snippet(`string`)
                    })
                    break
                // case 'computed':
                //     pl.ss($, ($) => {
                //         $i.snippet(`() => `)
                //         serializeType($, $i)
                //     })
                //     break
                case 'array':
                    pl.ss($, ($) => {
                        $i.snippet(`pl.StateArray<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'dictionary':
                    pl.ss($, ($) => {
                        $i.snippet(`pl.StateDictionary<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'group':
                    pl.ss($, ($) => {
                        $d.enrichedDictionaryForEach($, {
                            'onEmpty': () => {
                                $i.snippet(`null`)
                            },
                            'onNotEmpty': ($c) => {

                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $c(($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                            serializeType($.value.type, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                            }
                        })
                    })
                    break
                // case 'nested':
                //     pl.ss($, ($) => {
                //         $i.snippet(`pt.Nested<`)
                //         serializeType($, $i)
                //         $i.snippet(`>`)
                //     })
                //     break
                case 'optional':
                    pl.ss($, ($) => {
                        $i.snippet(`null | `)
                        serializeType($, $i)
                    })
                    break
                case 'parameter':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier(`A${$}`))
                    })
                    break
                case 'taggedUnion':
                    pl.ss($, ($) => {
                        $i.indent(($i) => {
                            $d.dictionaryForEach($, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
                                    serializeType($.value, $i)
                                    $i.snippet(`]`)
                                })
                            })
                        })
                    })
                    break
                default: pl.au($[0])
            }
        }
        $i.nestedLine(($i) => {
            $i.snippet(`import * as pl from "./templib"`)
        })
        $d.dictionaryForEach($, ($) => {
            $i.nestedLine(($i) => {
                $i.snippet(`export type ${$d.createIdentifier(`S${$.key}`)} = `)
                serializeType($.value, $i)
            })
        })

    }
}

