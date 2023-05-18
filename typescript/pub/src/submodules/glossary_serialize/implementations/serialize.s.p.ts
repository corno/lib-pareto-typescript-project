import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_glossary from "../../glossary"
import * as g_fp from "lib-fountain-pen"
import * as g_common from "glo-pareto-common"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

import { A, D } from "../api.generated"

export const $$: A.serialize = <GAnnotation>($d: D.serialize<GAnnotation>) => {
    return ($: g_glossary.T.Glossary<GAnnotation>, $i: g_fp.SYNC.I.Block) => {

        function serializeRef(
            $: g_common.T.AnnotatedKey<GAnnotation>,
            // $: pt.OptionalValue<T>,
            $i: g_fp.SYNC.I.Line,
            // $c: ($: T, $i: g_fp.SYNC.I.Line) => void,
        ) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'annotation': `)
                    $d.serializeAnnotation($.annotation, $i)
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'key': "${$.key}",`)
                })
            })
            $i.snippet(`}`)
        }
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
                    pl.ss($, ($) => {
                        $i.snippet(`[true, `)
                        $c($, $i)
                        $i.snippet(`]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeNamespace($: g_glossary.T.Namespace<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
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
                    $i.snippet(`'namespaces': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.namespaces, ($) => {

                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeNamespace($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)
        }
        function serializeDataOrSynchronousInterface($: g_glossary.T.DataOrSynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'interface':
                    pl.ss($, ($) => {
                        $i.snippet(`['interface', `)
                        serializeSynchronousInterfaceReference($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'data':
                    pl.ss($, ($) => {
                        $i.snippet(`['data', `)
                        serializeDataSpecifier($, $i)
                        $i.snippet(`]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeDataSpecifier($: g_glossary.T.DataSpecifier<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'type parameterXX':
                    pl.ss($, ($) => {
                        $i.snippet(`['type parameterXX', `)
                        $i.snippet(`"${$}"`)
                        $i.snippet(`]`)
                    })
                    break
                case 'glossary parameterXX':
                    pl.ss($, ($) => {
                        $i.snippet(`['glossary parameterXX', `)
                        $i.snippet(`"${$}"`)
                        $i.snippet(`]`)
                    })
                    break
                case 'type':
                    pl.ss($, ($) => {
                        $i.snippet(`['type', `)
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'context': `)
                                pl.cc($.context, ($) => {
                                    switch ($[0]) {
                                        case 'import':
                                            pl.ss($, ($) => {
                                                $i.snippet(`['import', {`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'glossary': `)
                                                        serializeGlossaryReference($.glossary, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        case 'local':
                                            pl.ss($, ($) => {
                                                $i.snippet(`['local', null]`)
                                            })
                                            break
                                        default: pl.au($[0])
                                    }
                                })
                                $i.snippet(`,`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'typeXX': `)
                                $i.snippet(`"` + $.typeXX + `"`)
                                //doReference($.type, $i)
                                $i.snippet(`,`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'tailXX': a([`)
                                $i.indent(($i) => {
                                    $.tailXX.__forEach(($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$}",`)
                                        })
                                    })
                                })
                                $i.snippet(`]),`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'type arguments': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($['type arguments'], ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": `)
                                            serializeDataSpecifier($.value, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                        $i.snippet(`}`)
                        $i.snippet(`]`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeParameters($: g_glossary.T.Parameters<GAnnotation>, $i: g_fp.SYNC.I.Line) {

            $i.snippet(`'d({`)
            $i.indent(($i) => {
                $d.dictionaryForEach($, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`"${$.key}": null`)
                        $i.snippet(`,`)
                    })
                })
            })
            $i.snippet(`})`)
        }
        function serializeGlossaryReference($: g_glossary.T.Glossary__Reference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'glossary':`)
                    serializeRef($.glossary, $i)
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'glossary arguments': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($['glossary arguments'], ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeDataSpecifier($.value, $i)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)
        }

        function serializeType($: g_glossary.T.Type<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            $i.snippet(`<g_glossary.T.Type<`)
            $d.serializeAnnotationType(null, $i)
            $i.snippet(`>>`)

            switch ($[0]) {
                case 'computed':
                    pl.ss($, ($) => {
                        $i.snippet(`['computed', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'optional':
                    pl.ss($, ($) => {
                        $i.snippet(`['optional', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'null':
                    pl.ss($, ($) => {
                        $i.snippet(`['null', null]`)
                    })
                    break
                case 'boolean':
                    pl.ss($, ($) => {
                        $i.snippet(`['boolean', null]`)
                    })
                    break
                case 'reference':
                    pl.ss($, ($) => {
                        $i.snippet(`['reference', `)
                        serializeDataSpecifier($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'number':
                    pl.ss($, ($) => {
                        $i.snippet(`['number', null]`)
                    })
                    break
                case 'string':
                    pl.ss($, ($) => {
                        $i.snippet(`['string', null]`)
                    })
                    break
                case 'array':
                    pl.ss($, ($) => {
                        $i.snippet(`['array', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'dictionary':
                    pl.ss($, ($) => {
                        $i.snippet(`['dictionary', `)
                        serializeType($, $i)
                        $i.snippet(`]`)
                    })
                    break
                case 'group':
                    pl.ss($, ($) => {
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
                case 'taggedUnion':
                    pl.ss($, ($) => {
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
        function serializeAsynchronousInterfaceReference($: g_glossary.T.AsynchronousInterfaceReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'context': `)
                    pl.cc($.context, ($) => {
                        switch ($[0]) {
                            case 'import':
                                pl.ss($, ($) => {
                                    $i.snippet(`['import', {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'glossary': `)
                                            serializeGlossaryReference($.glossary, $i)
                                            $i.snippet(`,`)
                                        })
                                    })
                                    $i.snippet(`}]`)
                                })
                                break
                            case 'local':
                                pl.ss($, ($) => {
                                    $i.snippet(`['local', null]`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'interfaceXX': "${$.interfaceXX}",`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'type arguments': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($['type arguments'], ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeDataSpecifier($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)
        }
        // function serializeResourceReference($: g_glossary.T.ResourceReference<Annotation>, $i: g_fp.SYNC.I.Line) {
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
                    pl.cc($.context, ($) => {
                        switch ($[0]) {
                            case 'import':
                                pl.ss($, ($) => {
                                    $i.snippet(`['import', {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'glossary': `)
                                            serializeGlossaryReference($.glossary, $i)
                                            $i.snippet(`,`)
                                        })
                                        // $i.nestedLine(($i) => {
                                        //     $i.snippet(`'interface FIXME':`)
                                        //     serializeRef($['interface FIXME'], $i)
                                        //     $i.snippet(`,`)
                                        // }) 
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'interfaceXX':`)
                                            $i.snippet(`"${$.interfaceXX}"`)
                                            $i.snippet(`,`)
                                        })
                                    })
                                    $i.snippet(`}]`)
                                })
                                break
                            case 'local':
                                pl.ss($, ($) => {
                                    $i.snippet(`['local', {`)
                                    $i.indent(($i) => {
                                        // $i.nestedLine(($i) => {
                                        //     $i.snippet(`'interface':`)
                                        //     serializeRef($['interface'], $i)
                                        //     $i.snippet(`,`)
                                        // })
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'interfaceXX':`)
                                            $i.snippet(`"${$.interfaceXX}"`)
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
                $i.nestedLine(($i) => {
                    $i.snippet(`'type arguments': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($['type arguments'], ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeDataSpecifier($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)

        }
        function serializeAsynchronousInterface($: g_glossary.T.AsynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'choice':
                    pl.ss($, ($) => {

                        $i.snippet(`['choice', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'options': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.options, ($) => {
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
                    pl.ss($, ($) => {

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
                    pl.ss($, ($) => {
                        $i.snippet(`['method', {`)
                        $i.indent(($i) => {
                            pl.cc($.data, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'data': `)
                                    doOptional($, $i, ($, $i) => {
                                        serializeDataSpecifier($, $i)
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
                    pl.ss($, ($) => {
                        serializeAsynchronousInterfaceReference($, $i)
                    })
                    break
                default: pl.au($[0])
            }

        }
        function serializeSynchronousInterface($: g_glossary.T.Synchronous__Interface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'group':
                    pl.ss($, ($) => {

                        $i.snippet(`['group', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'members': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.members, ($) => {
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
                    pl.ss($, ($) => {
                        $i.snippet(`['method', {`)
                        $i.indent(($i) => {
                            pl.cc($.data, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'data': `)
                                    doOptional($, $i, ($, $i) => {
                                        serializeDataSpecifier($, $i)
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
                    pl.ss($, ($) => {
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
            $i.snippet(`export const $: g_glossary.T.Glossary<`)
            $d.serializeAnnotationType(null, $i)
            $i.snippet(`> = `)

            $i.snippet(`{`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'imports': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.imports, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": null,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'glossary parameters': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($['glossary parameters'], ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": null,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })



                $i.nestedLine(($i) => {
                    $i.snippet(`'root': `)
                    serializeNamespace($.root, $i)
                    $i.snippet(`,`)
                })



                pl.cc($.asynchronous, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`'asynchronous': {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'interfaces': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.interfaces, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": {`)
                                            $i.indent(($i) => {
                                                pl.cc($.value, ($) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'parameters': `)
                                                        serializeParameters($.parameters, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                    pl.cc($.interface, ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'interface': `)
                                                            serializeAsynchronousInterface($, $i)
                                                            $i.snippet(`,`)
                                                        })
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
                                $i.snippet(`'algorithms': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.algorithms, ($) => {
                                        $i.nestedLine(($i) => {

                                            $i.snippet(`"${$.key}": {`)
                                            $i.indent(($i) => {
                                                pl.cc($.value, ($) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'parameters': `)
                                                        serializeParameters($.parameters, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                    pl.cc($.type, ($) => {

                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'type': `)
                                                            switch ($[0]) {
                                                                case 'constructor':
                                                                    pl.ss($, ($) => {
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
                                                                                    $d.dictionaryForEach($.downstreams, ($) => {
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
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`['function', {`)
                                                                        $i.indent(($i) => {
                                                                            pl.cc($, ($) => {

                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`'in': `)
                                                                                    serializeDataSpecifier($.in, $i)
                                                                                    $i.snippet(`,`)
                                                                                })
                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`'out': `)
                                                                                    serializeDataSpecifier($.out, $i)
                                                                                    $i.snippet(`,`)
                                                                                })
                                                                            })
                                                                        })
                                                                        $i.snippet(`}]`)

                                                                    })
                                                                    break
                                                                case 'resource':
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`['resource', {`)
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`'request': `)
                                                                                serializeDataSpecifier($.request, $i)
                                                                                $i.snippet(`,`)
                                                                            })
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`'consumer': `)
                                                                                serializeAsynchronousInterfaceReference($.consumer, $i)
                                                                                $i.snippet(`,`)
                                                                            })
                                                                        })
                                                                        $i.snippet(`}]`)
                                                                    })
                                                                    break
                                                                default: pl.au($[0])
                                                            }
                                                            $i.snippet(`,`)
                                                        })
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
                                    $d.dictionaryForEach($.interfaces, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`"${$.key}": {`)
                                            $i.indent(($i) => {
                                                pl.cc($.value, ($) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'parameters': `)
                                                        serializeParameters($.parameters, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                    pl.cc($.interface, ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'interface': `)
                                                            serializeSynchronousInterface($, $i)
                                                            $i.snippet(`,`)
                                                        })
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
                                $i.snippet(`'algorithms': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.algorithms, ($) => {
                                        $i.nestedLine(($i) => {


                                            $i.snippet(`"${$.key}": {`)
                                            $i.indent(($i) => {
                                                pl.cc($.value, ($) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'parameters': `)
                                                        serializeParameters($.parameters, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                    pl.cc($.type, ($) => {

                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'type': `)
                                                            switch ($[0]) {
                                                                case 'procedure':
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`['procedure', {`)
                                                                        $i.indent(($i) => {
                                                                        })
                                                                        $i.snippet(`}]`)
                                                                    })
                                                                    break
                                                                case 'function':
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`['function', {`)
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`'in': `)
                                                                                serializeDataOrSynchronousInterface($.in, $i)
                                                                                $i.snippet(`,`)
                                                                            })
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`'out': `)
                                                                                serializeDataSpecifier($.out, $i)
                                                                                $i.snippet(`,`)
                                                                            })
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`'callbacks': d({`)
                                                                                $i.indent(($i) => {
                                                                                    $d.dictionaryForEach($.callbacks, ($) => {
                                                                                        $i.nestedLine(($i) => {
                                                                                            $i.snippet(`"${$.key}": {`)
                                                                                            $i.indent(($i) => {
                                                                                                $i.nestedLine(($i) => {
                                                                                                    $i.snippet(`'in': `)
                                                                                                    serializeDataSpecifier($.value.in, $i)
                                                                                                    $i.snippet(`,`)
                                                                                                })
                                                                                                $i.nestedLine(($i) => {
                                                                                                    $i.snippet(`'out': `)
                                                                                                    serializeDataSpecifier($.value.out, $i)
                                                                                                    $i.snippet(`,`)
                                                                                                })
                                                                                                $i.nestedLine(($i) => {
                                                                                                    $i.snippet(`'callbacks': d({`)
                                                                                                    $i.indent(($i) => {
                                                                                                        $d.dictionaryForEach($.value.lookups, ($) => {
                                                                                                            $i.nestedLine(($i) => {
                                                                                                                $i.snippet(`"${$.key}": `)
                                                                                                                serializeDataSpecifier($.value, $i)
                                                                                                                $i.snippet(`,`)

                                                                                                            })

                                                                                                        })
                                                                                                    })
                                                                                                    $i.snippet(`)},`)
                                                                                                })
                                                                                            })
                                                                                            $i.snippet(`},`)

                                                                                        })

                                                                                    })
                                                                                })
                                                                                $i.snippet(`)},`)
                                                                            })
                                                                        })
                                                                        $i.snippet(`}]`)

                                                                    })
                                                                    break
                                                                default: pl.au($[0])
                                                            }
                                                        })
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
                        $i.snippet(`},`)
                    })
                })
            })
            $i.snippet(`}`)
        })
    }
}

