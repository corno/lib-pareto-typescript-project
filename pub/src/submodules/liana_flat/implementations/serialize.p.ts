import * as pl from 'pareto-core-lib'

import * as api from "../api"


import * as mliana2Pareto from "../../liana2Pareto"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mtostring from "res-pareto-tostring"
import * as mcoll from "res-pareto-collation"
import * as mts from "res-typescript"
import * as mforeach from "res-pareto-foreach"

import { $$ as createSerializer } from "./createSerializer.p"

export const $$: api.Cserialize = ($, $i) => {
    createSerializer({
        createIdentifier: mts.$a.createIdentifier,
        mapLiana2States: mliana2Pareto.$a.createLiana2StatesMapper({
            decorateDictionaryEntriesWithKey: mforeach.$a.decorateDictionaryEntriesWithKey,
        }),
        serializeStates: mpareto2typescript.$a.createStatesSerializer({
            arrayForEach: mforeach.$a.arrayForEach,
            dictionaryForEach: mforeach.$a.createDictionaryForEach({
                compare: mcoll.$a.localeIsABeforeB
            }),
            enrichedArrayForEach: mforeach.$a.enrichedArrayForEach,
            enrichedDictionaryForEach: mforeach.$a.createEnrichedDictionaryForEach({
                compare: mcoll.$a.localeIsABeforeB
            }),
            createIdentifier: mts.$a.createIdentifier,
            createApostrophedString: mts.$a.createApostrophedString,
        }),
        joinNestedStrings: mtostring.$a.joinNestedStrings({
            'maximum': [false],
            'separator': "_",
        }, {}),
    })($, $i)
}