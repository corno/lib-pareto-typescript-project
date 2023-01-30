import * as pt from 'pareto-core-types'

export type FDecorateDictionaryEntriesWithKey = <T> (
    $: pt.Dictionary<T>
) => pt.Dictionary<{
    key: string
    value: T
}>

export type FArrayForEach = <T> (
    $: pt.Array<T>,
    $i: ($i: {
        value: T,
    }) => void
) => void

export type FDictionaryForEach = <T> (
    $: pt.Dictionary<T>,
    $i: ($i: {
        key: string
        value: T,
    }) => void
) => void

export type FEnrichedDictionaryForEach = <T> (
    $: pt.Dictionary<T>,
    $i: {
        onEmpty: () => void
        onNotEmpty: ($c: ($i: ($: {
            key: string
            value: T,
            isFirst: boolean
            isLast: boolean
        }) => void) => void) => void
    }
) => void

export type FEnrichedArrayForEach = <T> (
    $: pt.Array<T>,
    $i: {
        onEmpty: () => void
        onNotEmpty: ($c: ($i: ($: {
            value: T,
            isFirst: boolean
            isLast: boolean
        }) => void) => void) => void
    }
) => void