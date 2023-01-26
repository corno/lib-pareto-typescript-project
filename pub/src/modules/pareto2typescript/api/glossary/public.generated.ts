import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"
import * as mproject from "../../../project"

export type FSerializeGlossary = ($: mglossary.TGlossary, $i: mfp.IWriter,) => void

export type FSerializeImplementation = ($: malgorithm.TImplementation, $i: mfp.IWriter,) => void

export type FSerializeModuleDefinition = ($: mmoduleDefinition.TModuleDefinition, $i: mfp.IWriter,) => void

export type FSerializeProject = ($: mproject.TProject, $i: mfp.IWriter,) => void

export type FSerializeStates = ($: malgorithm.TStates, $i: mfp.IBlock,) => void

export type FSerializeTemplate = ($: mproject.TProject, $i: mfp.IWriter,) => void