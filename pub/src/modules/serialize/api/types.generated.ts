import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../glossary"
import * as mmoduleDefinition from "../../moduleDefinition"

export type XSerializeGlossary = ($: mglossary.TGlossary, $i: mfp.IBlock) => void

export type XSerializeLeafType = ($: mglossary.TLeafType, $i: mfp.ILine) => void

export type XSerializeModuleDefinition = ($: mmoduleDefinition.TModuleDefinition, $i: mfp.IWriter) => void