import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mresolved from "../../../liana_resolved"

export type FResolve = <GPAnnotation>($: T.Model<GPAnnotation>,) => mresolved.T.PossibleModel<T.Annotation<GPAnnotation>>