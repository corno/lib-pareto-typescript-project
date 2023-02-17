import * as pd from 'pareto-core-data'

import * as mliana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    string,
    taggedUnion,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: mliana.T.Model = {
    'stringTypes': d({
        "text": null,
        "identifier": null,
    }),
    'globalTypes': d({
        "Root": globalType({ "parameterA": "Sub"}, group({
            "a": [[], string("text")],
            "b": [[], string("text")],
            "c": [[], dictionary(group({}))],
            "d": [[], reference(['sibling', "c"], [])],
            "e": [[], group({
                //"a": [[], reference(['parent', null], [])],
            })],
            "f": [[], reference(['parameter', "parameterA"], [])],
            //"g": [[], taggedUnion({})],
            "h": [[], taggedUnion({
                "a": group({})
            })],


        })),
        "Sub": globalType({}, group({

        }))
    }),
    'root': r("Root"),
}