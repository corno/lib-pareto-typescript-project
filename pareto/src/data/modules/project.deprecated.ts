import * as pd from 'pareto-core-data'
import {
    string,
    reference,
    dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type, parametrizedTypeReference, glossaryParameter, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, functionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: gproject.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
            "moduleDefinition": "../../../moduleDefinition",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "AlgorithmImplementation": type(group({})),
            "Implementation": type(dictionary(reference("AlgorithmImplementation"))),
            "Module": type(group({
                "definition": member(reference("ModuleDefinition")),
                // "type": member(taggedUnion({
                //     "binding": nll(),
                //     "resource": nll(),
                //     "logic": nll(),

                // }))
                "implementation": member(taggedUnion({
                    "manual": group({
                        //  parametrizedReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation")
                    }),
                    "generated": group({}),
                })),
                //"states": member(parametrizedReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), true)
            })),
            "ModuleDefinition": type(group({
                "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                "api": member(parametrizedReference("moduleDefinition", { "Annotation": typeReference("Annotation") }, "API")),
            })),
            "Project": type(group({
                "author": member(string()),
                "license": member(string()),
                "description": member(string()),
                "dependencies": member(dictionary(group({}))),
                "type": member(taggedUnion({
                    "resource": group({
                        "nativeDependencies": member(dictionary(group({}))),
                        "devDependencies": member(dictionary(group({}))),
                        "definition": member(reference("ModuleDefinition")),
                        "test": member(reference("Test")),
                    }),
                    "glossary": group({
                        "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                    }),
                    "library": group({
                        "main": member(reference("Module")),
                        "submodules": member(dictionary(reference("Module"))),
                        "executables": member(dictionary(group({}))),
                        "test": member(reference("Test")),
                    }),
                })),
            })),
            "Test": type(group({
                "dependencies": member(dictionary(group({}))),
                "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(typeReference("Module"), null, interfaceReference("fp", "Line"), null),
            "SerializeWithContext": func(typeReference("Module"), null, interfaceReference("fp", "Directory"), null),
        }),
    },
    'api': {
        'imports': d({
            "algorithm": "../../algorithm",
            "collation": "res-pareto-collation",
            "moduleDefinition": "../../moduleDefinition",
            "foreach": "res-pareto-foreach",
            "glossary_serialize_temp": "../../glossary_serialize_temp",
            "this": "./glossary"
        }),
        'algorithms': d({
            "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
                "serializeAPI": functionReference("moduleDefinition", {}, "Serialize"),
                "serializeGlossary": functionReference("glossary_serialize_temp", {}, "Serialize"),
                "serializeImplementation": functionReference("algorithm", {}, "SerializeImplementation"),
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            })),
            "createSerializerWithContext": algorithm(functionReference("this", {}, "SerializeWithContext"), constructor(null, {
                "serialize": functionReference("this", {}, "Serialize"),
            })),
        })
    },
}