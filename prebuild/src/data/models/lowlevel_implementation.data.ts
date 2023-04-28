import * as pd from 'pareto-core-data'

import * as g_liana2algorithm from "lib-liana/dist/submodules/liana2algorithm"
import {
    aResolvedValue,
    component, constrainedDictionary,
    constrainedOption, dictConstraint,
    dictionary, externalGlobalTypeSelection,
    globalTypeDeclaration,
    globalTypeDefinition,
    globalTypeSelection,
    group,
    nothing, nothingResult,
    option, optionConstraint, optional,
    optionalResult,
    pExternalResolvedValue,
    pResolvedValue,
    prop,
    resolvedValueReference,
    resultTaggedUnion,
    s_component,
    s_reference,
    s_group,
    s_nothing,
    s_optional, s_taggedunion,
    t_dict,
    t_grp,
    t_tu,
    taggedUnion,
    tempExternalTypeSelection,
    tempTypeSelection,
    terminal,
    valSel,
    tailSel,
    varSel,
    array,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana2algorithm.T.CreateResolverParameters<pd.SourceLocation> = {

    'in': "../../lowlevel_implementation",
    'out': {
        'root': "../../lowlevel_implementation_possiblyresolved",
        'subs': pd.d({
            "typesystem": "../../lowlevel_typesystem_possiblyresolved"
        }),
    },
    'model': {
        'type library': {
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
            'global types': {
                'declarations': d({
                    "A Result": globalTypeDeclaration({}),
                    "A tagged union with result": globalTypeDeclaration({}),
                    "A tagged union with constrained option": globalTypeDeclaration({}),
                    "A tagged union with constrained option and result": globalTypeDeclaration({}),
                    "A dictionary with constraint": globalTypeDeclaration({}),
                    "A optional with result": globalTypeDeclaration({
                        "result param": pResolvedValue("A Result", false),
                    }),
                    "Address Selection Tail": globalTypeDeclaration(
                        {
                            "current address": pExternalResolvedValue("typesystem", "Type", false),
                            "variable stack": pResolvedValue("Variables", false),
                            "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        },
                        externalGlobalTypeSelection("typesystem", "Type")
                    ),
                    "Address Selection": globalTypeDeclaration(
                        {
                            "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                            "variable stack": pResolvedValue("Variables", false),
                        },
                        externalGlobalTypeSelection("typesystem", "Type"),
                    ),
                    "Expression": globalTypeDeclaration({
                        "expected type": pExternalResolvedValue("typesystem", "Type", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),
                    "String Expression": globalTypeDeclaration({
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),
                    "Type Arguments": globalTypeDeclaration({
                        "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    }),
                    "Type Selection": globalTypeDeclaration(
                        {
                            "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                        },
                        externalGlobalTypeSelection("typesystem", "Type"),
                    ),
                    "Variables": globalTypeDeclaration({
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "parameters": pExternalResolvedValue("typesystem", "Parameters", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),
                    "Source File": globalTypeDeclaration({
                        //"namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    }),

                    "String Expression Or Selection": globalTypeDeclaration({
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),
                    "Assign": globalTypeDeclaration({
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),

                    "Numerical Expression Or Selection": globalTypeDeclaration({
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),

                    "Numerical Expression": globalTypeDeclaration({
                        "variable stack": pResolvedValue("Variables", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    }),

                    "Boolean Expression": globalTypeDeclaration({
                        "variable stack": pResolvedValue("Variables", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    }),
                    "Statements": globalTypeDeclaration({
                        "parameters": pExternalResolvedValue("typesystem", "Parameters", false),
                        "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),

                    "Block": globalTypeDeclaration({
                        "parameters": pExternalResolvedValue("typesystem", "Parameters", false), //needed to determine the type of the return expression
                        "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false), //needed for 'Type Path'
                        "variable stack": pResolvedValue("Variables", false), //needed for 'Address Selection' and assignment statements
                    }),
                    "Boolean Expression Or Selection": globalTypeDeclaration({
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    }),
                }),
                'definitions': d({
                    "A Result": globalTypeDefinition(
                        group({
                            "foo": prop(terminal("identifier")),
                        })
                    ),
                    "A tagged union with result": globalTypeDefinition(
                        group({
                            "tu": prop(resultTaggedUnion(globalTypeSelection("A Result"), {
                                "a": option(group({
                                    "rslt": prop(component("A Result", {}))
                                }), tailSel(s_group("rslt")))
                            }))
                        })
                    ),
                    "A tagged union with constrained option": globalTypeDefinition(
                        group({
                            "tu1": prop(taggedUnion({
                                "a": option(group({
                                    "bar": prop(terminal("identifier")),
                                }))
                            })),
                            "tu2": prop(taggedUnion({
                                "a": constrainedOption({
                                    "opt constraint": optionConstraint(valSel("tu1"), "a", tempTypeSelection("A tagged union with constrained option", t_grp("tu1")))
                                }, group({
                                    "rslt": prop(component("A Result", {}))
                                }))
                            }))
                        })
                    ),
                    "A tagged union with constrained option and result": globalTypeDefinition(
                        group({
                            "tu1": prop(taggedUnion({
                                "a": option(group({
                                    "bar": prop(terminal("identifier")),
                                }))
                            })),
                            "tu2": prop(resultTaggedUnion(globalTypeSelection("A Result"), ({
                                "a": constrainedOption({
                                    "opt constraint": optionConstraint(valSel("tu1"), "a", tempTypeSelection("A tagged union with constrained option", t_grp("tu1")))
                                }, group({
                                    "rslt": prop(component("A Result", {}))
                                }), tailSel(s_group("rslt")))
                            }))),
                        })
                    ),
                    "A dictionary with constraint": globalTypeDefinition(
                        group({
                            "dict": prop(dictionary(group({}))),
                            "constrained dict": prop(constrainedDictionary(
                                {
                                    "a constraint": dictConstraint(valSel("dict"), tempTypeSelection("A dictionary with constraint", t_grp("dict")))
                                },
                                group({}),
                            )),
                        })
                    ),
                    "A optional with result": globalTypeDefinition(
                        group({
                            "opt": prop(optional(group({
                                "rslt": prop(component("A Result", {}))
                            }), optionalResult(globalTypeSelection("A Result"), tailSel(s_group("rslt")), valSel("result param"))))
                        })
                    ),

                    "Block": globalTypeDefinition(
                        group({
                            "variables": prop(component("Variables", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "parameters": aResolvedValue(valSel("parameters")),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                            })),
                            "statements": prop(component("Statements", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "parameters": aResolvedValue(valSel("parameters")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                                "variable stack": aResolvedValue(valSel("variables"))
                            }))
                        })
                    ),
                    "Boolean Expression": globalTypeDefinition(
                        taggedUnion({
                            "and": option(group({
                                "left hand side": prop(component("Boolean Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Boolean Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "or": option(group({
                                "left hand side": prop(component("Boolean Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Boolean Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "false": option(group({})),
                            "not": option(component("Boolean Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "true": option(group({})),
                            // //boolean/string
                            "string equals": option(group({
                                "left hand side": prop(component("String Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("String Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "string not equals": option(group({
                                "left hand side": prop(component("String Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("String Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            // //boolean/number
                            "number equals": option(group({
                                "left hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "number not equals": option(group({
                                "left hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "greater than": option(group({
                                "left hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "less than": option(group({
                                "left hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                        })
                    ),
                    "Boolean Expression Or Selection": globalTypeDefinition(
                        taggedUnion({
                            "expression": option(component("Boolean Expression", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "selection": option(group({
                                "selection": prop(component("Address Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "cast to boolean": prop(taggedUnion({
                                    "boolean": constrainedOption({
                                        "boolean": optionConstraint(valSel("selection", s_component()), "boolean", tempExternalTypeSelection("typesystem", "Type"))
                                    }, group({}))
                                }))
                            })),
                        })
                    ),
                    "Address Selection Tail": globalTypeDefinition(
                        optional(
                            group({
                                "step": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"), {
                                    "call": constrainedOption({
                                        "address function": optionConstraint(valSel("current address"), "address function", tempExternalTypeSelection("typesystem", "Type"))
                                    }, group({
                                        // "function": prop(component("Address Selection", {
                                        //     "namespace": aResolvedValue(valSel("namespace")),
                                        //     "variable stack": aResolvedValue(valSel("variable stack"))
                                        // })), /*constraint tagged union: type === address function*/
                                        "type arguments": prop(component("Type Arguments", {
                                            "type parameters": aResolvedValue(valSel("address function", s_group("type parameters"))),
                                            "namespace": aResolvedValue(valSel("namespace")),
                                        })),
                                        "arguments": prop(constrainedDictionary({
                                            "parameter": dictConstraint(valSel("address function", s_group("parameters")), tempExternalTypeSelection("typesystem", "Parameters"))
                                        }, component("Expression", {
                                            "expected type": aResolvedValue(valSel("parameter", s_group("type"))),
                                            "namespace": aResolvedValue(valSel("namespace")),
                                            "variable stack": aResolvedValue(valSel("variable stack")),
                                        }))),
                                    }), varSel("address function", s_group("return type"))),
                                    "property": constrainedOption(
                                        {
                                            "group": optionConstraint(valSel("current address"), "group", tempExternalTypeSelection("typesystem", "Type"))
                                        },
                                        resolvedValueReference(valSel("group", s_group("properties")), tempExternalTypeSelection("typesystem", "Type", t_tu("group", t_grp("properties")))),
                                        tailSel(s_reference(s_group("type"))),
                                    ),
                                })),
                                "tail": prop(component("Address Selection Tail", {
                                    "current address": aResolvedValue(valSel("step", s_taggedunion())),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                }))
                            }),
                            optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("current address")),
                        ),
                        tailSel(s_optional()),
                    ),
                    "Address Selection": globalTypeDefinition(
                        group({
                            "variable": prop(resolvedValueReference(valSel("variable stack"), tempTypeSelection("Variables"))),
                            "tail": prop(component("Address Selection Tail", {
                                "current address": aResolvedValue(valSel("variable", s_reference(s_group("type", s_taggedunion())))),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        }),
                        tailSel(s_group("tail", s_component())),
                    ),
                    "Expression": globalTypeDefinition(
                        taggedUnion({
                            // //array
                            "array literal": constrainedOption({
                                "out": optionConstraint(valSel("expected type"), "array", tempExternalTypeSelection("typesystem", "Type"))
                            }, array(component("Expression", {
                                "expected type": aResolvedValue(valSel("out")),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                            }))),
                            // //object
                            "object literal": constrainedOption({
                                "out": optionConstraint(valSel("expected type"), "group", tempExternalTypeSelection("typesystem", "Type"))
                            }, group({
                                "properties": prop(constrainedDictionary(
                                    {
                                        "prop": dictConstraint(valSel("out", s_group("properties")), tempExternalTypeSelection("typesystem", "Type", t_tu("group", t_grp("properties"))))
                                    },
                                    component("Expression", {
                                        "expected type": aResolvedValue(valSel("prop", s_group("type"))),
                                        "namespace": aResolvedValue(valSel("namespace")),
                                        "variable stack": aResolvedValue(valSel("variable stack")),
                                    })
                                )),
                            })),
                            // //function (inline function)
                            // "address function": constrainedOption({
                            //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                            // }, group({
                            //     "parameters": prop(dictionary(group({}))), //no type info needed
                            //     //"signature": prop(component("FunctionSignature", {})),
                            //     "variables": prop(component("Variables", {
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //     })),
                            //     "statements": prop(component("Statements", {
                            //         "function": aResolvedValue(valSel("out")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variables"))
                            //     })),
                            //     "return selection": prop(component("Address Selection", {
                            //         // "function": aResolvedValue(valSel("out")),
                            //         // "namespace": aResolvedValue(valSel("namespace")),
                            //         // "variable stack": aResolvedValue(valSel("variables"))
                            //     })),
                            // })),
                            // "value function": constrainedOption({
                            //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                            // }, group({
                            //     "parameters": prop(dictionary(group({}))), //no type info needed
                            //     //"signature": prop(component("FunctionSignature", {})),
                            //     "variables": prop(component("Variables", {
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //     })),
                            //     "statements": prop(component("Statements", {
                            //         "function": aResolvedValue(valSel("out")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variables"))
                            //     })),
                            //     "return expression": prop(component("Expression", {
                            //         // "function": aResolvedValue(valSel("out")),
                            //         // "namespace": aResolvedValue(valSel("namespace")),
                            //         // "variable stack": aResolvedValue(valSel("variables"))
                            //     })),
                            // })),
                            // // "procedure": constrainedOption({
                            // //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                            // // }, group({
                            // //     "parameters": prop(dictionary(group({}))), //no type info needed
                            // //     //"signature": prop(component("FunctionSignature", {})),
                            // //     "variables": prop(component("Variables", {
                            // //         "namespace": aResolvedValue(valSel("namespace")),
                            // //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                            // //         "variable stack": aResolvedValue(valSel("variable stack")),
                            // //     })),
                            // //     "statements": prop(component("Statements", {
                            // //         "function": aResolvedValue(valSel("out")),
                            // //         "namespace": aResolvedValue(valSel("namespace")),
                            // //         "variable stack": aResolvedValue(valSel("variables"))
                            // //     })),
                            // // })),
                            //boolean
                            "boolean": constrainedOption({
                                "out": optionConstraint(valSel("expected type"), "boolean", tempExternalTypeSelection("typesystem", "Type"))
                            }, component("Boolean Expression", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            // //numerical
                            "numerical": constrainedOption({
                                "out": optionConstraint(valSel("expected type"), "number", tempExternalTypeSelection("typesystem", "Type"))
                            }, component("Numerical Expression", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            //string
                            "string": constrainedOption({
                                "out": optionConstraint(valSel("expected type"), "string", tempExternalTypeSelection("typesystem", "Type"))
                            }, component("String Expression", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            // //any
                            // "conditional": option(group({
                            //     "test": prop(component("Boolean Expression Or Selection", {
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variable stack"))
                            //     })),
                            //     "true": prop(component("Expression", {
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "type": aResolvedValue(valSel("type")),
                            //     })),
                            //     "false": prop(component("Expression", {
                            //         "expected type": aResolvedValue(valSel("expected type")),
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //     })),
                            // })),
                            // //"identifier": option(terminal("identifier")),
                            // // "new": option(group({
                            // //     "class": prop(terminal("identifier")),
                            // //     "parameters": prop(dictionary(component("Expression", {}))),
                            // // })),
                            // // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
                            "null": constrainedOption({
                                "out": optionConstraint(valSel("expected type"), "null", tempExternalTypeSelection("typesystem", "Type"))
                            }, group({})),
                            // //"parenthesized": option(component("Expression", {})),
                            // "symbol": option(component("Address Selection", { //something that is stored
                            //     "namespace": aResolvedValue(valSel("namespace")),
                            //     "variable stack": aResolvedValue(valSel("variable stack"))
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
                    "Numerical Expression": globalTypeDefinition(
                        taggedUnion({
                            "minus": option(group({
                                "left hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "plus": option(group({
                                "left hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "right hand side": prop(component("Numerical Expression Or Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                            })),
                            "predecrement": option(component("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "preincrement": option(component("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "postdecrement": option(component("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "postincrement": option(component("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "numeric literal": option(terminal("numeric literal")),
                        })
                    ),
                    "Numerical Expression Or Selection": globalTypeDefinition(
                        taggedUnion({
                            "expression": option(component("Numerical Expression", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "selection": option(group({
                                "selection": prop(component("Address Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "cast to number": prop(taggedUnion({
                                    "number": constrainedOption({
                                        "number": optionConstraint(valSel("selection", s_component()), "number", tempExternalTypeSelection("typesystem", "Type"))
                                    }, group({}))
                                }))
                            })),

                        })
                    ),
                    "Source File": globalTypeDefinition(group({
                        // "symbols": prop(component("Symbols", {
                        //     "namespace": aResolvedValue(valSel("namespace"))
                        // })),
                    })),
                    "Assign": globalTypeDefinition(
                        group({
                            "target": prop(component("Address Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(component("Expression", {
                                "expected type": aResolvedValue(valSel("target", s_component())),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                                "namespace": aResolvedValue(valSel("namespace")),
                            })),
                        }),
                    ),
                    "Statements": globalTypeDefinition(
                        array(taggedUnion({
                            "block": option(component("Block", {
                                "parameters": aResolvedValue(valSel("parameters")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                            })),
                            "with": option(group({
                                "address": prop(component("Address Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                })),
                                "action": prop(taggedUnion({
                                    //         "call": constrainedOption({
                                    //             "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
                                    //         }, group({
                                    //             "type arguments": prop(component("Type Arguments", {
                                    //                 "type parameters": aResolvedValue(valSel("function")),
                                    //                 "namespace": aResolvedValue(valSel("namespace")),
                                    //             })),
                                    //             "arguments": prop(constrainedDictionary(
                                    //                 { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
                                    //                 component("Expression", {
                                    //                     "expected type": aResolvedValue(valSel("parameter")),
                                    //                     "variable stack": aResolvedValue(valSel("variable stack")),
                                    //                     "namespace": aResolvedValue(valSel("namespace")),
                                    //                 })
                                    //             )),
                                    //         })),
                                    "assign": option(component("Assign", {
                                        "namespace": aResolvedValue(valSel("namespace")),
                                        "variable stack": aResolvedValue(valSel("variable stack")),
                                    })),
                                    "minus assign": constrainedOption({
                                        "number address": optionConstraint(valSel("address", s_component()), "number", tempExternalTypeSelection("typesystem", "Type"))
                                    }, group({/*must be number*/
                                        "right hand side": prop(component("Numerical Expression Or Selection", {
                                            "namespace": aResolvedValue(valSel("namespace")),
                                            "variable stack": aResolvedValue(valSel("variable stack")),
                                        })),
                                    })),
                                    "plus assign": constrainedOption({
                                        "number address": optionConstraint(valSel("address", s_component()), "number", tempExternalTypeSelection("typesystem", "Type"))
                                    }, group({/*must be number*/
                                        "right hand side": prop(component("Numerical Expression Or Selection", {
                                            "namespace": aResolvedValue(valSel("namespace")),
                                            "variable stack": aResolvedValue(valSel("variable stack")),
                                        })),
                                    })),

                                    //         "switch": constrainedOption({
                                    //             "tagged union address": optionConstraint(valSel("address", s_component()), "tagged union", typeSelection("Foo"))
                                    //         }, group({
                                    //             "cases": prop(constrainedDictionary(
                                    //                 { "option": dictConstraint(valSel("tagged union address", s_group("options")), externalTypeSelection("typesystem", "Type", [tu("tagged union"), grp("options")])) },
                                    //                 group({
                                    //                     "block": prop(component("Block", {
                                    //                         "function": aResolvedValue(valSel("function")),
                                    //                         "namespace": aResolvedValue(valSel("namespace")),
                                    //                         "variable stack": aResolvedValue(valSel("variable stack")),
                                    //                     }))
                                    //                 })
                                    //             )),
                                    //             "default": prop(optional(component("Block", {
                                    //                 "function": aResolvedValue(valSel("function")),
                                    //                 "namespace": aResolvedValue(valSel("namespace")),
                                    //                 "variable stack": aResolvedValue(valSel("variable stack")),
                                    //             }))),
                                    //         })),
                                }))
                            })),
                            // "for": option(group({
                            //     "condition": prop(component("Boolean Expression", {
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //     })),
                            //     "incrementer": prop(component("Assign", {
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //     })),
                            //     "block": prop(component("Block", {
                            //         "function": aResolvedValue(valSel("function")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //     })),
                            ///})),
                            "if": option(group({
                                "condition": prop(component("Boolean Expression Or Selection", {
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                })),
                                "then": prop(component("Block", {
                                    "parameters": aResolvedValue(valSel("parameters")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack")),

                                })),
                                "else": prop(optional(component("Block", {
                                    "parameters": aResolvedValue(valSel("parameters")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                }))),
                            })),
                            // // "labeled": composite("LabeledStatement", group({
                            // //     "label": member(component("identifier")),
                            // //     "statement": member(component("statement")),
                            // // })),
                            // // "return": option(group({
                            // //     "expression": prop(optional(component("Expression", {
                            // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
                            // //         "variable stack": aResolvedValue(valSel("variable stack")),
                            // //         "namespace": aResolvedValue(valSel("namespace")),
                            // //     })))
                            // // })),
                            // // "throw": option(component("Expression", {})),
                            // // "try": option(group({
                            // //     "block": prop(component("Block", {})),
                            // //     "catchClause": prop(group({
                            // //         "variable": prop(component("variableDeclaration")),
                            // //         "block": member(component("block")),
                            // //     }))),
                            // // }))),
                            "while": option(group({
                                "condition": prop(component("Boolean Expression Or Selection", {
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                })),
                                "block": prop(component("Block", {
                                    "parameters": aResolvedValue(valSel("parameters")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                })),
                            })),
                        }))
                    ),
                    "String Expression": globalTypeDefinition(
                        taggedUnion({
                            "string literal": option(terminal("string literal")),
                        })
                    ),
                    "String Expression Or Selection": globalTypeDefinition(
                        taggedUnion({
                            "expression": option(component("String Expression", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "selection": option(group({
                                "selection": prop(component("Address Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack"))
                                })),
                                "cast to string": prop(taggedUnion({
                                    "string": constrainedOption({
                                        "string": optionConstraint(valSel("selection", s_component()), "string", tempExternalTypeSelection("typesystem", "Type"))
                                    }, group({}))
                                }))
                            })),
                        })
                    ),
                    // "Symbols": globalTypeDefinition({
                    //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
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
                    "Type Arguments": globalTypeDefinition(
                        constrainedDictionary(
                            { "x": dictConstraint(valSel("type parameters"), tempExternalTypeSelection("typesystem", "Type Parameters")) },
                            group({
                                "type": prop(component("Type Selection", {
                                    "namespace": aResolvedValue(valSel("namespace"))
                                }))
                            })
                        )
                    ),
                    // "Type Selection Tail": globalTypeDefinition(
                    //     {
                    //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    //     },
                    //     optional(
                    //         group({
                    //             //"step type": prop(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
                    //             "tail": prop(component("Type Selection Tail", {
                    //                 "namespace": aResolvedValue(valSel("namespace"))
                    //             })),
                    //         }),
                    //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
                    //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
                    // ),
                    "Type Selection": globalTypeDefinition(
                        group({
                            "referenced type": prop(resolvedValueReference(valSel("namespace"), tempExternalTypeSelection("typesystem", "Namespace"))),
                            "type of referenced type": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"),
                                {
                                    "namespace": constrainedOption(
                                        {
                                            "referenced namespace": optionConstraint(valSel("referenced type", s_reference(s_group("type"))), "namespace", tempExternalTypeSelection("typesystem", "Namespace", t_dict(t_grp("type"))))
                                        },
                                        component("Type Selection", {
                                            "namespace": aResolvedValue(valSel("namespace"))
                                        }),
                                        tailSel(s_component())
                                    ),
                                    "type definition": constrainedOption(
                                        {
                                            "referenced type definition": optionConstraint(valSel("referenced type", s_reference(s_group("type"))), "type definition", tempExternalTypeSelection("typesystem", "Namespace", t_dict(t_grp("type"))))
                                        },
                                        group({}),
                                        varSel("referenced type definition", s_group("type")),

                                    )
                                }))
                        }),
                        // group({
                        //     // "steps": prop(array(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/)))),
                        //     "type": prop(resolvedValueReference(valSel("namespace"), externalTypeSelection("typesystem", "Namespace"), /*constrain to type defintion*/)),
                        //     "arguments": prop(component("Type Arguments", {
                        //         "type": aResolvedValue(valSel("type")),
                        //         "namespace": aResolvedValue(valSel("namespace"))
                        //     })),
                        // }),
                        tailSel(s_group("type of referenced type", s_taggedunion()))
                    ),
                    "Variables": globalTypeDefinition(
                        dictionary(group({
                            "type": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"), {
                                "parameter": option(group({
                                    "parameter": prop(resolvedValueReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                                }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                                "variable stack2": option(group({
                                    "variable": prop(resolvedValueReference(valSel("variable stack"), tempTypeSelection("Variables"))),
                                }), tailSel(s_group("variable", s_reference(s_group("type", s_taggedunion()))))),
                                "local": option(group({
                                    "type": prop(component("Type Selection", {
                                        "namespace": aResolvedValue(valSel("namespace")),
                                    })),
                                    "initializer": prop(component("Expression", {
                                        "expected type": aResolvedValue(valSel("type", s_component())),
                                        "namespace": aResolvedValue(valSel("namespace")),
                                        "variable stack": aResolvedValue(valSel("variable stack")),
                                    })),
                                }), tailSel(s_group("type", s_component()))),
                            })),
                        }))
                    ),
                }),
            }
        },
        'root': {
            'annotation': pd.getLocationInfo(0),
            'key': "Source File"
        },
    },
}