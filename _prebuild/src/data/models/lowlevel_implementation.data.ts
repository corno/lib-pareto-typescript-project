import * as pd from 'pareto-core-data'

import * as g_liana2algorithm from "lib-liana/dist/submodules/liana2algorithm"
import {
    aResolvedValue,
    resolvedSiblingComponent, constrainedDictionary,
    constrainedOption, dictConstraint,
    dictionary, externalGlobalTypeSelection,
    globalType,
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
    lookupReference,
    thisNonCyclic,
    thisCyclic,
    globalTypeResult,
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
            'global types': d({
                "A Result": globalType(
                    {},
                    group({
                        "foo": prop(terminal("identifier")),
                    })
                ),
                "A tagged union with result": globalType(
                    {},
                    group({
                        "tu": prop(resultTaggedUnion(globalTypeSelection("A Result"), {
                            "a": option(group({
                                "rslt": prop(resolvedSiblingComponent("A Result", {}))
                            }), tailSel(s_group("rslt")))
                        }))
                    })
                ),
                "A tagged union with constrained option": globalType(
                    {},
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
                                "rslt": prop(resolvedSiblingComponent("A Result", {}))
                            }))
                        }))
                    })
                ),
                "A tagged union with constrained option and result": globalType(
                    {},
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
                                "rslt": prop(resolvedSiblingComponent("A Result", {}))
                            }), tailSel(s_group("rslt")))
                        }))),
                    })
                ),
                "A dictionary with constraint": globalType(
                    {},
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
                "A optional with result": globalType(
                    {
                        "result param": pResolvedValue("A Result", false),
                    },
                    group({
                        "opt": prop(optional(group({
                            "rslt": prop(resolvedSiblingComponent("A Result", {}))
                        }), optionalResult(globalTypeSelection("A Result"), tailSel(s_group("rslt")), valSel("result param"))))
                    })
                ),
                // "A lookups": globalType(
                //     group({
                //         "dict": prop(dictionary(group({
                //             "lookup ref": prop(lookupReference(thisNonCyclic(), tempTypeSelection("A lookups", t_grp("dict")))),
                //             "cyclic lookup ref": prop(lookupReference(thisCyclic(), tempTypeSelection("A lookups", t_grp("dict")))),
                //         })))
                //     })
                // ),

                "Block": globalType(
                    {
                        //"parameters": pExternalResolvedValue("typesystem", "Parameters", false), //needed to determine the type of the return expression
                        "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false), //needed for 'Type Path'
                        "variable stack": pResolvedValue("Variables", false), //needed for 'Address Selection' and assignment statements
                    },
                    group({
                        "variables": prop(resolvedSiblingComponent("Variables", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            //"parameters": aResolvedValue(valSel("parameters")),
                            "variable stack": aResolvedValue(valSel("variable stack")),
                        })),
                        "statements": prop(resolvedSiblingComponent("Statements", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            //"parameters": aResolvedValue(valSel("parameters")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                            "variable stack": aResolvedValue(valSel("variables"))
                        }))
                    })
                ),
                "Boolean Expression": globalType(
                    {
                        "variable stack": pResolvedValue("Variables", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    },
                    taggedUnion({
                        "and": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "or": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "false": option(group({})),
                        "not": option(resolvedSiblingComponent("Boolean Expression Or Selection", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "true": option(group({})),
                        // //boolean/string
                        "string equals": option(group({
                            "left hand side": prop(resolvedSiblingComponent("String Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("String Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "string not equals": option(group({
                            "left hand side": prop(resolvedSiblingComponent("String Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("String Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        // //boolean/number
                        "number equals": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "number not equals": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "greater than": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "less than": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                    })
                ),
                "Boolean Expression Or Selection": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    taggedUnion({
                        "expression": option(resolvedSiblingComponent("Boolean Expression", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "selection": option(group({
                            "selection": prop(resolvedSiblingComponent("Address Selection", {
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
                "Address Selection Tail": globalType(

                    {
                        "current address": pExternalResolvedValue("typesystem", "Type", false),
                        "variable stack": pResolvedValue("Variables", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    },
                    optional(
                        group({
                            "step": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"), {
                                "call": constrainedOption({
                                    "address function": optionConstraint(valSel("current address"), "address function", tempExternalTypeSelection("typesystem", "Type"))
                                }, group({
                                    // "function": prop(resolvedSiblingComponent("Address Selection", {
                                    //     "namespace": aResolvedValue(valSel("namespace")),
                                    //     "variable stack": aResolvedValue(valSel("variable stack"))
                                    // })), /*constraint tagged union: type === address function*/
                                    "type arguments": prop(resolvedSiblingComponent("Type Arguments", {
                                        "type parameters": aResolvedValue(valSel("address function", s_group("declaration", s_group("type parameters")))),
                                        "namespace": aResolvedValue(valSel("namespace")),
                                    })),
                                    // "arguments": prop(constrainedDictionary({
                                    //     "parameter": dictConstraint(valSel("address function", s_group("declaration", s_group("parameters"))), tempExternalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")))
                                    // }, resolvedSiblingComponent("Expression", {
                                    //     "expected type": aResolvedValue(valSel("parameter", /*s_group("type")*/)),
                                    //     "namespace": aResolvedValue(valSel("namespace")),
                                    //     "variable stack": aResolvedValue(valSel("variable stack")),
                                    // }))),
                                }), varSel("address function", s_group("return type"))),
                                "property": constrainedOption(
                                    {
                                        "group": optionConstraint(valSel("current address"), "group", tempExternalTypeSelection("typesystem", "Type"))
                                    },
                                    resolvedValueReference(valSel("group"), tempExternalTypeSelection("typesystem", "Type", t_tu("group"))),
                                    tailSel(s_reference()),
                                ),
                            })),
                            "tail": prop(resolvedSiblingComponent("Address Selection Tail", {
                                "current address": aResolvedValue(valSel("step", s_taggedunion())),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            }))
                        }),
                        optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("current address")),
                    ),
                    globalTypeResult(
                        externalGlobalTypeSelection("typesystem", "Type"),
                        tailSel(s_optional()),
                    )
                ),
                "Address Selection": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    group({
                        "variable": prop(resolvedValueReference(valSel("variable stack"), tempTypeSelection("Variables"))),
                        "tail": prop(resolvedSiblingComponent("Address Selection Tail", {
                            "current address": aResolvedValue(valSel("variable", s_reference(s_group("type", s_taggedunion())))),
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                    }),
                    globalTypeResult(
                        externalGlobalTypeSelection("typesystem", "Type"),
                        tailSel(s_group("tail", s_component())),
                    )
                ),
                "Expression": globalType(
                    {
                        "expected type": pExternalResolvedValue("typesystem", "Type", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    taggedUnion({
                        // //array
                        "array literal": constrainedOption({
                            "out": optionConstraint(valSel("expected type"), "array", tempExternalTypeSelection("typesystem", "Type"))
                        }, array(resolvedSiblingComponent("Expression", {
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
                                    "prop": dictConstraint(valSel("out"), tempExternalTypeSelection("typesystem", "Type", t_tu("group")))
                                },
                                resolvedSiblingComponent("Expression", {
                                    "expected type": aResolvedValue(valSel("prop")),
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
                        //     //"signature": prop(resolvedSiblingComponent("FunctionSignature", {})),
                        //     "variables": prop(resolvedSiblingComponent("Variables", {
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //     })),
                        //     "statements": prop(resolvedSiblingComponent("Statements", {
                        //         "function": aResolvedValue(valSel("out")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         "variable stack": aResolvedValue(valSel("variables"))
                        //     })),
                        //     "return selection": prop(resolvedSiblingComponent("Address Selection", {
                        //         // "function": aResolvedValue(valSel("out")),
                        //         // "namespace": aResolvedValue(valSel("namespace")),
                        //         // "variable stack": aResolvedValue(valSel("variables"))
                        //     })),
                        // })),
                        // "value function": constrainedOption({
                        //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                        // }, group({
                        //     "parameters": prop(dictionary(group({}))), //no type info needed
                        //     //"signature": prop(resolvedSiblingComponent("FunctionSignature", {})),
                        //     "variables": prop(resolvedSiblingComponent("Variables", {
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //     })),
                        //     "statements": prop(resolvedSiblingComponent("Statements", {
                        //         "function": aResolvedValue(valSel("out")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         "variable stack": aResolvedValue(valSel("variables"))
                        //     })),
                        //     "return expression": prop(resolvedSiblingComponent("Expression", {
                        //         // "function": aResolvedValue(valSel("out")),
                        //         // "namespace": aResolvedValue(valSel("namespace")),
                        //         // "variable stack": aResolvedValue(valSel("variables"))
                        //     })),
                        // })),
                        // // "procedure": constrainedOption({
                        // //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                        // // }, group({
                        // //     "parameters": prop(dictionary(group({}))), //no type info needed
                        // //     //"signature": prop(resolvedSiblingComponent("FunctionSignature", {})),
                        // //     "variables": prop(resolvedSiblingComponent("Variables", {
                        // //         "namespace": aResolvedValue(valSel("namespace")),
                        // //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                        // //         "variable stack": aResolvedValue(valSel("variable stack")),
                        // //     })),
                        // //     "statements": prop(resolvedSiblingComponent("Statements", {
                        // //         "function": aResolvedValue(valSel("out")),
                        // //         "namespace": aResolvedValue(valSel("namespace")),
                        // //         "variable stack": aResolvedValue(valSel("variables"))
                        // //     })),
                        // // })),
                        //boolean
                        "boolean": constrainedOption({
                            "out": optionConstraint(valSel("expected type"), "boolean", tempExternalTypeSelection("typesystem", "Type"))
                        }, resolvedSiblingComponent("Boolean Expression", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        // //numerical
                        "numerical": constrainedOption({
                            "out": optionConstraint(valSel("expected type"), "number", tempExternalTypeSelection("typesystem", "Type"))
                        }, resolvedSiblingComponent("Numerical Expression", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        //string
                        "string": constrainedOption({
                            "out": optionConstraint(valSel("expected type"), "string", tempExternalTypeSelection("typesystem", "Type"))
                        }, resolvedSiblingComponent("String Expression", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        // //any
                        // "conditional": option(group({
                        //     "test": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         "variable stack": aResolvedValue(valSel("variable stack"))
                        //     })),
                        //     "true": prop(resolvedSiblingComponent("Expression", {
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         "type": aResolvedValue(valSel("type")),
                        //     })),
                        //     "false": prop(resolvedSiblingComponent("Expression", {
                        //         "expected type": aResolvedValue(valSel("expected type")),
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //     })),
                        // })),
                        // //"identifier": option(terminal("identifier")),
                        // // "new": option(group({
                        // //     "class": prop(terminal("identifier")),
                        // //     "parameters": prop(dictionary(resolvedSiblingComponent("Expression", {}))),
                        // // })),
                        // // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
                        "null": constrainedOption({
                            "out": optionConstraint(valSel("expected type"), "null", tempExternalTypeSelection("typesystem", "Type"))
                        }, group({})),
                        // //"parenthesized": option(resolvedSiblingComponent("Expression", {})),
                        // "symbol": option(resolvedSiblingComponent("Address Selection", { //something that is stored
                        //     "namespace": aResolvedValue(valSel("namespace")),
                        //     "variable stack": aResolvedValue(valSel("variable stack"))
                        // })),
                        // // "template": composite("TemplateExpression", group({
                        // //     "head": member(empty("TemplateHead", { "text": terminal() })),
                        // //     "spans": member(array(composite("TemplateSpan", group({
                        // //         "expression": member(resolvedSiblingComponent("Expression")),
                        // //         "type": member(choice({
                        // //             "middle": empty("TemplateMiddle", { "text": terminal() }),
                        // //             "tail": empty("TemplateTail", { "text": terminal() }),
                        // //         })),
                        // //     })))),
                        // // })),
                    })
                ),
                "Numerical Expression": globalType(
                    {
                        "variable stack": pResolvedValue("Variables", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    },
                    taggedUnion({
                        "minus": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "plus": option(group({
                            "left hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                            "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack"))
                            })),
                        })),
                        "predecrement": option(resolvedSiblingComponent("Numerical Expression Or Selection", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "preincrement": option(resolvedSiblingComponent("Numerical Expression Or Selection", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "postdecrement": option(resolvedSiblingComponent("Numerical Expression Or Selection", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "postincrement": option(resolvedSiblingComponent("Numerical Expression Or Selection", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "numeric literal": option(terminal("numeric literal")),
                    })
                ),
                "Numerical Expression Or Selection": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    taggedUnion({
                        "expression": option(resolvedSiblingComponent("Numerical Expression", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "selection": option(group({
                            "selection": prop(resolvedSiblingComponent("Address Selection", {
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
                "Source File": globalType(
                    {
                        //"namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    },
                    group({
                        // "symbols": prop(resolvedSiblingComponent("Symbols", {
                        //     "namespace": aResolvedValue(valSel("namespace"))
                        // })),
                    })),
                "Assign": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    group({
                        "target": prop(resolvedSiblingComponent("Address Selection", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "right hand side": prop(resolvedSiblingComponent("Expression", {
                            "expected type": aResolvedValue(valSel("target", s_component())),
                            "variable stack": aResolvedValue(valSel("variable stack")),
                            "namespace": aResolvedValue(valSel("namespace")),
                        })),
                    }),
                ),
                "Statements": globalType(
                    {
                        //"parameters": pExternalResolvedValue("typesystem", "Parameters", false),
                        "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    array(taggedUnion({
                        "block": option(resolvedSiblingComponent("Block", {
                            //"parameters": aResolvedValue(valSel("parameters")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack")),
                        })),
                        "with": option(group({
                            "address": prop(resolvedSiblingComponent("Address Selection", {
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                            })),
                            "action": prop(taggedUnion({
                                //         "call": constrainedOption({
                                //             "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
                                //         }, group({
                                //             "type arguments": prop(resolvedSiblingComponent("Type Arguments", {
                                //                 "type parameters": aResolvedValue(valSel("function")),
                                //                 "namespace": aResolvedValue(valSel("namespace")),
                                //             })),
                                //             "arguments": prop(constrainedDictionary(
                                //                 { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
                                //                 resolvedSiblingComponent("Expression", {
                                //                     "expected type": aResolvedValue(valSel("parameter")),
                                //                     "variable stack": aResolvedValue(valSel("variable stack")),
                                //                     "namespace": aResolvedValue(valSel("namespace")),
                                //                 })
                                //             )),
                                //         })),
                                "assign": option(resolvedSiblingComponent("Assign", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                })),
                                "minus assign": constrainedOption({
                                    "number address": optionConstraint(valSel("address", s_component()), "number", tempExternalTypeSelection("typesystem", "Type"))
                                }, group({/*must be number*/
                                    "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
                                        "namespace": aResolvedValue(valSel("namespace")),
                                        "variable stack": aResolvedValue(valSel("variable stack")),
                                    })),
                                })),
                                "plus assign": constrainedOption({
                                    "number address": optionConstraint(valSel("address", s_component()), "number", tempExternalTypeSelection("typesystem", "Type"))
                                }, group({/*must be number*/
                                    "right hand side": prop(resolvedSiblingComponent("Numerical Expression Or Selection", {
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
                                //                     "block": prop(resolvedSiblingComponent("Block", {
                                //                         "function": aResolvedValue(valSel("function")),
                                //                         "namespace": aResolvedValue(valSel("namespace")),
                                //                         "variable stack": aResolvedValue(valSel("variable stack")),
                                //                     }))
                                //                 })
                                //             )),
                                //             "default": prop(optional(resolvedSiblingComponent("Block", {
                                //                 "function": aResolvedValue(valSel("function")),
                                //                 "namespace": aResolvedValue(valSel("namespace")),
                                //                 "variable stack": aResolvedValue(valSel("variable stack")),
                                //             }))),
                                //         })),
                            }))
                        })),
                        // "for": option(group({
                        //     "condition": prop(resolvedSiblingComponent("Boolean Expression", {
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //     })),
                        //     "incrementer": prop(resolvedSiblingComponent("Assign", {
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //     })),
                        //     "block": prop(resolvedSiblingComponent("Block", {
                        //         "function": aResolvedValue(valSel("function")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //         "variable stack": aResolvedValue(valSel("variable stack")),
                        //     })),
                        ///})),
                        "if": option(group({
                            "condition": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                                "variable stack": aResolvedValue(valSel("variable stack")),
                                "namespace": aResolvedValue(valSel("namespace")),
                            })),
                            "then": prop(resolvedSiblingComponent("Block", {
                                //"parameters": aResolvedValue(valSel("parameters")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack")),

                            })),
                            "else": prop(optional(resolvedSiblingComponent("Block", {
                                //"parameters": aResolvedValue(valSel("parameters")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                            }))),
                        })),
                        // // "labeled": composite("LabeledStatement", group({
                        // //     "label": member(resolvedSiblingComponent("identifier")),
                        // //     "statement": member(resolvedSiblingComponent("statement")),
                        // // })),
                        // // "return": option(group({
                        // //     "expression": prop(optional(resolvedSiblingComponent("Expression", {
                        // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
                        // //         "variable stack": aResolvedValue(valSel("variable stack")),
                        // //         "namespace": aResolvedValue(valSel("namespace")),
                        // //     })))
                        // // })),
                        // // "throw": option(resolvedSiblingComponent("Expression", {})),
                        // // "try": option(group({
                        // //     "block": prop(resolvedSiblingComponent("Block", {})),
                        // //     "catchClause": prop(group({
                        // //         "variable": prop(resolvedSiblingComponent("variableDeclaration")),
                        // //         "block": member(resolvedSiblingComponent("block")),
                        // //     }))),
                        // // }))),
                        "while": option(group({
                            "condition": prop(resolvedSiblingComponent("Boolean Expression Or Selection", {
                                "variable stack": aResolvedValue(valSel("variable stack")),
                                "namespace": aResolvedValue(valSel("namespace")),
                            })),
                            "block": prop(resolvedSiblingComponent("Block", {
                                //"parameters": aResolvedValue(valSel("parameters")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                                "namespace": aResolvedValue(valSel("namespace")),
                                "variable stack": aResolvedValue(valSel("variable stack")),
                            })),
                        })),
                    }))
                ),
                "String Expression": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    taggedUnion({
                        "string literal": option(terminal("string literal")),
                    })
                ),
                "String Expression Or Selection": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    taggedUnion({
                        "expression": option(resolvedSiblingComponent("String Expression", {
                            "namespace": aResolvedValue(valSel("namespace")),
                            "variable stack": aResolvedValue(valSel("variable stack"))
                        })),
                        "selection": option(group({
                            "selection": prop(resolvedSiblingComponent("Address Selection", {
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
                // "Symbols": globalType({
                //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                // }, dictionary(taggedUnion({
                //     "namespace": option(group({
                //         "symbols": prop(resolvedSiblingComponent("Symbols", {
                //             "namespace": aResolvedValue(valSel("namespace"))
                //         }))
                //     })),
                //     "symbol": option(group({
                //         "type path": prop(resolvedSiblingComponent("Type Selection", {
                //             "namespace": aResolvedValue(valSel("namespace"))
                //         })),
                //     })),
                // }))),
                "Type Arguments": globalType(
                    {
                        "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    },
                    constrainedDictionary(
                        { "x": dictConstraint(valSel("type parameters"), tempExternalTypeSelection("typesystem", "Type Parameters")) },
                        group({
                            "type": prop(resolvedSiblingComponent("Type Selection", {
                                "namespace": aResolvedValue(valSel("namespace"))
                            }))
                        })
                    )
                ),
                // "Type Selection Tail": globalType(
                //     {
                //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                //     },
                //     optional(
                //         group({
                //             //"step type": prop(resolvedValueReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
                //             "tail": prop(resolvedSiblingComponent("Type Selection Tail", {
                //                 "namespace": aResolvedValue(valSel("namespace"))
                //             })),
                //         }),
                //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
                //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
                // ),
                "Type Selection": globalType(

                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    },
                    resultTaggedUnion(
                        externalGlobalTypeSelection("typesystem", "Type"),
                        {
                            "current namespace": option(
                                resolvedValueReference(valSel("namespace", s_group("types")), tempExternalTypeSelection("typesystem", "Namespace", t_grp("types"))),
                                tailSel(s_reference()),
                            ),
                            "child namespace": option(
                                group({
                                    "namespacex": prop(resolvedValueReference(valSel("namespace", s_group("namespaces")), tempExternalTypeSelection("typesystem", "Namespace", t_grp("namespaces")))),
                                    "selection": prop(resolvedSiblingComponent("Type Selection", {
                                        "namespace": aResolvedValue(valSel("namespacex", s_reference()))
                                    })),
                                }),
                                tailSel(s_group("selection", s_component())),
                            )
                        }
                    ),
                    globalTypeResult(
                        externalGlobalTypeSelection("typesystem", "Type"),
                        tailSel(s_taggedunion())
                    )
                ),
                "Variables": globalType(
                    {
                        "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        //FIXME"parameters": pExternalResolvedValue("typesystem", "Parameters", false),//must be true
                        "variable stack": pResolvedValue("Variables", false),
                    },
                    dictionary(group({
                        "type": prop(resultTaggedUnion(externalGlobalTypeSelection("typesystem", "Type"), {
                            //FIXME "parameter": option(group({
                            //     "parameter": prop(resolvedValueReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                            // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                            "variable stack2": option(group({
                                "variable": prop(resolvedValueReference(valSel("variable stack"), tempTypeSelection("Variables"))),
                            }), tailSel(s_group("variable", s_reference(s_group("type", s_taggedunion()))))),
                            "local": option(group({
                                "type": prop(resolvedSiblingComponent("Type Selection", {
                                    "namespace": aResolvedValue(valSel("namespace")),
                                })),
                                "initializer": prop(resolvedSiblingComponent("Expression", {
                                    "expected type": aResolvedValue(valSel("type", s_component())),
                                    "namespace": aResolvedValue(valSel("namespace")),
                                    "variable stack": aResolvedValue(valSel("variable stack")),
                                })),
                            }), tailSel(s_group("type", s_component()))),
                        })),
                    }))
                ),
            }),
        },
        'root': {
            'annotation': pd.getLocationInfo(0),
            'key': "Source File"
        },
    },
}