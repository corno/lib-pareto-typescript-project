import * as pr from 'pareto-core-raw'
import {
    externalReference,
    string,
    reference,
    dictionary, group, member, taggedUnion, types, _function, typeReference, externalInterfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
import { constructor, definitionReference, externalDefinitionReference } from 'lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p'

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
                "definition": member(externalReference("moduleDefinition", "ModuleDefinition")),
                // "type": member(taggedUnion({
                //     "binding": nll(),
                //     "resource": nll(),
                //     "logic": nll(),

                // }))
                "implementation": member(externalReference("algorithm", "Implementation"), true),
                "states": member(externalReference("algorithm", "States"), true)
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
            "Serialize": callback(typeReference("Module"), externalInterfaceReference("fp", "Line")),
            "SerializeWithContext": callback(typeReference("Module"), externalInterfaceReference("fp", "Writer")),
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
            "createSerializer": {
                'definition': definitionReference("Serialize"),
                'type': constructor(null, {
                    "serializeModuleDefinition":externalDefinitionReference("moduleDefinition", "Serialize"),
                    "serializeImplementation":externalDefinitionReference("algorithm", "SerializeImplementation"),
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "enrichedArrayForEach": externalDefinitionReference("temp", "EnrichedArrayForEach"),
                }),
            },
            "createSerializerWithContext": {
                'definition': definitionReference("SerializeWithContext"),
                'type': constructor(null, {
                    "serialize": definitionReference("Serialize"),
                }),
            },
        })
    },
}