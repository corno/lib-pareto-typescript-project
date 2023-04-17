import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../lowlevel_implementation"
import * as g_out from "../../lowlevel_implementation_possiblyresolved"
import * as g_out_typesystem from "../../lowlevel_typesystem_possiblyresolved"

import { A } from "../api.generated"

export const $$: A.resolve = ($d,) => {

    function map_Block<Annotation>($: g_in.T.Block<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.Block<Annotation> {
        return pl.cc($, ($) => {
            const temp_variables: g_out.T.Block.variables<Annotation> = pl.cc($['variables'], ($) => $.map(($) => pl.cc($, ($) => {
                const temp__ltype: g_out.T.Block.variables.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const temp_initializer: g_out.T.Block.variables.D.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Expression<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                    'type': [false],
                }))
                return {
                    'type': temp__ltype,
                    'initializer': temp_initializer,
                }
            })))
            const temp_statements: g_out.T.Block.statements<Annotation> = pl.cc($['statements'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Block.statements.A<Annotation> => {
                switch ($[0]) {
                    case 'block': return pl.ss($, ($) => ['block', map_Block<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': [false],
                    })])
                    case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                        const temp__lfunction: g_out.T.Block.statements.A.call._lfunction<Annotation> = pl.cc($['function'], ($) => map_Data__Path<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': [false],
                        }))
                        const temp_type__arguments: g_out.T.Block.statements.A.call.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type__Arguments<Annotation>($, {
                            'global types': $x['global types'],
                        }))
                        const temp_arguments: g_out.T.Block.statements.A.call.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        return {
                            'function': temp__lfunction,
                            'type arguments': temp_type__arguments,
                            'arguments': temp_arguments,
                        }
                    })])
                    case 'for': return pl.ss($, ($) => ['for', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lfor.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        const temp_incrementer: g_out.T.Block.statements.A._lfor.incrementer<Annotation> = pl.cc($['incrementer'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        const temp_block: g_out.T.Block.statements.A._lfor.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': [false],
                        }))
                        return {
                            'condition': temp_condition,
                            'incrementer': temp_incrementer,
                            'block': temp_block,
                        }
                    })])
                    case 'if': return pl.ss($, ($) => ['if', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lif.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        const temp_then: g_out.T.Block.statements.A._lif.then<Annotation> = pl.cc($['then'], ($) => map_Block<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': [false],
                        }))
                        const temp__lelse: g_out.T.Block.statements.A._lif._lelse<Annotation> = pl.cc($['else'], ($) => pl.optional(
                            $,
                            ($): g_out.T.Block.statements.A._lif._lelse<Annotation> => [true, map_Block<Annotation>($, {
                                'global types': $x['global types'],
                                'stack': [false],
                            })],
                            () => [false],
                        ))
                        return {
                            'condition': temp_condition,
                            'then': temp_then,
                            'else': temp__lelse,
                        }
                    })])
                    case 'minus assign': return pl.ss($, ($) => ['minus assign', pl.cc($, ($) => {
                        const temp_variable: g_out.T.Block.statements.A.minus__assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': [false],
                        }))
                        const temp_right__hand__side: g_out.T.Block.statements.A.minus__assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        return {
                            'variable': temp_variable,
                            'right hand side': temp_right__hand__side,
                        }
                    })])
                    case 'plus assign': return pl.ss($, ($) => ['plus assign', pl.cc($, ($) => {
                        const temp_variable: g_out.T.Block.statements.A.plus__assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': [false],
                        }))
                        const temp_right__hand__side: g_out.T.Block.statements.A.plus__assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        return {
                            'variable': temp_variable,
                            'right hand side': temp_right__hand__side,
                        }
                    })])
                    case 'return': return pl.ss($, ($) => ['return', pl.cc($, ($) => {
                        const temp_expression: g_out.T.Block.statements.A._lreturn.expression<Annotation> = pl.cc($['expression'], ($) => pl.optional(
                            $,
                            ($): g_out.T.Block.statements.A._lreturn.expression<Annotation> => [true, map_Expression<Annotation>($, {
                                'global types': $x['global types'],
                                'stack': $x['stack'],
                                'type': [false],
                            })],
                            () => [false],
                        ))
                        return {
                            'expression': temp_expression,
                        }
                    })])
                    case 'switch': return pl.ss($, ($) => ['switch', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lswitch.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        const temp_cases: g_out.T.Block.statements.A._lswitch.cases<Annotation> = pl.cc($['cases'], ($) => $.map(($) => pl.cc($, ($) => {
                            const constraint: pt.OptionalValue<g_out_typesystem.T.Type.tagged__union.D<Annotation>> = [false]
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                                    const temp_block: g_out.T.Block.statements.A._lswitch.cases.D._ltype.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($, {
                                        'global types': $x['global types'],
                                        'stack': [false],
                                    }))
                                    return {
                                        'block': temp_block,
                                    }
                                })),
                            }
                        })))
                        const temp__ldefault: g_out.T.Block.statements.A._lswitch._ldefault<Annotation> = pl.cc($['default'], ($) => pl.optional(
                            $,
                            ($): g_out.T.Block.statements.A._lswitch._ldefault<Annotation> => [true, map_Block<Annotation>($, {
                                'global types': $x['global types'],
                                'stack': [false],
                            })],
                            () => [false],
                        ))
                        return {
                            'condition': temp_condition,
                            'cases': temp_cases,
                            'default': temp__ldefault,
                        }
                    })])
                    case 'while': return pl.ss($, ($) => ['while', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lwhile.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))
                        const temp_block: g_out.T.Block.statements.A._lwhile.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': [false],
                        }))
                        return {
                            'condition': temp_condition,
                            'block': temp_block,
                        }
                    })])
                    default: return pl.au($[0])
                }
            })))
            return {
                'variables': temp_variables,
                'statements': temp_statements,
            }
        })
    }
    function map_Boolean__Expression<Annotation>($: g_in.T.Boolean__Expression<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.Boolean__Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Boolean__Expression<Annotation> => {
            switch ($[0]) {
                case 'and': return pl.ss($, ($) => ['and', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.and.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.and.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'or': return pl.ss($, ($) => ['or', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.or.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.or.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'false': return pl.ss($, ($) => ['false', pl.cc($, ($) => {
                    return null
                })])
                case 'not': return pl.ss($, ($) => ['not', map_Boolean__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'true': return pl.ss($, ($) => ['true', pl.cc($, ($) => {
                    return null
                })])
                case 'string equals': return pl.ss($, ($) => ['string equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.string__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.string__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'string not equals': return pl.ss($, ($) => ['string not equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.string__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.string__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'number equals': return pl.ss($, ($) => ['number equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.number__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.number__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'number not equals': return pl.ss($, ($) => ['number not equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.number__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.number__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'greater than': return pl.ss($, ($) => ['greater than', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.greater__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.greater__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'less than': return pl.ss($, ($) => ['less than', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Boolean__Expression.less__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Boolean__Expression.less__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                default: return pl.au($[0])
            }
        })
    }
    function map_Boolean__Expression__Or__Selection<Annotation>($: g_in.T.Boolean__Expression__Or__Selection<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.Boolean__Expression__Or__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.Boolean__Expression__Or__Selection<Annotation> => {
            switch ($[0]) {
                case 'expression': return pl.ss($, ($) => ['expression', map_Boolean__Expression<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => map_Data__Path<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                        })),
                    }
                })])
                default: return pl.au($[0])
            }
        })
    }
    function map_Data__Path<Annotation>($: g_in.T.Data__Path<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.Data__Path<Annotation> {
        return pl.cc($, ($) => {
            const temp_variable: g_out.T.Data__Path.variable<Annotation> = pl.cc($['variable'], ($) => pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out.T.Block.variables.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const temp_tail: g_out.T.Data__Path.tail<Annotation> = pl.cc($['tail'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Data__Path.tail.A<Annotation> => {
                switch ($[0]) {
                    case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                        const temp__lfunction: g_out.T.Data__Path.tail.A.call._lfunction<Annotation> = pl.cc($['function'], ($) => map_Data__Path<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                        }))
                        const temp_type__arguments: g_out.T.Data__Path.tail.A.call.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type__Arguments<Annotation>($, {
                            'global types': $x['global types'],
                        }))
                        const temp_arguments: g_out.T.Data__Path.tail.A.call.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Data__Path<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                        }))
                        return {
                            'function': temp__lfunction,
                            'type arguments': temp_type__arguments,
                            'arguments': temp_arguments,
                        }
                    })])
                    case 'property': return pl.ss($, ($) => ['property', pl.cc($, ($) => {
                        const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>> = [false]
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    })])
                    default: return pl.au($[0])
                }
            })))
            return {
                'variable': temp_variable,
                'tail': temp_tail,
            }
        })
    }
    function map_Expression<Annotation>($: g_in.T.Expression<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
        'type': pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>
    }): g_out.T.Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Expression<Annotation> => {
            switch ($[0]) {
                case 'array literal': return pl.ss($, ($) => ['array literal', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => $.map(($) => map_Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                            'type': [false],
                        }))),
                    }
                })])
                case 'object literal': return pl.ss($, ($) => ['object literal', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                            const temp_properties: g_out.T.Expression.object__literal._ltype.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                                const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>> = [false]
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'type': pl.cc($.type, ($) => map_Expression<Annotation>($, {
                                        'global types': $x['global types'],
                                        'stack': $x['stack'],
                                        'type': [false],
                                    })),
                                }
                            })))
                            return {
                                'properties': temp_properties,
                            }
                        })),
                    }
                })])
                case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                            const temp_arguments: g_out.T.Expression._lfunction._ltype.arguments<Annotation> = pl.cc($['arguments'], ($) => $.map(($) => pl.cc($, ($) => {
                                return null
                            })))
                            const temp_block: g_out.T.Expression._lfunction._ltype.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($, {
                                'global types': $x['global types'],
                                'stack': $x['stack'],
                            }))
                            return {
                                'arguments': temp_arguments,
                                'block': temp_block,
                            }
                        })),
                    }
                })])
                case 'boolean': return pl.ss($, ($) => ['boolean', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => map_Boolean__Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                        })),
                    }
                })])
                case 'numerical': return pl.ss($, ($) => ['numerical', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => map_Numerical__Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                        })),
                    }
                })])
                case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => map_String__Expression<Annotation>($, {
                            'global types': $x['global types'],
                            'stack': $x['stack'],
                        })),
                    }
                })])
                case 'conditional': return pl.ss($, ($) => ['conditional', pl.cc($, ($) => {
                    const temp_test: g_out.T.Expression.conditional.test<Annotation> = pl.cc($['test'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp__ltrue: g_out.T.Expression.conditional._ltrue<Annotation> = pl.cc($['true'], ($) => map_Expression<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                        'type': $x['type'],
                    }))
                    const temp__lfalse: g_out.T.Expression.conditional._lfalse<Annotation> = pl.cc($['false'], ($) => map_Expression<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                        'type': $x['type'],
                    }))
                    return {
                        'test': temp_test,
                        'true': temp__ltrue,
                        'false': temp__lfalse,
                    }
                })])
                case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })])
                case 'symbol': return pl.ss($, ($) => ['symbol', map_Data__Path<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                default: return pl.au($[0])
            }
        })
    }
    function map_Numerical__Expression<Annotation>($: g_in.T.Numerical__Expression<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.Numerical__Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Numerical__Expression<Annotation> => {
            switch ($[0]) {
                case 'minus': return pl.ss($, ($) => ['minus', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Numerical__Expression.minus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Numerical__Expression.minus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'plus': return pl.ss($, ($) => ['plus', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Numerical__Expression.plus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    const temp_right__hand__side: g_out.T.Numerical__Expression.plus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                        'global types': $x['global types'],
                        'stack': $x['stack'],
                    }))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'predecrement': return pl.ss($, ($) => ['predecrement', map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'preincrement': return pl.ss($, ($) => ['preincrement', map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'postdecrement': return pl.ss($, ($) => ['postdecrement', map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'postincrement': return pl.ss($, ($) => ['postincrement', map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'numeric literal': return pl.ss($, ($) => ['numeric literal', $])
                default: return pl.au($[0])
            }
        })
    }
    function map_Numerical__Expression__Or__Selection<Annotation>($: g_in.T.Numerical__Expression__Or__Selection<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.Numerical__Expression__Or__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.Numerical__Expression__Or__Selection<Annotation> => {
            switch ($[0]) {
                case 'expression': return pl.ss($, ($) => ['expression', map_Numerical__Expression<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'selection': return pl.ss($, ($) => ['selection', map_Data__Path<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                default: return pl.au($[0])
            }
        })
    }
    function map_SourceFile<Annotation>($: g_in.T.SourceFile<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    }): g_out.T.SourceFile<Annotation> {
        return pl.cc($, ($) => {
            const temp_symbols: g_out.T.SourceFile.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>($, {
                'global types': $x['global types'],
            }))
            return {
                'symbols': temp_symbols,
            }
        })
    }
    function map_String__Expression<Annotation>($: g_in.T.String__Expression<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.String__Expression<Annotation> {
        return pl.cc($, ($): g_out.T.String__Expression<Annotation> => {
            switch ($[0]) {
                case 'string literal': return pl.ss($, ($) => ['string literal', $])
                default: return pl.au($[0])
            }
        })
    }
    function map_String__Expression__Or__Selection<Annotation>($: g_in.T.String__Expression__Or__Selection<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
        'stack': pt.OptionalValue<g_out.T.Variable__Stack<Annotation>>
    }): g_out.T.String__Expression__Or__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.String__Expression__Or__Selection<Annotation> => {
            switch ($[0]) {
                case 'expression': return pl.ss($, ($) => ['expression', map_String__Expression<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                case 'selection': return pl.ss($, ($) => ['selection', map_Data__Path<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                })])
                default: return pl.au($[0])
            }
        })
    }
    function map_Symbols<Annotation>($: g_in.T.Symbols<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    }): g_out.T.Symbols<Annotation> {
        return $.map(($) => pl.cc($, ($): g_out.T.Symbols.D<Annotation> => {
            switch ($[0]) {
                case 'namespace': return pl.ss($, ($) => ['namespace', pl.cc($, ($) => {
                    const temp_symbols: g_out.T.Symbols.D.namespace.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>($, {
                        'global types': $x['global types'],
                    }))
                    return {
                        'symbols': temp_symbols,
                    }
                })])
                case 'symbol': return pl.ss($, ($) => ['symbol', pl.cc($, ($) => {
                    const temp_type__path: g_out.T.Symbols.D._lsymbol.type__path<Annotation> = pl.cc($['type path'], ($) => map_Type__Path<Annotation>($, {
                        'global types': $x['global types'],
                    }))
                    return {
                        'type path': temp_type__path,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
    }
    function map_Type__Arguments<Annotation>($: g_in.T.Type__Arguments<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    }): g_out.T.Type__Arguments<Annotation> {
        return $.map(($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type__Arguments.D._ltype._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Path<Annotation>($, {
                        'global types': $x['global types'],
                    }))
                    return {
                        'type': temp__ltype,
                    }
                })),
            }
        }))
    }
    function map_Type__Path<Annotation>($: g_in.T.Type__Path<Annotation>, $x: {
        'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    }): g_out.T.Type__Path<Annotation> {
        return pl.cc($, ($) => {
            const temp_namespaces: g_out.T.Type__Path.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $.map(($) => pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })))
            const temp__ltype: g_out.T.Type__Path._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const temp_arguments: g_out.T.Type__Path.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Type__Arguments<Annotation>($, {
                'global types': $x['global types'],
            }))
            return {
                'namespaces': temp_namespaces,
                'type': temp__ltype,
                'arguments': temp_arguments,
            }
        })
    }
    function map_Variable__Stack<Annotation>($: g_in.T.Variable__Stack<Annotation>): g_out.T.Variable__Stack<Annotation> {
        return $.map(($) => pl.cc($, ($) => {
            return null
        }))
    }
    return ($) => {
        return pd.implementMe(`IMPLEMENT resolve`)
    }
}