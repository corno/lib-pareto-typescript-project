import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mforeach from "res-pareto-foreach"

import { $$ as createMapper } from "./createLiana2ParetoMapper.p"

export const $$: api.CmapLiana2Pareto = ($) => {
    return createMapper({
        'decorateDictionaryEntriesWithKey': mforeach.$a.decorateDictionaryEntriesWithKey,
    })($)
}
