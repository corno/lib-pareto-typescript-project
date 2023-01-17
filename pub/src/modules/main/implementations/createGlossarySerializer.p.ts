import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const icreateGlossarySerializer: api.CcreateGlossarySerializer = ($d) => {
    const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

    return ($, $i) => {
        const parameters: mglossary.TParameters = $.parameters !== undefined ? $.parameters : pl.createEmptyDictionary()
        function serializeParameters($: mglossary.TParameters, $i: mfp.ILine) {
            $d.cb_enrichedDictionaryForEach($, {
                onEmpty: () => {

                },
                onNotEmpty: ($c) => {

                    $i.snippet(`<`)
                    $c(($) => {
                        $i.snippet($.isFirst ? `` : `, `)
                        $i.snippet(`PG${$.key}`)
                    })

                    $i.snippet(`>`)
                }
            })
        }
        function serializeOptionalTypeReference($: mglossary.TOptionalTypeReference, $i: mfp.ILine) {
            if ($ === null) {
                //
            } else {
                $i.snippet(`$: `)
                serializeTypeReference($, $i)
                $i.snippet(`, `)
            }
        }
        function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $.namespaces.forEach(($) => {
                $i.snippet(`N${$}.`)
            })
            $i.snippet(`T${$.type}`)
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
                        serializeTypeReference($, $i)
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
                            $.forEach(compare, ($, key) => {
                                $i.line(($i) => {
                                    $i.snippet(`readonly '${key}'${$.optional === undefined || $.optional === false ? `` : `?`}: `)
                                    serializeType($.type, $i)
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
                        $i.snippet(`A${$}`)
                    })
                    break
                case 'taggedUnion':
                    pl.cc($[1], ($) => {
                        $i.indent(($i) => {
                            $.forEach(compare, ($, key) => {
                                $i.line(($i) => {
                                    $i.snippet(`| ['${key}', `)
                                    serializeType($, $i)
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
                        $i.snippet(`M${$.template}`)
                        $d.cb_enrichedDictionaryForEach($.arguments, {
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
            $i.snippet(`I${$.interface}`)

        }
        function serializeInterface($: mglossary.TInterface, $i: mfp.ILine) {
            switch ($[0]) {
                case 'group':
                    pl.cc($[1], ($) => {

                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $.members.forEach(compare, ($, key) => {
                                $i.line(($i) => {
                                    $i.snippet(`'${key}': `)
                                    serializeInterface($, $i)
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
                            serializeOptionalTypeReference($, $i)
                        })
                        pl.cc($.interface, ($) => {
                            switch ($[0]) {
                                case 'null':
                                    pl.cc($[1], ($) => {
                                    })
                                    break
                                case 'set':
                                    pl.cc($[1], ($) => {
                                        $i.snippet(`$c: ($i: `)
                                        serializeInterfaceReference($, $i)
                                        $i.snippet(`) => void`)
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                        $i.snippet(`) => void`)
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
                $.namespaces.forEach(compare, ($, key) => {
                    $i.literal(``)
                    $i.line(($i) => {
                        $i.snippet(`export namespace N${key} {`)
                        $i.indent(($i) => {
                            serializeNamespace($, $i)
                        })
                        $i.snippet(`}`)
                    })
                })
            }
            if ($.templates !== undefined) {
                $.templates.forEach(compare, ($, key) => {
                    $i.literal(``)
                    $i.line(($i) => {
                        $i.snippet(`export type M${key}`)
                        $d.cb_enrichedDictionaryForEach($.parameters, {
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
                        serializeType($.type, $i)
                    })
                })
            }
            $.types.forEach(compare, ($, key) => {
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type T${key} = `)
                    serializeType($, $i)
                })
            })
            $.interfaces.forEach(compare, ($, key) => {
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type I${key} = `)
                    serializeInterface($, $i)
                })
            })
        }
        $i.line(($i) => {
            $i.snippet(`import * as pt from 'pareto-core-types'`)
        })
        $.imports.forEach(compare, ($, key) => {
            $i.line(($i) => {
                $i.snippet(`import * as m${key} from "${$}"`)
            })
        })
        serializeNamespace($.namespace, $i)
        // $.procedures.forEach(compare, ($, key) => {
        //     $i.literal(``)
        //     $i.line(($i) => {
        //         $i.snippet(`export type P${key} = ($: `)
        //         serializeLeafType($.data, $i)
        //         $i.snippet(`) => void`)
        //     })
        // })
        $.functions.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type ${$.async ? `A` : `F`}${key} = `)
                serializeParameters(parameters, $i)
                $i.snippet(`($: `)
                serializeTypeReference($.data, $i)
                $i.snippet(`) => `)
                if ($.async) {
                    $i.snippet(`pt.AsyncValue<`)
                    serializeTypeReference($[`return value`], $i)
                    $i.snippet(`>`)
                } else {
                    serializeTypeReference($[`return value`], $i)
                }
            })
        })
        $.callbacks.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type X${key} = (`)
                serializeOptionalTypeReference($.data, $i)
                $i.snippet(`$i: `)
                if ($.context !== undefined) {
                    serializeContext($.context, $i)
                }
                $i.snippet(`I${$.interface}) => void`)
            })
        })
        $.pipes.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type P${key} = ($i: `)
                serializeInterfaceReference($.out, $i)
                $i.snippet(`, $c: ($i: `)
                serializeInterfaceReference($.in, $i)
                $i.snippet(`) => void) => void`)
            })
        })
    }
}

