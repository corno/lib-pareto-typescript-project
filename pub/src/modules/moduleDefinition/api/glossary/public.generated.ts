import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export type TContext = t.UContext

export type TDefinitionReference = t.UDefinitionReference

export type TModuleDefinition = t.UModuleDefinition

export type FSerialize = ($: TModuleDefinition, $i: mfp.ILine,) => void