import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as gglossary from "../../glossary"
import * as gfp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

import { createSerializer } from "../definition/api.generated"

export const $$: createSerializer = ($d) => {
    return <Annotation>($: gglossary.T.Glossary<Annotation>, $i: gfp.B.Block) => {

        function doOptional<T>(
            $: pt.OptionalValue<T>,
            $i: gfp.B.Line,
            $c: ($: T, $i: gfp.B.Line) => void,
        ) {
            switch ($[0]) {
                case false:
                    $i.snippet(`[false]`)
                    break
                case true:
                    pl.cc($[1], ($) => {
                        $i.snippet(`[true, `)
                        $c($, $i)
                        $i.snippet(`]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeTypeReference($: gglossary.T.TypeReference<Annotation>, $i: gfp.B.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'context': `)
                    serializeContext($.context, $i)
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'type': `)
                    $i.snippet(`"` + $.type + `"`)
                    //doReference($.type, $i)
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'arguments': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.arguments, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeTypeReference($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)
        }

        function serializeType($: gglossary.T.Type<Annotation>, $i: gfp.B.Line) {
            $i.snippet(`<gglossary.T.Type<pd.SourceLocation>>`)

            switch ($[0]) {
                case 'computed':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['computed', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'optional':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['optional', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'null':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['null', null]`)
                    })
                    break
                case 'boolean':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['boolean', null]`)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['reference', `)
                        serializeTypeReference($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'number':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['number', null]`)
                    })
                    break
                case 'string':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['string', null]`)
                    })
                    break
                case 'array':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['array', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'dictionary':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['dictionary', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'group':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['group', d({`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.key}": {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'type': `)
                                            serializeType($.value.type, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                    $i.snippet(`},`)
                                })
                            })
                        })
                        $i.snippet(`})]`)
                    })
                    break
                case 'nested':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['nested', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'nested':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['nested', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'type parameter':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['type parameter', `)
                        $i.snippet(`"${$}"`)
                        $i.snippet(`]`)
                    })
                    break
                case 'glossary parameter':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['glossary parameter', `)
                        $i.snippet(`"${$}"`)
                        $i.snippet(`]`)
                    })
                    break
                case 'taggedUnion':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['taggedUnion', d({`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.key}": `)
                                    serializeType($.value, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`})]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeContext($: gglossary.T.Context<Annotation>, $i: gfp.B.Line) {
            $i.snippet(`<gglossary.T.Context<pd.SourceLocation>>`)
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['import', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'glossary': "${$.glossary}",`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'arguments': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.arguments, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeTypeReference($.value, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'local':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['local', null]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeInterfaceReference($: gglossary.T.InterfaceReference<Annotation>, $i: gfp.B.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'context': `)
                    serializeContext($.context, $i)
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'interface': "${$.interface}",`)
                })
            })
            $i.snippet(`}`)
        }

        function serializeBuilderReference($: gglossary.T.BuilderReference<Annotation>, $i: gfp.B.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'context': `)
                    serializeContext($.context, $i)
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'builder': "${$.builder}",`)
                })
            })
            $i.snippet(`}`)

        }
        function serializeInterface($: gglossary.T.Interface<Annotation>, $i: gfp.B.Line) {
            switch ($[0]) {
                case 'group':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['group', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'members': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.members, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeInterface($.value, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'method':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['method', {`)
                        $i.indent(($i) => {
                            pl.cc($.data, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'data': `)
                                    doOptional($, $i, ($, $i) => {
                                        serializeTypeReference($, $i)
                                    })
                                    $i.snippet(`,`)
                                })
                            })
                            pl.cc($.interface, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'interface': `)
                                    doOptional($, $i, ($, $i) => {
                                        serializeInterface($, $i)

                                    })
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`}]`)

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
        function serializeBuilder($: gglossary.T.Builder<Annotation>, $i: gfp.B.Line) {
            switch ($[0]) {
                case 'group':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['group', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'members': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.members, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeBuilder($.value, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                        $i.snippet(`}]`)
                    })
                    break
                case 'method':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['method', {`)
                        $i.indent(($i) => {
                            pl.cc($.data, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'data': `)
                                    doOptional($, $i, ($, $i) => {
                                        serializeTypeReference($, $i)
                                    })
                                    $i.snippet(`,`)
                                })
                            })
                            pl.cc($.builder, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'builder': `)
                                    doOptional($, $i, ($, $i) => {
                                        serializeBuilder($, $i)
                                    })
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`}]`)

                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        serializeBuilderReference($, $i)
                    })
                    break
                default: pl.au($[0])
            }

        }
        $i.line(`import * as pd from 'pareto-core-data'`)
        $i.line(``)
        $i.line(`import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"`)
        $i.line(``)
        $i.line(`const d = pd.d`)
        $i.line(`const a = pd.a`)
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`export const $: gglossary.T.Glossary<pd.SourceLocation> = `)

            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'parameters': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.parameters, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": null,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'types': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.types, ($) => {

                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'parameters': d({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.value.parameters, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`"${$.key}": null,`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'type': `)
                                        serializeType($.value.type, $i)

                                    })
                                })
                                $i.snippet(`},`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'interfaces': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.interfaces, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeInterface($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'functions': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.functions, ($) => {
                            $i.nestedLine(($i) => {

                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'data': `)
                                        serializeTypeReference($.value.data, $i)
                                        $i.snippet(`,`)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'input builder': `)
                                        doOptional($.value['input builder'], $i, ($, $i) => {
                                            serializeBuilderReference($, $i)
                                        })
                                        $i.snippet(`,`)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'output builder': `)
                                        doOptional($.value['output builder'], $i, ($, $i) => {
                                            serializeBuilderReference($, $i)
                                        })
                                        $i.snippet(`,`)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'return type': `)
                                        switch ($.value['return type'][0]) {
                                            case 'data':
                                                pl.cc($.value['return type'][1], ($) => {
                                                    $i.snippet(`['data', {`)
                                                    $i.indent(($i) => {

                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'type': `)
                                                            serializeTypeReference($.type, $i)
                                                            $i.snippet(`,`)
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'asynchronous': ${$.asynchronous}`)
                                                            $i.snippet(`,`)
                                                        })
                                                    })
                                                    $i.snippet(`}]`)
                                                })
                                                break
                                            case 'interface':
                                                pl.cc($.value['return type'][1], ($) => {
                                                    $i.snippet(`['interface', `)
                                                    serializeInterfaceReference($, $i)
                                                    $i.snippet(`]`)

                                                })
                                                break
                                            case 'nothing':
                                                pl.cc($.value['return type'][1], ($) => {
                                                    $i.snippet(`['nothing', null]`)

                                                })
                                                break
                                            default: pl.au($.value['return type'][0])
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

        })
    }
}

