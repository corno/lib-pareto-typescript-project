import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_glossary from "../../glossary"
import * as g_fp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

import { createSerializer } from "../api.generated"

export const $$: createSerializer = ($d) => {
    return <Annotation>($: g_glossary.T.Glossary<Annotation>, $i: g_fp.B.Block) => {

        function doOptional<T>(
            $: pt.OptionalValue<T>,
            $i: g_fp.B.Line,
            $c: ($: T, $i: g_fp.B.Line) => void,
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
        function serializeDataOrBuilder($: g_glossary.T.DataOrBuilder<Annotation>, $i: g_fp.B.Line) {
            switch ($[0]) {
                case 'builder':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['builder', `)
                        serializeBuilderReference($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'data':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['data', `)
                        serializeTypeReference($, $i)
                        $i.snippet(`]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeTypeReference($: g_glossary.T.TypeReference<Annotation>, $i: g_fp.B.Line) {
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

        function serializeType($: g_glossary.T.Type<Annotation>, $i: g_fp.B.Line) {
            $i.snippet(`<g_glossary.T.Type<pd.SourceLocation>>`)

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
        function serializeContext($: g_glossary.T.Context<Annotation>, $i: g_fp.B.Line) {
            $i.snippet(`<g_glossary.T.Context<pd.SourceLocation>>`)
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['import', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'glossary': "${$.glossary}",`)
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
        function serializeInterfaceReference($: g_glossary.T.InterfaceReference<Annotation>, $i: g_fp.B.Line) {
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
        // function serializeResourceReference($: g_glossary.T.ResourceReference<Annotation>, $i: g_fp.B.Line) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`'context': `)
        //             serializeContext($.context, $i)
        //             $i.snippet(`,`)
        //         })
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`'resource': "${$.resource}",`)
        //         })
        //     })
        //     $i.snippet(`}`)
        // }

        function serializeBuilderReference($: g_glossary.T.BuilderReference<Annotation>, $i: g_fp.B.Line) {
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
        function serializeInterface($: g_glossary.T.Interface<Annotation>, $i: g_fp.B.Line) {
            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['choice', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'options': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.options, ($) => {
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

                case 'stream':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['stream', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'data': `)
                                serializeInterface($.data, $i)
                                $i.snippet(`,`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'end': `)
                                serializeInterface($.end, $i)
                                $i.snippet(`,`)
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
        function serializeBuilder($: g_glossary.T.Builder<Annotation>, $i: g_fp.B.Line) {
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
        $i.line(`import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"`)
        $i.line(``)
        $i.line(`const d = pd.d`)
        $i.line(`const a = pd.a`)
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`export const $: g_glossary.T.Glossary<pd.SourceLocation> = `)

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
                    $i.snippet(`'imports': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.imports, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    pl.cc($.value, ($) => {
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

                                })
                                $i.snippet(`},`)
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
                    $i.snippet(`'type': `)
                    switch ($.type[0]) {
                        case 'asynchronous':
                            pl.cc($.type[1], ($) => {
                                $i.snippet(`['asynchronous', {`)
                                $i.indent(($i) => {
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
                                        $i.snippet(`'classes': d({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.classes, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'interface': `)
                                                    serializeInterfaceReference($.value.interface, $i)
                                                    $i.snippet(`,`)
                                                })
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'downstreams': d({`)
                                                    $i.indent(($i) => {
                                                        $d.dictionaryForEach($.value.downstreams, ($) => {
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`"${$.key}": `)
                                                                serializeInterfaceReference($.value, $i)
                                                                $i.snippet(`,`)
                                                            })
                                                        })
                                                    })
                                                    $i.snippet(`}),`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'functions': d<g_glossary.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation>>({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.functions, ($) => {
                                                $i.nestedLine(($i) => {

                                                    $i.snippet(`"${$.key}": {`)
                                                    $i.indent(($i) => {
                                                        pl.cc($.value, ($) => {

                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`'in': `)
                                                                switch ($.in[0]) {
                                                                    case 'data':
                                                                        pl.cc($.in[1], ($) => {
                                                                            $i.snippet(`['data', `)
                                                                            serializeTypeReference($, $i)
                                                                            $i.snippet(`]`)
                                                                        })
                                                                        break
                                                                    // case 'resource':
                                                                    //     pl.cc($.in[1], ($) => {
                                                                    //         $i.snippet(`['resource', `)
                                                                    //         serializeResourceReference($, $i)
                                                                    //         $i.snippet(`]`)
                                                                    //     })
                                                                    //     break
                                                                    default: pl.au($.in[0])
                                                                }
                                                                $i.snippet(`,`)
                                                            })
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`'out': `)
                                                                switch ($.out[0]) {
                                                                    case 'data':
                                                                        pl.cc($.out[1], ($) => {
                                                                            $i.snippet(`['data', `)
                                                                            serializeTypeReference($, $i)
                                                                            $i.snippet(`]`)
                                                                        })
                                                                        break
                                                                    case 'interface':
                                                                        pl.cc($.out[1], ($) => {
                                                                            $i.snippet(`['interface', `)
                                                                            serializeInterfaceReference($, $i)
                                                                            $i.snippet(`]`)
                                                                        })
                                                                        break
                                                                    default: pl.au($.out[0])
                                                                }
                                                                $i.snippet(`,`)
                                                            })
                                                        })
                                                    })
                                                    $i.snippet(`},`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                })
                                $i.snippet(`}]`)
                            })
                            break
                        case 'synchronous':
                            pl.cc($.type[1], ($) => {
                                $i.snippet(`['synchronous', {`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'builders': d({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.builders, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`"${$.key}": `)
                                                    serializeBuilder($.value, $i)
                                                    $i.snippet(`,`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.functions, ($) => {
                                                $i.nestedLine(($i) => {

                                                    $i.snippet(`"${$.key}": {`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'in': `)
                                                            serializeDataOrBuilder($.value.in, $i)
                                                            $i.snippet(`,`)
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'out': `)
                                                            serializeDataOrBuilder($.value.out, $i)
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
                                $i.snippet(`}]`)
                            })
                            break
                        default: pl.au($.type[0])
                    }
                    $i.snippet(`,`)
                })
            })
            $i.snippet(`}`)
        })
    }
}

