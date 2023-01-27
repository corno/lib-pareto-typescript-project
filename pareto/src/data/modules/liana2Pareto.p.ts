import * as pr from 'pareto-core-raw'
import {
    externalReference,
    reference,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference, null_, procedure
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
import { constructor, definitionReference, externalDefinitionReference } from 'lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p'


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "liana": "../../../liana",
            "project": "../../../project",
            // "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "Configuration": group({
                "model": member(reference("MappedModel")),
                "mainData": member(externalReference("main", "MainData")),
            }),
            "MappedModel": group({
                "model": member(externalReference("liana", "Model")),
                "stringmapping": member(dictionary(taggedUnion({
                    "number": null_(),
                    "string": null_(),
                }))),
            }),
            "Modules": group(({
                "modules": member(dictionary(externalReference("project", "Module")))
            }))
        }),
        'interfaces': d({}),
        'functions': d({
            "GenerateProject": procedure(typeReference("Configuration")),
            "MapLiana2Pareto": _function(typeReference("MappedModel"), typeReference("Modules")),
            "MapLiana2States": _function(typeReference("MappedModel"), externalTypeReference("algorithm", "States")),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "project": "../../project",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "generateProject": {
                'definition': {
                    'function': "GenerateProject"
                },
                'type': ['reference', {}],
            },
            "createProjectGenerator": {
                'definition': {
                    'function': "GenerateProject"
                },
                'type': constructor(null, {
                    "decorateDictionaryEntriesWithKey": externalDefinitionReference("temp", "DecorateDictionaryEntriesWithKey"),
                    "logError": externalDefinitionReference("common", "Log"),
                    "mapLiana2Pareto": definitionReference("MapLiana2Pareto"),
                    "serializeProject": externalDefinitionReference("project", "SerializeWithContext"),
                    "dictionaryForEach":externalDefinitionReference("temp", "DictionaryForEach"),
                }),
            },
            "createLiana2ParetoMapper": {
                'definition': {
                    'function': "MapLiana2Pareto"
                },
                'type': constructor(null, {
                    "decorateDictionaryEntriesWithKey": {
                        'context': ['import', "temp"],
                        'function': "DecorateDictionaryEntriesWithKey"
                    },
                }),
            },
            "createLiana2StatesMapper": {
                'definition': {
                    'function': "MapLiana2States"
                },
                'type': constructor(null, {
                    "decorateDictionaryEntriesWithKey": {
                        'context': ['import', "temp"],
                        'function': "DecorateDictionaryEntriesWithKey"
                    },
                }),
            },
        })
    },
}