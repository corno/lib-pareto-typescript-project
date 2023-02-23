
import * as mapi from "../api"
import * as mforeach from "res-pareto-foreach"

import { $$ as createMapper } from "./createLiana2ParetoMapper.p"

export const $$: mapi.CmapLiana2Pareto = ($) => {
    return createMapper({
        'decorateDictionaryEntriesWithKey': mforeach.$a.decorateDictionaryEntriesWithKey,
    })($)
}
