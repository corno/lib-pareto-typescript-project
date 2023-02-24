import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"

export type FSerialize = <GPAnnotation>($: T.ModuleDefinition<GPAnnotation>, $i: gfp.ILine,) => void