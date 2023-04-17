import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    argResolvedValuePlaceholder,
    array,
    component, constrainedDictionary, dictionary, externalResolvedValue, externalTypePath, globalType, group, grp,
    importedComponent,
    option, optional, paramRef, prop, reference, resolvedValue, taggedUnion, tbd, terminal,
    tu, typePath
} from "lib-liana/dist/submodules/liana/shorthands"

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
            "stack": resolvedValue("Variable Stack"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, group({
            "variables": prop(dictionary(group({
                "type": prop(reference(externalTypePath("typesystem", "Global Types", []), tbd())),
                "initializer": prop(component("Expression", {
                    "stack": paramRef("stack"),
                    "global types": paramRef("global types"),
                    "type": argResolvedValuePlaceholder()
                })),
            }))),
            "statements": prop(array(taggedUnion({
                "block": option(component("Block", {
                    "stack": argResolvedValuePlaceholder(),
                    "global types": paramRef("global types"),
                })),
                // "break": composite("BreakStatement", optional(component("identifier"))),
                "call": option(group({
                    "function": prop(component("Data Path", {
                        "global types": paramRef("global types"),
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "type arguments": prop(component("Type Arguments", {
                        "global types": paramRef("global types"),
                    })),
                    "arguments": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                "for": option(group({
                    "condition": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                    "incrementer": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                    "block": prop(component("Block", {
                        "stack": argResolvedValuePlaceholder(),
                        "global types": paramRef("global types"),

                    })),
                })),
                "if": option(group({
                    "condition": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                    "then": prop(component("Block", {
                        "stack": argResolvedValuePlaceholder(),
                        "global types": paramRef("global types"),

                    })),
                    "else": prop(optional(component("Block", {
                        "stack": argResolvedValuePlaceholder(),
                        "global types": paramRef("global types"),

                    }))),
                })),
                "minus assign": option(group({
                    "variable": prop(component("Data Path", {
                        "global types": paramRef("global types"),
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "right hand side": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                "plus assign": option(group({
                    "variable": prop(component("Data Path", {
                        "global types": paramRef("global types"),
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "right hand side": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                // "labeled": composite("LabeledStatement", group({
                //     "label": member(component("identifier")),
                //     "statement": member(component("statement")),
                // })),
                "return": option(group({
                    "expression": prop(optional(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })))
                })),
                "switch": option(group({
                    "condition": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                    "cases": prop(constrainedDictionary(externalTypePath("typesystem", "Type", [tu("tagged union")]), tbd(), group({
                        "block": prop(component("Block", {
                            "stack": argResolvedValuePlaceholder(),
                            "global types": paramRef("global types"),

                        }))
                    }))),
                    "default": prop(optional(component("Block", {
                        "stack": argResolvedValuePlaceholder(),
                        "global types": paramRef("global types"),

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
                    "condition": prop(component("Expression", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types"),
                        "type": argResolvedValuePlaceholder()
                    })),
                    "block": prop(component("Block", {
                        "stack": argResolvedValuePlaceholder(),
                        "global types": paramRef("global types"),

                    })),
                })),
            })))
        })),
        "Boolean Expression": globalType({
            "stack": resolvedValue("Variable Stack"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, taggedUnion({
            "and": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "or": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "false": option(group({})),
            "not": option(component("Boolean Expression Or Selection", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "true": option(group({})),
            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "less than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
        })),
        "Boolean Expression Or Selection": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "expression": option(component("Boolean Expression", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "selection": option(component("Data Path", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            }), [externalTypePath("typesystem", "Type", []), "boolean"]),
        })),
        "Data Path": globalType({
            "stack": resolvedValue("Variable Stack"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, group({
            "variable": prop(reference(typePath("Block", [grp("variables")]), tbd())),
            "tail": prop(array(taggedUnion({
                "call": option(group({
                    "function": prop(component("Data Path", {
                        "global types": paramRef("global types"),
                        "stack": paramRef("stack")
                    })),
                    "type arguments": prop(component("Type Arguments", {
                        "global types": paramRef("global types"),
                    })),
                    "arguments": prop(component("Data Path", {
                        "stack": paramRef("stack"),
                        "global types": paramRef("global types")
                    })),
                })),
                "property": option(reference(externalTypePath("typesystem", "Type", [tu("group"), grp("properties")]), tbd())),
            }))),
            // "property access": option(group({
            //     "context": prop(component("Expression", {})),
            //     "property": prop(component("Expression", {})),
            // })),
        })),
        "Expression": globalType({
            "type": externalResolvedValue("typesystem", "Type"),
            "stack": resolvedValue("Variable Stack"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, taggedUnion({
            //array
            "array literal": option(array(component("Expression", {
                "stack": paramRef("stack"),
                "global types": paramRef("global types"),
                "type": argResolvedValuePlaceholder()
            })), [externalTypePath("typesystem", "Type", []), "array"]),
            //object
            "object literal": option(group({
                "properties": prop(constrainedDictionary(externalTypePath("typesystem", "Type", [tu("group"), grp("properties")]), tbd(), component("Expression", {
                    "stack": paramRef("stack"),
                    "global types": paramRef("global types"),
                    "type": argResolvedValuePlaceholder()
                }))),
            }), [externalTypePath("typesystem", "Type", []), "group"]),
            //function (inline function)
            "function": option(group({
                "arguments": prop(dictionary(group({}))), //no type info needed
                //"signature": prop(component("FunctionSignature", {})),
                "block": prop(component("Block", {
                    "stack": paramRef("stack"),
                    "global types": paramRef("global types"),

                })),
            }), [externalTypePath("typesystem", "Type", []), "function"]),
            //boolean
            "boolean": option(component("Boolean Expression", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            }), [externalTypePath("typesystem", "Type", []), "boolean"]),
            //numerical
            "numerical": option(component("Numerical Expression", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            }), [externalTypePath("typesystem", "Type", []), "number"]),
            //string
            "string": option(component("String Expression", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            }), [externalTypePath("typesystem", "Type", []), "string"]),
            //any
            "conditional": option(group({
                "test": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "true": prop(component("Expression", {
                    "stack": paramRef("stack"),
                    "global types": paramRef("global types"),
                    "type": paramRef("type"),
                })),
                "false": prop(component("Expression", {
                    "stack": paramRef("stack"),
                    "global types": paramRef("global types"),
                    "type": paramRef("type"),
                })),
            })),
            //"identifier": option(terminal("identifier")),
            // "new": option(group({
            //     "class": prop(terminal("identifier")),
            //     "parameters": prop(dictionary(component("Expression", {}))),
            // })),
            // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
            "null": option(group({}), [externalTypePath("typesystem", "Type", []), "null"]),
            //"parenthesized": option(component("Expression", {})),
            "symbol": option(component("Data Path", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
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
            "stack": resolvedValue("Variable Stack"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, taggedUnion({
            "minus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "plus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types"),
                    "stack": paramRef("stack")
                })),
            })),
            "predecrement": option(component("Numerical Expression Or Selection", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "preincrement": option(component("Numerical Expression Or Selection", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "postdecrement": option(component("Numerical Expression Or Selection", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "postincrement": option(component("Numerical Expression Or Selection", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "numeric literal": option(terminal("numeric literal")),
        })),
        "Numerical Expression Or Selection": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "expression": option(component("Numerical Expression", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })),
            "selection": option(component("Data Path", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })/*, externalTypePath("typesystem", "Type", [tu("number"), ])*/),
        })),
        "SourceFile": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types")
        }, group({
            "symbols": prop(component("Symbols", {
                "global types": paramRef("global types")
            })),
        })),
        "String Expression": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "string literal": option(terminal("string literal")),
        })),
        "String Expression Or Selection": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "expression": option(component("String Expression", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")

            })),
            "selection": option(component("Data Path", {
                "global types": paramRef("global types"),
                "stack": paramRef("stack")
            })/*, externalTypePath("typesystem", "Type", [tu("string"), ])*/),
        })),
        "Symbols": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {

                "global types": paramRef("global types")
                }))
            })),
            "symbol": option(group({
                "type path": prop(component("Type Path", {
                    "global types": paramRef("global types")
                })),
            })),
        }))),
        "Type Arguments": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types")
        }, constrainedDictionary(externalTypePath("typesystem", "Type Parameters", []), tbd(), group({
            "type": prop(component("Type Path", {
                "global types": paramRef("global types")
            }))
        }))),
        "Type Path": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types")
        }, group({
            "namespaces": prop(array(reference(externalTypePath("typesystem", "Global Types" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(externalTypePath("typesystem", "Global Types", []), /*constrain to type defintion*/ tbd())),
            "arguments": prop(component("Type Arguments", {
                "global types": paramRef("global types")

            })),
        })),
        "Variable Stack": globalType({}, dictionary(group({}))),
    }),
}