import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference, null_, procedure
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
import { constructor } from 'lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p'


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "liana": "../../liana",
            "project": "../../project",
            // "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
                "Configuration": group({
                    "model": member(ref("MappedModel")),
                    "mainData": member(er("main", "MainData")),
                }),
                "MappedModel": group({
                    "model": member(er("liana", "Model")),
                    "stringmapping": member(dictionary(taggedUnion({
                        "number": null_(),
                        "string": null_(),
                    }))),
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "MapLiana2Pareto": _function(typeReference("MappedModel"), externalTypeReference("project", "Module")),
            "GenerateProject": procedure(typeReference("Configuration")),
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
                'type': ['reference', null],
            },
            "createProjectGenerator": {
                'definition': {
                    'function': "GenerateProject"
                },
                'type': constructor(null, {
                    "decorateDictionaryEntriesWithKey": {
                        'context': ['import', "temp"],
                        'function': "DecorateDictionaryEntriesWithKey"
                    },
                    "logError": {
                        'context': ['import', "common"],
                        'function': "Log"
                    },
                    "mapLiana2Pareto": {
                        'function': "MapLiana2Pareto",
                    },
                    "serializeProject": {
                        'context': ['import', "project"],
                        'function': "SerializeWithContext"
                    },
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
        })
    },
}