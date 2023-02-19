import * as pd from 'pareto-core-data'

import { func, glossaryParameter, interfaceReference, parametrizedTypeReference, type, typeReference, types } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
            "liana": "../../../liana",
            "liana2Pareto": "../../../liana2Pareto",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(parametrizedTypeReference("liana2Pareto", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, interfaceReference("fp", "Writer"), null),
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