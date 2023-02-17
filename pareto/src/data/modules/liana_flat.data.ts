import * as pd from 'pareto-core-data'

import {
    types, typeReference, interfaceReference, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
            "liana": "../../../liana",
            "liana2Pareto": "../../../liana2Pareto",
        }),
        'parameters': d({}),
        'types': d({
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(typeReference("liana2Pareto", "MappedModel"), null, interfaceReference("fp", "Writer"), null),
        }),
    },
    'api': {
        'imports': d({
            "liana2Pareto": "../../liana2Pareto",
            "pareto2typescript": "../../pareto2typescript",
            "tostring": "res-pareto-tostring",
            "ts": "res-typescript",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "joinNestedStrings": definitionReference("tostring", {}, "JoinNestedStrings"),
                "mapLiana2States": definitionReference("liana2Pareto", {}, "MapLiana2States"),
                "serializeStates": definitionReference("pareto2typescript", {}, "SerializeStates"),
            })),
            "serialize": algorithm(definitionReference("Serialize")),
        })
    },
}