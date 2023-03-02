import * as pl from 'pareto-core-lib'

import * as galgorithm from "../../algorithm"
import * as gfp from "lib-fountain-pen"

import { CcreateStatesSerializer } from "../api"

export const $$:CcreateStatesSerializer = ($d) => {
    return <Annotation>($: galgorithm.T.States<Annotation>, $i: gfp.IBlock) => {
        function serializeType($: galgorithm.T.Type<Annotation>, $i: gfp.ILine) {
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
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                    serializeType($.value.type, $i)
                                })
                            })
                        })
                        $i.snippet(`}`)
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
                // case 'template':
                //     pl.cc($[1], ($) => {
                //         if ($.context !== undefined) {
                //             serializeContext($.context, $i)
                //         }
                //         $i.snippet($d.createIdentifier(`M${$.template}`))
                //         $d.enrichedDictionaryForEach($.arguments, {
                //             onNotEmpty: ($c) => {
                //                 $i.snippet(`<`)
                //                 $c(($) => {
                //                     $i.snippet($.isFirst ? `` : `, `)
                //                     pl.cc($.value, ($) => {
                //                         serializeType($, $i)

                //                     })
                //                 })

                //                 $i.snippet(`>`)
                //             },
                //             onEmpty: () => {
                //                 //nothing to do
                //             }
                //         })
                //     })
                    break
                default: pl.au($[0])
            }
        }
        $i.nestedLine(($i) => {
            $i.snippet(`import * as pl from './templib'`)
        })
        $d.dictionaryForEach($, ($) => {

            $i.nestedLine(($i) => {
                $i.snippet(`export type ${$d.createIdentifier(`S${$.key}`)} = `)
                serializeType($.value, $i)
            })
        })
        
    }
}

