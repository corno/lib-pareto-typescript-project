import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"

export type FSerialize = <GPAnnotation>($: T.Module<GPAnnotation>, $i: mfp.ILine,) => void

export type FSerializeWithContext = <GPAnnotation>($: T.Module<GPAnnotation>, $i: mfp.IWriter,) => void