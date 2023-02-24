import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gresolved from "../../../liana_resolved"

export type FResolve = <GPAnnotation>($: T.Model<GPAnnotation>,) => gresolved.T.PossibleModel<T.Annotation<GPAnnotation>>