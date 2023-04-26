import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    pAllSiblings,
    array,
    component, dictionary, globalType, group, t_grp,
    option, optional, prop, taggedUnion,
    t_tu, tempTypeSelection, parameter, thisCyclic, aContainingDictionary, resolvedValueReference, valSel, globalTypeSelection
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
        "Namespace": globalType({}, dictionary(group({
            "type": prop(taggedUnion({
                "namespace": option(component("Namespace", {})),
                "type definition": option(group({
                    "parameters": prop(component("Type Parameters", { "global types": aContainingDictionary(thisCyclic()), })),
                    "type": prop(component("Type", { "global types": aContainingDictionary(thisCyclic()) })),
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
            "root": prop(component("Namespace", {})),
        })),
        "Parameters": globalType({}, dictionary(group({
            "type": prop(component("Type", {
                "global types": aContainingDictionary(parameter("global types"))
            })),
        }))),
        "Type": globalType({
            "namespace": pAllSiblings(globalTypeSelection("Namespace")),
        }, taggedUnion({
            // "any": empty("AnyKeyword"),
            "array": option(component("Type", {
                "global types": aContainingDictionary(parameter("global types"))
            })),
            "boolean": option(group({})),
            "address function": option(group({
                "type parameters": prop(component("Type Parameters", {
                    "global types": aContainingDictionary(parameter("global types"))
                })),
                "parameters": prop(component("Parameters", {})),
                "return type": prop(component("Type", {
                    "global types": aContainingDictionary(parameter("global types"))
                })),
            })),
            "value function": option(group({
                "type parameters": prop(component("Type Parameters", {
                    "global types": aContainingDictionary(parameter("global types"))
                })),
                "parameters": prop(component("Parameters", {})),
                "return type": prop(component("Type", {
                    "global types": aContainingDictionary(parameter("global types"))
                })),
            })),
            "procedure": option(group({
                "type parameters": prop(component("Type Parameters", {
                    "global types": aContainingDictionary(parameter("global types"))
                })),
                "parameters": prop(component("Parameters", {})),
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "type": prop(component("Type", {
                        "global types": aContainingDictionary(parameter("global types"))
                    }))
                })))
            })),

            // "never": empty("NeverKeyword"),
            "null": option(group({})),
            "number": option(group({})),
            "optional": option(component("Type", {
                "global types": aContainingDictionary(parameter("global types"))
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
            "reference": option(group({
                "path": prop(array(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type", [t_tu("group"), t_grp("properties")])))),
            })),
            "string": option(group({})),
            //"string literal": option(terminal("string literal")),
            // "tuple": option(array(component("Type", { "global types": argument(true) }))),
            // "tuple": composite("TupleType", array(component("type"))),
            // "typeLiteral": composite("TypeLiteral", component("typeSignatures")),
            // "undefined": empty("UndefinedKeyword"),
            "tagged union": option(dictionary(component("Type", {
                "global types": aContainingDictionary(parameter("global types"))
            }))),
            // "void": empty("VoidKeyword"),
        })),
        "Type Path": globalType({
            "namepace": pAllSiblings(globalTypeSelection("Namespace")),
        }, group({
            "namespaces": prop(array(resolvedValueReference(valSel("TBD"), tempTypeSelection("Namespace" /*constrain type to namespace*/, [])))),
            "type": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Namespace", []) /*constrain to type defintion*/)),
            "parameters": prop(dictionary(component("Type", {
                "global types": aContainingDictionary(parameter("global types"))
            }))),
        })),
        "Type Parameters": globalType({
            "namespace": pAllSiblings(globalTypeSelection("Namespace")),
        }, dictionary(component("Type", {
            "namespace": aContainingDictionary(parameter("namespace"))
        }))),
        // "variable": composite("VariableStatement", group({
        //     "modifiers": member(component("modifiers")),
        //     "variableDeclarationList": member(component("variableDeclarationList")),
        // })),
    }),
}