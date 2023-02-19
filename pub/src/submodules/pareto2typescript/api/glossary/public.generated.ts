import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"
import * as mproject from "../../../project"

export type FSerializeBuildEnvironment = <GPAnnotation>($: mcommon.T.Null, $i: mfp.IWriter,) => void

export type FSerializeGlossary = <GPAnnotation>($: mglossary.T.Glossary<T.Annotation<GPAnnotation>>, $i: mfp.IWriter,) => void

export type FSerializeImplementation = <GPAnnotation>($: malgorithm.T.Implementation<T.Annotation<GPAnnotation>>, $i: mfp.IWriter,) => void

export type FSerializeModuleDefinition = <GPAnnotation>($: mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>, $i: mfp.IWriter,) => void

export type FSerializeParetoEnvironment = <GPAnnotation>($: mcommon.T.Null, $i: mfp.IWriter,) => void

export type FSerializeProject = <GPAnnotation>($: mproject.T.Project<T.Annotation<GPAnnotation>>, $i: mfp.IWriter,) => void

export type FSerializeStates = <GPAnnotation>($: malgorithm.T.States<T.Annotation<GPAnnotation>>, $i: mfp.IBlock,) => void

export type FSerializeTemplate = <GPAnnotation>($: mproject.T.Project<T.Annotation<GPAnnotation>>, $i: mfp.IWriter,) => void