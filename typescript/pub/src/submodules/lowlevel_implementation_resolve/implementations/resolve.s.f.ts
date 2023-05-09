import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from "../../lowlevel_implementation"
import * as g_out from "../../lowlevel_implementation_possiblyresolved"
import * as g_out_typesystem from "../../lowlevel_typesystem_possiblyresolved"

import { A } from "../api.generated"

function tempoptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => pt.OptionalValue<RT>,
    b: () => pt.OptionalValue<RT>,
): pt.OptionalValue<RT> {
    return tempoptional($, a, b)
}
export const $$: A.resolve = ($d, $se) => {
    
    function map_A__dictionary__with__constraint<Annotation>(
        $: g_in.T.A__dictionary__with__constraint<Annotation>,
    ): g_out.T.A__dictionary__with__constraint<Annotation> {
        return pl.cc($, ($) => {
            const $p_dict: g_out.T.A__dictionary__with__constraint.dict<Annotation> = pl.cc($['dict'], ($) => $d.resolveDictionary<g_in.T.A__dictionary__with__constraint.dict.D<Annotation>, g_out.T.A__dictionary__with__constraint.dict.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                return null
            }))}))
            const $v_dict: pt.OptionalValue<g_out.T.A__dictionary__with__constraint.dict<Annotation>> = [true, $p_dict]
            const $p_constrained__dict: g_out.T.A__dictionary__with__constraint.constrained__dict<Annotation> = pl.cc($['constrained dict'], ($) => $d.resolveDictionary<g_in.T.A__dictionary__with__constraint.constrained__dict.D<Annotation>, g_out.T.A__dictionary__with__constraint.constrained__dict.D<Annotation>>($, { 'map': ($, $l) => {
                const entrykey = $.key
                return pl.cc($.value, ($) => {
                    const /*dict constraint*/$v_a__constraint: pt.OptionalValue<g_out.T.A__dictionary__with__constraint.dict.D<Annotation>> = tempoptional/*3*/(
                        $v_dict,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.A__dictionary__with__constraint.dict.D<Annotation>>>(
                            entrykey,
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
                        'constraints': {
                            'a constraint': $v_a__constraint,
                        },
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })
            }}))
            const $v_constrained__dict: pt.OptionalValue<g_out.T.A__dictionary__with__constraint.constrained__dict<Annotation>> = [true, $p_constrained__dict]
            return {
                'constrained dict': $p_constrained__dict,
                'dict': $p_dict,
            }
        })
    }
    
    function map_A__optional__with__result<Annotation>(
        $: g_in.T.A__optional__with__result<Annotation>,
        $v_result__param: pt.OptionalValue<g_out.T.A__Result<Annotation>>,
    ): g_out.T.A__optional__with__result<Annotation> {
        return pl.cc($, ($) => {
            const $p_opt: g_out.T.A__optional__with__result.opt<Annotation> = pl.cc($['opt'], ($) => pl.cc($, ($) => { //optional with result
                const content: g_out.T.A__optional__with__result.opt.content<Annotation> = tempoptional/*4*/(
                    $,
                    ($): g_out.T.A__optional__with__result.opt.content<Annotation> => [true, pl.cc($, ($) => {
                        const $p_rslt: g_out.T.A__optional__with__result.opt.content.O.rslt<Annotation> = pl.cc($['rslt'], ($) => map_A__Result<Annotation>(
                            $,
                        ))
                        const $v_rslt: pt.OptionalValue<g_out.T.A__optional__with__result.opt.content.O.rslt<Annotation>> = [true, $p_rslt]
                        return {
                            'rslt': $p_rslt,
                        }
                    })],
                    () => [false],
                )
                return {
                    'content': content,
                    'result': tempoptional(
                        content,
                        ($) => pl.cc($['rslt'], ($) => [true, $]),
                        () => tempoptional/*3*/(
                            $v_result__param,
                            ($) => [true, $],
                            () => [false],
                        ),
                    ),
                }
            }))
            const $v_opt: pt.OptionalValue<g_out.T.A__optional__with__result.opt<Annotation>> = [true, $p_opt]
            return {
                'opt': $p_opt,
            }
        })
    }
    
    function map_A__Result<Annotation>(
        $: g_in.T.A__Result<Annotation>,
    ): g_out.T.A__Result<Annotation> {
        return pl.cc($, ($) => {
            const $p_foo: g_out.T.A__Result.foo<Annotation> = pl.cc($['foo'], ($) => $)
            const $v_foo: pt.OptionalValue<g_out.T.A__Result.foo<Annotation>> = [true, $p_foo]
            return {
                'foo': $p_foo,
            }
        })
    }
    
    function map_A__tagged__union__with__constrained__option<Annotation>(
        $: g_in.T.A__tagged__union__with__constrained__option<Annotation>,
    ): g_out.T.A__tagged__union__with__constrained__option<Annotation> {
        return pl.cc($, ($) => {
            const $p_tu1: g_out.T.A__tagged__union__with__constrained__option.tu1<Annotation> = pl.cc($['tu1'], ($) => pl.cc($, ($): g_out.T.A__tagged__union__with__constrained__option.tu1<Annotation> => {
                switch ($[0]) {
                    case 'a': return pl.ss($, ($) => ['a', pl.cc($, ($) => {
                        const $p_bar: g_out.T.A__tagged__union__with__constrained__option.tu1.a.bar<Annotation> = pl.cc($['bar'], ($) => $)
                        const $v_bar: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu1.a.bar<Annotation>> = [true, $p_bar]
                        return {
                            'bar': $p_bar,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_tu1: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu1<Annotation>> = [true, $p_tu1]
            const $p_tu2: g_out.T.A__tagged__union__with__constrained__option.tu2<Annotation> = pl.cc($['tu2'], ($) => pl.cc($, ($): g_out.T.A__tagged__union__with__constrained__option.tu2<Annotation> => {
                switch ($[0]) {
                    case 'a': return pl.ss($, ($) => {
                        const /*option constraint*/$v_opt__constraint: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu1.a<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu1.a<Annotation>> = tempoptional/*3*/(
                                $v_tu1,
                                ($) => ($[0] === 'a')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['a', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'opt constraint': $v_opt__constraint,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_rslt: g_out.T.A__tagged__union__with__constrained__option.tu2.a.content.rslt<Annotation> = pl.cc($['rslt'], ($) => map_A__Result<Annotation>(
                                        $,
                                    ))
                                    const $v_rslt: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu2.a.content.rslt<Annotation>> = [true, $p_rslt]
                                    return {
                                        'rslt': $p_rslt,
                                    }
                                })),
                            }
                        })]
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v_tu2: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu2<Annotation>> = [true, $p_tu2]
            return {
                'tu1': $p_tu1,
                'tu2': $p_tu2,
            }
        })
    }
    
    function map_A__tagged__union__with__constrained__option__and__result<Annotation>(
        $: g_in.T.A__tagged__union__with__constrained__option__and__result<Annotation>,
    ): g_out.T.A__tagged__union__with__constrained__option__and__result<Annotation> {
        return pl.cc($, ($) => {
            const $p_tu1: g_out.T.A__tagged__union__with__constrained__option__and__result.tu1<Annotation> = pl.cc($['tu1'], ($) => pl.cc($, ($): g_out.T.A__tagged__union__with__constrained__option__and__result.tu1<Annotation> => {
                switch ($[0]) {
                    case 'a': return pl.ss($, ($) => ['a', pl.cc($, ($) => {
                        const $p_bar: g_out.T.A__tagged__union__with__constrained__option__and__result.tu1.a.bar<Annotation> = pl.cc($['bar'], ($) => $)
                        const $v_bar: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option__and__result.tu1.a.bar<Annotation>> = [true, $p_bar]
                        return {
                            'bar': $p_bar,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_tu1: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option__and__result.tu1<Annotation>> = [true, $p_tu1]
            const $p_tu2: g_out.T.A__tagged__union__with__constrained__option__and__result.tu2<Annotation> = pl.cc($['tu2'], ($) => pl.cc($, ($): g_out.T.A__tagged__union__with__constrained__option__and__result.tu2<Annotation> => {
                switch ($[0]) {
                    case 'a': return pl.ss($, ($) => { //option with result
                        const /*option constraint*/$v_opt__constraint: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu1.a<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option.tu1.a<Annotation>> = tempoptional/*3*/(
                                $v_tu1,
                                ($) => ($[0] === 'a')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        const stateData: g_out.T.A__tagged__union__with__constrained__option__and__result.tu2.content.a<Annotation> = pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'opt constraint': $v_opt__constraint,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_rslt: g_out.T.A__tagged__union__with__constrained__option__and__result.tu2.content.a.content.rslt<Annotation> = pl.cc($['rslt'], ($) => map_A__Result<Annotation>(
                                        $,
                                    ))
                                    const $v_rslt: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option__and__result.tu2.content.a.content.rslt<Annotation>> = [true, $p_rslt]
                                    return {
                                        'rslt': $p_rslt,
                                    }
                                })),
                            }
                        })
                        return {
                            'content': ['a', stateData],
                            'result': pl.cc(stateData.content, ($): pt.OptionalValue<g_out.T.A__Result<Annotation>> => pl.cc($['rslt'], ($) => [true, $])),
                        }
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v_tu2: pt.OptionalValue<g_out.T.A__tagged__union__with__constrained__option__and__result.tu2<Annotation>> = [true, $p_tu2]
            return {
                'tu1': $p_tu1,
                'tu2': $p_tu2,
            }
        })
    }
    
    function map_A__tagged__union__with__result<Annotation>(
        $: g_in.T.A__tagged__union__with__result<Annotation>,
    ): g_out.T.A__tagged__union__with__result<Annotation> {
        return pl.cc($, ($) => {
            const $p_tu: g_out.T.A__tagged__union__with__result.tu<Annotation> = pl.cc($['tu'], ($) => pl.cc($, ($): g_out.T.A__tagged__union__with__result.tu<Annotation> => {
                switch ($[0]) {
                    case 'a': return pl.ss($, ($) => { //option with result
                        const stateData: g_out.T.A__tagged__union__with__result.tu.content.a<Annotation> = pl.cc($, ($) => {
                            const $p_rslt: g_out.T.A__tagged__union__with__result.tu.content.a.rslt<Annotation> = pl.cc($['rslt'], ($) => map_A__Result<Annotation>(
                                $,
                            ))
                            const $v_rslt: pt.OptionalValue<g_out.T.A__tagged__union__with__result.tu.content.a.rslt<Annotation>> = [true, $p_rslt]
                            return {
                                'rslt': $p_rslt,
                            }
                        })
                        return {
                            'content': ['a', stateData],
                            'result': pl.cc(stateData, ($): pt.OptionalValue<g_out.T.A__Result<Annotation>> => pl.cc($['rslt'], ($) => [true, $])),
                        }
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v_tu: pt.OptionalValue<g_out.T.A__tagged__union__with__result.tu<Annotation>> = [true, $p_tu]
            return {
                'tu': $p_tu,
            }
        })
    }
    
    function map_Address__Selection<Annotation>(
        $: g_in.T.Address__Selection<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Address__Selection<Annotation> {
        const content = pl.cc($, ($) => {
            const $p_variable: g_out.T.Address__Selection.content.variable<Annotation> = pl.cc($['variable'], ($) => pl.cc($, ($) => {
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                    $v_variable__stack,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
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
            const $v_variable: pt.OptionalValue<g_out.T.Address__Selection.content.variable<Annotation>> = [true, $p_variable]
            const $p_tail: g_out.T.Address__Selection.content.tail<Annotation> = pl.cc($['tail'], ($) => map_Address__Selection__Tail<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_variable,
                    ($) => tempoptional/*1*/(
                        $.constraint,
                        ($) => pl.cc($['type'], ($) => tempoptional(
                            $.result,
                            ($) => [true, $],
                            () => [false],
                        )),
                        () => [false],
                    ),
                    () => [false],
                ),//$v_current__address
                tempoptional/*3*/(
                    $v_namespace,
                    ($) => [true, $],
                    () => [false],
                ),//$v_namespace
                tempoptional/*3*/(
                    $v_variable__stack,
                    ($) => [true, $],
                    () => [false],
                ),//$v_variable__stack
            ))
            const $v_tail: pt.OptionalValue<g_out.T.Address__Selection.content.tail<Annotation>> = [true, $p_tail]
            return {
                'tail': $p_tail,
                'variable': $p_variable,
            }
        })
        return {
            'content': content,
            'result': pl.cc(content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => pl.cc($['tail'], ($) => tempoptional(
                $.result,
                ($) => [true, $],
                () => [false],
            ))),
        }
    }
    
    function map_Address__Selection__Tail<Annotation>(
        $: g_in.T.Address__Selection__Tail<Annotation>,
        $v_current__address: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Address__Selection__Tail<Annotation> {
        const content = pl.cc($, ($) => { //optional with result
            const content: g_out.T.Address__Selection__Tail.content.content<Annotation> = tempoptional/*4*/(
                $,
                ($): g_out.T.Address__Selection__Tail.content.content<Annotation> => [true, pl.cc($, ($) => {
                    const $p_step: g_out.T.Address__Selection__Tail.content.content.O.step<Annotation> = pl.cc($['step'], ($) => pl.cc($, ($): g_out.T.Address__Selection__Tail.content.content.O.step<Annotation> => {
                        switch ($[0]) {
                            case 'call': return pl.ss($, ($) => { //option with result
                                const /*option constraint*/$v_address__function: pt.OptionalValue<g_out_typesystem.T.Type.address__function<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.address__function<Annotation>> = tempoptional/*3*/(
                                        $v_current__address,
                                        ($) => ($[0] === 'address function')
                                            ? [true, $[1]]
                                            : pl.cc($, ($) => {
                                                $se.error("option constraint")
                                                return [false]
                                            })
                                        ,
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                const stateData: g_out.T.Address__Selection__Tail.content.content.O.step.content.call<Annotation> = pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'address function': $v_address__function,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            const $p_type__arguments: g_out.T.Address__Selection__Tail.content.content.O.step.content.call.content.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type__Arguments<Annotation>(
                                                $,
                                                tempoptional/*3*/(
                                                    $v_namespace,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_namespace
                                                tempoptional/*3*/(
                                                    $v_address__function,
                                                    ($) => pl.cc($['declaration'], ($) => pl.cc($['type parameters'], ($) => [true, $])),
                                                    () => [false],
                                                ),//$v_type__parameters
                                            ))
                                            const $v_type__arguments: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.content.O.step.content.call.content.type__arguments<Annotation>> = [true, $p_type__arguments]
                                            return {
                                                'type arguments': $p_type__arguments,
                                            }
                                        })),
                                    }
                                })
                                return {
                                    'content': ['call', stateData],
                                    'result': pl.cc(stateData.content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional/*3*/(
                                        $v_address__function,
                                        ($) => pl.cc($['return type'], ($) => [true, $]),
                                        () => [false],
                                    )),
                                }
                            })
                            case 'property': return pl.ss($, ($) => { //option with result
                                const /*option constraint*/$v_group: pt.OptionalValue<g_out_typesystem.T.Type.group<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.group<Annotation>> = tempoptional/*3*/(
                                        $v_current__address,
                                        ($) => ($[0] === 'group')
                                            ? [true, $[1]]
                                            : pl.cc($, ($) => {
                                                $se.error("option constraint")
                                                return [false]
                                            })
                                        ,
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                const stateData: g_out.T.Address__Selection__Tail.content.content.O.step.content.property<Annotation> = pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'group': $v_group,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            const refkey = $.key
                                            const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.D<Annotation>> = tempoptional/*3*/(
                                                $v_group,
                                                ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type.group.D<Annotation>>>(
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
                                        })),
                                    }
                                })
                                return {
                                    'content': ['property', stateData],
                                    'result': pl.cc(stateData.content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional/*1*/(
                                        $.constraint,
                                        ($) => [true, $],
                                        () => [false],
                                    )),
                                }
                            })
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_step: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.content.O.step<Annotation>> = [true, $p_step]
                    const $p_tail: g_out.T.Address__Selection__Tail.content.content.O.tail<Annotation> = pl.cc($['tail'], ($) => map_Address__Selection__Tail<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_step,
                            ($) => tempoptional(
                                $.result,
                                ($) => [true, $],
                                () => [false],
                            ),
                            () => [false],
                        ),//$v_current__address
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_tail: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.content.O.tail<Annotation>> = [true, $p_tail]
                    return {
                        'step': $p_step,
                        'tail': $p_tail,
                    }
                })],
                () => [false],
            )
            return {
                'content': content,
                'result': tempoptional(
                    content,
                    ($) => pl.cc($['tail'], ($) => tempoptional(
                        $.result,
                        ($) => [true, $],
                        () => [false],
                    )),
                    () => tempoptional/*3*/(
                        $v_current__address,
                        ($) => [true, $],
                        () => [false],
                    ),
                ),
            }
        })
        return {
            'content': content,
            'result': pl.cc(content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional(
                $.result,
                ($) => [true, $],
                () => [false],
            )),
        }
    }
    
    function map_Assign<Annotation>(
        $: g_in.T.Assign<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Assign<Annotation> {
        return pl.cc($, ($) => {
            const $p_target: g_out.T.Assign.target<Annotation> = pl.cc($['target'], ($) => map_Address__Selection<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_namespace,
                    ($) => [true, $],
                    () => [false],
                ),//$v_namespace
                tempoptional/*3*/(
                    $v_variable__stack,
                    ($) => [true, $],
                    () => [false],
                ),//$v_variable__stack
            ))
            const $v_target: pt.OptionalValue<g_out.T.Assign.target<Annotation>> = [true, $p_target]
            const $p_right__hand__side: g_out.T.Assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_target,
                    ($) => tempoptional(
                        $.result,
                        ($) => [true, $],
                        () => [false],
                    ),
                    () => [false],
                ),//$v_expected__type
                tempoptional/*3*/(
                    $v_namespace,
                    ($) => [true, $],
                    () => [false],
                ),//$v_namespace
                tempoptional/*3*/(
                    $v_variable__stack,
                    ($) => [true, $],
                    () => [false],
                ),//$v_variable__stack
            ))
            const $v_right__hand__side: pt.OptionalValue<g_out.T.Assign.right__hand__side<Annotation>> = [true, $p_right__hand__side]
            return {
                'right hand side': $p_right__hand__side,
                'target': $p_target,
            }
        })
    }
    
    function map_Block<Annotation>(
        $: g_in.T.Block<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out_typesystem.T.Type__Parameters<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Block<Annotation> {
        return pl.cc($, ($) => {
            const $p_variables: g_out.T.Block.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_namespace,
                    ($) => [true, $],
                    () => [false],
                ),//$v_namespace
                tempoptional/*3*/(
                    $v_variable__stack,
                    ($) => [true, $],
                    () => [false],
                ),//$v_variable__stack
            ))
            const $v_variables: pt.OptionalValue<g_out.T.Block.variables<Annotation>> = [true, $p_variables]
            const $p_statements: g_out.T.Block.statements<Annotation> = pl.cc($['statements'], ($) => map_Statements<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_namespace,
                    ($) => [true, $],
                    () => [false],
                ),//$v_namespace
                tempoptional/*3*/(
                    $v_type__parameters,
                    ($) => [true, $],
                    () => [false],
                ),//$v_type__parameters
                tempoptional/*3*/(
                    $v_variables,
                    ($) => [true, $],
                    () => [false],
                ),//$v_variable__stack
            ))
            const $v_statements: pt.OptionalValue<g_out.T.Block.statements<Annotation>> = [true, $p_statements]
            return {
                'statements': $p_statements,
                'variables': $p_variables,
            }
        })
    }
    
    function map_Boolean__Expression<Annotation>(
        $: g_in.T.Boolean__Expression<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Boolean__Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Boolean__Expression<Annotation> => {
            switch ($[0]) {
                case 'and': return pl.ss($, ($) => ['and', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.and.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.and.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.and.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.and.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'false': return pl.ss($, ($) => ['false', pl.cc($, ($) => {
                    return null
                })])
                case 'greater than': return pl.ss($, ($) => ['greater than', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.greater__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.greater__than.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.greater__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.greater__than.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'less than': return pl.ss($, ($) => ['less than', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.less__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.less__than.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.less__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.less__than.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'not': return pl.ss($, ($) => ['not', map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'number equals': return pl.ss($, ($) => ['number equals', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.number__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.number__equals.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.number__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.number__equals.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'number not equals': return pl.ss($, ($) => ['number not equals', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.number__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.number__not__equals.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.number__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.number__not__equals.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'or': return pl.ss($, ($) => ['or', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.or.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.or.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.or.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.or.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'string equals': return pl.ss($, ($) => ['string equals', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.string__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.string__equals.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.string__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.string__equals.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'string not equals': return pl.ss($, ($) => ['string not equals', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Boolean__Expression.string__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.string__not__equals.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Boolean__Expression.string__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Expression.string__not__equals.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'true': return pl.ss($, ($) => ['true', pl.cc($, ($) => {
                    return null
                })])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Boolean__Expression__Or__Selection<Annotation>(
        $: g_in.T.Boolean__Expression__Or__Selection<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Boolean__Expression__Or__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.Boolean__Expression__Or__Selection<Annotation> => {
            switch ($[0]) {
                case 'expression': return pl.ss($, ($) => ['expression', map_Boolean__Expression<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
                    const $p_selection: g_out.T.Boolean__Expression__Or__Selection.selection.selection<Annotation> = pl.cc($['selection'], ($) => map_Address__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_selection: pt.OptionalValue<g_out.T.Boolean__Expression__Or__Selection.selection.selection<Annotation>> = [true, $p_selection]
                    const $p_cast__to__boolean: g_out.T.Boolean__Expression__Or__Selection.selection.cast__to__boolean<Annotation> = pl.cc($['cast to boolean'], ($) => pl.cc($, ($): g_out.T.Boolean__Expression__Or__Selection.selection.cast__to__boolean<Annotation> => {
                        switch ($[0]) {
                            case 'boolean': return pl.ss($, ($) => {
                                const /*option constraint*/$v__lboolean: pt.OptionalValue<g_out_typesystem.T.Type._lboolean<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lboolean<Annotation>> = tempoptional/*3*/(
                                        $v_selection,
                                        ($) => tempoptional(
                                            $.result,
                                            ($) => ($[0] === 'boolean')
                                                ? [true, $[1]]
                                                : pl.cc($, ($) => {
                                                    $se.error("option constraint")
                                                    return [false]
                                                })
                                            ,
                                            () => [false],
                                        ),
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                return ['boolean', pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'boolean': $v__lboolean,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            return null
                                        })),
                                    }
                                })]
                            })
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_cast__to__boolean: pt.OptionalValue<g_out.T.Boolean__Expression__Or__Selection.selection.cast__to__boolean<Annotation>> = [true, $p_cast__to__boolean]
                    return {
                        'cast to boolean': $p_cast__to__boolean,
                        'selection': $p_selection,
                    }
                })])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Expression<Annotation>(
        $: g_in.T.Expression<Annotation>,
        $v_expected__type: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Expression<Annotation> => {
            switch ($[0]) {
                case 'array literal': return pl.ss($, ($) => {
                    const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type.array<Annotation>> = pl.cc($, ($) => {
                        const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.array<Annotation>> = tempoptional/*3*/(
                            $v_expected__type,
                            ($) => ($[0] === 'array')
                                ? [true, $[1]]
                                : pl.cc($, ($) => {
                                    $se.error("option constraint")
                                    return [false]
                                })
                            ,
                            () => [false],
                        )
                        return optConstraint
                    })
                    return ['array literal', pl.cc($, ($) => {
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'out': $v_out,
                            },
                            'content': pl.cc($.content, ($) => $.map(($) => map_Expression<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v_out,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_expected__type
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                                tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_variable__stack
                            ))),
                        }
                    })]
                })
                case 'boolean': return pl.ss($, ($) => {
                    const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lboolean<Annotation>> = pl.cc($, ($) => {
                        const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lboolean<Annotation>> = tempoptional/*3*/(
                            $v_expected__type,
                            ($) => ($[0] === 'boolean')
                                ? [true, $[1]]
                                : pl.cc($, ($) => {
                                    $se.error("option constraint")
                                    return [false]
                                })
                            ,
                            () => [false],
                        )
                        return optConstraint
                    })
                    return ['boolean', pl.cc($, ($) => {
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'out': $v_out,
                            },
                            'content': pl.cc($.content, ($) => map_Boolean__Expression<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                                tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_variable__stack
                            )),
                        }
                    })]
                })
                case 'null': return pl.ss($, ($) => {
                    const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lnull<Annotation>> = pl.cc($, ($) => {
                        const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnull<Annotation>> = tempoptional/*3*/(
                            $v_expected__type,
                            ($) => ($[0] === 'null')
                                ? [true, $[1]]
                                : pl.cc($, ($) => {
                                    $se.error("option constraint")
                                    return [false]
                                })
                            ,
                            () => [false],
                        )
                        return optConstraint
                    })
                    return ['null', pl.cc($, ($) => {
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'out': $v_out,
                            },
                            'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                return null
                            })),
                        }
                    })]
                })
                case 'numerical': return pl.ss($, ($) => {
                    const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = pl.cc($, ($) => {
                        const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = tempoptional/*3*/(
                            $v_expected__type,
                            ($) => ($[0] === 'number')
                                ? [true, $[1]]
                                : pl.cc($, ($) => {
                                    $se.error("option constraint")
                                    return [false]
                                })
                            ,
                            () => [false],
                        )
                        return optConstraint
                    })
                    return ['numerical', pl.cc($, ($) => {
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'out': $v_out,
                            },
                            'content': pl.cc($.content, ($) => map_Numerical__Expression<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                                tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_variable__stack
                            )),
                        }
                    })]
                })
                case 'object literal': return pl.ss($, ($) => {
                    const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type.group<Annotation>> = pl.cc($, ($) => {
                        const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.group<Annotation>> = tempoptional/*3*/(
                            $v_expected__type,
                            ($) => ($[0] === 'group')
                                ? [true, $[1]]
                                : pl.cc($, ($) => {
                                    $se.error("option constraint")
                                    return [false]
                                })
                            ,
                            () => [false],
                        )
                        return optConstraint
                    })
                    return ['object literal', pl.cc($, ($) => {
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'out': $v_out,
                            },
                            'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                const $p_properties: g_out.T.Expression.object__literal.content.properties<Annotation> = pl.cc($['properties'], ($) => $d.resolveDictionary<g_in.T.Expression.object__literal.content.properties.D<Annotation>, g_out.T.Expression.object__literal.content.properties.D<Annotation>>($, { 'map': ($, $l) => {
                                    const entrykey = $.key
                                    return pl.cc($.value, ($) => {
                                        const /*dict constraint*/$v_prop: pt.OptionalValue<g_out_typesystem.T.Type.group.D<Annotation>> = tempoptional/*3*/(
                                            $v_out,
                                            ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type.group.D<Annotation>>>(
                                                entrykey,
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
                                            'constraints': {
                                                'prop': $v_prop,
                                            },
                                            'content': pl.cc($.content, ($) => map_Expression<Annotation>(
                                                $,
                                                tempoptional/*3*/(
                                                    $v_prop,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_expected__type
                                                tempoptional/*3*/(
                                                    $v_namespace,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_namespace
                                                tempoptional/*3*/(
                                                    $v_variable__stack,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_variable__stack
                                            )),
                                        }
                                    })
                                }}))
                                const $v_properties: pt.OptionalValue<g_out.T.Expression.object__literal.content.properties<Annotation>> = [true, $p_properties]
                                return {
                                    'properties': $p_properties,
                                }
                            })),
                        }
                    })]
                })
                case 'string': return pl.ss($, ($) => {
                    const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lstring<Annotation>> = pl.cc($, ($) => {
                        const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lstring<Annotation>> = tempoptional/*3*/(
                            $v_expected__type,
                            ($) => ($[0] === 'string')
                                ? [true, $[1]]
                                : pl.cc($, ($) => {
                                    $se.error("option constraint")
                                    return [false]
                                })
                            ,
                            () => [false],
                        )
                        return optConstraint
                    })
                    return ['string', pl.cc($, ($) => {
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'out': $v_out,
                            },
                            'content': pl.cc($.content, ($) => map_String__Expression<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                                tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_variable__stack
                            )),
                        }
                    })]
                })
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Numerical__Expression<Annotation>(
        $: g_in.T.Numerical__Expression<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Numerical__Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Numerical__Expression<Annotation> => {
            switch ($[0]) {
                case 'minus': return pl.ss($, ($) => ['minus', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Numerical__Expression.minus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Numerical__Expression.minus.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Numerical__Expression.minus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Numerical__Expression.minus.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'numeric literal': return pl.ss($, ($) => ['numeric literal', $])
                case 'plus': return pl.ss($, ($) => ['plus', pl.cc($, ($) => {
                    const $p_left__hand__side: g_out.T.Numerical__Expression.plus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_left__hand__side: pt.OptionalValue<g_out.T.Numerical__Expression.plus.left__hand__side<Annotation>> = [true, $p_left__hand__side]
                    const $p_right__hand__side: g_out.T.Numerical__Expression.plus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_right__hand__side: pt.OptionalValue<g_out.T.Numerical__Expression.plus.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                    return {
                        'left hand side': $p_left__hand__side,
                        'right hand side': $p_right__hand__side,
                    }
                })])
                case 'postdecrement': return pl.ss($, ($) => ['postdecrement', map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'postincrement': return pl.ss($, ($) => ['postincrement', map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'predecrement': return pl.ss($, ($) => ['predecrement', map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'preincrement': return pl.ss($, ($) => ['preincrement', map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Numerical__Expression__Or__Selection<Annotation>(
        $: g_in.T.Numerical__Expression__Or__Selection<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Numerical__Expression__Or__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.Numerical__Expression__Or__Selection<Annotation> => {
            switch ($[0]) {
                case 'expression': return pl.ss($, ($) => ['expression', map_Numerical__Expression<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
                    const $p_selection: g_out.T.Numerical__Expression__Or__Selection.selection.selection<Annotation> = pl.cc($['selection'], ($) => map_Address__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_selection: pt.OptionalValue<g_out.T.Numerical__Expression__Or__Selection.selection.selection<Annotation>> = [true, $p_selection]
                    const $p_cast__to__number: g_out.T.Numerical__Expression__Or__Selection.selection.cast__to__number<Annotation> = pl.cc($['cast to number'], ($) => pl.cc($, ($): g_out.T.Numerical__Expression__Or__Selection.selection.cast__to__number<Annotation> => {
                        switch ($[0]) {
                            case 'number': return pl.ss($, ($) => {
                                const /*option constraint*/$v__lnumber: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = tempoptional/*3*/(
                                        $v_selection,
                                        ($) => tempoptional(
                                            $.result,
                                            ($) => ($[0] === 'number')
                                                ? [true, $[1]]
                                                : pl.cc($, ($) => {
                                                    $se.error("option constraint")
                                                    return [false]
                                                })
                                            ,
                                            () => [false],
                                        ),
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                return ['number', pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'number': $v__lnumber,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            return null
                                        })),
                                    }
                                })]
                            })
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_cast__to__number: pt.OptionalValue<g_out.T.Numerical__Expression__Or__Selection.selection.cast__to__number<Annotation>> = [true, $p_cast__to__number]
                    return {
                        'cast to number': $p_cast__to__number,
                        'selection': $p_selection,
                    }
                })])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Source__File<Annotation>(
        $: g_in.T.Source__File<Annotation>,
    ): g_out.T.Source__File<Annotation> {
        return pl.cc($, ($) => {
            return null
        })
    }
    
    function map_Statements<Annotation>(
        $: g_in.T.Statements<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out_typesystem.T.Type__Parameters<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Statements<Annotation> {
        return $.map(($) => pl.cc($, ($): g_out.T.Statements.A<Annotation> => {
            switch ($[0]) {
                case 'block': return pl.ss($, ($) => ['block', map_Block<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_type__parameters,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_type__parameters
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'if': return pl.ss($, ($) => ['if', pl.cc($, ($) => {
                    const $p_condition: g_out.T.Statements.A._lif.condition<Annotation> = pl.cc($['condition'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_condition: pt.OptionalValue<g_out.T.Statements.A._lif.condition<Annotation>> = [true, $p_condition]
                    const $p_then: g_out.T.Statements.A._lif.then<Annotation> = pl.cc($['then'], ($) => map_Block<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_then: pt.OptionalValue<g_out.T.Statements.A._lif.then<Annotation>> = [true, $p_then]
                    const $p__lelse: g_out.T.Statements.A._lif._lelse<Annotation> = pl.cc($['else'], ($) => tempoptional/*4*/(
                        $,
                        ($): g_out.T.Statements.A._lif._lelse<Annotation> => [true, map_Block<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_namespace,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_namespace
                            tempoptional/*3*/(
                                $v_type__parameters,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_type__parameters
                            tempoptional/*3*/(
                                $v_variable__stack,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_variable__stack
                        )],
                        () => [false],
                    ))
                    const $v__lelse: pt.OptionalValue<g_out.T.Statements.A._lif._lelse<Annotation>> = [true, $p__lelse]
                    return {
                        'condition': $p_condition,
                        'else': $p__lelse,
                        'then': $p_then,
                    }
                })])
                case 'while': return pl.ss($, ($) => ['while', pl.cc($, ($) => {
                    const $p_condition: g_out.T.Statements.A._lwhile.condition<Annotation> = pl.cc($['condition'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_condition: pt.OptionalValue<g_out.T.Statements.A._lwhile.condition<Annotation>> = [true, $p_condition]
                    const $p_block: g_out.T.Statements.A._lwhile.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_type__parameters,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_type__parameters
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_block: pt.OptionalValue<g_out.T.Statements.A._lwhile.block<Annotation>> = [true, $p_block]
                    return {
                        'block': $p_block,
                        'condition': $p_condition,
                    }
                })])
                case 'with': return pl.ss($, ($) => ['with', pl.cc($, ($) => {
                    const $p_address: g_out.T.Statements.A._lwith.address<Annotation> = pl.cc($['address'], ($) => map_Address__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_address: pt.OptionalValue<g_out.T.Statements.A._lwith.address<Annotation>> = [true, $p_address]
                    const $p_action: g_out.T.Statements.A._lwith.action<Annotation> = pl.cc($['action'], ($) => pl.cc($, ($): g_out.T.Statements.A._lwith.action<Annotation> => {
                        switch ($[0]) {
                            case 'assign': return pl.ss($, ($) => ['assign', map_Assign<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                                tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_variable__stack
                            )])
                            case 'minus assign': return pl.ss($, ($) => {
                                const /*option constraint*/$v_number__address: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = tempoptional/*3*/(
                                        $v_address,
                                        ($) => tempoptional(
                                            $.result,
                                            ($) => ($[0] === 'number')
                                                ? [true, $[1]]
                                                : pl.cc($, ($) => {
                                                    $se.error("option constraint")
                                                    return [false]
                                                })
                                            ,
                                            () => [false],
                                        ),
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                return ['minus assign', pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'number address': $v_number__address,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            const $p_right__hand__side: g_out.T.Statements.A._lwith.action.minus__assign.content.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                                                $,
                                                tempoptional/*3*/(
                                                    $v_namespace,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_namespace
                                                tempoptional/*3*/(
                                                    $v_variable__stack,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_variable__stack
                                            ))
                                            const $v_right__hand__side: pt.OptionalValue<g_out.T.Statements.A._lwith.action.minus__assign.content.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                                            return {
                                                'right hand side': $p_right__hand__side,
                                            }
                                        })),
                                    }
                                })]
                            })
                            case 'plus assign': return pl.ss($, ($) => {
                                const /*option constraint*/$v_number__address: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber<Annotation>> = tempoptional/*3*/(
                                        $v_address,
                                        ($) => tempoptional(
                                            $.result,
                                            ($) => ($[0] === 'number')
                                                ? [true, $[1]]
                                                : pl.cc($, ($) => {
                                                    $se.error("option constraint")
                                                    return [false]
                                                })
                                            ,
                                            () => [false],
                                        ),
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                return ['plus assign', pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'number address': $v_number__address,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            const $p_right__hand__side: g_out.T.Statements.A._lwith.action.plus__assign.content.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                                                $,
                                                tempoptional/*3*/(
                                                    $v_namespace,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_namespace
                                                tempoptional/*3*/(
                                                    $v_variable__stack,
                                                    ($) => [true, $],
                                                    () => [false],
                                                ),//$v_variable__stack
                                            ))
                                            const $v_right__hand__side: pt.OptionalValue<g_out.T.Statements.A._lwith.action.plus__assign.content.right__hand__side<Annotation>> = [true, $p_right__hand__side]
                                            return {
                                                'right hand side': $p_right__hand__side,
                                            }
                                        })),
                                    }
                                })]
                            })
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_action: pt.OptionalValue<g_out.T.Statements.A._lwith.action<Annotation>> = [true, $p_action]
                    return {
                        'action': $p_action,
                        'address': $p_address,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
    }
    
    function map_String__Expression<Annotation>(
        $: g_in.T.String__Expression<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.String__Expression<Annotation> {
        return pl.cc($, ($): g_out.T.String__Expression<Annotation> => {
            switch ($[0]) {
                case 'string literal': return pl.ss($, ($) => ['string literal', $])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_String__Expression__Or__Selection<Annotation>(
        $: g_in.T.String__Expression__Or__Selection<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.String__Expression__Or__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.String__Expression__Or__Selection<Annotation> => {
            switch ($[0]) {
                case 'expression': return pl.ss($, ($) => ['expression', map_String__Expression<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_namespace,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_namespace
                    tempoptional/*3*/(
                        $v_variable__stack,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_variable__stack
                )])
                case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
                    const $p_selection: g_out.T.String__Expression__Or__Selection.selection.selection<Annotation> = pl.cc($['selection'], ($) => map_Address__Selection<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_namespace,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_namespace
                        tempoptional/*3*/(
                            $v_variable__stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_variable__stack
                    ))
                    const $v_selection: pt.OptionalValue<g_out.T.String__Expression__Or__Selection.selection.selection<Annotation>> = [true, $p_selection]
                    const $p_cast__to__string: g_out.T.String__Expression__Or__Selection.selection.cast__to__string<Annotation> = pl.cc($['cast to string'], ($) => pl.cc($, ($): g_out.T.String__Expression__Or__Selection.selection.cast__to__string<Annotation> => {
                        switch ($[0]) {
                            case 'string': return pl.ss($, ($) => {
                                const /*option constraint*/$v__lstring: pt.OptionalValue<g_out_typesystem.T.Type._lstring<Annotation>> = pl.cc($, ($) => {
                                    const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lstring<Annotation>> = tempoptional/*3*/(
                                        $v_selection,
                                        ($) => tempoptional(
                                            $.result,
                                            ($) => ($[0] === 'string')
                                                ? [true, $[1]]
                                                : pl.cc($, ($) => {
                                                    $se.error("option constraint")
                                                    return [false]
                                                })
                                            ,
                                            () => [false],
                                        ),
                                        () => [false],
                                    )
                                    return optConstraint
                                })
                                return ['string', pl.cc($, ($) => {
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'string': $v__lstring,
                                        },
                                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                            return null
                                        })),
                                    }
                                })]
                            })
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_cast__to__string: pt.OptionalValue<g_out.T.String__Expression__Or__Selection.selection.cast__to__string<Annotation>> = [true, $p_cast__to__string]
                    return {
                        'cast to string': $p_cast__to__string,
                        'selection': $p_selection,
                    }
                })])
                default: return pl.au($[0])
            }
        })
    }
    
    function map_Type__Arguments<Annotation>(
        $: g_in.T.Type__Arguments<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out_typesystem.T.Type__Parameters<Annotation>>,
    ): g_out.T.Type__Arguments<Annotation> {
        return $d.resolveDictionary<g_in.T.Type__Arguments.D<Annotation>, g_out.T.Type__Arguments.D<Annotation>>($, { 'map': ($, $l) => {
            const entrykey = $.key
            return pl.cc($.value, ($) => {
                const /*dict constraint*/$v_x: pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D<Annotation>> = tempoptional/*3*/(
                    $v_type__parameters,
                    ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D<Annotation>>>(
                        entrykey,
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
                    'constraints': {
                        'x': $v_x,
                    },
                    'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Type__Arguments.D.content._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_namespace,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_namespace
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type__Arguments.D.content._ltype<Annotation>> = [true, $p__ltype]
                        return {
                            'type': $p__ltype,
                        }
                    })),
                }
            })
        }})
    }
    
    function map_Type__Selection<Annotation>(
        $: g_in.T.Type__Selection<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
    ): g_out.T.Type__Selection<Annotation> {
        const content = pl.cc($, ($): g_out.T.Type__Selection.content<Annotation> => {
            switch ($[0]) {
                case 'child namespace': return pl.ss($, ($) => { //option with result
                    const stateData: g_out.T.Type__Selection.content.content.child__namespace<Annotation> = pl.cc($, ($) => {
                        const $p_namespacex: g_out.T.Type__Selection.content.content.child__namespace.namespacex<Annotation> = pl.cc($['namespacex'], ($) => pl.cc($, ($) => {
                            const refkey = $.key
                            const constraint: pt.OptionalValue<g_out_typesystem.T.Namespace.namespaces.D<Annotation>> = tempoptional/*3*/(
                                $v_namespace,
                                ($) => pl.cc($['namespaces'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Namespace.namespaces.D<Annotation>>>(
                                    refkey,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_namespacex: pt.OptionalValue<g_out.T.Type__Selection.content.content.child__namespace.namespacex<Annotation>> = [true, $p_namespacex]
                        const $p_selection: g_out.T.Type__Selection.content.content.child__namespace.selection<Annotation> = pl.cc($['selection'], ($) => map_Type__Selection<Annotation>(
                            $,
                            tempoptional/*3*/(
                                $v_namespacex,
                                ($) => tempoptional/*1*/(
                                    $.constraint,
                                    ($) => [true, $],
                                    () => [false],
                                ),
                                () => [false],
                            ),//$v_namespace
                        ))
                        const $v_selection: pt.OptionalValue<g_out.T.Type__Selection.content.content.child__namespace.selection<Annotation>> = [true, $p_selection]
                        return {
                            'namespacex': $p_namespacex,
                            'selection': $p_selection,
                        }
                    })
                    return {
                        'content': ['child namespace', stateData],
                        'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => pl.cc($['selection'], ($) => tempoptional(
                            $.result,
                            ($) => [true, $],
                            () => [false],
                        ))),
                    }
                })
                case 'current namespace': return pl.ss($, ($) => { //option with result
                    const stateData: g_out.T.Type__Selection.content.content.current__namespace<Annotation> = pl.cc($, ($) => {
                        const refkey = $.key
                        const constraint: pt.OptionalValue<g_out_typesystem.T.Namespace.types.D<Annotation>> = tempoptional/*3*/(
                            $v_namespace,
                            ($) => pl.cc($['types'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Namespace.types.D<Annotation>>>(
                                refkey,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            )),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    })
                    return {
                        'content': ['current namespace', stateData],
                        'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional/*1*/(
                            $.constraint,
                            ($) => [true, $],
                            () => [false],
                        )),
                    }
                })
                default: return pl.au($[0])
            }
        })
        return {
            'content': content,
            'result': pl.cc(content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional(
                $.result,
                ($) => [true, $],
                () => [false],
            )),
        }
    }
    
    function map_Variables<Annotation>(
        $: g_in.T.Variables<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Variables<Annotation> {
        return $d.resolveDictionary<g_in.T.Variables.D<Annotation>, g_out.T.Variables.D<Annotation>>($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            const $p__ltype: g_out.T.Variables.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Variables.D._ltype<Annotation> => {
                switch ($[0]) {
                    case 'local': return pl.ss($, ($) => { //option with result
                        const stateData: g_out.T.Variables.D._ltype.content.local<Annotation> = pl.cc($, ($) => {
                            const $p__ltype: g_out.T.Variables.D._ltype.content.local._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                            ))
                            const $v__ltype: pt.OptionalValue<g_out.T.Variables.D._ltype.content.local._ltype<Annotation>> = [true, $p__ltype]
                            const $p_initializer: g_out.T.Variables.D._ltype.content.local.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Expression<Annotation>(
                                $,
                                tempoptional/*3*/(
                                    $v__ltype,
                                    ($) => tempoptional(
                                        $.result,
                                        ($) => [true, $],
                                        () => [false],
                                    ),
                                    () => [false],
                                ),//$v_expected__type
                                tempoptional/*3*/(
                                    $v_namespace,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_namespace
                                tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => [true, $],
                                    () => [false],
                                ),//$v_variable__stack
                            ))
                            const $v_initializer: pt.OptionalValue<g_out.T.Variables.D._ltype.content.local.initializer<Annotation>> = [true, $p_initializer]
                            return {
                                'initializer': $p_initializer,
                                'type': $p__ltype,
                            }
                        })
                        return {
                            'content': ['local', stateData],
                            'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => pl.cc($['type'], ($) => tempoptional(
                                $.result,
                                ($) => [true, $],
                                () => [false],
                            ))),
                        }
                    })
                    case 'variable stack2': return pl.ss($, ($) => { //option with result
                        const stateData: g_out.T.Variables.D._ltype.content.variable__stack2<Annotation> = pl.cc($, ($) => {
                            const $p_variable: g_out.T.Variables.D._ltype.content.variable__stack2.variable<Annotation> = pl.cc($['variable'], ($) => pl.cc($, ($) => {
                                const refkey = $.key
                                const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
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
                            const $v_variable: pt.OptionalValue<g_out.T.Variables.D._ltype.content.variable__stack2.variable<Annotation>> = [true, $p_variable]
                            return {
                                'variable': $p_variable,
                            }
                        })
                        return {
                            'content': ['variable stack2', stateData],
                            'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => pl.cc($['variable'], ($) => tempoptional/*1*/(
                                $.constraint,
                                ($) => pl.cc($['type'], ($) => tempoptional(
                                    $.result,
                                    ($) => [true, $],
                                    () => [false],
                                )),
                                () => [false],
                            ))),
                        }
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v__ltype: pt.OptionalValue<g_out.T.Variables.D._ltype<Annotation>> = [true, $p__ltype]
            return {
                'type': $p__ltype,
            }
        }))})
    }
    return map_Source__File
}