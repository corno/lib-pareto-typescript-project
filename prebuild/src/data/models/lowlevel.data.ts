import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    argument,
    array,
    component, constrainedDictionary, delayedParameter, dictionary, directParameter, globalType, group, grp,
    option, optional, prop, reference, taggedUnion, tbd, terminal,
    tu, typePath
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
    }),
    'terminal types': d({
        "numeric literal": null,
        "string literal": null,
        "identifier": null,
    }),
    'global types': d({
        "Block": globalType({
            "variables": directParameter("Variable Aggregates"),

        }, group({
            "variables": prop(component("Variables", {})),
            "statements": prop(array(taggedUnion({
                "block": option(component("Block", { "variables": argument(false) })),
                // "break": composite("BreakStatement", optional(component("identifier"))),
                "call": option(group({
                    "function": prop(component("Data Path", { "type": argument(false) })),
                    "type arguments": prop(component("Type", { "global types": argument(false) })),
                    "arguments": prop(component("Expression", { "type": argument(false) })),
                })),
                "for": option(group({
                    "initializer": prop(component("Variables", {})),
                    "condition": prop(component("Expression", { "type": argument(false) })),
                    "incrementer": prop(component("Expression", { "type": argument(false) })),
                    "block": prop(component("Block", { "variables": argument(false) })),
                })),
                "if": option(group({
                    "condition": prop(component("Expression", { "type": argument(false) })),
                    "then": prop(component("Block", { "variables": argument(false) })),
                    "else": prop(optional(component("Block", { "variables": argument(false) }))),
                })),
                "minus assign": option(group({
                    "variable": prop(component("Data Path", { "variables": argument(false) })),
                    "right hand side": prop(component("Expression", { "type": argument(false) })),
                })),
                "plus assign": option(group({
                    "variable": prop(component("Data Path", { "variables": argument(false) })),
                    "right hand side": prop(component("Expression", { "type": argument(false) })),
                })),
                // "labeled": composite("LabeledStatement", group({
                //     "label": member(component("identifier")),
                //     "statement": member(component("statement")),
                // })),
                "return": option(group({
                    "expression": prop(optional(component("Expression", { "type": argument(false) })))
                })),

                "switch": option(group({
                    "condition": prop(component("Expression", { "type": argument(false) })),
                    "cases": prop(constrainedDictionary(typePath("Type", [tu("tagged union")]), tbd(), group({
                        "block": prop(component("Block", { "variables": argument(false) }))
                    }))),
                    "default": prop(optional(component("Block", { "variables": argument(false) }))),
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
                    "condition": prop(component("Expression", { "type": argument(false) })),
                    "block": prop(component("Block", { "variables": argument(false) })),
                })),
            })))
        })),
        "Data Path": globalType({
            "variables": directParameter("Variable Aggregates"),
        }, group({
            "variable": prop(reference(typePath("Variable Aggregates", []), tbd())),
            "tail": prop(array(taggedUnion({
                "call": option(group({
                    "function": prop(component("Data Path", { "variables": argument(false) })),
                    "type arguments": prop(component("Type", { "global types": argument(false) })),//can I define types inline? Or only refer to them?
                    "arguments": prop(component("Expression", { "type": argument(false) })),
                })),
                "property": option(reference(typePath("Type", [tu("group"), grp("properties")]), tbd())),
            }))),


            // "property access": option(group({
            //     "context": prop(component("Expression", {})),
            //     "property": prop(component("Expression", {})),
            // })),
        })),
        "String Expression Or Selection": globalType({
            "variables": directParameter("Variable Aggregates"),
        }, taggedUnion({
            "expression": option(component("String Expression", {})),
            "selection": option(component("Data Path", { "variables": argument(false) })/*, typePath("Type", [tu("string"), ])*/),
        })),
        "String Expression": globalType({
            "variables": directParameter("Variable Aggregates"),
        }, taggedUnion({
            "string literal": option(terminal("string literal")),
        })),
        "Numerical Expression Or Selection": globalType({
            "variables": directParameter("Variable Aggregates"),
        }, taggedUnion({
            "expression": option(component("Numerical Expression", {
                "variables": argument(false),
            })),
            "selection": option(component("Data Path", {
                "variables": argument(false)
            })/*, typePath("Type", [tu("number"), ])*/),
        })),
        "Numerical Expression": globalType({ "variables": directParameter("Variable Aggregates") }, taggedUnion({
            "minus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "variables": argument(false),
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "variables": argument(false),
                })),
            })),
            "plus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "variables": argument(false),
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "variables": argument(false),
                })),
            })),
            "predecrement": option(component("Numerical Expression Or Selection", {
                "variables": argument(false),
            })),
            "preincrement": option(component("Numerical Expression Or Selection", {
                "variables": argument(false),
            })),
            "postdecrement": option(component("Numerical Expression Or Selection", {
                "variables": argument(false),
            })),
            "postincrement": option(component("Numerical Expression Or Selection", {
                "variables": argument(false),
            })),
            "numeric literal": option(terminal("numeric literal")),
        })),
        "Boolean Expression Or Selection": globalType({
            "variables": directParameter("Variable Aggregates"),
        }, taggedUnion({
            "expression": option(component("Boolean Expression", {
                "variables": argument(false),
            })),
            "selection": option(component("Data Path", { "variables": argument(false) }), typePath("Type", [tu("boolean"),])),
        })),
        "Boolean Expression": globalType({
            "variables": directParameter("Type"),
        }, taggedUnion({
            "and": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "variables": argument(false),
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "variables": argument(false),
                })),
            })),
            "or": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "variables": argument(false),
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "variables": argument(false),
                })),
            })),
            "false": option(group({})),
            "not": option(component("Boolean Expression Or Selection", {
                "variables": argument(false),
            })),
            "true": option(group({})),

            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {})),
                "right hand side": prop(component("String Expression Or Selection", {})),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {})),
                "right hand side": prop(component("String Expression Or Selection", {})),
            })),

            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
            "less than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
        })),
        "Expression": globalType({ "type": directParameter("Type") }, taggedUnion({
            //array
            "array literal": option(array(component("Expression", { "type": argument(false) })), typePath("Type", [tu("array"),])),

            //object
            "object literal": option(group({
                "properties": prop(constrainedDictionary(typePath("Type", [tu("group"), grp("properties")]), tbd(), component("Expression", { "type": argument(false) }))),
            }), typePath("Type", [tu("group"),])),

            //function (inline function)
            "function": option(group({
                "arguments": prop(dictionary(group({}))), //no type info needed
                //"signature": prop(component("FunctionSignature", {})),
                "block": prop(component("Block", { "variables": argument(false) })),
            }), typePath("Type", [tu("function"),])),

            //boolean
            "boolean": option(component("Boolean Expression", { "variables": argument(false) }), typePath("Type", [tu("boolean"),])),

            //numerical
            "numerical": option(component("Numerical Expression", { "variables": argument(false) }), typePath("Type", [tu("number"),])),

            //string
            "string": option(component("String Expression", { "variables": argument(false) }), typePath("Type", [tu("string"),])),

            //any
            "conditional": option(group({
                "test": prop(component("Boolean Expression Or Selection", {})),
                "true": prop(component("Expression", { "type": argument(false) })),
                "false": prop(component("Expression", { "type": argument(false) })),
            })),
            //"identifier": option(terminal("identifier")),
            // "new": option(group({
            //     "class": prop(terminal("identifier")),
            //     "parameters": prop(dictionary(component("Expression", {}))),
            // })),
            // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
            "null": option(group({}), typePath("Type", [tu("null"),])),
            //"parenthesized": option(component("Expression", {})),


            "symbol": option(component("Data Path", { "variables": argument(false) })),
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
        "Global Types": globalType({}, dictionary(group({
            "type": prop(taggedUnion({
                "namespace": option(group({
                    "types": prop(component("Global Types", {})),
                })),
                "type definition": option(group({
                    "parameters": prop(component("Type Parameters", { "global types": argument(true), })),
                    "type": prop(component("Type", { "global types": argument(true) })),
                })),

                // "interface": composite("InterfaceDeclaration", group({
                //     "modifiers": member(component("modifiers")),
                //     "name": member(component("identifier")),
                //     "typeParameters": member(component("typeParameters")),
                //     "signature": member(component("typeSignatures")),
                // })),
                //"interface": option(group({})),


                // "function": composite("FunctionDeclaration", group({
                //     "modifiers": member(component("modifiers")),
                //     "name": member(component("identifier")),
                //     "definition": member(component("functionDefinition")),
                // })),

            }))
        }))),
        "SourceFile": globalType({}, group({
            // "export": composite("ExportDeclaration", component("stringLiteral")),


            // "import": composite("ImportDeclaration", group({
            //     "clause": member(composite("ImportClause", choice({
            //         "named": composite("NamedImports", array(composite("ImportSpecifier", group({
            //             "name": member(component("identifier")),
            //             "as": member(optional(component("identifier"))),
            //         })))),
            //         "namespace": composite("NamespaceImport", component("identifier")),
            //     }))),
            //     "file": member(component("stringLiteral")),
            // })),
            "types": prop(component("Global Types", {})),
            "symbols": prop(component("Symbols", {})),
        })),
        "Symbols": globalType({}, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {}))
            })),
            "symbol": option(group({
                "type path": prop(component("Type Path", {})),
            })),
        }))),
        "Type": globalType({
            "global types": delayedParameter("Global Types"),
        }, taggedUnion({
            // "any": empty("AnyKeyword"),
            "array": option(component("Type", { "global types": argument(true) })),
            "boolean": option(group({})),

            "function": option(group({
                "type parameters": prop(component("Type Parameters", { "global types": argument(true), })),
                "paramerters": prop(dictionary(group({
                    "type": prop(component("Type", { "global types": argument(true) })),
                }))),
                "return type": prop(optional(component("Type", { "global types": argument(true) }))),
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "type": prop(component("Type", { "global types": argument(true) }))
                })))
            })),

            // "never": empty("NeverKeyword"),
            "null": option(group({})),
            "number": option(group({})),
            "optional": option(component("Type", { "global types": argument(true) })),
            // "optional": composite("OptionalType", component("type")),
            // "parenthesized": composite("ParenthesizedType", component("type")),


            // "typeReference": composite("TypeReference", group({
            //     "id": member(choice({
            //         "identifier": component("identifier"),
            //         "qualifiedName": composite("QualifiedName", group({
            //             "context": member(component("identifier")),
            //             "type": member(component("identifier")),
            //         })),
            //     })),
            //     "parameters": member(array(component("type"))),
            // })),
            "reference": option(group({
                "path": prop(array(reference(typePath("Type", [tu("group"), grp("properties")]), tbd()))),
            })),
            "string": option(group({})),
            //"string literal": option(terminal("string literal")),
            // "tuple": option(array(component("Type", { "global types": argument(true) }))),
            // "tuple": composite("TupleType", array(component("type"))),
            // "typeLiteral": composite("TypeLiteral", component("typeSignatures")),
            // "undefined": empty("UndefinedKeyword"),
            "tagged union": option(dictionary(component("Type", { "global types": argument(true) }))),
            // "void": empty("VoidKeyword"),
        })),
        "Delayed Type Path": globalType({
            "global types": delayedParameter("Global Types"),
        }, group({
            "namespaces": prop(array(reference(typePath("Global Types" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(typePath("Global Types", []), /*constrain to type defintion*/ tbd())),
            "parameters": prop(dictionary(component("Type", { "global types": argument(true) }))),
        })),
        "Type Path": globalType({
            "global types": directParameter("Global Types"),
        }, group({
            "namespaces": prop(array(reference(typePath("Global Types" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(typePath("Global Types", []), /*constrain to type defintion*/ tbd())),
            "parameters": prop(dictionary(component("Type", { "global types": argument(true) }))), //this should be a reference
        })),
        "Type Parameters": globalType({
            "global types": delayedParameter("Global Types"),
        }, dictionary(component("Type", { "global types": argument(true) }))),
        // "variable": composite("VariableStatement", group({
        //     "modifiers": member(component("modifiers")),
        //     "variableDeclarationList": member(component("variableDeclarationList")),
        // })),
        "Variable": globalType({}, group({
            "type": prop(component("Type", { "global types": argument(false) })),
        })),
        "Variable Aggregates": globalType({}, dictionary(group({
            "source": prop(taggedUnion({
                "parameter": option(group({})),
                "variable": option(group({})),
                "aggregate": option(group({})),
            }))
        }))),
        "Variables": globalType({}, dictionary(group({
            "handle": prop(component("Variable", {})),
            "initializer": prop(component("Expression", { "type": argument(false) })),
        })))
    }),
}