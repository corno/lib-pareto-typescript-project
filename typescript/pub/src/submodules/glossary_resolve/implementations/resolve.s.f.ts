import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from "../../glossary"
import * as g_out from "../../glossary_possiblyresolved"

import { A } from "../api.generated"

function tempoptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => pt.OptionalValue<RT>,
    b: () => pt.OptionalValue<RT>,
): pt.OptionalValue<RT> {
    return tempoptional($, a, b)
}
export const $$: A.resolve = ($d, $se) => {
    
    function map_Arguments<Annotation>(
        $: g_in.T.Arguments<Annotation>,
    ): g_out.T.Arguments<Annotation> {
        return $.__mapWithKey(($, key) => map_DataSpecifier<Annotation>(
            $,
        ))
    }
    
    function map_AsynchronousInterface<Annotation>(
        $: g_in.T.AsynchronousInterface<Annotation>,
    ): g_out.T.AsynchronousInterface<Annotation> {
        return pl.cc($, ($): g_out.T.AsynchronousInterface<Annotation> => {
            switch ($[0]) {
                case 'choice': return pl.ss($, ($) => ['choice', pl.cc($, ($) => {
                    const $p_options: g_out.T.AsynchronousInterface.choice.options<Annotation> = pl.cc($['options'], ($) => $.__mapWithKey(($, key) => map_AsynchronousInterface<Annotation>(
                        $,
                    )))
                    const $v_options: pt.OptionalValue<g_out.T.AsynchronousInterface.choice.options<Annotation>> = [true, $p_options]
                    return {
                        'options': $p_options,
                    }
                })])
                case 'method': return pl.ss($, ($) => ['method', pl.cc($, ($) => {
                    const $p_data: g_out.T.AsynchronousInterface.method.data<Annotation> = pl.cc($['data'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.AsynchronousInterface.method.data<Annotation> => [true, map_DataSpecifier<Annotation>(
                            $,
                        )],
                        () => [false],
                    ))
                    const $v_data: pt.OptionalValue<g_out.T.AsynchronousInterface.method.data<Annotation>> = [true, $p_data]
                    const $p__linterface: g_out.T.AsynchronousInterface.method._linterface<Annotation> = pl.cc($['interface'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.AsynchronousInterface.method._linterface<Annotation> => [true, map_AsynchronousInterface<Annotation>(
                            $,
                        )],
                        () => [false],
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.AsynchronousInterface.method._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'data': $p_data,
                        'interface': $p__linterface,
                    }
                })])
                case 'reference': return pl.ss($, ($) => ['reference', map_AsynchronousInterfaceReference<Annotation>(
                    $,
                )])
                case 'streamconsumer': return pl.ss($, ($) => ['streamconsumer', pl.cc($, ($) => {
                    const $p_data: g_out.T.AsynchronousInterface.streamconsumer.data<Annotation> = pl.cc($['data'], ($) => map_AsynchronousInterface<Annotation>(
                        $,
                    ))
                    const $v_data: pt.OptionalValue<g_out.T.AsynchronousInterface.streamconsumer.data<Annotation>> = [true, $p_data]
                    const $p_end: g_out.T.AsynchronousInterface.streamconsumer.end<Annotation> = pl.cc($['end'], ($) => map_AsynchronousInterface<Annotation>(
                        $,
                    ))
                    const $v_end: pt.OptionalValue<g_out.T.AsynchronousInterface.streamconsumer.end<Annotation>> = [true, $p_end]
                    return {
                        'data': $p_data,
                        'end': $p_end,
                    }
                })])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_AsynchronousInterfaceReference<Annotation>(
        $: g_in.T.AsynchronousInterfaceReference<Annotation>,
    ): g_out.T.AsynchronousInterfaceReference<Annotation> {
        return pl.cc($, ($) => {
            const $p_context: g_out.T.AsynchronousInterfaceReference.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.AsynchronousInterfaceReference.context<Annotation> => {
                switch ($[0]) {
                    case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                        const $p_glossaryXX: g_out.T.AsynchronousInterfaceReference.context._limport.glossaryXX<Annotation> = pl.cc($['glossaryXX'], ($) => $)
                        const $v_glossaryXX: pt.OptionalValue<g_out.T.AsynchronousInterfaceReference.context._limport.glossaryXX<Annotation>> = [true, $p_glossaryXX]
                        return {
                            'glossaryXX': $p_glossaryXX,
                        }
                    })])
                    case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                        return null
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_context: pt.OptionalValue<g_out.T.AsynchronousInterfaceReference.context<Annotation>> = [true, $p_context]
            const $p_interfaceXX: g_out.T.AsynchronousInterfaceReference.interfaceXX<Annotation> = pl.cc($['interfaceXX'], ($) => $)
            const $v_interfaceXX: pt.OptionalValue<g_out.T.AsynchronousInterfaceReference.interfaceXX<Annotation>> = [true, $p_interfaceXX]
            const $p_arguments: g_out.T.AsynchronousInterfaceReference.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Arguments<Annotation>(
                $,
            ))
            const $v_arguments: pt.OptionalValue<g_out.T.AsynchronousInterfaceReference.arguments<Annotation>> = [true, $p_arguments]
            return {
                'arguments': $p_arguments,
                'context': $p_context,
                'interfaceXX': $p_interfaceXX,
            }
        })
    }
    
    function map_DataOrSynchronousInterface<Annotation>(
        $: g_in.T.DataOrSynchronousInterface<Annotation>,
    ): g_out.T.DataOrSynchronousInterface<Annotation> {
        return pl.cc($, ($): g_out.T.DataOrSynchronousInterface<Annotation> => {
            switch ($[0]) {
                case 'data': return pl.ss($, ($) => ['data', map_DataSpecifier<Annotation>(
                    $,
                )])
                case 'interface': return pl.ss($, ($) => ['interface', map_SynchronousInterfaceReference<Annotation>(
                    $,
                )])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_DataSpecifier<Annotation>(
        $: g_in.T.DataSpecifier<Annotation>,
    ): g_out.T.DataSpecifier<Annotation> {
        return pl.cc($, ($): g_out.T.DataSpecifier<Annotation> => {
            switch ($[0]) {
                case 'glossary parameterXX': return pl.ss($, ($) => ['glossary parameterXX', $])
                case 'type': return pl.ss($, ($) => ['type', pl.cc($, ($) => {
                    const $p_context: g_out.T.DataSpecifier._ltype.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.DataSpecifier._ltype.context<Annotation> => {
                        switch ($[0]) {
                            case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                                const $p_glossaryXX: g_out.T.DataSpecifier._ltype.context._limport.glossaryXX<Annotation> = pl.cc($['glossaryXX'], ($) => $)
                                const $v_glossaryXX: pt.OptionalValue<g_out.T.DataSpecifier._ltype.context._limport.glossaryXX<Annotation>> = [true, $p_glossaryXX]
                                return {
                                    'glossaryXX': $p_glossaryXX,
                                }
                            })])
                            case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                                return null
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_context: pt.OptionalValue<g_out.T.DataSpecifier._ltype.context<Annotation>> = [true, $p_context]
                    const $p_typeXX: g_out.T.DataSpecifier._ltype.typeXX<Annotation> = pl.cc($['typeXX'], ($) => $)
                    const $v_typeXX: pt.OptionalValue<g_out.T.DataSpecifier._ltype.typeXX<Annotation>> = [true, $p_typeXX]
                    const $p_tailXX: g_out.T.DataSpecifier._ltype.tailXX<Annotation> = pl.cc($['tailXX'], ($) => $.map(($) => $))
                    const $v_tailXX: pt.OptionalValue<g_out.T.DataSpecifier._ltype.tailXX<Annotation>> = [true, $p_tailXX]
                    const $p_arguments: g_out.T.DataSpecifier._ltype.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Arguments<Annotation>(
                        $,
                    ))
                    const $v_arguments: pt.OptionalValue<g_out.T.DataSpecifier._ltype.arguments<Annotation>> = [true, $p_arguments]
                    return {
                        'arguments': $p_arguments,
                        'context': $p_context,
                        'tailXX': $p_tailXX,
                        'typeXX': $p_typeXX,
                    }
                })])
                case 'type parameterXX': return pl.ss($, ($) => ['type parameterXX', $])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Glossary<Annotation>(
        $: g_in.T.Glossary<Annotation>,
        $v_dependencies: pt.OptionalValue<g_out.T.Glossary__Library<Annotation>>,
    ): g_out.T.Glossary<Annotation> {
        return pl.cc($, ($) => {
            const $p_imports: g_out.T.Glossary.imports<Annotation> = pl.cc($['imports'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                const $p_arguments: g_out.T.Glossary.imports.D.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Arguments<Annotation>(
                    $,
                ))
                const $v_arguments: pt.OptionalValue<g_out.T.Glossary.imports.D.arguments<Annotation>> = [true, $p_arguments]
                return {
                    'arguments': $p_arguments,
                }
            })))
            const $v_imports: pt.OptionalValue<g_out.T.Glossary.imports<Annotation>> = [true, $p_imports]
            const $p_core: g_out.T.Glossary.core<Annotation> = pl.cc($['core'], ($) => map_Glossary__Core<Annotation>(
                $,
            ))
            const $v_core: pt.OptionalValue<g_out.T.Glossary.core<Annotation>> = [true, $p_core]
            return {
                'core': $p_core,
                'imports': $p_imports,
            }
        })
    }
    
    function map_Glossary__Core<Annotation>(
        $: g_in.T.Glossary__Core<Annotation>,
    ): g_out.T.Glossary__Core<Annotation> {
        return pl.cc($, ($) => {
            const $p_parameters: g_out.T.Glossary__Core.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Glossary__Parameters<Annotation>(
                $,
            ))
            const $v_parameters: pt.OptionalValue<g_out.T.Glossary__Core.parameters<Annotation>> = [true, $p_parameters]
            const $p_root: g_out.T.Glossary__Core.root<Annotation> = pl.cc($['root'], ($) => map_Namespace<Annotation>(
                $,
            ))
            const $v_root: pt.OptionalValue<g_out.T.Glossary__Core.root<Annotation>> = [true, $p_root]
            const $p_synchronous: g_out.T.Glossary__Core.synchronous<Annotation> = pl.cc($['synchronous'], ($) => pl.cc($, ($) => {
                const $p_interfaces: g_out.T.Glossary__Core.synchronous.interfaces<Annotation> = pl.cc($['interfaces'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary__Core.synchronous.interfaces.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_TypeParameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.interfaces.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__linterface: g_out.T.Glossary__Core.synchronous.interfaces.D._linterface<Annotation> = pl.cc($['interface'], ($) => map_SynchronousInterface<Annotation>(
                        $,
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.interfaces.D._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'interface': $p__linterface,
                        'parameters': $p_parameters,
                    }
                })))
                const $v_interfaces: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.interfaces<Annotation>> = [true, $p_interfaces]
                const $p_algorithms: g_out.T.Glossary__Core.synchronous.algorithms<Annotation> = pl.cc($['algorithms'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary__Core.synchronous.algorithms.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_TypeParameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__ltype: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Glossary__Core.synchronous.algorithms.D._ltype<Annotation> => {
                        switch ($[0]) {
                            case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                                const $p__lin: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction._lin<Annotation> = pl.cc($['in'], ($) => map_DataOrSynchronousInterface<Annotation>(
                                    $,
                                ))
                                const $v__lin: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction._lin<Annotation>> = [true, $p__lin]
                                const $p_out: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.out<Annotation> = pl.cc($['out'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                ))
                                const $v_out: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.out<Annotation>> = [true, $p_out]
                                const $p_callbacks: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks<Annotation> = pl.cc($['callbacks'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                                    const $p__lin: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks.D._lin<Annotation> = pl.cc($['in'], ($) => map_DataSpecifier<Annotation>(
                                        $,
                                    ))
                                    const $v__lin: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks.D._lin<Annotation>> = [true, $p__lin]
                                    const $p_lookups: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks.D.lookups<Annotation> = pl.cc($['lookups'], ($) => $.__mapWithKey(($, key) => map_DataSpecifier<Annotation>(
                                        $,
                                    )))
                                    const $v_lookups: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks.D.lookups<Annotation>> = [true, $p_lookups]
                                    const $p_out: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks.D.out<Annotation> = pl.cc($['out'], ($) => map_DataSpecifier<Annotation>(
                                        $,
                                    ))
                                    const $v_out: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks.D.out<Annotation>> = [true, $p_out]
                                    return {
                                        'in': $p__lin,
                                        'lookups': $p_lookups,
                                        'out': $p_out,
                                    }
                                })))
                                const $v_callbacks: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype._lfunction.callbacks<Annotation>> = [true, $p_callbacks]
                                return {
                                    'callbacks': $p_callbacks,
                                    'in': $p__lin,
                                    'out': $p_out,
                                }
                            })])
                            case 'procedure': return pl.ss($, ($) => ['procedure', pl.cc($, ($) => {
                                const $p__lin: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype.procedure._lin<Annotation> = pl.cc($['in'], ($) => map_DataOrSynchronousInterface<Annotation>(
                                    $,
                                ))
                                const $v__lin: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype.procedure._lin<Annotation>> = [true, $p__lin]
                                const $p_out: g_out.T.Glossary__Core.synchronous.algorithms.D._ltype.procedure.out<Annotation> = pl.cc($['out'], ($) => map_SynchronousInterfaceReference<Annotation>(
                                    $,
                                ))
                                const $v_out: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype.procedure.out<Annotation>> = [true, $p_out]
                                return {
                                    'in': $p__lin,
                                    'out': $p_out,
                                }
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v__ltype: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'parameters': $p_parameters,
                        'type': $p__ltype,
                    }
                })))
                const $v_algorithms: pt.OptionalValue<g_out.T.Glossary__Core.synchronous.algorithms<Annotation>> = [true, $p_algorithms]
                return {
                    'algorithms': $p_algorithms,
                    'interfaces': $p_interfaces,
                }
            }))
            const $v_synchronous: pt.OptionalValue<g_out.T.Glossary__Core.synchronous<Annotation>> = [true, $p_synchronous]
            const $p_asynchronous: g_out.T.Glossary__Core.asynchronous<Annotation> = pl.cc($['asynchronous'], ($) => pl.cc($, ($) => {
                const $p_interfaces: g_out.T.Glossary__Core.asynchronous.interfaces<Annotation> = pl.cc($['interfaces'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary__Core.asynchronous.interfaces.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_TypeParameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.interfaces.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__linterface: g_out.T.Glossary__Core.asynchronous.interfaces.D._linterface<Annotation> = pl.cc($['interface'], ($) => map_AsynchronousInterface<Annotation>(
                        $,
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.interfaces.D._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'interface': $p__linterface,
                        'parameters': $p_parameters,
                    }
                })))
                const $v_interfaces: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.interfaces<Annotation>> = [true, $p_interfaces]
                const $p_algorithms: g_out.T.Glossary__Core.asynchronous.algorithms<Annotation> = pl.cc($['algorithms'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary__Core.asynchronous.algorithms.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_TypeParameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__ltype: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype<Annotation> => {
                        switch ($[0]) {
                            case 'constructor': return pl.ss($, ($) => ['constructor', pl.cc($, ($) => {
                                const $p__linterface: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lconstructor._linterface<Annotation> = pl.cc($['interface'], ($) => map_AsynchronousInterfaceReference<Annotation>(
                                    $,
                                ))
                                const $v__linterface: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lconstructor._linterface<Annotation>> = [true, $p__linterface]
                                const $p_downstreams: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lconstructor.downstreams<Annotation> = pl.cc($['downstreams'], ($) => $.__mapWithKey(($, key) => map_AsynchronousInterfaceReference<Annotation>(
                                    $,
                                )))
                                const $v_downstreams: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lconstructor.downstreams<Annotation>> = [true, $p_downstreams]
                                return {
                                    'downstreams': $p_downstreams,
                                    'interface': $p__linterface,
                                }
                            })])
                            case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                                const $p_out: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lfunction.out<Annotation> = pl.cc($['out'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                ))
                                const $v_out: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lfunction.out<Annotation>> = [true, $p_out]
                                const $p__lin: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lfunction._lin<Annotation> = pl.cc($['in'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                ))
                                const $v__lin: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype._lfunction._lin<Annotation>> = [true, $p__lin]
                                return {
                                    'in': $p__lin,
                                    'out': $p_out,
                                }
                            })])
                            case 'resource': return pl.ss($, ($) => ['resource', pl.cc($, ($) => {
                                const $p_consumer: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype.resource.consumer<Annotation> = pl.cc($['consumer'], ($) => map_AsynchronousInterfaceReference<Annotation>(
                                    $,
                                ))
                                const $v_consumer: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype.resource.consumer<Annotation>> = [true, $p_consumer]
                                const $p_request: g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype.resource.request<Annotation> = pl.cc($['request'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                ))
                                const $v_request: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype.resource.request<Annotation>> = [true, $p_request]
                                return {
                                    'consumer': $p_consumer,
                                    'request': $p_request,
                                }
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v__ltype: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'parameters': $p_parameters,
                        'type': $p__ltype,
                    }
                })))
                const $v_algorithms: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous.algorithms<Annotation>> = [true, $p_algorithms]
                return {
                    'algorithms': $p_algorithms,
                    'interfaces': $p_interfaces,
                }
            }))
            const $v_asynchronous: pt.OptionalValue<g_out.T.Glossary__Core.asynchronous<Annotation>> = [true, $p_asynchronous]
            return {
                'asynchronous': $p_asynchronous,
                'parameters': $p_parameters,
                'root': $p_root,
                'synchronous': $p_synchronous,
            }
        })
    }
    
    function map_Glossary__Library<Annotation>(
        $: g_in.T.Glossary__Library<Annotation>,
    ): g_out.T.Glossary__Library<Annotation> {
        return $.__mapWithKey(($, key) => map_Glossary__Core<Annotation>(
            $,
        ))
    }
    
    function map_Glossary__Parameters<Annotation>(
        $: g_in.T.Glossary__Parameters<Annotation>,
    ): g_out.T.Glossary__Parameters<Annotation> {
        return $.__mapWithKey(($, key) => pl.cc($, ($) => {
            return null
        }))
    }
    
    function map_Glossary__Wrapper<Annotation>(
        $: g_in.T.Glossary__Wrapper<Annotation>,
    ): g_out.T.Glossary__Wrapper<Annotation> {
        return pl.cc($, ($) => {
            const $p_library: g_out.T.Glossary__Wrapper.library<Annotation> = pl.cc($['library'], ($) => map_Glossary__Library<Annotation>(
                $,
            ))
            const $v_library: pt.OptionalValue<g_out.T.Glossary__Wrapper.library<Annotation>> = [true, $p_library]
            const $p_glossary: g_out.T.Glossary__Wrapper.glossary<Annotation> = pl.cc($['glossary'], ($) => map_Glossary<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_library,
                    ($) => [true, $],
                    () => [false],
                ),//$v_dependencies
            ))
            const $v_glossary: pt.OptionalValue<g_out.T.Glossary__Wrapper.glossary<Annotation>> = [true, $p_glossary]
            return {
                'glossary': $p_glossary,
                'library': $p_library,
            }
        })
    }
    
    function map_Namespace<Annotation>(
        $: g_in.T.Namespace<Annotation>,
    ): g_out.T.Namespace<Annotation> {
        return pl.cc($, ($) => {
            const $p_namespaces: g_out.T.Namespace.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $.__mapWithKey(($, key) => map_Namespace<Annotation>(
                $,
            )))
            const $v_namespaces: pt.OptionalValue<g_out.T.Namespace.namespaces<Annotation>> = [true, $p_namespaces]
            const $p_types: g_out.T.Namespace.types<Annotation> = pl.cc($['types'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                const $p_parameters: g_out.T.Namespace.types.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_TypeParameters<Annotation>(
                    $,
                ))
                const $v_parameters: pt.OptionalValue<g_out.T.Namespace.types.D.parameters<Annotation>> = [true, $p_parameters]
                const $p__ltype: g_out.T.Namespace.types.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                    $,
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Namespace.types.D._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'parameters': $p_parameters,
                    'type': $p__ltype,
                }
            })))
            const $v_types: pt.OptionalValue<g_out.T.Namespace.types<Annotation>> = [true, $p_types]
            return {
                'namespaces': $p_namespaces,
                'types': $p_types,
            }
        })
    }
    
    function map_SynchronousInterface<Annotation>(
        $: g_in.T.SynchronousInterface<Annotation>,
    ): g_out.T.SynchronousInterface<Annotation> {
        return pl.cc($, ($): g_out.T.SynchronousInterface<Annotation> => {
            switch ($[0]) {
                case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                    const $p_members: g_out.T.SynchronousInterface.group.members<Annotation> = pl.cc($['members'], ($) => $.__mapWithKey(($, key) => map_SynchronousInterface<Annotation>(
                        $,
                    )))
                    const $v_members: pt.OptionalValue<g_out.T.SynchronousInterface.group.members<Annotation>> = [true, $p_members]
                    return {
                        'members': $p_members,
                    }
                })])
                case 'method': return pl.ss($, ($) => ['method', pl.cc($, ($) => {
                    const $p_data: g_out.T.SynchronousInterface.method.data<Annotation> = pl.cc($['data'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.SynchronousInterface.method.data<Annotation> => [true, map_DataSpecifier<Annotation>(
                            $,
                        )],
                        () => [false],
                    ))
                    const $v_data: pt.OptionalValue<g_out.T.SynchronousInterface.method.data<Annotation>> = [true, $p_data]
                    const $p__linterface: g_out.T.SynchronousInterface.method._linterface<Annotation> = pl.cc($['interface'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.SynchronousInterface.method._linterface<Annotation> => [true, map_SynchronousInterface<Annotation>(
                            $,
                        )],
                        () => [false],
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.SynchronousInterface.method._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'data': $p_data,
                        'interface': $p__linterface,
                    }
                })])
                case 'reference': return pl.ss($, ($) => ['reference', map_SynchronousInterfaceReference<Annotation>(
                    $,
                )])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_SynchronousInterfaceReference<Annotation>(
        $: g_in.T.SynchronousInterfaceReference<Annotation>,
    ): g_out.T.SynchronousInterfaceReference<Annotation> {
        return pl.cc($, ($) => {
            const $p_context: g_out.T.SynchronousInterfaceReference.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.SynchronousInterfaceReference.context<Annotation> => {
                switch ($[0]) {
                    case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                        const $p_glossaryXX: g_out.T.SynchronousInterfaceReference.context._limport.glossaryXX<Annotation> = pl.cc($['glossaryXX'], ($) => $)
                        const $v_glossaryXX: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.context._limport.glossaryXX<Annotation>> = [true, $p_glossaryXX]
                        return {
                            'glossaryXX': $p_glossaryXX,
                        }
                    })])
                    case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                        return null
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_context: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.context<Annotation>> = [true, $p_context]
            const $p_interfaceXX: g_out.T.SynchronousInterfaceReference.interfaceXX<Annotation> = pl.cc($['interfaceXX'], ($) => $)
            const $v_interfaceXX: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.interfaceXX<Annotation>> = [true, $p_interfaceXX]
            const $p_arguments: g_out.T.SynchronousInterfaceReference.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Arguments<Annotation>(
                $,
            ))
            const $v_arguments: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.arguments<Annotation>> = [true, $p_arguments]
            return {
                'arguments': $p_arguments,
                'context': $p_context,
                'interfaceXX': $p_interfaceXX,
            }
        })
    }
    
    function map_Type<Annotation>(
        $: g_in.T.Type<Annotation>,
    ): g_out.T.Type<Annotation> {
        return pl.cc($, ($): g_out.T.Type<Annotation> => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['array', map_Type<Annotation>(
                    $,
                )])
                case 'boolean': return pl.ss($, ($) => ['boolean', pl.cc($, ($) => {
                    return null
                })])
                case 'computed': return pl.ss($, ($) => ['computed', map_Type<Annotation>(
                    $,
                )])
                case 'dictionary': return pl.ss($, ($) => ['dictionary', map_Type<Annotation>(
                    $,
                )])
                case 'group': return pl.ss($, ($) => ['group', $.__mapWithKey(($, key) => pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Type.group.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                        $,
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Type.group.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'type': $p__ltype,
                    }
                }))])
                case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                    return null
                })])
                case 'number': return pl.ss($, ($) => ['number', pl.cc($, ($) => {
                    return null
                })])
                case 'optional': return pl.ss($, ($) => ['optional', map_Type<Annotation>(
                    $,
                )])
                case 'reference': return pl.ss($, ($) => ['reference', map_DataSpecifier<Annotation>(
                    $,
                )])
                case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                    return null
                })])
                case 'taggedUnion': return pl.ss($, ($) => ['taggedUnion', $.__mapWithKey(($, key) => map_Type<Annotation>(
                    $,
                ))])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_TypeParameters<Annotation>(
        $: g_in.T.TypeParameters<Annotation>,
    ): g_out.T.TypeParameters<Annotation> {
        return $.__mapWithKey(($, key) => pl.cc($, ($) => {
            return null
        }))
    }
    return map_Glossary__Wrapper
}