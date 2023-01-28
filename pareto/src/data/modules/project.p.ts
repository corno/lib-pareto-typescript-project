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
            "moduleDefinition": "../../../moduleDefinition",
            "algorithm": "../../../algorithm",
            "fp": "lib-fountain-pen",
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
                "type": member(taggedUnion({
                    "resource": group({}),
                    "glossary": group({}),
                    "library": group({}),
                })),
                "modules": member(dictionary(reference("Module"))),
                "main": member(string()),
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