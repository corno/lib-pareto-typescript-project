import * as pd from 'pareto-core-data'

import {
    types, typeReference, interfaceReference, func, context, parametrizedTypeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'types': d({
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(parametrizedTypeReference("glossary", { "Type": typeReference("common", "String")}, "Glossary"), null, interfaceReference("fp", "Line"), null),
        }),
    },
    'api': {
        'imports': d({
            "foreach": "res-pareto-foreach",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "arrayForEach": definitionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
            }))
        })
    },
}