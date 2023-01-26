import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"

export type TCallbackBlock = t.UCallbackBlock

export type TExpression = t.UExpression

export type TFunctionBlock = t.UFunctionBlock

export type TImplementation = t.UImplementation

export type TStates = t.UStates

export type TType = t.UType

export type FSerializeImplementation = ($: TImplementation, $i: mfp.ILine,) => void