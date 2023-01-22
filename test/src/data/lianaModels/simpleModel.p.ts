import * as pr from 'pareto-core-raw'

import * as mliana from "../../../../pub/dist/modules/liana"
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
} from "../../../../pub/dist/modules/liana/api/shorthands.p"

export const $: mliana.TModel = {
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