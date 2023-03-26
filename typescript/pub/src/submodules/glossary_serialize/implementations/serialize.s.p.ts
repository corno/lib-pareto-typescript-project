import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_glossary from "../../glossary"
import * as g_foreach from "res-pareto-foreach"
import * as g_fp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

import { A } from "../api.generated"

export const $$: A.serialize = <GAnnotation>($d: {
    readonly forEachContextArgument: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.TypeReference.arguments.D<GAnnotation>>
    readonly forEachAsychronousInterface: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.asynchronous.interfaces.D<GAnnotation>>
    readonly forEachAsychronousAlgorithm: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D<GAnnotation>>
    readonly forEachAsychronousDownstream: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D._lconstructor.downstreams.D<GAnnotation>>
    readonly forEachSychronousInterface: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.synchronous.interfaces.D<GAnnotation>>
    readonly forEachSychronousAlgorithm: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.synchronous.algorithms.D<GAnnotation>>
    readonly forEachType: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D<GAnnotation>>
    readonly forEachTypeParameter: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>>
    readonly forEachMember: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.group.D<GAnnotation>>
    readonly forEachOption: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.taggedUnion.D<GAnnotation>>
    readonly forEachAsyncInterfaceOption: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.AsynchronousInterface.choice.options.D<GAnnotation>>
    readonly forEachSyncInterfaceMember: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.SynchronousInterface.group.members.D<GAnnotation>>
    readonly forEachParameter: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.parameters.D<GAnnotation>>
    readonly forEachImport: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D<GAnnotation>>
    readonly forEachImportArgument: g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D.arguments.D<GAnnotation>>
}) => {
    return ($: g_glossary.T.Glossary<GAnnotation>, $i: g_fp.SYNC.I.Block) => {

        function doOptional<T>(
            $: pt.OptionalValue<T>,
            $i: g_fp.SYNC.I.Line,
            $c: ($: T, $i: g_fp.SYNC.I.Line) => void,
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
        function serializeDataOrSynchronousInterface($: g_glossary.T.DataOrSynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'interface':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['interface', `)
                        serializeSynchronousInterfaceReference($, $i)
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
        function serializeTypeReference($: g_glossary.T.TypeReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
                        $d.forEachContextArgument($.arguments, ($) => {
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

        function serializeType($: g_glossary.T.Type<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
                            $d.forEachMember($, ($) => {
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
                            $d.forEachOption($, ($) => {
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
        function serializeContext($: g_glossary.T.Context<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
        function serializeAsynchronousInterfaceReference($: g_glossary.T.AsynchronousInterfaceReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
        // function serializeResourceReference($: g_glossary.T.ResourceReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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

        function serializeSynchronousInterfaceReference($: g_glossary.T.SynchronousInterfaceReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
        function serializeAsynchronousInterface($: g_glossary.T.AsynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['choice', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'options': d({`)
                                $i.indent(($i) => {
                                    $d.forEachAsyncInterfaceOption($.options, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeAsynchronousInterface($.value, $i)
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

                case 'streamconsumer':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['streamconsumer', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'data': `)
                                serializeAsynchronousInterface($.data, $i)
                                $i.snippet(`,`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'end': `)
                                serializeAsynchronousInterface($.end, $i)
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
                                        serializeAsynchronousInterface($, $i)

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
                        serializeAsynchronousInterfaceReference($, $i)
                    })
                    break
                default: pl.au($[0])
            }

        }
        function serializeSynchronousInterface($: g_glossary.T.SynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'group':
                    pl.cc($[1], ($) => {

                        $i.snippet(`['group', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'members': d({`)
                                $i.indent(($i) => {
                                    $d.forEachSyncInterfaceMember($.members, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeSynchronousInterface($.value, $i)
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
                                        serializeSynchronousInterface($, $i)
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
                        serializeSynchronousInterfaceReference($, $i)
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
                        $d.forEachParameter($.parameters, ($) => {
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
                        $d.forEachImport($.imports, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    pl.cc($.value, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'arguments': d({`)
                                            $i.indent(($i) => {
                                                $d.forEachImportArgument($.arguments, ($) => {
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
                        $d.forEachType($.types, ($) => {

                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'parameters': d({`)
                                        $i.indent(($i) => {
                                            $d.forEachTypeParameter($.value.parameters, ($) => {
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
                pl.cc($.asynchronous, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`'asynchronous': {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'interfaces': d({`)
                                $i.indent(($i) => {
                                    $d.forEachAsychronousInterface($.interfaces, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeAsynchronousInterface($.value, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'algorithms': d({`)
                                $i.indent(($i) => {
                                    $d.forEachAsychronousAlgorithm($.algorithms, ($) => {
                                        $i.nestedLine(($i) => {

                                            $i.snippet(`"${$.key}": `)
                                            pl.cc($.value, ($) => {
                                                switch ($[0]) {
                                                    case 'constructor':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`['constructor', {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'interface': `)
                                                                    serializeAsynchronousInterfaceReference($.interface, $i)
                                                                    $i.snippet(`,`)
                                                                })
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'downstreams': d({`)
                                                                    $i.indent(($i) => {
                                                                        $d.forEachAsychronousDownstream($.downstreams, ($) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`"${$.key}": `)
                                                                                serializeAsynchronousInterfaceReference($.value, $i)
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
                                                    case 'function':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`['function', {`)
                                                            $i.indent(($i) => {
                                                                pl.cc($, ($) => {

                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`'in': `)
                                                                        serializeTypeReference($.in, $i)
                                                                        $i.snippet(`,`)
                                                                    })
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`'out': `)
                                                                        serializeTypeReference($.out, $i)
                                                                        $i.snippet(`,`)
                                                                    })
                                                                })
                                                            })
                                                            $i.snippet(`}]`)

                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                        $i.snippet(`},`)
                    })
                })
                pl.cc($.synchronous, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`'synchronous': {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'interfaces': d({`)
                                $i.indent(($i) => {
                                    $d.forEachSychronousInterface($.interfaces, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeSynchronousInterface($.value, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'algorithms': d({`)
                                $i.indent(($i) => {
                                    $d.forEachSychronousAlgorithm($.algorithms, ($) => {
                                        $i.nestedLine(($i) => {

                                            $i.snippet(`"${$.key}": `)
                                            pl.cc($.value, ($) => {
                                                switch ($[0]) {
                                                    case 'procedure':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`['procedure', {`)
                                                            $i.indent(($i) => {
                                                            })
                                                            $i.snippet(`}]`)
                                                        })
                                                        break
                                                    case 'function':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`['function', {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'in': `)
                                                                    serializeDataOrSynchronousInterface($.in, $i)
                                                                    $i.snippet(`,`)
                                                                })
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'out': `)
                                                                    serializeTypeReference($.out, $i)
                                                                    $i.snippet(`,`)
                                                                })
                                                            })
                                                            $i.snippet(`}]`)

                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                        $i.snippet(`},`)
                    })
                })
            })
            $i.snippet(`}`)
        })
    }
}

