import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component, dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
    group, t_grp,
    option, optional, prop, taggedUnion,
    t_tu, tempTypeSelection, thisCyclic, aLookup,
    resolvedValueReference, valSel, globalTypeSelection, pNonCyclicLookup, lparameter, terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d


export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
    }),
    'labels': {
        'atom types': d({
            "identifier": null,
        }),
    },
    'global types': {
        'declarations': d({
            "Function Declaration": globalTypeDeclaration({}),
            "Namespace": globalTypeDeclaration({
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            }),
            "TypeParameters": globalTypeDeclaration({
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            }),
            "Type": globalTypeDeclaration({
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            }),
            // "Type Path": globalTypeDeclaration({
            //     "namepace": pNonCyclicLookup(globalTypeSelection("Namespace")),
            // }),
            "Type Parameters": globalTypeDeclaration({
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            }),
        }),
        'definitions': d({
            "Namespace": globalTypeDefinition(
                group({
                    "namespaces": prop(dictionary(component("Namespace", {}))),
                    "parameters": prop(component("TypeParameters", {})),
                    "types": prop(dictionary(component("Type", {}))),
                }),
            ),
            "TypeParameters": globalTypeDefinition(
                dictionary(group({
                    "type": prop(component("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
                }))
            ),
            "Function Declaration": globalTypeDefinition(group({
                "type parameters": prop(component("Type Parameters", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "context": prop(component("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "parameters": prop(dictionary(component("Type", {}))),
            })),
            "Type": globalTypeDefinition(
                taggedUnion({
                    // "any": empty("AnyKeyword"),
                    "array": option(component("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
                    "boolean": option(group({})),
                    "address function": option(group({
                        "declaration": prop(component("Function Declaration", {})),
                        "return type": prop(component("Type", {
                            "global types": aLookup(lparameter("global types"))
                        })),
                    })),
                    "value function": option(group({
                        "declaration": prop(component("Function Declaration", {})),
                        "return type": prop(component("Type", {
                            "global types": aLookup(lparameter("global types"))
                        })),
                    })),
                    "procedure": option(group({
                        "declaration": prop(component("Function Declaration", {})),
                    })),
                    "group": option(group({
                        "properties": prop(dictionary(group({
                            "type": prop(component("Type", {
                                "global types": aLookup(lparameter("global types"))
                            }))
                        })))
                    })),

                    // "never": empty("NeverKeyword"),
                    "null": option(group({})),
                    "number": option(group({})),
                    "optional": option(component("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
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
                    "type reference": option(group({
                        "type": prop(taggedUnion({
                            "external": option(group({})),
                            "sibling": option(group({})),
                            "cyclic sibling": option(group({}))
                        })),
                        // "context": prop(terminal("identifier")),
                        // "path": prop(array(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type", t_tu("group", t_grp("properties")))))),
                    })),
                    "string": option(group({})),
                    //"string literal": option(terminal("string literal")),
                    // "tuple": option(array(component("Type", { "global types": argument(true) }))),
                    // "tuple": composite("TupleType", array(component("type"))),
                    // "typeLiteral": composite("TypeLiteral", component("typeSignatures")),
                    // "undefined": empty("UndefinedKeyword"),
                    "tagged union": option(dictionary(component("Type", {
                        "global types": aLookup(lparameter("global types"))
                    }))),
                    // "void": empty("VoidKeyword"),
                })
            ),
            // "Type Path": globalTypeDefinition(
            //     group({
            //         "namespaces": prop(array(resolvedValueReference(valSel("TBD"), tempTypeSelection("Namespace" /*constrain type to namespace*/)))),
            //         "type": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Namespace") /*constrain to type defintion*/)),
            //         "parameters": prop(dictionary(component("Type", {
            //             "global types": aLookup(lparameter("global types"))
            //         }))),
            //     })
            // ),
            "Type Parameters": globalTypeDefinition(
                dictionary(component("Type", {
                    "namespace": aLookup(lparameter("namespace"))
                }))
            ),
            // "variable": composite("VariableStatement", group({
            //     "modifiers": member(component("modifiers")),
            //     "variableDeclarationList": member(component("variableDeclarationList")),
            // })),
        }),
    }
}