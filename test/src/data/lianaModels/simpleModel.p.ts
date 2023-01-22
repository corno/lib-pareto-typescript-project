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
    }),
    'globalTypes': d({
        "Root": globalType([], string("textx"))
    }),
    'root': r("Root"),
}