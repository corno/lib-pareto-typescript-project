import * as pd from 'pareto-core-data'

import { boolean, data, dictionary, func, glossaryParameter, group, member, null_, optional, parametrizedReference, parametrizedType, parametrizedTypeReference, reference, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "liana": "../../../liana",
            "main": "res-pareto-main",
            "project": "../../../project",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "GenerateModuleData": type(group({
                "data": member(reference("MapLiana2ParetoData")),
                "path": member(reference("common", "Path")),
            })),
            "GenerationConfiguration": type(group({
                "datamodel": member(optional(group({
                    "annotations": member(boolean()),
                    "properties optional": member(boolean()),
                    "reference mapping": member(taggedUnion({
                        "string": group({}),
                        "reference": group({}),
                        "reference and string": group({}),
                    }))
                }))),
                "algorithms": member(group({
                    //serialize
                    //resolve
                })),
            })),
            "MapLiana2ParetoData": type(group({
                "mappedModel": member(reference("MappedModel")),
                "configuration": member(reference("GenerationConfiguration")),
            })),
            "MappedModel": type(group({
                "model": member(parametrizedReference("liana", { "Annotation": typeReference("Annotation")}, "Model")),
                "stringmapping": member(dictionary(taggedUnion({
                    "boolean": null_(),
                    "number": null_(),
                    "string": null_(),
                }))),
            })),
            "Modules": type(group(({
                "modules": member(dictionary(parametrizedReference("project", { "Annotation": typeReference("Annotation") }, "Module")))
            }))),
            "Module": type(parametrizedReference("project", { "Annotation": typeReference("Annotation") }, "Module")),
        }),
        'interfaces': d({}),
        'functions': d({
            "GenerateModule": func(typeReference("GenerateModuleData"), null, null, null),
            "MapLiana2Pareto": func(typeReference("MapLiana2ParetoData"), null, null, data(typeReference("Module"), false)),
            "MapLiana2States": func(typeReference("MappedModel"), null, null, data(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), false)),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "foreach": "res-pareto-foreach",
            "project": "../../project",
        }),
        'algorithms': d({
            "generateModule": algorithm(definitionReference("GenerateModule")),
            "createModuleGenerator": algorithm(definitionReference("GenerateModule"), constructor(null, {
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