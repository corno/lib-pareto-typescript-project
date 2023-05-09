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
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.Arguments<Annotation> {
        return $d.resolveDictionary<g_in.T.Arguments.D<Annotation>, g_out.T.Arguments.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_DataSpecifier<Annotation>(
            $,
            tempoptional/*3*/(
                $v_glossary__parameters,
                ($) => [true, $],
                () => [false],
            ),//$v_glossary__parameters
            tempoptional/*3*/(
                $v_imports,
                ($) => [true, $],
                () => [false],
            ),//$v_imports
            tempoptional/*3*/(
                $v_type__parameters,
                ($) => [true, $],
                () => [false],
            ),//$v_type__parameters
        ))})
    }
    
    function map_AsynchronousInterface<Annotation>(
        $: g_in.T.AsynchronousInterface<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.AsynchronousInterface<Annotation> {
        return pl.cc($, ($): g_out.T.AsynchronousInterface<Annotation> => {
            switch ($[0]) {
                case 'choice': return pl.ss($, ($) => ['choice', pl.cc($, ($) => {
                    const $p_options: g_out.T.AsynchronousInterface.choice.options<Annotation> = pl.cc($['options'], ($) => $d.resolveDictionary<g_in.T.AsynchronousInterface.choice.options.D<Annotation>, g_out.T.AsynchronousInterface.choice.options.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_AsynchronousInterface<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))}))
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
                            tempoptional/*3*/(
                                $v_glossary__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_glossary__parameters
                            tempoptional/*3*/(
                                $v_imports,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_imports
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
                        )],
                        () => [false],
                    ))
                    const $v_data: pt.OptionalValue<g_out.T.AsynchronousInterface.method.data<Annotation>> = [true, $p_data]
                    const $p__linterface: g_out.T.AsynchronousInterface.method._linterface<Annotation> = pl.cc($['interface'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.AsynchronousInterface.method._linterface<Annotation> => [true, map_AsynchronousInterface<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_glossary__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_glossary__parameters
                            tempoptional/*3*/(
                                $v_imports,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_imports
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
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
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'streamconsumer': return pl.ss($, ($) => ['streamconsumer', pl.cc($, ($) => {
                    const $p_data: g_out.T.AsynchronousInterface.streamconsumer.data<Annotation> = pl.cc($['data'], ($) => map_AsynchronousInterface<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))
                    const $v_data: pt.OptionalValue<g_out.T.AsynchronousInterface.streamconsumer.data<Annotation>> = [true, $p_data]
                    const $p_end: g_out.T.AsynchronousInterface.streamconsumer.end<Annotation> = pl.cc($['end'], ($) => map_AsynchronousInterface<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
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
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.AsynchronousInterfaceReference<Annotation> {
        return pl.cc($, ($) => {
            const $p_context: g_out.T.AsynchronousInterfaceReference.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.AsynchronousInterfaceReference.context<Annotation> => {
                switch ($[0]) {
                    case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                        const $p_glossary: g_out.T.AsynchronousInterfaceReference.context._limport.glossary<Annotation> = pl.cc($['glossary'], ($) => map_Glossary__Reference<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_glossary__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_glossary__parameters
                            tempoptional/*3*/(
                                $v_imports,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_imports
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
                        ))
                        const $v_glossary: pt.OptionalValue<g_out.T.AsynchronousInterfaceReference.context._limport.glossary<Annotation>> = [true, $p_glossary]
                        return {
                            'glossary': $p_glossary,
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
            const $p_type__arguments: g_out.T.AsynchronousInterfaceReference.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Arguments<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_glossary__parameters
                tempoptional/*3*/(
                    $v_imports,
                    ($) => [true, $],
                    () => [false],
                ),//$v_imports
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_parameters
                tempoptional/*3*/(
                    $v_type__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_type__parameters
            ))
            const $v_type__arguments: pt.OptionalValue<g_out.T.AsynchronousInterfaceReference.type__arguments<Annotation>> = [true, $p_type__arguments]
            return {
                'context': $p_context,
                'interfaceXX': $p_interfaceXX,
                'type arguments': $p_type__arguments,
            }
        })
    }
    
    function map_DataOrSynchronousInterface<Annotation>(
        $: g_in.T.DataOrSynchronousInterface<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.DataOrSynchronousInterface<Annotation> {
        return pl.cc($, ($): g_out.T.DataOrSynchronousInterface<Annotation> => {
            switch ($[0]) {
                case 'data': return pl.ss($, ($) => ['data', map_DataSpecifier<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'interface': return pl.ss($, ($) => ['interface', map_SynchronousInterfaceReference<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_DataSpecifier<Annotation>(
        $: g_in.T.DataSpecifier<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.DataSpecifier<Annotation> {
        return pl.cc($, ($): g_out.T.DataSpecifier<Annotation> => {
            switch ($[0]) {
                case 'glossary parameterXX': return pl.ss($, ($) => ['glossary parameterXX', $])
                case 'type': return pl.ss($, ($) => ['type', pl.cc($, ($) => {
                    const $p_context: g_out.T.DataSpecifier._ltype.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.DataSpecifier._ltype.context<Annotation> => {
                        switch ($[0]) {
                            case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                                const $p_glossary: g_out.T.DataSpecifier._ltype.context._limport.glossary<Annotation> = pl.cc($['glossary'], ($) => map_Glossary__Reference<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_type__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v_glossary: pt.OptionalValue<g_out.T.DataSpecifier._ltype.context._limport.glossary<Annotation>> = [true, $p_glossary]
                                return {
                                    'glossary': $p_glossary,
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
                    const $p_type__arguments: g_out.T.DataSpecifier._ltype.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Arguments<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_parameters
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))
                    const $v_type__arguments: pt.OptionalValue<g_out.T.DataSpecifier._ltype.type__arguments<Annotation>> = [true, $p_type__arguments]
                    return {
                        'context': $p_context,
                        'tailXX': $p_tailXX,
                        'type arguments': $p_type__arguments,
                        'typeXX': $p_typeXX,
                    }
                })])
                case 'type parameterXX': return pl.ss($, ($) => ['type parameterXX', $])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Dummy<Annotation>(
        $: g_in.T.Dummy<Annotation>,
    ): g_out.T.Dummy<Annotation> {
        return pl.cc($, ($) => {
            return null
        })
    }
    
    function map_Glossary<Annotation>(
        $: g_in.T.Glossary<Annotation>,
        $v_glossaries: pt.Lookup<g_out.T.Glossary<Annotation>>,
    ): g_out.T.Glossary<Annotation> {
        return pl.cc($, ($) => {
            const $p_imports: g_out.T.Glossary.imports<Annotation> = pl.cc($['imports'], ($) => map_Imports<Annotation>(
                $,
                $v_glossaries,//$v_glossaries
            ))
            const $v_imports: pt.OptionalValue<g_out.T.Glossary.imports<Annotation>> = [true, $p_imports]
            const $p_glossary__parameters: g_out.T.Glossary.glossary__parameters<Annotation> = pl.cc($['glossary parameters'], ($) => map_Parameters<Annotation>(
                $,
            ))
            const $v_glossary__parameters: pt.OptionalValue<g_out.T.Glossary.glossary__parameters<Annotation>> = [true, $p_glossary__parameters]
            const $p_root: g_out.T.Glossary.root<Annotation> = pl.cc($['root'], ($) => map_Namespace<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_glossary__parameters
                tempoptional/*3*/(
                    $v_imports,
                    ($) => [true, $],
                    () => [false],
                ),//$v_imports
            ))
            const $v_root: pt.OptionalValue<g_out.T.Glossary.root<Annotation>> = [true, $p_root]
            const $p_synchronous: g_out.T.Glossary.synchronous<Annotation> = pl.cc($['synchronous'], ($) => pl.cc($, ($) => {
                const $p_interfaces: g_out.T.Glossary.synchronous.interfaces<Annotation> = pl.cc($['interfaces'], ($) => $d.resolveDictionary<g_in.T.Glossary.synchronous.interfaces.D<Annotation>, g_out.T.Glossary.synchronous.interfaces.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary.synchronous.interfaces.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary.synchronous.interfaces.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__linterface: g_out.T.Glossary.synchronous.interfaces.D._linterface<Annotation> = pl.cc($['interface'], ($) => map_Synchronous__Interface<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.Glossary.synchronous.interfaces.D._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'interface': $p__linterface,
                        'parameters': $p_parameters,
                    }
                }))}))
                const $v_interfaces: pt.OptionalValue<g_out.T.Glossary.synchronous.interfaces<Annotation>> = [true, $p_interfaces]
                const $p_algorithms: g_out.T.Glossary.synchronous.algorithms<Annotation> = pl.cc($['algorithms'], ($) => $d.resolveDictionary<g_in.T.Glossary.synchronous.algorithms.D<Annotation>, g_out.T.Glossary.synchronous.algorithms.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary.synchronous.algorithms.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__ltype: g_out.T.Glossary.synchronous.algorithms.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Glossary.synchronous.algorithms.D._ltype<Annotation> => {
                        switch ($[0]) {
                            case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                                const $p__lin: g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction._lin<Annotation> = pl.cc($['in'], ($) => map_DataOrSynchronousInterface<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v__lin: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction._lin<Annotation>> = [true, $p__lin]
                                const $p_out: g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.out<Annotation> = pl.cc($['out'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v_out: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.out<Annotation>> = [true, $p_out]
                                const $p_callbacks: g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks<Annotation> = pl.cc($['callbacks'], ($) => $d.resolveDictionary<g_in.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D<Annotation>, g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                                    const $p__lin: g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D._lin<Annotation> = pl.cc($['in'], ($) => map_DataSpecifier<Annotation>(
                                        $,
                                        tempoptional/*3*/(
                                            $v_glossary__parameters,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_glossary__parameters
                                        tempoptional/*3*/(
                                            $v_imports,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_imports
                                        tempoptional/*3*/(
                                            $v_parameters,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_type__parameters
                                    ))
                                    const $v__lin: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D._lin<Annotation>> = [true, $p__lin]
                                    const $p_lookups: g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D.lookups<Annotation> = pl.cc($['lookups'], ($) => $d.resolveDictionary<g_in.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D.lookups.D<Annotation>, g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D.lookups.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_DataSpecifier<Annotation>(
                                        $,
                                        tempoptional/*3*/(
                                            $v_glossary__parameters,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_glossary__parameters
                                        tempoptional/*3*/(
                                            $v_imports,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_imports
                                        tempoptional/*3*/(
                                            $v_parameters,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_type__parameters
                                    ))}))
                                    const $v_lookups: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D.lookups<Annotation>> = [true, $p_lookups]
                                    const $p_out: g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D.out<Annotation> = pl.cc($['out'], ($) => map_DataSpecifier<Annotation>(
                                        $,
                                        tempoptional/*3*/(
                                            $v_glossary__parameters,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_glossary__parameters
                                        tempoptional/*3*/(
                                            $v_imports,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_imports
                                        tempoptional/*3*/(
                                            $v_parameters,
                                            ($) => [true, $],
                                            () => [false],
                                        ),//$v_type__parameters
                                    ))
                                    const $v_out: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D.out<Annotation>> = [true, $p_out]
                                    return {
                                        'in': $p__lin,
                                        'lookups': $p_lookups,
                                        'out': $p_out,
                                    }
                                }))}))
                                const $v_callbacks: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks<Annotation>> = [true, $p_callbacks]
                                return {
                                    'callbacks': $p_callbacks,
                                    'in': $p__lin,
                                    'out': $p_out,
                                }
                            })])
                            case 'procedure': return pl.ss($, ($) => ['procedure', pl.cc($, ($) => {
                                const $p__lin: g_out.T.Glossary.synchronous.algorithms.D._ltype.procedure._lin<Annotation> = pl.cc($['in'], ($) => map_DataOrSynchronousInterface<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v__lin: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype.procedure._lin<Annotation>> = [true, $p__lin]
                                const $p_out: g_out.T.Glossary.synchronous.algorithms.D._ltype.procedure.out<Annotation> = pl.cc($['out'], ($) => map_SynchronousInterfaceReference<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v_out: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype.procedure.out<Annotation>> = [true, $p_out]
                                return {
                                    'in': $p__lin,
                                    'out': $p_out,
                                }
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v__ltype: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'parameters': $p_parameters,
                        'type': $p__ltype,
                    }
                }))}))
                const $v_algorithms: pt.OptionalValue<g_out.T.Glossary.synchronous.algorithms<Annotation>> = [true, $p_algorithms]
                return {
                    'algorithms': $p_algorithms,
                    'interfaces': $p_interfaces,
                }
            }))
            const $v_synchronous: pt.OptionalValue<g_out.T.Glossary.synchronous<Annotation>> = [true, $p_synchronous]
            const $p_asynchronous: g_out.T.Glossary.asynchronous<Annotation> = pl.cc($['asynchronous'], ($) => pl.cc($, ($) => {
                const $p_interfaces: g_out.T.Glossary.asynchronous.interfaces<Annotation> = pl.cc($['interfaces'], ($) => $d.resolveDictionary<g_in.T.Glossary.asynchronous.interfaces.D<Annotation>, g_out.T.Glossary.asynchronous.interfaces.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary.asynchronous.interfaces.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary.asynchronous.interfaces.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__linterface: g_out.T.Glossary.asynchronous.interfaces.D._linterface<Annotation> = pl.cc($['interface'], ($) => map_AsynchronousInterface<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.Glossary.asynchronous.interfaces.D._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'interface': $p__linterface,
                        'parameters': $p_parameters,
                    }
                }))}))
                const $v_interfaces: pt.OptionalValue<g_out.T.Glossary.asynchronous.interfaces<Annotation>> = [true, $p_interfaces]
                const $p_algorithms: g_out.T.Glossary.asynchronous.algorithms<Annotation> = pl.cc($['algorithms'], ($) => $d.resolveDictionary<g_in.T.Glossary.asynchronous.algorithms.D<Annotation>, g_out.T.Glossary.asynchronous.algorithms.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                    const $p_parameters: g_out.T.Glossary.asynchronous.algorithms.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                        $,
                    ))
                    const $v_parameters: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D.parameters<Annotation>> = [true, $p_parameters]
                    const $p__ltype: g_out.T.Glossary.asynchronous.algorithms.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Glossary.asynchronous.algorithms.D._ltype<Annotation> => {
                        switch ($[0]) {
                            case 'constructor': return pl.ss($, ($) => ['constructor', pl.cc($, ($) => {
                                const $p__linterface: g_out.T.Glossary.asynchronous.algorithms.D._ltype._lconstructor._linterface<Annotation> = pl.cc($['interface'], ($) => map_AsynchronousInterfaceReference<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v__linterface: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype._lconstructor._linterface<Annotation>> = [true, $p__linterface]
                                const $p_downstreams: g_out.T.Glossary.asynchronous.algorithms.D._ltype._lconstructor.downstreams<Annotation> = pl.cc($['downstreams'], ($) => $d.resolveDictionary<g_in.T.Glossary.asynchronous.algorithms.D._ltype._lconstructor.downstreams.D<Annotation>, g_out.T.Glossary.asynchronous.algorithms.D._ltype._lconstructor.downstreams.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_AsynchronousInterfaceReference<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))}))
                                const $v_downstreams: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype._lconstructor.downstreams<Annotation>> = [true, $p_downstreams]
                                return {
                                    'downstreams': $p_downstreams,
                                    'interface': $p__linterface,
                                }
                            })])
                            case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                                const $p_out: g_out.T.Glossary.asynchronous.algorithms.D._ltype._lfunction.out<Annotation> = pl.cc($['out'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v_out: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype._lfunction.out<Annotation>> = [true, $p_out]
                                const $p__lin: g_out.T.Glossary.asynchronous.algorithms.D._ltype._lfunction._lin<Annotation> = pl.cc($['in'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v__lin: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype._lfunction._lin<Annotation>> = [true, $p__lin]
                                return {
                                    'in': $p__lin,
                                    'out': $p_out,
                                }
                            })])
                            case 'resource': return pl.ss($, ($) => ['resource', pl.cc($, ($) => {
                                const $p_consumer: g_out.T.Glossary.asynchronous.algorithms.D._ltype.resource.consumer<Annotation> = pl.cc($['consumer'], ($) => map_AsynchronousInterfaceReference<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v_consumer: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype.resource.consumer<Annotation>> = [true, $p_consumer]
                                const $p_request: g_out.T.Glossary.asynchronous.algorithms.D._ltype.resource.request<Annotation> = pl.cc($['request'], ($) => map_DataSpecifier<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_glossary__parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_glossary__parameters
                                    tempoptional/*3*/(
                                        $v_imports,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_imports
                                    tempoptional/*3*/(
                                        $v_parameters,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_type__parameters
                                ))
                                const $v_request: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype.resource.request<Annotation>> = [true, $p_request]
                                return {
                                    'consumer': $p_consumer,
                                    'request': $p_request,
                                }
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v__ltype: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'parameters': $p_parameters,
                        'type': $p__ltype,
                    }
                }))}))
                const $v_algorithms: pt.OptionalValue<g_out.T.Glossary.asynchronous.algorithms<Annotation>> = [true, $p_algorithms]
                return {
                    'algorithms': $p_algorithms,
                    'interfaces': $p_interfaces,
                }
            }))
            const $v_asynchronous: pt.OptionalValue<g_out.T.Glossary.asynchronous<Annotation>> = [true, $p_asynchronous]
            return {
                'asynchronous': $p_asynchronous,
                'glossary parameters': $p_glossary__parameters,
                'imports': $p_imports,
                'root': $p_root,
                'synchronous': $p_synchronous,
            }
        })
    }
    
    function map_Glossary__Reference<Annotation>(
        $: g_in.T.Glossary__Reference<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.Glossary__Reference<Annotation> {
        return pl.cc($, ($) => {
            const $p_glossary: g_out.T.Glossary__Reference.glossary<Annotation> = pl.cc($['glossary'], ($) => pl.cc($, ($) => {
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Imports.D<Annotation>> = tempoptional/*3*/(
                    $v_imports,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Imports.D<Annotation>>>(
                        refkey,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_glossary: pt.OptionalValue<g_out.T.Glossary__Reference.glossary<Annotation>> = [true, $p_glossary]
            const $p_glossary__arguments: g_out.T.Glossary__Reference.glossary__arguments<Annotation> = pl.cc($['glossary arguments'], ($) => map_Arguments<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_glossary__parameters
                tempoptional/*3*/(
                    $v_imports,
                    ($) => [true, $],
                    () => [false],
                ),//$v_imports
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_parameters
                tempoptional/*3*/(
                    $v_type__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_type__parameters
            ))
            const $v_glossary__arguments: pt.OptionalValue<g_out.T.Glossary__Reference.glossary__arguments<Annotation>> = [true, $p_glossary__arguments]
            return {
                'glossary': $p_glossary,
                'glossary arguments': $p_glossary__arguments,
            }
        })
    }
    
    function map_Imports<Annotation>(
        $: g_in.T.Imports<Annotation>,
        $v_glossaries: pt.Lookup<g_out.T.Glossary<Annotation>>,
    ): g_out.T.Imports<Annotation> {
        return $d.resolveDictionary<g_in.T.Imports.D<Annotation>, g_out.T.Imports.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            return null
        }))})
    }
    
    function map_Namespace<Annotation>(
        $: g_in.T.Namespace<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
    ): g_out.T.Namespace<Annotation> {
        return pl.cc($, ($) => {
            const $p_namespaces: g_out.T.Namespace.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $d.resolveDictionary<g_in.T.Namespace.namespaces.D<Annotation>, g_out.T.Namespace.namespaces.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_Namespace<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_glossary__parameters
                tempoptional/*3*/(
                    $v_imports,
                    ($) => [true, $],
                    () => [false],
                ),//$v_imports
            ))}))
            const $v_namespaces: pt.OptionalValue<g_out.T.Namespace.namespaces<Annotation>> = [true, $p_namespaces]
            const $p_types: g_out.T.Namespace.types<Annotation> = pl.cc($['types'], ($) => $d.resolveDictionary<g_in.T.Namespace.types.D<Annotation>, g_out.T.Namespace.types.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                const $p_parameters: g_out.T.Namespace.types.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                    $,
                ))
                const $v_parameters: pt.OptionalValue<g_out.T.Namespace.types.D.parameters<Annotation>> = [true, $p_parameters]
                const $p__ltype: g_out.T.Namespace.types.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Namespace.types.D._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'parameters': $p_parameters,
                    'type': $p__ltype,
                }
            }))}))
            const $v_types: pt.OptionalValue<g_out.T.Namespace.types<Annotation>> = [true, $p_types]
            return {
                'namespaces': $p_namespaces,
                'types': $p_types,
            }
        })
    }
    
    function map_Parameters<Annotation>(
        $: g_in.T.Parameters<Annotation>,
    ): g_out.T.Parameters<Annotation> {
        return $d.resolveDictionary<g_in.T.Parameters.D<Annotation>, g_out.T.Parameters.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            return null
        }))})
    }
    
    function map_Synchronous__Interface<Annotation>(
        $: g_in.T.Synchronous__Interface<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.Synchronous__Interface<Annotation> {
        return pl.cc($, ($): g_out.T.Synchronous__Interface<Annotation> => {
            switch ($[0]) {
                case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                    const $p_members: g_out.T.Synchronous__Interface.group.members<Annotation> = pl.cc($['members'], ($) => $d.resolveDictionary<g_in.T.Synchronous__Interface.group.members.D<Annotation>, g_out.T.Synchronous__Interface.group.members.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_Synchronous__Interface<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))}))
                    const $v_members: pt.OptionalValue<g_out.T.Synchronous__Interface.group.members<Annotation>> = [true, $p_members]
                    return {
                        'members': $p_members,
                    }
                })])
                case 'method': return pl.ss($, ($) => ['method', pl.cc($, ($) => {
                    const $p_data: g_out.T.Synchronous__Interface.method.data<Annotation> = pl.cc($['data'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.Synchronous__Interface.method.data<Annotation> => [true, map_DataSpecifier<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_glossary__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_glossary__parameters
                            tempoptional/*3*/(
                                $v_imports,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_imports
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
                        )],
                        () => [false],
                    ))
                    const $v_data: pt.OptionalValue<g_out.T.Synchronous__Interface.method.data<Annotation>> = [true, $p_data]
                    const $p__linterface: g_out.T.Synchronous__Interface.method._linterface<Annotation> = pl.cc($['interface'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.Synchronous__Interface.method._linterface<Annotation> => [true, map_Synchronous__Interface<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_glossary__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_glossary__parameters
                            tempoptional/*3*/(
                                $v_imports,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_imports
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
                        )],
                        () => [false],
                    ))
                    const $v__linterface: pt.OptionalValue<g_out.T.Synchronous__Interface.method._linterface<Annotation>> = [true, $p__linterface]
                    return {
                        'data': $p_data,
                        'interface': $p__linterface,
                    }
                })])
                case 'reference': return pl.ss($, ($) => ['reference', map_SynchronousInterfaceReference<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_SynchronousInterfaceReference<Annotation>(
        $: g_in.T.SynchronousInterfaceReference<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.SynchronousInterfaceReference<Annotation> {
        return pl.cc($, ($) => {
            const $p_context: g_out.T.SynchronousInterfaceReference.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.SynchronousInterfaceReference.context<Annotation> => {
                switch ($[0]) {
                    case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                        const $p_glossary: g_out.T.SynchronousInterfaceReference.context._limport.glossary<Annotation> = pl.cc($['glossary'], ($) => map_Glossary__Reference<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_glossary__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_glossary__parameters
                            tempoptional/*3*/(
                                $v_imports,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_imports
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
                        ))
                        const $v_glossary: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.context._limport.glossary<Annotation>> = [true, $p_glossary]
                        const $p_interfaceXX: g_out.T.SynchronousInterfaceReference.context._limport.interfaceXX<Annotation> = pl.cc($['interfaceXX'], ($) => $)
                        const $v_interfaceXX: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.context._limport.interfaceXX<Annotation>> = [true, $p_interfaceXX]
                        return {
                            'glossary': $p_glossary,
                            'interfaceXX': $p_interfaceXX,
                        }
                    })])
                    case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                        const $p_interfaceXX: g_out.T.SynchronousInterfaceReference.context.local.interfaceXX<Annotation> = pl.cc($['interfaceXX'], ($) => $)
                        const $v_interfaceXX: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.context.local.interfaceXX<Annotation>> = [true, $p_interfaceXX]
                        return {
                            'interfaceXX': $p_interfaceXX,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_context: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.context<Annotation>> = [true, $p_context]
            const $p_type__arguments: g_out.T.SynchronousInterfaceReference.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Arguments<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_glossary__parameters
                tempoptional/*3*/(
                    $v_imports,
                    ($) => [true, $],
                    () => [false],
                ),//$v_imports
                tempoptional/*3*/(
                    $v_glossary__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_parameters
                tempoptional/*3*/(
                    $v_type__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_type__parameters
            ))
            const $v_type__arguments: pt.OptionalValue<g_out.T.SynchronousInterfaceReference.type__arguments<Annotation>> = [true, $p_type__arguments]
            return {
                'context': $p_context,
                'type arguments': $p_type__arguments,
            }
        })
    }
    
    function map_Type<Annotation>(
        $: g_in.T.Type<Annotation>,
        $v_glossary__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out.T.Parameters<Annotation>>,
    ): g_out.T.Type<Annotation> {
        return pl.cc($, ($): g_out.T.Type<Annotation> => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['array', map_Type<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'boolean': return pl.ss($, ($) => ['boolean', pl.cc($, ($) => {
                    return null
                })])
                case 'computed': return pl.ss($, ($) => ['computed', map_Type<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'dictionary': return pl.ss($, ($) => ['dictionary', map_Type<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'group': return pl.ss($, ($) => ['group', $d.resolveDictionary<g_in.T.Type.group.D<Annotation>, g_out.T.Type.group.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Type.group.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_glossary__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_glossary__parameters
                        tempoptional/*3*/(
                            $v_imports,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_imports
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Type.group.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'type': $p__ltype,
                    }
                }))})])
                case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                    return null
                })])
                case 'number': return pl.ss($, ($) => ['number', pl.cc($, ($) => {
                    return null
                })])
                case 'optional': return pl.ss($, ($) => ['optional', map_Type<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'reference': return pl.ss($, ($) => ['reference', map_DataSpecifier<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                )])
                case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                    return null
                })])
                case 'taggedUnion': return pl.ss($, ($) => ['taggedUnion', $d.resolveDictionary<g_in.T.Type.taggedUnion.D<Annotation>, g_out.T.Type.taggedUnion.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => map_Type<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_glossary__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_glossary__parameters
                    tempoptional/*3*/(
                        $v_imports,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_imports
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                ))})])
                default: return pl.au($[0])
            }
        })
    }
    return map_Dummy
}