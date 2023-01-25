import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateGlossarySerializer = ($d) => {

    return ($, $i) => {
        const parameters: mglossary.T_Parameters = $.parameters !== undefined ? $.parameters : pl.createEmptyDictionary()
        function serializeParameters($: mglossary.T_Parameters, $i: mfp.ILine) {
            $d.enrichedDictionaryForEach($, {
                onEmpty: () => {

                },
                onNotEmpty: ($c) => {

                    $i.snippet(`<`)
                    $c(($) => {
                        $i.snippet($.isFirst ? `` : `, `)
                        $i.snippet($d.createIdentifier(`PG${$.key}`))
                    })

                    $i.snippet(`>`)
                }
            })
        }
        function serializeNamespacedTypeReference($: mglossary.TNamespacedTypeReference, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $.namespaces.forEach(($) => {
                $i.snippet(`${$d.createIdentifier(`N${$}`)}.`)
            })
            $i.snippet(`${$d.createIdentifier(`T${$.type}`)}`)
        }
        function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $i.snippet($d.createIdentifier(`T${$.type}`))
        }
        function serializeType($: mglossary.TType, $i: mfp.ILine) {
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
                        serializeNamespacedTypeReference($, $i)
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
                case 'computed':
                    pl.cc($[1], ($) => {
                        $i.snippet(`() => `)
                        serializeType($, $i)
                    })
                    break
                case 'array':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pt.Array<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'dictionary':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pt.Dictionary<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'group':
                    pl.cc($[1], ($) => {
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($, ($) => {
                                $i.line(($i) => {
                                    $i.snippet(`readonly ${$d.createApostrophedString($.key)}${$.value.optional === undefined || $.value.optional === false ? `` : `?`}: `)
                                    serializeType($.value.type, $i)
                                })
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                case 'nested':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pt.Nested<`)
                        serializeType($, $i)
                        $i.snippet(`>`)
                    })
                    break
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
                                $i.line(($i) => {
                                    $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
                                    serializeType($.value, $i)
                                    $i.snippet(`]`)
                                })
                            })
                        })
                    })
                    break
                case 'template':
                    pl.cc($[1], ($) => {
                        if ($.context !== undefined) {
                            serializeContext($.context, $i)
                        }
                        $i.snippet($d.createIdentifier(`M${$.template}`))
                        $d.enrichedDictionaryForEach($.arguments, {
                            onNotEmpty: ($c) => {
                                $i.snippet(`<`)
                                $c(($) => {
                                    $i.snippet($.isFirst ? `` : `, `)
                                    pl.cc($.value, ($) => {
                                        serializeType($, $i)

                                    })
                                })

                                $i.snippet(`>`)
                            },
                            onEmpty: () => {
                                //nothing to do
                            }
                        })
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeContext($: mglossary.TContext, $i: mfp.ILine) {
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $i.snippet(`m${$}.`)
                    })
                    break
                case 'local':
                    pl.cc($[1], ($) => {

                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeInterfaceReference($: mglossary.TInterfaceReference, $i: mfp.ILine) {
            if ($.context !== undefined) {
                serializeContext($.context, $i)
            }
            $i.snippet($d.createIdentifier(`I${$.interface}`))

        }
        function serializeInterface($: mglossary.TInterface, $i: mfp.ILine) {
            switch ($[0]) {
                case 'group':
                    pl.cc($[1], ($) => {

                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($.members, ($) => {
                                $i.line(($i) => {
                                    $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                    serializeInterface($.value, $i)
                                })
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                case 'method':
                    pl.cc($[1], ($) => {

                        $i.snippet(`(`)
                        pl.cc($.data, ($) => {
                            if ($ === null) {
                                //
                            } else {
                                $i.snippet(`$: `)
                                serializeNamespacedTypeReference($, $i)
                                $i.snippet(`, `)
                            }
                        })
                        pl.cc($.interface, ($) => {
                            if ($ === null) {
    
                            } else {
                                if ($.managed) {
                                    $i.snippet(`$c: ($i: `)
                                    serializeInterface($.interface, $i)
                                    $i.snippet(`) => void`)
                                }
                            }
                        })
                        $i.snippet(`) => `)
                        pl.cc($.interface, ($) => {
                            if ($ === null) {
                                $i.snippet(`void`)
                            } else {
                                if ($.managed) {
                                    $i.snippet(`void`)
                                } else {
                                    serializeInterface($.interface, $i)
                                }
                            }
                        })
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        serializeInterfaceReference($, $i)
                    })
                    break
                default: pl.au($[0])
            }

        }
        function serializeNamespace($: mglossary.TNamespace, $i: mfp.IBlock) {

            if ($.namespaces !== undefined) {
                $d.dictionaryForEach($.namespaces, ($) => {
                    $i.literal(``)
                    $i.line(($i) => {
                        $i.snippet(`export namespace ${$d.createIdentifier(`N${$.key}`)} {`)
                        $i.indent(($i) => {
                            serializeNamespace($.value, $i)
                        })
                        $i.snippet(`}`)
                    })
                })
            }
            if ($.templates !== undefined) {
                $d.dictionaryForEach($.templates, ($) => {
                    $i.literal(``)
                    $i.line(($i) => {
                        $i.snippet(`export type ${$d.createIdentifier(`M${$.key}`)}`)
                        $d.enrichedDictionaryForEach($.value.parameters, {
                            onEmpty: () => {
                                //nothing
                            },
                            onNotEmpty: ($c) => {
                                $i.snippet(`<`)
                                $c(($) => {
                                    $i.snippet(`${$.isFirst ? `` : `, `}A${$.key}`)
                                })
                                $i.snippet(`>`)

                            }
                        })
                        $i.snippet(` = `)
                        serializeType($.value.type, $i)
                    })
                })
            }
            $d.dictionaryForEach($.types, ($) => {
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`T${$.key}`)} = `)
                    serializeType($.value, $i)
                })
            })
            $d.dictionaryForEach($.interfaces, ($) => {
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`I${$.key}`)} = `)
                    serializeInterface($.value, $i)
                })
            })
        }
        $i.line(($i) => {
            $i.snippet(`import * as pt from 'pareto-core-types'`)
        })
        $d.dictionaryForEach($.imports, ($) => {
            $i.line(($i) => {
                $i.snippet(`import * as m${$.key} from "${$.value}"`)
            })
        })
        serializeNamespace($.namespace, $i)
        // $d.dictionaryForEach($.procedures, ($, key) => {
        //     $i.literal(``)
        //     $i.line(($i) => {
        //         $i.snippet(`export type P${key} = ($: `)
        //         serializeLeafType($.data, $i)
        //         $i.snippet(`) => void`)
        //     })
        // })
        $d.dictionaryForEach($.functions, ($) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type ${$d.createIdentifier(`F${$.key}`)} = `)
                serializeParameters(parameters, $i)
                pl.cc($.value, ($) => {

                    $i.snippet(`($: `)
                    serializeTypeReference($.data, $i)
                    $i.snippet(`,`)
                    if ($['managed input interface'] !== null) {

                        $i.snippet(` $c: ($i: `)
                        serializeInterfaceReference($['managed input interface'], $i)
                        $i.snippet(`) => void,`)
                    }
                    if ($['output interface'] !== null) {

                        $i.snippet(` $i: `)
                        serializeInterfaceReference($['output interface'], $i)
                        $i.snippet(`,`)
                    }
                    $i.snippet(`) => `)
                    pl.cc($['return type'], ($) => {
                        switch ($[0]) {
                            case 'data':
                                pl.cc($[1], ($) => {

                                    if ($.asynchronous) {
                                        $i.snippet(`pt.AsyncValue<`)
                                        serializeTypeReference($.type, $i)
                                        $i.snippet(`>`)
                                    } else {
                                        serializeTypeReference($.type, $i)
                                    }
                                })
                                break
                            case 'interface':
                                pl.cc($[1], ($) => {
                                    serializeInterfaceReference($, $i)
                                })
                                break
                            case 'nothing':
                                pl.cc($[1], ($) => {
                                    $i.snippet(`void`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                })
            })
        })
    }
}

