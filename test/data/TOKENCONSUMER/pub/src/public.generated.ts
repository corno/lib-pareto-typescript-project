import * as pt from 'pareto-core-types'

import * as t from './types.generated'


export type TAnnotatedToken = t.UAnnotatedToken

export type TAnnotation = t.UAnnotation

export type TMultilineStringData = t.UMultilineStringData

export type TSimpleStringData = t.USimpleStringData

export type TStructuralTokenData = t.UStructuralTokenData

export type TStructuralTokenType = t.UStructuralTokenType

export type TToken = t.UToken

export type TWrapping = t.UWrapping

export type ITokenConsumer = {
    'onEnd': ($: TAnnotation, ) => void
    'onToken': ($: TAnnotatedToken, ) => void
}