import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"

export type TContext = t.UContext

export type TGlossary = t.UGlossary

export type TInterface = t.UInterface

export type TInterfaceReference = t.UInterfaceReference

export type TType = t.UType

export type TTypeReference = t.UTypeReference

export type FSerialize = <PGAnnotation>($: TGlossary, $i: mfp.ILine,) => void