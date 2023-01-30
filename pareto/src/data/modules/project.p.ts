import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    dictionary, group, member, taggedUnion, types, _function, typeReference, interfaceReference, callback
} from "lib-pareto-typescript-project/dist/submodules/glossary/api/shorthands.p"

import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/api/shorthands.p'

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
            "moduleDefinition": "../../../moduleDefinition",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "AlgorithmImplementation": group({}),
            "Implementation": dictionary(reference("AlgorithmImplementation")),
            "Module": group({
                "definition": member(reference("moduleDefinition", "ModuleDefinition")),
                // "type": member(taggedUnion({
                //     "binding": nll(),
                //     "resource": nll(),
                //     "logic": nll(),

                // }))
                "implementation": member(reference("algorithm", "Implementation"), true),
                "states": member(reference("algorithm", "States"), true)
            }),
            "Project": group({
                "name": member(string()),
                "author": member(string()),
                "license": member(string()),
                "description": member(string()),

                "pubdependencies": member(dictionary(group({}))),
                "type": member(taggedUnion({
                    "resource": group({
                        "devDependencies": member(dictionary(group({}))),
                        "definition": member(reference("moduleDefinition", "ModuleDefinition")),
                        "test": member(reference("Test")),
                    }),
                    "glossary": group({
                        "glossary": member(reference("glossary", "Glossary")),
                    }),
                    "library": group({
                        "main": member(reference("Module")),
                        "submodules": member(dictionary(reference("Module"))),
                        "test": member(reference("Test")),
                    }),
                })),
            }),
            "Test": group({
                "dependencies": member(dictionary(group({})))
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": callback(typeReference("Module"), interfaceReference("fp", "Line")),
            "SerializeWithContext": callback(typeReference("Module"), interfaceReference("fp", "Writer")),
        }),
    },
    'api': {
        'imports': d({
            "algorithm": "../../algorithm",
            "collation": "res-pareto-collation",
            "moduleDefinition": "../../moduleDefinition",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "serializeModuleDefinition": definitionReference("moduleDefinition", "Serialize"),
                "serializeImplementation": definitionReference("algorithm", "SerializeImplementation"),
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("temp", "EnrichedArrayForEach"),
            })),
            "createSerializerWithContext": algorithm(definitionReference("SerializeWithContext"), constructor(null, {
                "serialize": definitionReference("Serialize"),
            })),
        })
    },
}