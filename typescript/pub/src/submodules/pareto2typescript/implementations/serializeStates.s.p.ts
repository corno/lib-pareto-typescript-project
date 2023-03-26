import * as pl from 'pareto-core-lib'

import * as g_algorithm from "../../algorithm"
import * as g_fp from "lib-fountain-pen"
import * as g_foreach from "res-pareto-foreach"
import * as g_ts from "res-typescript"

import { A } from "../api.generated"

export const $$: A.serializeStates = <GAnnotation>($d: {
    readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
    readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
    readonly 'enrichedForEachMember': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_algorithm.T.Type.group.D<GAnnotation>>
    readonly 'forEachOption': g_foreach.SYNC.A.P.DictionaryForEach<g_algorithm.T.Type.taggedUnion.D<GAnnotation>>
    readonly 'forEachState': g_foreach.SYNC.A.P.DictionaryForEach<g_algorithm.T.States.D<GAnnotation>>

}) => {
    return ($: g_algorithm.T.States<GAnnotation>, $i: g_fp.SYNC.I.Block) => {
        function serializeType($: g_algorithm.T.Type<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'null':
                    pl.cc($[1], ($) => {
                        $i.snippet(`null`)
                    })
                    break
                case 'boolean':
                    pl.cc($[1], ($) => {
                        $i.snippet(`boolean`)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        $i.snippet($d.createIdentifier(`S${$}`))
                    })
                    break
                case 'number':
                    pl.cc($[1], ($) => {
                        $i.snippet(`number`)
                    })
                    break
                case 'string':
                    pl.cc($[1], ($) => {
                        $i.snippet(`string`)
                    })
                    break
                // case 'computed':
                //     pl.cc($[1], ($) => {
                //         $i.snippet(`() => `)
                //         serializeType($, $i)
                //     })
                //     break
                case 'array':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pl.StateArray<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'dictionary':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pl.StateDictionary<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'group':
                    pl.cc($[1], ($) => {
                        $d.enrichedForEachMember($, {
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
                //     pl.cc($[1], ($) => {
                //         $i.snippet(`pt.Nested<`)
                //         serializeType($, $i)
                //         $i.snippet(`>`)
                //     })
                //     break
                case 'optional':
                    pl.cc($[1], ($) => {
                        $i.snippet(`null | `)
                        serializeType($, $i)
                    })
                    break
                case 'parameter':
                    pl.cc($[1], ($) => {
                        $i.snippet($d.createIdentifier(`A${$}`))
                    })
                    break
                case 'taggedUnion':
                    pl.cc($[1], ($) => {
                        $i.indent(($i) => {
                            $d.forEachOption($, ($) => {
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
        $d.forEachState($, ($) => {
            $i.nestedLine(($i) => {
                $i.snippet(`export type ${$d.createIdentifier(`S${$.key}`)} = `)
                serializeType($.value, $i)
            })
        })

    }
}

