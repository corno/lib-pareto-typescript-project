import * as pt from 'pareto-core-types'
import * as malgorithm from "../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../glossary"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mproject from "../../project"

export type XSerializeGlossary = ($: mglossary.TGlossary, $i: mfp.IBlock) => void

export type XSerializeImplementation = ($: malgorithm.TImplementation, $i: mfp.IWriter) => void

export type XSerializeModuleDefinition = ($: mmoduleDefinition.TModuleDefinition, $i: mfp.IWriter) => void

export type XSerializeProject = ($: mproject.TProject, $i: mfp.IWriter) => void

export type XSerializeTemplate = ($: mproject.TProject, $i: mfp.IWriter) => void