import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as galgorithm from "../../../algorithm"
import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"
import * as gmoduleDefinition from "../../../moduleDefinition"

export type FSerialize = <GPAnnotation>($: T.Module<GPAnnotation>, $i: gfp.ILine,) => void

export type FSerializeWithContext = <GPAnnotation>($: T.Module<GPAnnotation>, $i: gfp.IWriter,) => void