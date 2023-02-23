import * as pd from 'pareto-core-data'

import { func, glossaryParameter, interfaceReference, parametrizedTypeReference, type, typeReference, types } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
            "liana": "../../../liana",
            "liana2pareto": "../../../liana2pareto",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(parametrizedTypeReference("liana2pareto", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, interfaceReference("fp", "Writer"), null),
        }),
    },
    'api': {
        'imports': d({
            "liana2pareto": "../../liana2pareto",
            "pareto2typescript": "../../pareto2typescript",
            "tostring": "res-pareto-tostring",
            "ts": "res-typescript",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "joinNestedStrings": definitionReference("tostring", {}, "JoinNestedStrings"),
                "mapLiana2States": definitionReference("liana2pareto", {}, "MapLiana2States"),
                "serializeStates": definitionReference("pareto2typescript", {}, "SerializeStates"),
            })),
            "serialize": algorithm(definitionReference("Serialize")),
        })
    },
}