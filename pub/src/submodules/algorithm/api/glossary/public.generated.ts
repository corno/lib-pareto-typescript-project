import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"

export type TAsynchronousExpression = t.UAsynchronousExpression

export type TAsynchronousFunctionBlock = t.UAsynchronousFunctionBlock

export type TImplementation = t.UImplementation

export type TImplementationType = t.UImplementationType

export type TInterfaceInitializerBlock = t.UInterfaceInitializerBlock

export type TProcedureBlock = t.UProcedureBlock

export type TStates = t.UStates

export type TSynchronousExpression = t.USynchronousExpression

export type TSynchronousFunctionBlock = t.USynchronousFunctionBlock

export type TType = t.UType

export type FSerializeImplementation = ($: TImplementation, $i: mfp.ILine,) => void