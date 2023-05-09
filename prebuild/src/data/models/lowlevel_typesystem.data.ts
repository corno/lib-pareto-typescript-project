import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    resolvedSiblingComponent, dictionary,
    globalType,
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
    'global types': d({
        "Namespace": globalType(
            {
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            },
            group({
                "namespaces": prop(dictionary(resolvedSiblingComponent("Namespace", {}))),
                "parameters": prop(resolvedSiblingComponent("Type Parameters", {})),
                "types": prop(dictionary(resolvedSiblingComponent("Type", {}))),
            }),
        ),
        "Type Parameters": globalType(
            {
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            },
            dictionary(resolvedSiblingComponent("Type", {
                "namespace": aLookup(lparameter("namespace"))
            }))
        ),
        // "TypeParameters": globalType(
        //     {
        //         "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
        //     },
        //     dictionary(group({
        //         "type": prop(resolvedSiblingComponent("Type", {
        //             "global types": aLookup(lparameter("global types"))
        //         })),
        //     }))
        // ),
        "Function Declaration": globalType(
            {},
            group({
                "type parameters": prop(resolvedSiblingComponent("Type Parameters", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "context": prop(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "parameters": prop(dictionary(resolvedSiblingComponent("Type", {}))),
            })
        ),
        "Type": globalType(
            {
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            },
            taggedUnion({
                // "any": empty("AnyKeyword"),
                "array": option(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "dictionary": option(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "boolean": option(group({})),
                "address function": option(group({
                    "declaration": prop(resolvedSiblingComponent("Function Declaration", {})),
                    "return type": prop(resolvedSiblingComponent("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
                })),
                "value function": option(group({
                    "declaration": prop(resolvedSiblingComponent("Function Declaration", {})),
                    "return type": prop(resolvedSiblingComponent("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
                })),
                "procedure": option(group({
                    "declaration": prop(resolvedSiblingComponent("Function Declaration", {})),
                })),
                "group": option(dictionary(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                }))),

                // "never": empty("NeverKeyword"),
                "null": option(group({})),
                "number": option(group({})),
                "optional": option(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                // "optional": composite("OptionalType", resolvedSiblingComponent("type")),
                // "parenthesized": composite("ParenthesizedType", resolvedSiblingComponent("type")),


                // "typeReference": composite("TypeReference", group({
                //     "id": member(choice({
                //         "identifier": resolvedSiblingComponent("identifier"),
                //         "qualifiedName": composite("QualifiedName", group({
                //             "context": member(resolvedSiblingComponent("identifier")),
                //             "type": member(resolvedSiblingComponent("identifier")),
                //         })),
                //     })),
                //     "parameters": member(array(resolvedSiblingComponent("type"))),
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
                // "tuple": option(array(resolvedSiblingComponent("Type", { "global types": argument(true) }))),
                // "tuple": composite("TupleType", array(resolvedSiblingComponent("type"))),
                // "typeLiteral": composite("TypeLiteral", resolvedSiblingComponent("typeSignatures")),
                // "undefined": empty("UndefinedKeyword"),
                "tagged union": option(dictionary(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                }))),
                // "void": empty("VoidKeyword"),
            })
        ),
        // "Type Path": globalType(
        //     group({
        //         "namespaces": prop(array(resolvedValueReference(valSel("TBD"), tempTypeSelection("Namespace" /*constrain type to namespace*/)))),
        //         "type": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Namespace") /*constrain to type defintion*/)),
        //         "parameters": prop(dictionary(resolvedSiblingComponent("Type", {
        //             "global types": aLookup(lparameter("global types"))
        //         }))),
        //     })
        // ),
        // "variable": composite("VariableStatement", group({
        //     "modifiers": member(resolvedSiblingComponent("modifiers")),
        //     "variableDeclarationList": member(resolvedSiblingComponent("variableDeclarationList")),
        // })),
    }),
}