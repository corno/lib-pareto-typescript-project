import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export type FSerialize = ($: mglossary.T.Glossary<mcommon.T.String>, $i: mfp.ILine,) => void