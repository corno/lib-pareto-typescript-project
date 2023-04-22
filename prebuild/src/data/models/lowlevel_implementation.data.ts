import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    aResolvedValue,
    array,
    component, constrainedDictionary, constrainedOption, dictConstraint, dictionary, externalGlobalTypeSelection, externalTypeSelection, globalType, globalTypeResult, globalTypeSelection, group, grp,
    option, optionConstraint, optional,
    optionalResult,
    pExternalResolvedValue,
    pResolvedValue,
    prop,
    resolvedValueReference,
    taggedUnion, terminal,
    tu, typeSelection, valSel, vgrp,
} from "lib-liana/dist/submodules/liana/shorthands"
import { result } from 'lib-liana/dist/submodules/liana/shorthands'

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
        "typesystem": null,
    }),
    'terminal types': d({
        "numeric literal": null,
        "string literal": null,
        "identifier": null,
    }),
    'global types': d({
        "Block": globalType({
            "function": pExternalResolvedValue("typesystem", "Function", false), //needed to determine the type of the return expression
            "global types": pExternalResolvedValue("typesystem", "Global Types", false), //needed for 'Type Path'
            "stack": pResolvedValue("Variables", false), //needed for 'Data Path' and assignment statements
        }, group({
            "variables": prop(component("Variables", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack")),
            })),
            "statements": prop(component("Statements", {
                "function": aResolvedValue(valSel("function")),
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("variables"))
            }))
        })),
        "Boolean Expression": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, taggedUnion({
            "and": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "or": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "false": option(group({})),
            "not": option(component("Boolean Expression Or Selection", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "true": option(group({})),
            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "less than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
        })),
        "Boolean Expression Or Selection": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "expression": option(component("Boolean Expression", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "selection": option(component("Data Path", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"), /*constrain to boolean*/)
            })),
        })),
        "Data Path Tail": globalType({
            "current": pExternalResolvedValue("typesystem", "Type", false),
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, optional(
            group({
                "step": prop(taggedUnion({
                    "call": option(group({
                        "function": prop(component("Data Path", {
                            "global types": aResolvedValue(valSel("global types")),
                            "stack": aResolvedValue(valSel("stack"))
                        })), /*constraint tagged union: type === function*/
                        "type arguments": prop(component("Type Arguments", {
                            "type": aResolvedValue(valSel("function" /*component constraint*/)),
                            "global types": aResolvedValue(valSel("global types")),
                        })),
                        "arguments": prop(component("Data Path", {
                            "stack": aResolvedValue(valSel("stack")),
                            "global types": aResolvedValue(valSel("global types"))
                        })),
                    })),
                    "property": option(resolvedValueReference(valSel("current", vgrp("properties")), externalTypeSelection("typesystem", "Type", [tu("group"), grp("properties")]))),
                })),
                "tail": prop(component("Data Path Tail", {}))
            }),
            optionalResult(externalGlobalTypeSelection("typesystem", "Type"), result(), valSel("current")),
        ), globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), result())),
        "Data Path": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, group({
            "variable": prop(resolvedValueReference(valSel("stack"), typeSelection("Variables", []))),
            "tail": prop(component("Data Path Tail", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            // "property access": option(group({
            //     "context": prop(component("Expression", {})),
            //     "property": prop(component("Expression", {})),
            // })),
        })),
        "Expression": globalType({
            "type": pExternalResolvedValue("typesystem", "Type", false),
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, taggedUnion({
            //array
            "array literal": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "array", externalTypeSelection("typesystem", "Type", []))
            }, array(component("Expression", {
                "stack": aResolvedValue(valSel("stack")),
                "global types": aResolvedValue(valSel("global types")),
                "type": aResolvedValue(valSel("out"))
            }))),
            //object
            "object literal": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "group", externalTypeSelection("typesystem", "Type", []))
            }, group({
                "properties": prop(constrainedDictionary(
                    { "X": dictConstraint(valSel("TBD"), externalTypeSelection("typesystem", "Type", [tu("group"), grp("properties")])) },
                    component("Expression", {
                        "stack": aResolvedValue(valSel("stack")),
                        "global types": aResolvedValue(valSel("global types")),
                        "type": aResolvedValue(valSel("out"))
                    })
                )),
            })),
            //function (inline function)
            "function": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "function", externalTypeSelection("typesystem", "Type", []))
            }, group({
                "parameters": prop(dictionary(group({}))), //no type info needed
                //"signature": prop(component("FunctionSignature", {})),
                "variables": prop(component("Variables", {
                    "global types": aResolvedValue(valSel("global types")),
                    //"parameters": [true, aResolvedValue(valSel("parameters"))],
                    "stack": aResolvedValue(valSel("stack")),
                })),
                "statements": prop(component("Statements", {
                    "function": aResolvedValue(valSel("out")),
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("variables"))
                })),
            })),
            //boolean
            "boolean": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "boolean", externalTypeSelection("typesystem", "Type", []))
            }, component("Boolean Expression", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            //numerical
            "numerical": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "number", externalTypeSelection("typesystem", "Type", []))
            }, component("Numerical Expression", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            //string
            "string": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "string", externalTypeSelection("typesystem", "Type", []))
            }, component("String Expression", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            //any
            "conditional": option(group({
                "test": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "true": prop(component("Expression", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                    "type": aResolvedValue(valSel("type")),
                })),
                "false": prop(component("Expression", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                    "type": aResolvedValue(valSel("type")),
                })),
            })),
            //"identifier": option(terminal("identifier")),
            // "new": option(group({
            //     "class": prop(terminal("identifier")),
            //     "parameters": prop(dictionary(component("Expression", {}))),
            // })),
            // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
            "null": constrainedOption({
                "out": optionConstraint(valSel("TBD"), "null", externalTypeSelection("typesystem", "Type", []))
            }, group({

            })),
            //"parenthesized": option(component("Expression", {})),
            "symbol": option(component("Data Path", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            // "template": composite("TemplateExpression", group({
            //     "head": member(empty("TemplateHead", { "text": terminal() })),
            //     "spans": member(array(composite("TemplateSpan", group({
            //         "expression": member(component("Expression")),
            //         "type": member(choice({
            //             "middle": empty("TemplateMiddle", { "text": terminal() }),
            //             "tail": empty("TemplateTail", { "text": terminal() }),
            //         })),
            //     })))),
            // })),
        })),
        "Numerical Expression": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, taggedUnion({
            "minus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "plus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack"))
                })),
            })),
            "predecrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "preincrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "postdecrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "postincrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "numeric literal": option(terminal("numeric literal")),
        })),
        "Numerical Expression Or Selection": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "expression": option(component("Numerical Expression", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "selection": option(component("Data Path", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })/*, externalTypeSelection("typesystem", "Type", [tu("number"), ])*/),
        })),
        "SourceFile": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false)
        }, group({
            "symbols": prop(component("Symbols", {
                "global types": aResolvedValue(valSel("global types"))
            })),
        })),
        "Assign": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, group({
            "variable": prop(component("Data Path", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "right hand side": prop(component("Expression", {
                "stack": aResolvedValue(valSel("stack")),
                "global types": aResolvedValue(valSel("global types")),
                "type": aResolvedValue(valSel("type"))
            })),
        })),
        "Statements": globalType({
            "function": pExternalResolvedValue("typesystem", "Function", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, array(taggedUnion({
            "block": option(component("Block", {
                "function": aResolvedValue(valSel("function")),
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack")),
            })),
            // "break": composite("BreakStatement", optional(component("identifier"))),
            "call": option(group({
                "function": prop(component("Data Path", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                })),
                "type arguments": prop(component("Type Arguments", {
                    "type parameters": aResolvedValue(valSel("function")),
                    "global types": aResolvedValue(valSel("global types")),
                })),
                "arguments": prop(constrainedDictionary(
                    { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Function", [grp("parameters")])) },
                    component("Expression", {
                        "stack": aResolvedValue(valSel("stack")),
                        "global types": aResolvedValue(valSel("global types")),
                        "type": aResolvedValue(valSel("parameter")),
                    })
                )),
            })),
            "for": option(group({
                "condition": prop(component("Boolean Expression", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                })),
                "incrementer": prop(component("Assign", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                })),
                "block": prop(component("Block", {
                    "function": aResolvedValue(valSel("function")),
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                })),
            })),
            "if": option(group({
                "condition": prop(component("Boolean Expression Or Selection", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                })),
                "then": prop(component("Block", {
                    "function": aResolvedValue(valSel("function")),
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),

                })),
                "else": prop(optional(component("Block", {
                    "function": aResolvedValue(valSel("function")),
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                }))),
            })),
            "assign": option(component("Assign", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack")),
            })),
            "minus assign": option(group({
                "target": prop(component("Data Path", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                })), /*must be number*/
                "right hand side": prop(component("Expression", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                    "type": aResolvedValue(valSel("target"))
                })),
            })),
            "plus assign": option(group({
                "target": prop(component("Data Path", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                })), /*must be number*/
                "right hand side": prop(component("Expression", {
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                    "type": aResolvedValue(valSel("target"))
                })),
            })),
            // "labeled": composite("LabeledStatement", group({
            //     "label": member(component("identifier")),
            //     "statement": member(component("statement")),
            // })),
            "return": option(group({
                "expression": prop(optional(component("Expression", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                    "type": aResolvedValue(valSel("function"/*return type*/))
                })))
            })),
            "switch": option(group({
                "condition": prop(component("Data Path", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                })), /*must be tagged union */
                "cases": prop(constrainedDictionary(
                    { "option": dictConstraint(valSel("condition"), externalTypeSelection("typesystem", "Type", [tu("tagged union")])) },
                    group({
                        "block": prop(component("Block", {
                            "function": aResolvedValue(valSel("function")),
                            "global types": aResolvedValue(valSel("global types")),
                            "stack": aResolvedValue(valSel("stack")),
                        }))
                    })
                )),
                "default": prop(optional(component("Block", {
                    "function": aResolvedValue(valSel("function")),
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                }))),
            })),
            // "throw": option(component("Expression", {})),
            // "try": option(group({
            //     "block": prop(component("Block", {})),
            //     "catchClause": prop(group({
            //         "variable": prop(component("variableDeclaration")),
            //         "block": member(component("block")),
            //     }))),
            // }))),
            "while": option(group({
                "condition": prop(component("Boolean Expression Or Selection", {
                    "stack": aResolvedValue(valSel("stack")),
                    "global types": aResolvedValue(valSel("global types")),
                })),
                "block": prop(component("Block", {
                    "function": aResolvedValue(valSel("function")),
                    "global types": aResolvedValue(valSel("global types")),
                    "stack": aResolvedValue(valSel("stack")),
                })),
            })),
        }))),
        "String Expression": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "string literal": option(terminal("string literal")),
        })),
        "String Expression Or Selection": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "expression": option(component("String Expression", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })),
            "selection": option(component("Data Path", {
                "global types": aResolvedValue(valSel("global types")),
                "stack": aResolvedValue(valSel("stack"))
            })/*, externalTypeSelection("typesystem", "Type", [tu("string"), ])*/),
        })),
        "Symbols": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {
                    "global types": aResolvedValue(valSel("global types"))
                }))
            })),
            "symbol": option(group({
                "type path": prop(component("Type Path", {
                    "global types": aResolvedValue(valSel("global types"))
                })),
            })),
        }))),
        "Type Arguments": globalType({
            "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false)
        }, constrainedDictionary(
            { "x": dictConstraint(valSel("type parameters"), externalTypeSelection("typesystem", "Type Parameters", [])) },
            group({
                "type": prop(component("Type Path", {
                    "global types": aResolvedValue(valSel("global types"))
                }))
            })
        )),
        "Type Path": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false)
        }, group({
            "namespaces": prop(array(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Global Types" /*constrain type to namespace*/, [])))),
            "type": prop(resolvedValueReference(valSel("namespaces"), externalTypeSelection("typesystem", "Global Types", []), /*constrain to type defintion*/)),
            "arguments": prop(component("Type Arguments", {
                "type": aResolvedValue(valSel("type")),
                "global types": aResolvedValue(valSel("global types"))
            })),
        })),
        "Variables": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, dictionary(group({
            "type": prop(taggedUnion({
                "parameter": option(group({})),
                "stack": option(group({})),
                "local": option(group({
                    "type": prop(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Global Types", []))),
                    "initializer": prop(component("Expression", {
                        "stack": aResolvedValue(valSel("stack")),
                        "global types": aResolvedValue(valSel("global types")),
                        "type": aResolvedValue(valSel("type")),
                    })),
                })),
            })),
        }))),
    }),
}