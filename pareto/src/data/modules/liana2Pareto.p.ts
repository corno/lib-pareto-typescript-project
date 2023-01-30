import * as pr from 'pareto-core-raw'
import {
    reference,
    array, dictionary, group, member, taggedUnion, types, typeReference, null_, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

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
            "GenerateProject": func(typeReference("Configuration"), null, null, null),
            "MapLiana2Pareto": func(typeReference("MappedModel"), null, null, data( typeReference("Modules"), false)),
            "MapLiana2States": func(typeReference("MappedModel"),null, null, data( typeReference("algorithm", "States"), false)),
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