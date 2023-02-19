import * as pd from 'pareto-core-data'

import { data, dictionary, func, glossaryParameter, group, member, null_, parametrizedReference, parametrizedType, parametrizedTypeReference, reference, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "liana": "../../../liana",
            "project": "../../../project",
            "main": "res-pareto-main",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "Configuration": type(group({
                "model": member(reference("MappedModel")),
                "mainData": member(reference("main", "MainData")),
            })),
            "MappedModel": type(group({
                "model": member(parametrizedReference("liana", { "Annotation": typeReference("Annotation")}, "Model")),
                "stringmapping": member(dictionary(taggedUnion({
                    "number": null_(),
                    "string": null_(),
                }))),
            })),
            "Modules": type(group(({
                "modules": member(dictionary(parametrizedReference("project", { "Annotation": typeReference("Annotation") }, "Module")))
            }))),
        }),
        'interfaces': d({}),
        'functions': d({
            "GenerateProject": func(typeReference("Configuration"), null, null, null),
            "MapLiana2Pareto": func(typeReference("MappedModel"), null, null, data(typeReference("Modules"), false)),
            "MapLiana2States": func(typeReference("MappedModel"), null, null, data(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), false)),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "project": "../../project",
            "foreach": "res-pareto-foreach",
        }),
        'algorithms': d({
            "generateProject": algorithm(definitionReference("GenerateProject")),
            "createProjectGenerator": algorithm(definitionReference("GenerateProject"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
                "logError": definitionReference("common", {}, "Log"),
                "mapLiana2Pareto": definitionReference("MapLiana2Pareto"),
                "serializeProject": definitionReference("project", {}, "SerializeWithContext"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
            })),
            "createLiana2ParetoMapper": algorithm(definitionReference("MapLiana2Pareto"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            })),
            "mapLiana2Pareto": algorithm(definitionReference("MapLiana2Pareto")),
            "createLiana2StatesMapper": algorithm(definitionReference("MapLiana2States"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            })),
        })
    },
}