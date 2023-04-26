import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    aResolvedValue,
    array,
    component, constrainedDictionary, constrainedOption, dictConstraint, dictionary, externalGlobalTypeSelection, tempExternalTypeSelection, globalType, globalTypeResult, globalTypeSelection, group, t_grp,
    option, optionConstraint, optional,
    optionalResult,
    pExternalResolvedValue,
    pResolvedValue,
    prop,
    resolvedValueReference,
    taggedUnion, terminal,
    t_tu, tempTypeSelection, valSel, sgrp, scomponent, resultTaggedUnion, ref, soptional, staggedunion, nothing, nothingResult, snothing, t_dict,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
        "typesystem": null,
    }),
    'labels': {
        'atom types': d({
            "numeric literal": null,
            "string literal": null,
            "identifier": null,
        }),
    },
    'global types': d({
        // "Block": globalType({
        //     "parameters": pExternalResolvedValue("typesystem", "Parameters", false), //needed to determine the type of the return expression
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false), //needed for 'Type Path'
        //     "stack": pResolvedValue("Variables", false), //needed for 'Address Selection' and assignment statements
        // }, group({
        //     "variables": prop(component("Variables", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack")),
        //     })),
        //     "statements": prop(component("Statements", {
        //         "function": aResolvedValue(valSel("function")),
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("variables"))
        //     }))
        // })),
        // "Boolean Expression": globalType({
        //     "stack": pResolvedValue("Variables", false),
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        // }, taggedUnion({
        //     "and": option(group({
        //         "left hand side": prop(component("Boolean Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Boolean Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "or": option(group({
        //         "left hand side": prop(component("Boolean Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Boolean Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "false": option(group({})),
        //     "not": option(component("Boolean Expression Or Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "true": option(group({})),
        //     //boolean/string
        //     "string equals": option(group({
        //         "left hand side": prop(component("String Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("String Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "string not equals": option(group({
        //         "left hand side": prop(component("String Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("String Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     //boolean/number
        //     "number equals": option(group({
        //         "left hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "number not equals": option(group({
        //         "left hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "greater than": option(group({
        //         "left hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "less than": option(group({
        //         "left hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        // })),
        // "Boolean Expression Or Selection": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        //     "stack": pResolvedValue("Variables", false),
        // }, taggedUnion({
        //     "expression": option(component("Boolean Expression", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "selection": option(component("Address Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"), /*constrain to boolean*/)
        //     })),
        // })),
        "Address Selection Tail": globalType(
            {
                "current address": pExternalResolvedValue("typesystem", "Type", false),
                "variable stack": pResolvedValue("Variables", false),
                "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
            },
            optional(
                group({
                    "step": prop(taggedUnion({
                        "call": constrainedOption({
                            "address function": optionConstraint(valSel("current address"), "address function", tempExternalTypeSelection("typesystem", "Type", []))
                        }, group({
                            // "function": prop(component("Address Selection", {
                            //     "namespace": aResolvedValue(valSel("namespace")),
                            //     "stack": aResolvedValue(valSel("stack"))
                            // })), /*constraint tagged union: type === address function*/
                            "type arguments": prop(component("Type Arguments", {
                                "type": aResolvedValue(valSel("function" /*component constraint*/)),
                                "namespace": aResolvedValue(valSel("namespace")),
                            })),
                            "arguments": prop(constrainedDictionary({
                                "parameter": dictConstraint(valSel("address function", sgrp("parameters")), tempExternalTypeSelection("typesystem", "Parameters", []))
                            }, component("Expression", {
                                "stack": aResolvedValue(valSel("stack")),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "type": aResolvedValue(valSel("parameter", sgrp("type", scomponent())))
                            }))),
                        })),
                        "property": constrainedOption({
                            "group": optionConstraint(valSel("current address"), "group", tempExternalTypeSelection("typesystem", "Type", []))
                        }, resolvedValueReference(valSel("group", sgrp("properties")), tempExternalTypeSelection("typesystem", "Type", [t_tu("group"), t_grp("properties")]))),
                    })),
                    "tail": prop(component("Address Selection Tail", {}))
                }),
                optionalResult(externalGlobalTypeSelection("typesystem", "Type"), sgrp("tail"), valSel("current")),
            ),
            globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), soptional())
        ),
        "Address Selection": globalType(
            {
                "stack": pResolvedValue("Variables", false),
                "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
            },
            group({
                "variable": prop(resolvedValueReference(valSel("stack"), tempTypeSelection("Variables", []))),
                "tail": prop(component("Address Selection Tail", {
                    "current address": aResolvedValue(valSel("variable", ref(sgrp("type", staggedunion())))),
                    "namespace": aResolvedValue(valSel("namespace")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            }),
            globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), sgrp("tail", scomponent()))
        ),
        "Expression": globalType(
            {
                "expected type": pExternalResolvedValue("typesystem", "Type", false),
                "namespace": pExternalResolvedValue("typesystem", "Type", false),
                "stack": pResolvedValue("Variables", false),
            },
            taggedUnion({
                // //array
                // "array literal": constrainedOption({
                //     "out": optionConstraint(valSel("type"), "array", externalTypeSelection("typesystem", "Type", []))
                // }, array(component("Expression", {
                //     "expected type": aResolvedValue(valSel("out")),
                //     "namespace": aResolvedValue(valSel("namespace")),
                //     "stack": aResolvedValue(valSel("stack")),
                // }))),
                // //object
                // "object literal": constrainedOption({
                //     "out": optionConstraint(valSel("type"), "group", externalTypeSelection("typesystem", "Type", []))
                // }, group({
                //     "properties": prop(constrainedDictionary(
                //         { "X": dictConstraint(valSel("out", sgrp("properties")), externalTypeSelection("typesystem", "Type", [tu("group"), grp("properties")])) },
                //         component("Expression", {
                //             "expected type": aResolvedValue(valSel("out")),
                //             "namespace": aResolvedValue(valSel("namespace")),
                //             "stack": aResolvedValue(valSel("stack")),
                //         })
                //     )),
                // })),
                // //function (inline function)
                // "address function": constrainedOption({
                //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type", []))
                // }, group({
                //     "parameters": prop(dictionary(group({}))), //no type info needed
                //     //"signature": prop(component("FunctionSignature", {})),
                //     "variables": prop(component("Variables", {
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                //         "stack": aResolvedValue(valSel("stack")),
                //     })),
                //     "statements": prop(component("Statements", {
                //         "function": aResolvedValue(valSel("out")),
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         "stack": aResolvedValue(valSel("variables"))
                //     })),
                //     "return selection": prop(component("Address Selection", {
                //         // "function": aResolvedValue(valSel("out")),
                //         // "namespace": aResolvedValue(valSel("namespace")),
                //         // "stack": aResolvedValue(valSel("variables"))
                //     })),
                // })),
                // "value function": constrainedOption({
                //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type", []))
                // }, group({
                //     "parameters": prop(dictionary(group({}))), //no type info needed
                //     //"signature": prop(component("FunctionSignature", {})),
                //     "variables": prop(component("Variables", {
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                //         "stack": aResolvedValue(valSel("stack")),
                //     })),
                //     "statements": prop(component("Statements", {
                //         "function": aResolvedValue(valSel("out")),
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         "stack": aResolvedValue(valSel("variables"))
                //     })),
                //     "return expression": prop(component("Expression", {
                //         // "function": aResolvedValue(valSel("out")),
                //         // "namespace": aResolvedValue(valSel("namespace")),
                //         // "stack": aResolvedValue(valSel("variables"))
                //     })),
                // })),
                // // "procedure": constrainedOption({
                // //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type", []))
                // // }, group({
                // //     "parameters": prop(dictionary(group({}))), //no type info needed
                // //     //"signature": prop(component("FunctionSignature", {})),
                // //     "variables": prop(component("Variables", {
                // //         "namespace": aResolvedValue(valSel("namespace")),
                // //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                // //         "stack": aResolvedValue(valSel("stack")),
                // //     })),
                // //     "statements": prop(component("Statements", {
                // //         "function": aResolvedValue(valSel("out")),
                // //         "namespace": aResolvedValue(valSel("namespace")),
                // //         "stack": aResolvedValue(valSel("variables"))
                // //     })),
                // // })),
                // //boolean
                // "boolean": constrainedOption({
                //     "out": optionConstraint(valSel("type"), "boolean", externalTypeSelection("typesystem", "Type", []))
                // }, component("Boolean Expression", {
                //     "namespace": aResolvedValue(valSel("namespace")),
                //     "stack": aResolvedValue(valSel("stack"))
                // })),
                // //numerical
                // "numerical": constrainedOption({
                //     "out": optionConstraint(valSel("type"), "number", externalTypeSelection("typesystem", "Type", []))
                // }, component("Numerical Expression", {
                //     "namespace": aResolvedValue(valSel("namespace")),
                //     "stack": aResolvedValue(valSel("stack"))
                // })),
                //string
                "string": constrainedOption({
                    "out": optionConstraint(valSel("type"), "string", tempExternalTypeSelection("typesystem", "Type", []))
                }, component("String Expression", {
                    "namespace": aResolvedValue(valSel("namespace")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                // //any
                // "conditional": option(group({
                //     "test": prop(component("Boolean Expression Or Selection", {
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         "stack": aResolvedValue(valSel("stack"))
                //     })),
                //     "true": prop(component("Expression", {
                //         "stack": aResolvedValue(valSel("stack")),
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         "type": aResolvedValue(valSel("type")),
                //     })),
                //     "false": prop(component("Expression", {
                //         "expected type": aResolvedValue(valSel("expected type")),
                //         "stack": aResolvedValue(valSel("stack")),
                //         "namespace": aResolvedValue(valSel("namespace")),
                //     })),
                // })),
                // //"identifier": option(terminal("identifier")),
                // // "new": option(group({
                // //     "class": prop(terminal("identifier")),
                // //     "parameters": prop(dictionary(component("Expression", {}))),
                // // })),
                // // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
                // "null": constrainedOption({
                //     "out": optionConstraint(valSel("TBD"), "null", externalTypeSelection("typesystem", "Type", []))
                // }, group({

                // })),
                // //"parenthesized": option(component("Expression", {})),
                // "symbol": option(component("Address Selection", { //something that is stored
                //     "namespace": aResolvedValue(valSel("namespace")),
                //     "stack": aResolvedValue(valSel("stack"))
                // })),
                // // "template": composite("TemplateExpression", group({
                // //     "head": member(empty("TemplateHead", { "text": terminal() })),
                // //     "spans": member(array(composite("TemplateSpan", group({
                // //         "expression": member(component("Expression")),
                // //         "type": member(choice({
                // //             "middle": empty("TemplateMiddle", { "text": terminal() }),
                // //             "tail": empty("TemplateTail", { "text": terminal() }),
                // //         })),
                // //     })))),
                // // })),
            })
        ),
        // "Numerical Expression": globalType({
        //     "stack": pResolvedValue("Variables", false),
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        // }, taggedUnion({
        //     "minus": option(group({
        //         "left hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "plus": option(group({
        //         "left hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //         "right hand side": prop(component("Numerical Expression Or Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })),
        //     })),
        //     "predecrement": option(component("Numerical Expression Or Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "preincrement": option(component("Numerical Expression Or Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "postdecrement": option(component("Numerical Expression Or Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "postincrement": option(component("Numerical Expression Or Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "numeric literal": option(terminal("numeric literal")),
        // })),
        // "Numerical Expression Or Selection": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        //     "stack": pResolvedValue("Variables", false),
        // }, taggedUnion({
        //     "expression": option(component("Numerical Expression", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "selection": option(component("Address Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })/*, externalTypeSelection("typesystem", "Type", [tu("number"), ])*/),
        // })),
        // "SourceFile": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false)
        // }, group({
        //     "symbols": prop(component("Symbols", {
        //         "namespace": aResolvedValue(valSel("namespace"))
        //     })),
        // })),
        // "Assign": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        //     "stack": pResolvedValue("Variables", false),
        // }, group({
        //     "target": prop(component("Address Selection", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "right hand side": prop(component("Expression", {
        //         "expected type": aResolvedValue(valSel("target", scomponent())),
        //         "stack": aResolvedValue(valSel("stack")),
        //         "namespace": aResolvedValue(valSel("namespace")),
        //     })),
        // })),
        // "Statements": globalType({
        //     "parameters": pExternalResolvedValue("typesystem", "Parameters", false),
        //     "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        //     "stack": pResolvedValue("Variables", false),
        // }, array(taggedUnion({
        //     "block": option(component("Block", {
        //         "parameters": aResolvedValue(valSel("parameters")),
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack")),
        //     })),
        //     "with": option(group({
        //         "address": prop(component("Address Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack")),
        //         })),
        //         "action": prop(taggedUnion({
        //             "call": constrainedOption({
        //                 "procedure address": optionConstraint(valSel("address", scomponent()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
        //             }, group({
        //                 "type arguments": prop(component("Type Arguments", {
        //                     "type parameters": aResolvedValue(valSel("function")),
        //                     "namespace": aResolvedValue(valSel("namespace")),
        //                 })),
        //                 "arguments": prop(constrainedDictionary(
        //                     { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters", [])) },
        //                     component("Expression", {
        //                         "expected type": aResolvedValue(valSel("parameter")),
        //                         "stack": aResolvedValue(valSel("stack")),
        //                         "namespace": aResolvedValue(valSel("namespace")),
        //                     })
        //                 )),
        //             })),
        //             "assign": option(component("Assign", {
        //                 "namespace": aResolvedValue(valSel("namespace")),
        //                 "stack": aResolvedValue(valSel("stack")),
        //             })),
        //             "minus assign": constrainedOption({
        //                 "number address": optionConstraint(valSel("address", scomponent()), "number", typeSelection("Foo", []))
        //             }, group({/*must be number*/
        //                 "right hand side": prop(component("Number Expression Or Selection", {
        //                     "namespace": aResolvedValue(valSel("namespace")),
        //                     "stack": aResolvedValue(valSel("stack")),
        //                 })),
        //             })),
        //             "plus assign": constrainedOption({
        //                 "number address": optionConstraint(valSel("address", scomponent()), "number", typeSelection("Foo", []))
        //             }, group({/*must be number*/
        //                 "right hand side": prop(component("Expression", {
        //                     "namespace": aResolvedValue(valSel("namespace")),
        //                     "stack": aResolvedValue(valSel("stack")),
        //                 })),
        //             })),
        //             "switch": constrainedOption({
        //                 "tagged union address": optionConstraint(valSel("address", scomponent()), "tagged union", typeSelection("Foo", []))
        //             }, group({
        //                 "cases": prop(constrainedDictionary(
        //                     { "option": dictConstraint(valSel("tagged union address", sgrp("options")), externalTypeSelection("typesystem", "Type", [tu("tagged union"), grp("options")])) },
        //                     group({
        //                         "block": prop(component("Block", {
        //                             "function": aResolvedValue(valSel("function")),
        //                             "namespace": aResolvedValue(valSel("namespace")),
        //                             "stack": aResolvedValue(valSel("stack")),
        //                         }))
        //                     })
        //                 )),
        //                 "default": prop(optional(component("Block", {
        //                     "function": aResolvedValue(valSel("function")),
        //                     "namespace": aResolvedValue(valSel("namespace")),
        //                     "stack": aResolvedValue(valSel("stack")),
        //                 }))),
        //             })),
        //         }))
        //     })),
        //     "for": option(group({
        //         "condition": prop(component("Boolean Expression", {
        //             "stack": aResolvedValue(valSel("stack")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //         })),
        //         "incrementer": prop(component("Assign", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack")),
        //         })),
        //         "block": prop(component("Block", {
        //             "function": aResolvedValue(valSel("function")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack")),
        //         })),
        //     })),
        //     "if": option(group({
        //         "condition": prop(component("Boolean Expression Or Selection", {
        //             "stack": aResolvedValue(valSel("stack")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //         })),
        //         "then": prop(component("Block", {
        //             "function": aResolvedValue(valSel("function")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack")),

        //         })),
        //         "else": prop(optional(component("Block", {
        //             "function": aResolvedValue(valSel("function")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack")),
        //         }))),
        //     })),
        //     // "labeled": composite("LabeledStatement", group({
        //     //     "label": member(component("identifier")),
        //     //     "statement": member(component("statement")),
        //     // })),
        //     // "return": option(group({
        //     //     "expression": prop(optional(component("Expression", {
        //     //         "expected type": aResolvedValue(valSel("function", sgrp("return type", result()))),
        //     //         "stack": aResolvedValue(valSel("stack")),
        //     //         "namespace": aResolvedValue(valSel("namespace")),
        //     //     })))
        //     // })),
        //     // "throw": option(component("Expression", {})),
        //     // "try": option(group({
        //     //     "block": prop(component("Block", {})),
        //     //     "catchClause": prop(group({
        //     //         "variable": prop(component("variableDeclaration")),
        //     //         "block": member(component("block")),
        //     //     }))),
        //     // }))),
        //     "while": option(group({
        //         "condition": prop(component("Boolean Expression Or Selection", {
        //             "stack": aResolvedValue(valSel("stack")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //         })),
        //         "block": prop(component("Block", {
        //             "function": aResolvedValue(valSel("function")),
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack")),
        //         })),
        //     })),
        // }))),
        "String Expression": globalType(
            {
                "namespace": pExternalResolvedValue("typesystem", "Type", false),
                "stack": pResolvedValue("Variables", false),
            },
            taggedUnion({
                "string literal": option(terminal("string literal")),
            }))
        ,
        // "String Expression Or Selection": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        //     "stack": pResolvedValue("Variables", false),
        // }, taggedUnion({
        //     "expression": option(component("String Expression", {
        //         "namespace": aResolvedValue(valSel("namespace")),
        //         "stack": aResolvedValue(valSel("stack"))
        //     })),
        //     "selection": option(group({
        //         "selection": prop(component("Address Selection", {
        //             "namespace": aResolvedValue(valSel("namespace")),
        //             "stack": aResolvedValue(valSel("stack"))
        //         })/*, externalTypeSelection("typesystem", "Type", [tu("string"), ])*/),
        //         "cast to string": prop(taggedUnion({
        //             "string": constrainedOption({
        //                 "string": optionConstraint(valSel("selection", scomponent()), "string", externalTypeSelection("typesystem", "Type", []))
        //             }, group({}))
        //         }))
        //     })),
        // })),
        // "Symbols": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Type", false),
        // }, dictionary(taggedUnion({
        //     "namespace": option(group({
        //         "symbols": prop(component("Symbols", {
        //             "namespace": aResolvedValue(valSel("namespace"))
        //         }))
        //     })),
        //     "symbol": option(group({
        //         "type path": prop(component("Type Selection", {
        //             "namespace": aResolvedValue(valSel("namespace"))
        //         })),
        //     })),
        // }))),
        "Type Arguments": globalType(
            {
                "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                "namespace": pExternalResolvedValue("typesystem", "Type", false)
            },
            constrainedDictionary(
                { "x": dictConstraint(valSel("type parameters"), tempExternalTypeSelection("typesystem", "Type Parameters", [])) },
                group({
                    "type": prop(component("Type Selection", {
                        "namespace": aResolvedValue(valSel("namespace"))
                    }))
                })
            )
        ),
        "Type Selection Tail": globalType(
            {
                "namespace": pExternalResolvedValue("typesystem", "Type", false)
            },
            optional(
                group({
                    //"step type": prop(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/, []))),
                    "tail": prop(component("Type Selection Tail", {
                        "namespace": aResolvedValue(valSel("namespace"))
                    })),
                }),
                optionalResult(externalGlobalTypeSelection("typesystem", "Type"), sgrp("tail", scomponent()), valSel("namespace"))),
            globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), soptional())),
        "Type Selection": globalType(
            {
                "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
            },
            group({
                "referenced type": prop(resolvedValueReference(valSel("namespace"), tempExternalTypeSelection("typesystem", "Namespace", []))),
                "type of referenced type": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"),
                    {
                        "namespace": constrainedOption(
                            {
                                "referenced namespace": optionConstraint(valSel("referenced type", ref()), "namespace", tempExternalTypeSelection("typesystem", "Namespace", [t_dict(), t_grp("type")]))
                            },
                            component("Type Selection", {
                                "namespace": aResolvedValue(valSel("namespace"))
                            }),
                            scomponent()
                        ),
                        "type definition": constrainedOption(
                            {
                                "referenced type definition": optionConstraint(valSel("referenced type", ref()), "type definition", tempExternalTypeSelection("typesystem", "Namespace", [t_dict(), t_grp("type")]))
                            },
                            nothing(nothingResult(externalGlobalTypeSelection("typesystem", "Type"), valSel("referenced type definition"))),
                            snothing(),
                            
                        )
                    }))
            }),
            // group({
            //     // "steps": prop(array(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/, [])))),
            //     "type": prop(resolvedValueReference(valSel("namespace"), externalTypeSelection("typesystem", "Namespace", []), /*constrain to type defintion*/)),
            //     "arguments": prop(component("Type Arguments", {
            //         "type": aResolvedValue(valSel("type")),
            //         "namespace": aResolvedValue(valSel("namespace"))
            //     })),
            // }),
            globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), sgrp("type of referenced type", ref()))
        ),
        "Variables": globalType(
            {
                "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                "parameters": pExternalResolvedValue("typesystem", "Parameters", false),
                "stack": pResolvedValue("Variables", false),
            },
            dictionary(group({
                "type": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"), {
                    "parameter": option(group({
                        "parameter": prop(resolvedValueReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters", []))),
                    }), sgrp("parameter", ref())),
                    "stack": option(group({})),
                    "local": option(group({
                        "type": prop(resolvedValueReference(valSel("namespace"), tempExternalTypeSelection("typesystem", "Namespace", []))),
                        "initializer": prop(component("Expression", {
                            "expected type": aResolvedValue(valSel("type")),
                            "stack": aResolvedValue(valSel("stack")),
                            "namespace": aResolvedValue(valSel("namespace")),
                        })),
                    })),
                })),
            }))
        ),
    }),
}