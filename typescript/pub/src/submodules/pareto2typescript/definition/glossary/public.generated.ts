import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as galgorithm from "../../../algorithm"
import * as gapi from "../../../api"
import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"
import * as gproject from "../../../project"

export type FProjectToDirectory = <GPAnnotation>($: gproject.T.Project<T.Annotation<GPAnnotation>>, $i: gfp.IDirectory,) => void

export type FSerializeAPI = <GPAnnotation>($: gapi.T.API<T.Annotation<GPAnnotation>>, $i: gfp.IBlock,) => void

export type FSerializeBuildEnvironment = <GPAnnotation>($: gcommon.T.Null, $i: gfp.IDirectory,) => void

export type FSerializeGlossary = <GPAnnotation>($: gglossary.T.Glossary<T.Annotation<GPAnnotation>>, $i: gfp.IDirectory,) => void

export type FSerializeImplementation = <GPAnnotation>($: galgorithm.T.Implementation<T.Annotation<GPAnnotation>>, $i: gfp.IDirectory,) => void

export type FSerializeParetoEnvironment = <GPAnnotation>($: gcommon.T.Null, $i: gfp.IDirectory,) => void

export type FSerializeStates = <GPAnnotation>($: galgorithm.T.States<T.Annotation<GPAnnotation>>, $i: gfp.IBlock,) => void