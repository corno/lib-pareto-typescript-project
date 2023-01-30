import * as pr from 'pareto-core-raw'
import {
    reference,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, null_, procedure
} from "lib-pareto-typescript-project/dist/submodules/glossary/api/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "liana": "../../../liana",
            "project": "../../../project",
            "main": "res-pareto-main",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "Configuration": group({
                "model": member(reference("MappedModel")),
                "mainData": member(reference("main", "MainData")),
            }),
            "MappedModel": group({
                "model": member(reference("liana", "Model")),
                "stringmapping": member(dictionary(taggedUnion({
                    "number": null_(),
                    "string": null_(),
                }))),
            }),
            "Modules": group(({
                "modules": member(dictionary(reference("project", "Module")))
            }))
        }),
        'interfaces': d({}),
        'functions': d({
            "GenerateProject": procedure(typeReference("Configuration")),
            "MapLiana2Pareto": _function(typeReference("MappedModel"), typeReference("Modules")),
            "MapLiana2States": _function(typeReference("MappedModel"), typeReference("algorithm", "States")),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "project": "../../project",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "generateProject": algorithm(definitionReference("GenerateProject")),
            "createProjectGenerator": algorithm(definitionReference("GenerateProject"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("temp", "DecorateDictionaryEntriesWithKey"),
                "logError": definitionReference("common", "Log"),
                "mapLiana2Pareto": definitionReference("MapLiana2Pareto"),
                "serializeProject": definitionReference("project", "SerializeWithContext"),
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
            })),
            "createLiana2ParetoMapper": algorithm(definitionReference("MapLiana2Pareto"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("temp", "DecorateDictionaryEntriesWithKey"),
            })),
            "createLiana2StatesMapper": algorithm(definitionReference("MapLiana2States"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("temp", "DecorateDictionaryEntriesWithKey"),
            })),
        })
    },
}