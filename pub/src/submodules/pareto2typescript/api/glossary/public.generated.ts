import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"
import * as mproject from "../../../project"

export type FSerializeBuildEnvironment = ($: mcommon.T.Null, $i: mfp.IWriter,) => void

export type FSerializeGlossary = ($: mglossary.T.Glossary<mcommon.T.String>, $i: mfp.IWriter,) => void

export type FSerializeImplementation = ($: malgorithm.T.Implementation, $i: mfp.IWriter,) => void

export type FSerializeModuleDefinition = ($: mmoduleDefinition.T.ModuleDefinition, $i: mfp.IWriter,) => void

export type FSerializeParetoEnvironment = ($: mcommon.T.Null, $i: mfp.IWriter,) => void

export type FSerializeProject = ($: mproject.T.Project, $i: mfp.IWriter,) => void

export type FSerializeStates = ($: malgorithm.T.States, $i: mfp.IBlock,) => void

export type FSerializeTemplate = ($: mproject.T.Project, $i: mfp.IWriter,) => void