import * as pr from 'pareto-core-raw'
import {types, _function, externalTypeReference, externalInterfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

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

            "Serialize": callback(externalTypeReference("liana2Pareto", "MappedModel"), externalInterfaceReference("fp", "Writer")),
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
            "createSerializer": {
                'definition': definitionReference("Serialize"),
                'type': constructor(null, {
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "joinNestedStrings": externalDefinitionReference("tostring", "JoinNestedStrings"),
                    "mapLiana2States": externalDefinitionReference("liana2Pareto", "MapLiana2States"),
                    "serializeStates": externalDefinitionReference("pareto2typescript", "SerializeStates"),
                }),
            },
        })
    },
}