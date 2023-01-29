import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    dictionary, group, member, taggedUnion, types, _function, typeReference, interfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p'

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "fp": "lib-fountain-pen",
            "glossary": "../../../glossary",
            "moduleDefinition": "../../../moduleDefinition",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "Module": group({
                "parameters": member(dictionary(string())),
                "definition": member(reference("moduleDefinition", "ModuleDefinition")),
                "arguments": member(dictionary(string())),

                // "type": member(taggedUnion({
                //     "binding": nll(),
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
                    }),
                    "glossary": group({
                        "definition": member(reference("glossary", "Glossary")),
                        "arguments": member(dictionary(string())),
                    }),
                    "library": group({
                        "main": member(reference("Module")),
                        "arguments": member(string()),
                        "submodules": member(dictionary(group({
                            "module": member( reference("Module")),
                            "arguments": member(taggedUnion({
                                "sibling": string(),
                                "main": group({}),
                                "external": string(),
                            }))
                        }))),
                    }),
                })),
                "testdependencies": member(dictionary(group({}))),
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
            "collation": "res-pareto-collation",
            "temp": "../../temp",
            "moduleDefinition": "../../moduleDefinition",
            "algorithm": "../../algorithm",
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