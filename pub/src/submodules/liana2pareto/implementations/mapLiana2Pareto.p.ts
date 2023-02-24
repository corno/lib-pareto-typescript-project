

import * as gforeach from "res-pareto-foreach"

import { $$ as createMapper } from "./createLiana2ParetoMapper.p"

import { CmapLiana2Pareto } from "../api"

export const $$:CmapLiana2Pareto = ($) => {
    return createMapper({
        'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
    })($)
}
