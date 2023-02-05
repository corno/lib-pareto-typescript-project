import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export type FSerialize = ($: mglossary.TGlossary, $i: mfp.ILine,) => void