import * as pt from 'pareto-core-types'

export type TTypedArray<T> = pt.Array<T>

export type TTypedDictionary<T> = pt.Dictionary<T>

export type TTypedKeyValueDictionary<T> = pt.Dictionary<{
    key: string
    value: T
}>

export type FDecorateDictionaryEntriesWithKey = <T> (
    $: TTypedDictionary<T>
) => TTypedKeyValueDictionary<T>

export type FArrayForEach = <T> (
    $: TTypedArray<T>,
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