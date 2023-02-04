import * as pr from 'pareto-core-raw'

import {
    types, typeReference, interfaceReference, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
            "liana": "../../../liana",
            "liana2Pareto": "../../../liana2Pareto",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(typeReference("liana2Pareto", "MappedModel"), null, interfaceReference("fp", "Writer"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "liana2Pareto": "../../liana2Pareto",
            "pareto2typescript": "../../pareto2typescript",
            "temp": "../../temp",
            "tostring": "res-pareto-tostring",
            "ts": "res-typescript",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "joinNestedStrings": definitionReference("tostring", "JoinNestedStrings"),
                "mapLiana2States": definitionReference("liana2Pareto", "MapLiana2States"),
                "serializeStates": definitionReference("pareto2typescript", "SerializeStates"),
            })),
        })
    },
}