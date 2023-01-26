import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"

export type TContext = t.GContext

export type TGlossary = t.GGlossary

export type TInterface = t.GInterface

export type TInterfaceReference = t.GInterfaceReference

export type TType = t.GType

export type TTypeReference = t.GTypeReference

export type FSerialize = ($: TGlossary, $i: mfp.ILine,) => void