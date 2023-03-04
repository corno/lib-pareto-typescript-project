import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_algorithm from "../../../algorithm"
import * as g_api from "../../../api"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../../glossary"
import * as g_project from "../../../project"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type ProjectToDirectory = <GAnnotation>($: g_project.T.Project<T.Annotation<GAnnotation>>, $b: g_fp.B.Directory,) => void
    
    export type SerializeAPI = <GAnnotation>($: T.SerializeAPIData<GAnnotation>, $b: g_fp.B.Block,) => void
    
    export type SerializeBuildEnvironment = <GAnnotation>($: g_common.T.Null, $b: g_fp.B.Directory,) => void
    
    export type SerializeGlossary = <GAnnotation>($: T.SerializeGlossaryData<GAnnotation>, $b: g_fp.B.Directory,) => void
    
    export type SerializeImplementation = <GAnnotation>($: g_algorithm.T.Implementation<T.Annotation<GAnnotation>>, $b: g_fp.B.Directory,) => void
    
    export type SerializeParetoEnvironment = <GAnnotation>($: g_common.T.Null, $b: g_fp.B.Directory,) => void
    
    export type SerializeStates = <GAnnotation>($: g_algorithm.T.States<T.Annotation<GAnnotation>>, $b: g_fp.B.Block,) => void
}