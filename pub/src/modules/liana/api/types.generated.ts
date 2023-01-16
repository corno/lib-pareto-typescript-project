import * as pt from "pareto-core-types"

export type TModel = {
    readonly "root": string
    readonly "types": pt.Dictionary<{
        readonly "block": TTypeBlock
    }>
}

export type TTypeBlock = {
    readonly "properties": pt.Dictionary<
        | ["array", {}]
        | ["dictionary", {}]
        | ["group", {}]
        | ["string", {}]
        | ["taggedUnion", {}]
    >
}