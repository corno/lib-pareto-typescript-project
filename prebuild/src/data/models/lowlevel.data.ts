import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component, constrainedDictionary, dictionary, globalType, group, grp, importedComponent, option, optional, prop, reference, taggedUnion, tbd, terminal, tu, typePath
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
        "Block": globalType({}, group({
            "variables": prop(component("Variables", {})),
            "statements": prop(array(taggedUnion({
                "block": option(component("Block", {})),
                // "break": composite("BreakStatement", optional(component("identifier"))),
                "call": option(group({
                    "function": prop(component("Expression", {})),
                    "type arguments": prop(component("Type", {})),
                    "arguments": prop(component("Expression", {})),
                })),
                "for": option(group({
                    "initializer": prop(component("Variables", {})),
                    "condition": prop(component("Expression", {})),
                    "incrementer": prop(component("Expression", {})),
                    "block": prop(component("Block", {})),
                })),
                "if": option(group({
                    "condition": prop(component("Expression", {})),
                    "then": prop(component("Block", {})),
                    "else": prop(optional(component("Block", {}))),
                })),
                "minus assign": option(group({
                    "variable": prop(component("Data Path", {})),
                    "right hand side": prop(component("Expression", {})),
                })),
                "plus assign": option(group({
                    "variable": prop(component("Data Path", {})),
                    "right hand side": prop(component("Expression", {})),
                })),
                // "labeled": composite("LabeledStatement", group({
                //     "label": member(component("identifier")),
                //     "statement": member(component("statement")),
                // })),
                "return": option(group({
                    "expression": prop(optional(component("Expression", {})))
                })),

                "switch": option(group({
                    "condition": prop(component("Expression", {})),
                    "cases": prop(constrainedDictionary(typePath("Type", []), tbd(), group({
                        "block": prop(component("Block", {}))
                    }))),
                    "default": prop(optional(component("Block", {}))),
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
                    "condition": prop(component("Expression", {})),
                    "block": prop(component("Block", {})),
                })),
            })))
        })),
        "Data Path": globalType({}, group({
            "variable": prop(reference(typePath("Variable", []), tbd())),
            "tail": prop(array(taggedUnion({
                "call": option(group({
                    "function": prop(component("Data Path", {})),
                    "type arguments": prop(component("Type", {})),
                    "arguments": prop(component("Expression", {})),
                })),
                "property": option(reference(typePath("Type", [tu("group"), grp("properties")]), tbd())),
            }))),


            // "property access": option(group({
            //     "context": prop(component("Expression", {})),
            //     "property": prop(component("Expression", {})),
            // })),
        })),
        "Expression": globalType({}, taggedUnion({
            //array
            "array literal": option(array(component("Expression", {}))),

            //object
            "object literal": option(group({
                "properties": prop(constrainedDictionary(typePath("Type", [tu("group"), grp("properties")]), tbd(), component("Expression", {}))),
            })),

            //function
            "function": option(group({
                "arguments": prop(dictionary(group({}))), //no type info needed
                //"signature": prop(component("FunctionSignature", {})),
                "block": prop(component("Block", {})),
            })),

            //boolean
            "and": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "or": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "false": option(group({})),
            "not": option(component("Expression", {})),
            "true": option(group({})),

            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),

            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "less than": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),

            //numerical
            "minus": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "plus": option(group({
                "left hand side": prop(component("Expression", {})),
                "right hand side": prop(component("Expression", {})),
            })),
            "predecrement": option(component("Expression", {})),
            "preincrement": option(component("Expression", {})),
            "postdecrement": option(component("Expression", {})),
            "postincrement": option(component("Expression", {})),
            "numeric literal": option(terminal("numeric literal")),

            //string
            "string literal": option(terminal("string literal")),


            //any
            "conditional": option(group({
                "test": prop(component("Expression", {})),
                "true": prop(component("Expression", {})),
                "false": prop(component("Expression", {})),
            })),
            //"identifier": option(terminal("identifier")),
            // "new": option(group({
            //     "class": prop(terminal("identifier")),
            //     "parameters": prop(dictionary(component("Expression", {}))),
            // })),
            // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
            "null": option(group({})),
            //"parenthesized": option(component("Expression", {})),


            "symbol": option(component("Data Path", {})),
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
        "FunctionSignature": globalType({}, group({
            "type parameters": prop(component("Type Parameters", {})),
            "paramerters": prop(dictionary(group({
                "type": prop(component("Type", {})),
            }))),
            "return type": prop(optional(component("Type", {}))),
        })),
        "GlobalTypes": globalType({}, dictionary(group({
            "type": prop(taggedUnion({
                "namespace": option(group({
                    "types": prop(component("GlobalTypes", {})),
                })),
                "type definition": option(group({
                    "parameters": prop(component("Type Parameters", {})),
                    "type": prop(component("Type", {})),
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
            "types": prop(component("GlobalTypes", {})),
            "symbols": prop(component("Symbols", {})),
        })),
        "Symbols": globalType({}, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {}))
            })),
            "variable": option(group({})),
            "function": option(group({
                "signature": prop(group({
                    "type path": prop(component("Type Path", {})),
                })),
                "block": prop(component("Block", {})),
            })),
        }))),
        "Type": globalType({}, taggedUnion({
            // "any": empty("AnyKeyword"),
            "array": option(component("Type", {})),
            "boolean": option(group({})),

            "function": option(component("FunctionSignature", {})),
            "group": option(group({
                "properties": prop(group({
                    "type": prop(component("Type", {}))
                }))
            })),

            // "never": empty("NeverKeyword"),
            "null": option(group({})),
            "number": option(group({})),
            "optional": option(component("Type", {})),
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
            // "tuple": option(array(component("Type", {}))),
            // "tuple": composite("TupleType", array(component("type"))),
            // "typeLiteral": composite("TypeLiteral", component("typeSignatures")),
            // "undefined": empty("UndefinedKeyword"),
            "tagged union": option(dictionary(component("Type", {}))),
            // "void": empty("VoidKeyword"),
        })),
        "Type Path": globalType({}, group({
            "namespaces": prop(array(reference(typePath("GlobalTypes" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(typePath("GlobalTypes", []), /*constrain to type defintion*/ tbd())),
            "parameters": prop(dictionary(component("Type", {}))),
        })),
        "Type Parameters": globalType({}, dictionary(component("Type", {}))),
        // "variable": composite("VariableStatement", group({
        //     "modifiers": member(component("modifiers")),
        //     "variableDeclarationList": member(component("variableDeclarationList")),
        // })),
        "Variable": globalType({}, group({
            "type": prop(component("Type", {})),
        })),
        "Variables": globalType({}, dictionary(group({
            "handle": prop(component("Variable", {})),
            "initializer": prop(component("Expression", {})),
        })))
    }),
}