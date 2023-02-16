import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type, parametrizedTypeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p'

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
            "moduleDefinition": "../../../moduleDefinition",
        }),
        'parameters': d({}),
        'types': d({
            "AlgorithmImplementation": type(group({})),
            "Implementation": type(dictionary(reference("AlgorithmImplementation"))),
            "Module": type(group({
                "definition": member(reference("moduleDefinition", "ModuleDefinition")),
                // "type": member(taggedUnion({
                //     "binding": nll(),
                //     "resource": nll(),
                //     "logic": nll(),

                // }))
                "implementation": member(reference("algorithm", "Implementation"), true),
                "states": member(reference("algorithm", "States"), true)
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
                        "definition": member(reference("moduleDefinition", "ModuleDefinition")),
                        "test": member(reference("Test")),
                    }),
                    "glossary": group({
                        "glossary": member(['reference', parametrizedTypeReference("glossary", { "Type": typeReference("common", "String") }, "Glossary")]),
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
                "glossary": member(['reference', parametrizedTypeReference("glossary", { "Type": typeReference("common", "String") }, "Glossary")]),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(typeReference("Module"), null, interfaceReference("fp", "Line"), null),
            "SerializeWithContext": func(typeReference("Module"), null, interfaceReference("fp", "Writer"), null),
        }),
    },
    'api': {
        'imports': d({
            "algorithm": "../../algorithm",
            "collation": "res-pareto-collation",
            "moduleDefinition": "../../moduleDefinition",
            "foreach": "res-pareto-foreach",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "serializeModuleDefinition": definitionReference("moduleDefinition", {}, "Serialize"),
                "serializeImplementation": definitionReference("algorithm", {}, "SerializeImplementation"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
            })),
            "createSerializerWithContext": algorithm(definitionReference("SerializeWithContext"), constructor(null, {
                "serialize": definitionReference("Serialize"),
            })),
        })
    },
}