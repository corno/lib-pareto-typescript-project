import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    allSiblings,
    argAllSiblingsPlaceholder,
    array,
    component, dictionary, globalType, group, grp,
    option, optional, prop, reference, taggedUnion, tbd,
    tu, typePath
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d


export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
    }),
    'terminal types': d({
        "identifier": null,
    }),
    'global types': d({
        "Global Types": globalType({}, dictionary(group({
            "type": prop(taggedUnion({
                "namespace": option(group({
                    "types": prop(component("Global Types", {})),
                })),
                "type definition": option(group({
                    "parameters": prop(component("Type Parameters", { "global types": argAllSiblingsPlaceholder(), })),
                    "type": prop(component("Type", { "global types": argAllSiblingsPlaceholder() })),
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
        })),
        "Type": globalType({
            "global types": allSiblings(typePath("Global Types", [])),
        }, taggedUnion({
            // "any": empty("AnyKeyword"),
            "array": option(component("Type", {
                "global types": argAllSiblingsPlaceholder()
            })),
            "boolean": option(group({})),

            "function": option(group({
                "type parameters": prop(component("Type Parameters", {
                    "global types": argAllSiblingsPlaceholder()
                })),
                "parameters": prop(dictionary(group({
                    "type": prop(component("Type", {
                        "global types": argAllSiblingsPlaceholder()
                    })),
                }))),
                "return type": prop(optional(component("Type", {
                    "global types": argAllSiblingsPlaceholder()
                }))),
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "type": prop(component("Type", {
                        "global types": argAllSiblingsPlaceholder()
                    }))
                })))
            })),

            // "never": empty("NeverKeyword"),
            "null": option(group({})),
            "number": option(group({})),
            "optional": option(component("Type", {
                "global types": argAllSiblingsPlaceholder()
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
                "path": prop(array(reference(typePath("Type", [tu("group"), grp("properties")]), tbd()))),
            })),
            "string": option(group({})),
            //"string literal": option(terminal("string literal")),
            // "tuple": option(array(component("Type", { "global types": argument(true) }))),
            // "tuple": composite("TupleType", array(component("type"))),
            // "typeLiteral": composite("TypeLiteral", component("typeSignatures")),
            // "undefined": empty("UndefinedKeyword"),
            "tagged union": option(dictionary(component("Type", {
                "global types": argAllSiblingsPlaceholder()
            }))),
            // "void": empty("VoidKeyword"),
        })),
        "Type Path": globalType({
            "global types": allSiblings(typePath("Global Types", [])),
        }, group({
            "namespaces": prop(array(reference(typePath("Global Types" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(typePath("Global Types", []), /*constrain to type defintion*/ tbd())),
            "parameters": prop(dictionary(component("Type", {
                "global types": argAllSiblingsPlaceholder()
            }))),
        })),
        "Type Parameters": globalType({
            "global types": allSiblings(typePath("Global Types", [])),
        }, dictionary(component("Type", {
            "global types": argAllSiblingsPlaceholder()
        }))),
        // "variable": composite("VariableStatement", group({
        //     "modifiers": member(component("modifiers")),
        //     "variableDeclarationList": member(component("variableDeclarationList")),
        // })),
    }),
}