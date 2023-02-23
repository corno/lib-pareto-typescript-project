

import * as gforeach from "res-pareto-foreach"

import { $$ as createMapper } from "./createLiana2paretoMapper.p"

import { CmapLiana2pareto } from "../api"

export const $$:CmapLiana2pareto = ($) => {
    return createMapper({
        'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
    })($)
}
