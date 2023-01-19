import * as pt from 'pareto-core-types'

export type FAddKeysToDictionary = <T> (
    $: pt.Dictionary<T>
) => pt.Dictionary<{
    key: string
    value: T
}>

export type XArrayForEach = <T> (
    $: pt.Array<T>,
    $i: ($i: {
        value: T,
    }) => void
) => void

export type XDictionaryForEach = <T> (
    $: pt.Dictionary<T>,
    $i: ($i: {
        key: string
        value: T,
    }) => void
) => void

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

export type XEnrichedArrayForEach = <T> (
    $: pt.Array<T>,
    $i: {
        onEmpty: () => void
        onNotEmpty: ($c: ($i: ($: {
            value: T,
            isFirst: boolean
        }) => void) => void) => void
    }
) => void