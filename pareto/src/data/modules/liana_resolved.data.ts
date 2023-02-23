import * as pd from 'pareto-core-data'
import {
    computed,
    string,
    reference,
    boolean,
    array, dictionary, group, member, taggedUnion, types, typeReference, typeParameter, parametrizedTypeReference, func, data, type, parametrizedType, optional, glossaryParameter, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"
import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands'


const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "_Reference": parametrizedType({ "ReferencedType": {} }, group({
                "referenced value": member(typeParameter("ReferencedType")),
                "annotation": member(glossaryParameter("Annotation")),
                "key": member(string()),
            })),
            "_ComputedReference": parametrizedType({ "ReferencedType": {} }, group({
                "referenced value": member(computed(typeParameter("ReferencedType"))),
                "annotation": member(glossaryParameter("Annotation")),
                "key": member(string()),
            })),

            "XArgument": type(['reference', parametrizedTypeReference("_ComputedReference", { "ReferencedType": typeReference("XGlobalType") })]),
            "XGlobalType": type(group({
                "parameters": member(reference("XParameters")),
                "type": member(reference("XLocalType")),
            })),
            "XLocalType": type(taggedUnion({
                "string": reference("XString"),
                "boolean": group({}),
                "dictionary": group({
                    "key": member(reference("XString")),
                    "type": member(reference("XLocalType")),
                }),
                "array": group({
                    "type": member(reference("XLocalType")),
                }),
                "taggedUnion": group({
                    "options": member(['reference', parametrizedTypeReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("XOption") })]),
                    "default": member(['reference', parametrizedTypeReference("_Reference", { "ReferencedType": typeReference("XOption") })]),
                }),
                "group": group({
                    "properties": member(reference("XProperties")),
                }),
                "component": group({
                    "type": member(['reference', parametrizedTypeReference("_ComputedReference", { "ReferencedType": typeReference("XGlobalType") })]),
                    // "arguments": member(template("ConstrainedDictionary", {
                    //     "ReferencedType": reference("XParameter"),
                    //     "Type": reference("XArgument"),
                    // })),
                    "arguments": member(dictionary(string())),
                }),
            })),
            "XModel": type(group({
                "stringTypes": member(['reference', parametrizedTypeReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("XStringType") })]),
                "globalTypes": member(['reference', parametrizedTypeReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("XGlobalType") })]),
                "root": member(['reference', parametrizedTypeReference("_Reference", { "ReferencedType": typeReference("XGlobalType") })]),
            })),
            "XOption": type(group({
                "type": member(reference("XLocalType")),
            })),
            "XParameter": type(group({})),
            //"XParameter": template("_ComputedReference", { "ReferencedType": ref("XGlobalType") }),

            "XParameters": type(['reference', parametrizedTypeReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("XParameter") })]),
            "XProperty": type(group({
                "type": member(reference("XLocalType")),
            })),
            "XProperties": type(['reference', parametrizedTypeReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("XProperty") })]),
            "XReference": type(group({
                "resolved type": member(optional(reference("XLocalType"))),
            })),
            "XString": type(group({
                "constrained": member(taggedUnion({
                    "no": group({
                        "type": member(['reference', parametrizedTypeReference("_Reference", { "ReferencedType": typeReference("XStringType") })]),
                    }),
                    "yes": reference("XReference"),
                })),
            })),
            "XStringType": type(group({})),
            ////
            "PossibleModel": type(optional(group({
                "model": member(reference("XModel")),
                "has errors": member(boolean()),
            }))),
        }),
        'interfaces': d({
        }),
        'functions': d({
        }),
    },
    'api': {
        'imports': d({
            // "collation": "res-pareto-collation",
            "common": "glo-pareto-common",
        }),
        'algorithms': d({

        }),
    },
}