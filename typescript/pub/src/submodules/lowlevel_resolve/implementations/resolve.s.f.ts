import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../lowlevel"
import * as g_out from "../../lowlevel_possiblyresolved"

import { A } from "../api.generated"

export const $$: A.resolve = () => {

    function map_Block<Annotation>($: g_in.T.Block<Annotation>): g_out.T.Block<Annotation> {
        return pl.cc($, ($) => {
            const temp_variables: g_out.T.Block.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>($))
            const temp_statements: g_out.T.Block.statements<Annotation> = pl.cc($['statements'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Block.statements.A<Annotation> => {
                switch ($[0]) {
                    case 'block': return pl.ss($, ($) => ['block', map_Block<Annotation>($)])
                    case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                        const temp__lfunction: g_out.T.Block.statements.A.call._lfunction<Annotation> = pl.cc($['function'], ($) => map_Expression<Annotation>($))
                        const temp_type__arguments: g_out.T.Block.statements.A.call.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type<Annotation>($))
                        const temp_arguments: g_out.T.Block.statements.A.call.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Expression<Annotation>($))
                        return {
                            'function': temp__lfunction,
                            'type arguments': temp_type__arguments,
                            'arguments': temp_arguments,
                        }
                    })])
                    case 'for': return pl.ss($, ($) => ['for', pl.cc($, ($) => {
                        const temp_initializer: g_out.T.Block.statements.A._lfor.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Variables<Annotation>($))
                        const temp_condition: g_out.T.Block.statements.A._lfor.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($))
                        const temp_incrementer: g_out.T.Block.statements.A._lfor.incrementer<Annotation> = pl.cc($['incrementer'], ($) => map_Expression<Annotation>($))
                        const temp_block: g_out.T.Block.statements.A._lfor.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($))
                        return {
                            'initializer': temp_initializer,
                            'condition': temp_condition,
                            'incrementer': temp_incrementer,
                            'block': temp_block,
                        }
                    })])
                    case 'if': return pl.ss($, ($) => ['if', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lif.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($))
                        const temp_then: g_out.T.Block.statements.A._lif.then<Annotation> = pl.cc($['then'], ($) => map_Block<Annotation>($))
                        const temp__lelse: g_out.T.Block.statements.A._lif._lelse<Annotation> = pl.cc($['else'], ($) => pl.optional(
                            $,
                            ($): pt.OptionalValue<g_out.T.Block<Annotation>> => [true, map_Block<Annotation>($)],
                            () => [false],
                        ))
                        return {
                            'condition': temp_condition,
                            'then': temp_then,
                            'else': temp__lelse,
                        }
                    })])
                    case 'minus assign': return pl.ss($, ($) => ['minus assign', pl.cc($, ($) => {
                        const temp_variable: g_out.T.Block.statements.A.minus__assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>($))
                        const temp_right__hand__side: g_out.T.Block.statements.A.minus__assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                        return {
                            'variable': temp_variable,
                            'right hand side': temp_right__hand__side,
                        }
                    })])
                    case 'plus assign': return pl.ss($, ($) => ['plus assign', pl.cc($, ($) => {
                        const temp_variable: g_out.T.Block.statements.A.plus__assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>($))
                        const temp_right__hand__side: g_out.T.Block.statements.A.plus__assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                        return {
                            'variable': temp_variable,
                            'right hand side': temp_right__hand__side,
                        }
                    })])
                    case 'return': return pl.ss($, ($) => ['return', pl.cc($, ($) => {
                        const temp_expression: g_out.T.Block.statements.A._lreturn.expression<Annotation> = pl.cc($['expression'], ($) => pl.optional(
                            $,
                            ($): pt.OptionalValue<g_out.T.Expression<Annotation>> => [true, map_Expression<Annotation>($)],
                            () => [false],
                        ))
                        return {
                            'expression': temp_expression,
                        }
                    })])
                    case 'switch': return pl.ss($, ($) => ['switch', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lswitch.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($))
                        const temp_cases: g_out.T.Block.statements.A._lswitch.cases<Annotation> = pl.cc($['cases'], ($) => $.map(($) => pl.cc($, ($) => {
                            const temp_block: g_out.T.Block<Annotation> = pl.cc($.type['block'], ($) => map_Block<Annotation>($))
                            return {
                                'annotation': $.annotation,
                                'type': {
                                    'block': temp_block,
                                },
                                'constraint': [false],
                            }
                        })))
                        const temp__ldefault: g_out.T.Block.statements.A._lswitch._ldefault<Annotation> = pl.cc($['default'], ($) => pl.optional(
                            $,
                            ($): pt.OptionalValue<g_out.T.Block<Annotation>> => [true, map_Block<Annotation>($)],
                            () => [false],
                        ))
                        return {
                            'condition': temp_condition,
                            'cases': temp_cases,
                            'default': temp__ldefault,
                        }
                    })])
                    case 'while': return pl.ss($, ($) => ['while', pl.cc($, ($) => {
                        const temp_condition: g_out.T.Block.statements.A._lwhile.condition<Annotation> = pl.cc($['condition'], ($) => map_Expression<Annotation>($))
                        const temp_block: g_out.T.Block.statements.A._lwhile.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($))
                        return {
                            'condition': temp_condition,
                            'block': temp_block,
                        }
                    })])
                    default: return pl.au($[1])
                }
            })))
            return {
                'variables': temp_variables,
                'statements': temp_statements,
            }
        })
    }
    function map_Data__Path<Annotation>($: g_in.T.Data__Path<Annotation>): g_out.T.Data__Path<Annotation> {
        return pl.cc($, ($) => {
            const temp_variable: g_out.T.Data__Path.variable<Annotation> = pl.cc($['variable'], ($) => ({
                'annotation': $.annotation,
                'key': $.key,
                'constraint': [false],
            }))
            const temp_tail: g_out.T.Data__Path.tail<Annotation> = pl.cc($['tail'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Data__Path.tail.A<Annotation> => {
                switch ($[0]) {
                    case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                        const temp__lfunction: g_out.T.Data__Path.tail.A.call._lfunction<Annotation> = pl.cc($['function'], ($) => map_Data__Path<Annotation>($))
                        const temp_type__arguments: g_out.T.Data__Path.tail.A.call.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type<Annotation>($))
                        const temp_arguments: g_out.T.Data__Path.tail.A.call.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Expression<Annotation>($))
                        return {
                            'function': temp__lfunction,
                            'type arguments': temp_type__arguments,
                            'arguments': temp_arguments,
                        }
                    })])
                    case 'property': return pl.ss($, ($) => ['property', ({
                        'annotation': $.annotation,
                        'key': $.key,
                        'constraint': [false],
                    })])
                    default: return pl.au($[1])
                }
            })))
            return {
                'variable': temp_variable,
                'tail': temp_tail,
            }
        })
    }
    function map_Expression<Annotation>($: g_in.T.Expression<Annotation>): g_out.T.Expression<Annotation> {
        return pl.cc($, ($): g_out.T.Expression<Annotation> => {
            switch ($[0]) {
                case 'array literal': return pl.ss($, ($) => ['array literal', $.map(($) => map_Expression<Annotation>($))])
                case 'object literal': return pl.ss($, ($) => ['object literal', pl.cc($, ($) => {
                    const temp_properties: g_out.T.Expression.object__literal.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => ({
                        'type': map_Expression<Annotation>($.type),
                        'annotation': $.annotation,
                        'constraint': [false],
                    })))
                    return {
                        'properties': temp_properties,
                    }
                })])
                case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                    const temp_arguments: g_out.T.Expression._lfunction.arguments<Annotation> = pl.cc($['arguments'], ($) => $.map(($) => pl.cc($, ($) => {
                        return null
                    })))
                    const temp_block: g_out.T.Expression._lfunction.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($))
                    return {
                        'arguments': temp_arguments,
                        'block': temp_block,
                    }
                })])
                case 'and': return pl.ss($, ($) => ['and', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.and.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.and.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'or': return pl.ss($, ($) => ['or', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.or.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.or.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'false': return pl.ss($, ($) => ['false', pl.cc($, ($) => {
                    return null
                })])
                case 'not': return pl.ss($, ($) => ['not', map_Expression<Annotation>($)])
                case 'true': return pl.ss($, ($) => ['true', pl.cc($, ($) => {
                    return null
                })])
                case 'string equals': return pl.ss($, ($) => ['string equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.string__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.string__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'string not equals': return pl.ss($, ($) => ['string not equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.string__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.string__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'number equals': return pl.ss($, ($) => ['number equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.number__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.number__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'number not equals': return pl.ss($, ($) => ['number not equals', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.number__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.number__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'greater than': return pl.ss($, ($) => ['greater than', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.greater__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.greater__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'less than': return pl.ss($, ($) => ['less than', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.less__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.less__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'minus': return pl.ss($, ($) => ['minus', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.minus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.minus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'plus': return pl.ss($, ($) => ['plus', pl.cc($, ($) => {
                    const temp_left__hand__side: g_out.T.Expression.plus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Expression<Annotation>($))
                    const temp_right__hand__side: g_out.T.Expression.plus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>($))
                    return {
                        'left hand side': temp_left__hand__side,
                        'right hand side': temp_right__hand__side,
                    }
                })])
                case 'predecrement': return pl.ss($, ($) => ['predecrement', map_Expression<Annotation>($)])
                case 'preincrement': return pl.ss($, ($) => ['preincrement', map_Expression<Annotation>($)])
                case 'postdecrement': return pl.ss($, ($) => ['postdecrement', map_Expression<Annotation>($)])
                case 'postincrement': return pl.ss($, ($) => ['postincrement', map_Expression<Annotation>($)])
                case 'numeric literal': return pl.ss($, ($) => ['numeric literal', $])
                case 'string literal': return pl.ss($, ($) => ['string literal', $])
                case 'conditional': return pl.ss($, ($) => ['conditional', pl.cc($, ($) => {
                    const temp_test: g_out.T.Expression.conditional.test<Annotation> = pl.cc($['test'], ($) => map_Expression<Annotation>($))
                    const temp__ltrue: g_out.T.Expression.conditional._ltrue<Annotation> = pl.cc($['true'], ($) => map_Expression<Annotation>($))
                    const temp__lfalse: g_out.T.Expression.conditional._lfalse<Annotation> = pl.cc($['false'], ($) => map_Expression<Annotation>($))
                    return {
                        'test': temp_test,
                        'true': temp__ltrue,
                        'false': temp__lfalse,
                    }
                })])
                case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                    return null
                })])
                case 'symbol': return pl.ss($, ($) => ['symbol', map_Data__Path<Annotation>($)])
                default: return pl.au($[1])
            }
        })
    }
    function map_FunctionSignature<Annotation>($: g_in.T.FunctionSignature<Annotation>): g_out.T.FunctionSignature<Annotation> {
        return pl.cc($, ($) => {
            const temp_type__parameters: g_out.T.FunctionSignature.type__parameters<Annotation> = pl.cc($['type parameters'], ($) => map_Type__Parameters<Annotation>($))
            const temp_paramerters: g_out.T.FunctionSignature.paramerters<Annotation> = pl.cc($['paramerters'], ($) => $.map(($) => pl.cc($, ($) => {
                const temp__ltype: g_out.T.FunctionSignature.paramerters.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($))
                return {
                    'type': temp__ltype,
                }
            })))
            const temp_return__type: g_out.T.FunctionSignature.return__type<Annotation> = pl.cc($['return type'], ($) => pl.optional(
                $,
                ($): pt.OptionalValue<g_out.T.Type<Annotation>> => [true, map_Type<Annotation>($)],
                () => [false],
            ))
            return {
                'type parameters': temp_type__parameters,
                'paramerters': temp_paramerters,
                'return type': temp_return__type,
            }
        })
    }
    function map_GlobalTypes<Annotation>($: g_in.T.GlobalTypes<Annotation>): g_out.T.GlobalTypes<Annotation> {
        return $.map(($) => pl.cc($, ($) => {
            const temp__ltype: g_out.T.GlobalTypes.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.GlobalTypes.D._ltype<Annotation> => {
                switch ($[0]) {
                    case 'namespace': return pl.ss($, ($) => ['namespace', pl.cc($, ($) => {
                        const temp_types: g_out.T.GlobalTypes.D._ltype.namespace.types<Annotation> = pl.cc($['types'], ($) => map_GlobalTypes<Annotation>($))
                        return {
                            'types': temp_types,
                        }
                    })])
                    case 'type definition': return pl.ss($, ($) => ['type definition', pl.cc($, ($) => {
                        const temp_parameters: g_out.T.GlobalTypes.D._ltype.type__definition.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Type__Parameters<Annotation>($))
                        const temp__ltype: g_out.T.GlobalTypes.D._ltype.type__definition._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($))
                        return {
                            'parameters': temp_parameters,
                            'type': temp__ltype,
                        }
                    })])
                    default: return pl.au($[1])
                }
            }))
            return {
                'type': temp__ltype,
            }
        }))
    }
    function map_SourceFile<Annotation>($: g_in.T.SourceFile<Annotation>): g_out.T.SourceFile<Annotation> {
        return pl.cc($, ($) => {
            const temp_types: g_out.T.SourceFile.types<Annotation> = pl.cc($['types'], ($) => map_GlobalTypes<Annotation>($))
            const temp_symbols: g_out.T.SourceFile.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>($))
            return {
                'types': temp_types,
                'symbols': temp_symbols,
            }
        })
    }
    function map_Symbols<Annotation>($: g_in.T.Symbols<Annotation>): g_out.T.Symbols<Annotation> {
        return $.map(($) => pl.cc($, ($): g_out.T.Symbols.D<Annotation> => {
            switch ($[0]) {
                case 'namespace': return pl.ss($, ($) => ['namespace', pl.cc($, ($) => {
                    const temp_symbols: g_out.T.Symbols.D.namespace.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>($))
                    return {
                        'symbols': temp_symbols,
                    }
                })])
                case 'variable': return pl.ss($, ($) => ['variable', pl.cc($, ($) => {
                    return null
                })])
                case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                    const temp_signature: g_out.T.Symbols.D._lfunction.signature<Annotation> = pl.cc($['signature'], ($) => pl.cc($, ($) => {
                        const temp_type__path: g_out.T.Symbols.D._lfunction.signature.type__path<Annotation> = pl.cc($['type path'], ($) => map_Type__Path<Annotation>($))
                        return {
                            'type path': temp_type__path,
                        }
                    }))
                    const temp_block: g_out.T.Symbols.D._lfunction.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>($))
                    return {
                        'signature': temp_signature,
                        'block': temp_block,
                    }
                })])
                default: return pl.au($[1])
            }
        }))
    }
    function map_Type<Annotation>($: g_in.T.Type<Annotation>): g_out.T.Type<Annotation> {
        return pl.cc($, ($): g_out.T.Type<Annotation> => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['array', map_Type<Annotation>($)])
                case 'boolean': return pl.ss($, ($) => ['boolean', pl.cc($, ($) => {
                    return null
                })])
                case 'function': return pl.ss($, ($) => ['function', map_FunctionSignature<Annotation>($)])
                case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                    const temp_properties: g_out.T.Type.group.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                        const temp__ltype: g_out.T.Type.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($))
                        return {
                            'type': temp__ltype,
                        }
                    })))
                    return {
                        'properties': temp_properties,
                    }
                })])
                case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                    return null
                })])
                case 'number': return pl.ss($, ($) => ['number', pl.cc($, ($) => {
                    return null
                })])
                case 'optional': return pl.ss($, ($) => ['optional', map_Type<Annotation>($)])
                case 'reference': return pl.ss($, ($) => ['reference', pl.cc($, ($) => {
                    const temp_path: g_out.T.Type.reference.path<Annotation> = pl.cc($['path'], ($) => $.map(($) => ({
                        'annotation': $.annotation,
                        'key': $.key,
                        'constraint': [false],
                    })))
                    return {
                        'path': temp_path,
                    }
                })])
                case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                    return null
                })])
                case 'tagged union': return pl.ss($, ($) => ['tagged union', $.map(($) => map_Type<Annotation>($))])
                default: return pl.au($[1])
            }
        })
    }
    function map_Type__Path<Annotation>($: g_in.T.Type__Path<Annotation>): g_out.T.Type__Path<Annotation> {
        return pl.cc($, ($) => {
            const temp_namespaces: g_out.T.Type__Path.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $.map(($) => ({
                'annotation': $.annotation,
                'key': $.key,
                'constraint': [false],
            })))
            const temp__ltype: g_out.T.Type__Path._ltype<Annotation> = pl.cc($['type'], ($) => ({
                'annotation': $.annotation,
                'key': $.key,
                'constraint': [false],
            }))
            const temp_parameters: g_out.T.Type__Path.parameters<Annotation> = pl.cc($['parameters'], ($) => $.map(($) => map_Type<Annotation>($)))
            return {
                'namespaces': temp_namespaces,
                'type': temp__ltype,
                'parameters': temp_parameters,
            }
        })
    }
    function map_Type__Parameters<Annotation>($: g_in.T.Type__Parameters<Annotation>): g_out.T.Type__Parameters<Annotation> {
        return $.map(($) => map_Type<Annotation>($))
    }
    function map_Variable<Annotation>($: g_in.T.Variable<Annotation>): g_out.T.Variable<Annotation> {
        return pl.cc($, ($) => {
            const temp__ltype: g_out.T.Variable._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($))
            return {
                'type': temp__ltype,
            }
        })
    }
    function map_Variable__Aggregates<Annotation>($: g_in.T.Variable__Aggregates<Annotation>): g_out.T.Variable__Aggregates<Annotation> {
        return $.map(($) => pl.cc($, ($) => {
            return null
        }))
    }
    function map_Variables<Annotation>($: g_in.T.Variables<Annotation>): g_out.T.Variables<Annotation> {
        return $.map(($) => pl.cc($, ($) => {
            const temp_handle: g_out.T.Variables.D.handle<Annotation> = pl.cc($['handle'], ($) => map_Variable<Annotation>($))
            const temp_initializer: g_out.T.Variables.D.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Expression<Annotation>($))
            return {
                'handle': temp_handle,
                'initializer': temp_initializer,
            }
        }))
    }
    return ($) => {
        return pd.implementMe(`IMPLEMENT resolve`)
    }
}