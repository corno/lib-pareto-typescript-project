import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"

export type TCallbackBlock = t.GCallbackBlock

export type TExpression = t.GExpression

export type TFunctionBlock = t.GFunctionBlock

export type TImplementation = t.GImplementation

export type TStates = t.GStates

export type TType = t.GType

export type FSerializeImplementation = ($: TImplementation, $i: mfp.ILine,) => void