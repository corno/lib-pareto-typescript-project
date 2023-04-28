import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
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
            const $p_dict: g_out.T.A__dictionary__with__constraint.dict<Annotation> = pl.cc($['dict'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                return null
            })))
            const $v_dict: pt.OptionalValue<g_out.T.A__dictionary__with__constraint.dict<Annotation>> = [true, $p_dict]
            const $p_constrained__dict: g_out.T.A__dictionary__with__constraint.constrained__dict<Annotation> = pl.cc($['constrained dict'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                const /*dict constraint*/$v_a__constraint: pt.OptionalValue<g_out.T.A__dictionary__with__constraint.dict.D<Annotation>> = tempoptional/*3*/(
                    $v_dict,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.A__dictionary__with__constraint.dict.D<Annotation>>>(
                        key,
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
            })))
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
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                    $v_variable__stack,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
                        key,
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
                                                    ($) => pl.cc($['type parameters'], ($) => [true, $]),
                                                    () => [false],
                                                ),//$v_type__parameters
                                            ))
                                            const $v_type__arguments: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.content.O.step.content.call.content.type__arguments<Annotation>> = [true, $p_type__arguments]
                                            const $p_arguments: g_out.T.Address__Selection__Tail.content.content.O.step.content.call.content.arguments<Annotation> = pl.cc($['arguments'], ($) => $.__mapWithKey(($, key) => pl.cc($, ($) => {
                                                const /*dict constraint*/$v_parameter: pt.OptionalValue<g_out_typesystem.T.Parameters.D<Annotation>> = tempoptional/*3*/(
                                                    $v_address__function,
                                                    ($) => pl.cc($['parameters'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Parameters.D<Annotation>>>(
                                                        key,
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
                                                    'constraints': {
                                                        'parameter': $v_parameter,
                                                    },
                                                    'content': pl.cc($.content, ($) => map_Expression<Annotation>(
                                                        $,
                                                        tempoptional/*3*/(
                                                            $v_parameter,
                                                            ($) => pl.cc($['type'], ($) => [true, $]),
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
                                            })))
                                            const $v_arguments: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.content.O.step.content.call.content.arguments<Annotation>> = [true, $p_arguments]
                                            return {
                                                'arguments': $p_arguments,
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
                                            const key = $.key
                                            const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>> = tempoptional/*3*/(
                                                $v_group,
                                                ($) => pl.cc($['properties'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>>>(
                                                    key,
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
                                        })),
                                    }
                                })
                                return {
                                    'content': ['property', stateData],
                                    'result': pl.cc(stateData.content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional/*1*/(
                                        $.constraint,
                                        ($) => pl.cc($['type'], ($) => [true, $]),
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
    
    function map_Expression<Annotation>(
        $: g_in.T.Expression<Annotation>,
        $v_expected__type: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Expression<Annotation> => {
            switch ($[0]) {
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
    
    function map_Type__Arguments<Annotation>(
        $: g_in.T.Type__Arguments<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_type__parameters: pt.OptionalValue<g_out_typesystem.T.Type__Parameters<Annotation>>,
    ): g_out.T.Type__Arguments<Annotation> {
        return $.__mapWithKey(($, key) => pl.cc($, ($) => {
            const /*dict constraint*/$v_x: pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D<Annotation>> = tempoptional/*3*/(
                $v_type__parameters,
                ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D<Annotation>>>(
                    key,
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
        }))
    }
    
    function map_Type__Selection<Annotation>(
        $: g_in.T.Type__Selection<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
    ): g_out.T.Type__Selection<Annotation> {
        const content = pl.cc($, ($) => {
            const $p_referenced__type: g_out.T.Type__Selection.content.referenced__type<Annotation> = pl.cc($['referenced type'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out_typesystem.T.Namespace.D<Annotation>> = tempoptional/*3*/(
                    $v_namespace,
                    ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Namespace.D<Annotation>>>(
                        key,
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
            const $v_referenced__type: pt.OptionalValue<g_out.T.Type__Selection.content.referenced__type<Annotation>> = [true, $p_referenced__type]
            const $p_type__of__referenced__type: g_out.T.Type__Selection.content.type__of__referenced__type<Annotation> = pl.cc($['type of referenced type'], ($) => pl.cc($, ($): g_out.T.Type__Selection.content.type__of__referenced__type<Annotation> => {
                switch ($[0]) {
                    case 'namespace': return pl.ss($, ($) => { //option with result
                        const /*option constraint*/$v_referenced__namespace: pt.OptionalValue<g_out_typesystem.T.Namespace.D._ltype.namespace<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out_typesystem.T.Namespace.D._ltype.namespace<Annotation>> = tempoptional/*3*/(
                                $v_referenced__type,
                                ($) => tempoptional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['type'], ($) => ($[0] === 'namespace')
                                        ? [true, $[1]]
                                        : pl.cc($, ($) => {
                                            $se.error("option constraint")
                                            return [false]
                                        })
                                    ),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return optConstraint
                        })
                        const stateData: g_out.T.Type__Selection.content.type__of__referenced__type.content.namespace<Annotation> = pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'referenced namespace': $v_referenced__namespace,
                                },
                                'content': pl.cc($.content, ($) => map_Type__Selection<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_namespace,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_namespace
                                )),
                            }
                        })
                        return {
                            'content': ['namespace', stateData],
                            'result': pl.cc(stateData.content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional(
                                $.result,
                                ($) => [true, $],
                                () => [false],
                            )),
                        }
                    })
                    case 'type definition': return pl.ss($, ($) => { //option with result
                        const /*option constraint*/$v_referenced__type__definition: pt.OptionalValue<g_out_typesystem.T.Namespace.D._ltype.type__definition<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out_typesystem.T.Namespace.D._ltype.type__definition<Annotation>> = tempoptional/*3*/(
                                $v_referenced__type,
                                ($) => tempoptional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['type'], ($) => ($[0] === 'type definition')
                                        ? [true, $[1]]
                                        : pl.cc($, ($) => {
                                            $se.error("option constraint")
                                            return [false]
                                        })
                                    ),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return optConstraint
                        })
                        const stateData: g_out.T.Type__Selection.content.type__of__referenced__type.content.type__definition<Annotation> = pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'referenced type definition': $v_referenced__type__definition,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })
                        return {
                            'content': ['type definition', stateData],
                            'result': pl.cc(stateData.content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => tempoptional/*3*/(
                                $v_referenced__type__definition,
                                ($) => pl.cc($['type'], ($) => [true, $]),
                                () => [false],
                            )),
                        }
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v_type__of__referenced__type: pt.OptionalValue<g_out.T.Type__Selection.content.type__of__referenced__type<Annotation>> = [true, $p_type__of__referenced__type]
            return {
                'referenced type': $p_referenced__type,
                'type of referenced type': $p_type__of__referenced__type,
            }
        })
        return {
            'content': content,
            'result': pl.cc(content, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => pl.cc($['type of referenced type'], ($) => tempoptional(
                $.result,
                ($) => [true, $],
                () => [false],
            ))),
        }
    }
    
    function map_Variables<Annotation>(
        $: g_in.T.Variables<Annotation>,
        $v_namespace: pt.OptionalValue<g_out_typesystem.T.Namespace<Annotation>>,
        $v_parameters: pt.OptionalValue<g_out_typesystem.T.Parameters<Annotation>>,
        $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    ): g_out.T.Variables<Annotation> {
        return $.__mapWithKey(($, key) => pl.cc($, ($) => {
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
                    case 'parameter': return pl.ss($, ($) => { //option with result
                        const stateData: g_out.T.Variables.D._ltype.content.parameter<Annotation> = pl.cc($, ($) => {
                            const $p_parameter: g_out.T.Variables.D._ltype.content.parameter.parameter<Annotation> = pl.cc($['parameter'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out_typesystem.T.Parameters.D<Annotation>> = tempoptional/*3*/(
                                    $v_parameters,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Parameters.D<Annotation>>>(
                                        key,
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
                            const $v_parameter: pt.OptionalValue<g_out.T.Variables.D._ltype.content.parameter.parameter<Annotation>> = [true, $p_parameter]
                            return {
                                'parameter': $p_parameter,
                            }
                        })
                        return {
                            'content': ['parameter', stateData],
                            'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> => pl.cc($['parameter'], ($) => tempoptional/*1*/(
                                $.constraint,
                                ($) => pl.cc($['type'], ($) => [true, $]),
                                () => [false],
                            ))),
                        }
                    })
                    case 'variable stack2': return pl.ss($, ($) => { //option with result
                        const stateData: g_out.T.Variables.D._ltype.content.variable__stack2<Annotation> = pl.cc($, ($) => {
                            const $p_variable: g_out.T.Variables.D._ltype.content.variable__stack2.variable<Annotation> = pl.cc($['variable'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                                    $v_variable__stack,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
                                        key,
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
        }))
    }
    return ($) => {
        return pd.implementMe(`IMPLEMENT resolve`)
    }
}