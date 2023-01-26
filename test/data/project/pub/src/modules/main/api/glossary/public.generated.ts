import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"

export type TAccounting = t.UAccounting

export type TAfhandeling = t.UAfhandeling

export type TInformele__Rekeningen = t.UInformele__Rekeningen

export type TJaren = t.UJaren

export type FEnrich = <PGAnnotation>($: TRoot,) => TRoot

export type FSerialize = <PGAnnotation>($: TRoot, $i: mfp.ILine,) => void