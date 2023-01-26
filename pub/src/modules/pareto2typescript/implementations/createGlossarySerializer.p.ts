import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateGlossarySerializer = ($d) => {

    return ($, $i) => {
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
        $i.file(`index.ts`, ($i) => {
            $i.line(`export * from "./types.generated"`)
            $i.line(`export * from "./public.generated"`)
        })
        $i.file(`types.generated.ts`, ($i) => {
            function serializeType(
                $: {
                    $: mglossary.TType,
                },
                $namespacedType: ($i: mfp.ILine) => void,
                $i: mfp.ILine,
            ): void {

                pl.cc($.$, $ => {
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
                                const type = $.type
                                switch ($.context[0]) {
                                    case 'import':
                                        pl.cc($.context[1], ($) => {
                                            $i.snippet(`m${$}.${$d.createIdentifier(`T${type}`)}`)
                                        })
                                        break
                                    case 'local':
                                        pl.cc($.context[1], ($) => {
                                            $i.snippet(`${$d.createIdentifier(`G${type}`)}`)
                                        })
                                        break
                                    default: pl.au($.context[0])
                                }
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
                                $namespacedType($i)
                            })
                            break
                        case 'array':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        case 'dictionary':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        case 'group':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        case 'nested':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        case 'optional':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        case 'parameter':
                            pl.cc($[1], ($) => {
                                $i.snippet($d.createIdentifier(`A${$}`))
                            })
                            break
                        case 'taggedUnion':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        case 'template':
                            pl.cc($[1], ($) => {
                                $namespacedType($i)
                            })
                            break
                        default: pl.au($[0])
                    }

                })
            }
            function serializeComplexType(
                $: {
                    $: mglossary.TType,
                    name: string,
                },
                $parameters: ($i: mfp.ILine) => void,
                $i: mfp.IBlock
            ) {
                const nameXX = $.name
                function createInstanceNamespace(
                    $namespaces: ($i: mfp.IBlock) => void,
                    $c: ($i: mfp.ILine) => void
                ) {
                    function ns($: string, $i: mfp.IBlock, $content: ($i: mfp.IBlock) => void) {
                        $i.line(``)
                        $i.nestedLine(($i) => {
                            $i.snippet(`export namespace ${$d.createIdentifier($)} {`)
                            $i.indent(($i) => {
                                $content($i)
                            })
                            $i.snippet(`}`)
        
                        })
                    }
                    ns(
                        nameXX,
                        $i,
                        ($i) => {
                            $namespaces($i)
                        }
                    )
                    $i.nestedLine(($i) => {
                        $i.snippet(`export type ${$d.createIdentifier(nameXX)}`)
                        $parameters($i)
                        $i.snippet(` = `)
                        $c($i)
                    })
                }
                function serializeTypeX(
                    $: {
                        $: mglossary.TType,
                        name: string,
                    },
                    $i: mfp.ILine,
                ): void {
                    serializeType(
                        {
                            $: $.$,
                        },
                        ($i) => {
                            $i.snippet(`${$d.createIdentifier(nameXX)}.${$d.createIdentifier($.name)}`)
                            $parameters($i)
                        },
                        $i,
                    )
                }
                pl.cc($.$, ($) => {
                    switch ($[0]) {
                        case 'null':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'boolean':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'reference':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'number':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'string':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'computed':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeComplexType(
                                            {
                                                $: $,
                                                name: `C`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`() => `)
                                        serializeTypeX(
                                            {
                                                $: $,
                                                name: `C`,
                                            },
                                            $i,
                                        )
                                    }
                                )
                            })
                            break
                        case 'array':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeComplexType(
                                            {
                                                $: $,
                                                name: `A`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Array<`)
                                        serializeTypeX(
                                            {
                                                $: $,
                                                name: `A`,
                                            },
                                            $i,
                                        )
                                        $i.snippet(`>`)
                                    }
                                )
                            })
                            break
                        case 'dictionary':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeComplexType(
                                            {
                                                $: $,
                                                name: `D`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Dictionary<`)
                                        serializeTypeX(
                                            {
                                                $: $,
                                                name: `D`,
                                            },
                                            $i,
                                        )
                                        $i.snippet(`>`)
                                    }
                                )
                            })
                            break
                        case 'group':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        $d.dictionaryForEach($, ($) => {
                                            serializeComplexType(
                                                {
                                                    $: $.value.type,
                                                    name: `P${$.key}`
                                                },
                                                $parameters,
                                                $i
                                            )

                                        })
                                    },
                                    ($i) => {
                                        $i.snippet(`{`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`readonly ${$d.createApostrophedString($.key)}${$.value.optional === undefined || $.value.optional === false ? `` : `?`}: `)

                                                    serializeTypeX(
                                                        {
                                                            $: $.value.type,
                                                            'name': `P${$.key}`,
                                                        },
                                                        $i,
                                                    )
                                                })
                                            })
                                        })
                                        $i.snippet(`}`)
                                    }
                                )
                            })
                            break
                        case 'nested':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeComplexType(
                                            {
                                                $: $,
                                                name: `N`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Nested<`)
                                        serializeTypeX(
                                            {
                                                $: $,
                                                name: `N`,
                                            },
                                            $i
                                        )
                                        $i.snippet(`>`)
                                    }
                                )
                            })
                            break
                        case 'optional':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeComplexType(
                                            {
                                                $: $,
                                                name: `O`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`null | `)
                                        serializeTypeX(
                                            {
                                                $: $,
                                                name: `O`,
                                            },
                                            $i,
                                        )
                                    }
                                )
                            })
                            break
                        case 'parameter':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'taggedUnion':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        $d.dictionaryForEach($, ($) => {
                                            serializeComplexType(
                                                {
                                                    $: $.value,
                                                    name: `O${$.key}`
                                                },
                                                $parameters,
                                                $i
                                            )


                                        })
                                    },
                                    ($i) => {

                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
                                                    serializeTypeX(
                                                        {
                                                            $: $.value,
                                                            name: `O${$.key}`,
                                                        },
                                                        $i,
                                                    )
                                                    $i.snippet(`]`)
                                                })
                                            })
                                        })
                                    }
                                )

                            })
                            break
                        case 'template':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {

                                        $d.dictionaryForEach($.arguments, ($) => {

                                            serializeComplexType(
                                                {
                                                    $: $.value,
                                                    name: `TP${$.key}`
                                                },
                                                $parameters,
                                                $i
                                            )
                                        })
                                    },
                                    ($i) => {

                                        if ($.context !== undefined) {
                                            serializeContext($.context, $i)
                                        }
                                        $i.snippet($d.createIdentifier(`M${$.template}`))
                                        $d.enrichedDictionaryForEach($.arguments, {
                                            onNotEmpty: ($c) => {
                                                $i.snippet(`<`)
                                                $c(($) => {
                                                    $i.snippet($.isFirst ? `` : `, `)
                                                    serializeTypeX(
                                                        {
                                                            $: $.value,
                                                            name: `TP${$.key}`,
                                                        },
                                                        $i
                                                    )
                                                })

                                                $i.snippet(`>`)
                                            },
                                            onEmpty: () => {
                                                //nothing to do
                                            }
                                        })
                                    }
                                )
                            })
                            break
                        default: pl.au($[0])
                    }

                })
            }
            $i.nestedLine(($i) => {
                $i.snippet(`import * as pt from 'pareto-core-types'`)
            })
            $i.line(``)
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            if ($.templates !== undefined) {
                $d.dictionaryForEach($.templates, ($) => {

                    serializeComplexType(
                        {
                            $: $.value.type,
                            name: `V${$.key}`,
                        },
                        ($i) => {
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
                        },
                        $i,
                    )
                    $i.line(``)
                    $i.nestedLine(($i) => {
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
                        serializeType(
                            {
                                $: $.value.type,
                            },
                            ($i) => {
                                $i.snippet($d.createIdentifier(`V${$.key}`))
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
                            },
                            $i
                        )
                    })
                })
            }
            $d.dictionaryForEach($.types, ($) => {
                serializeComplexType(
                    {
                        $: $.value,
                        name: `G${$.key}`
                    },
                    () => { },
                    $i
                )
            })

        })
        $i.file(`public.generated.ts`, ($i) => {

            const parameters: mglossary.GGlossary.G.Pparameters = $.parameters !== undefined ? $.parameters : pl.createEmptyDictionary()
            function serializeParameters($: mglossary.GGlossary.G.Pparameters, $i: mfp.ILine) {
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
            function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
                serializeContext($.context, $i)
                $i.snippet($d.createIdentifier(`T${$.type}`))
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
                                    $i.nestedLine(($i) => {
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
                                    serializeTypeReference($, $i)
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
            $i.nestedLine(($i) => {
                $i.snippet(`import * as pt from 'pareto-core-types'`)
            })
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`import * as t from './types.generated'`)
            })
            $i.line(``)
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            $d.dictionaryForEach($.types, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`T${$.key}`)} = t.G${$d.createIdentifier($.key)}`)
                })
            })
            $d.dictionaryForEach($.interfaces, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`I${$.key}`)} = `)
                    serializeInterface($.value, $i)
                })
            })
            $d.dictionaryForEach($.functions, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
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
        })
    }
}

