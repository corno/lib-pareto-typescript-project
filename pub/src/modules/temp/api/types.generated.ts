import * as pt from "pareto-core-types"

export type XEnrichedDictionaryForEach = <T> (
    $: pt.Dictionary<T>,
    $i: {
        onEmpty: () => void
        onNotEmpty: ($c: ($i: ($: {
            key: string
            value: T,
            isFirst: boolean
        }) => void) => void) => void
    }
) => void