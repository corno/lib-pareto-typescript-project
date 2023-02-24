
import * as gliana2pareto from "../../liana2pareto"
import * as gpareto2typescript from "../../pareto2typescript"
import * as gtostring from "res-pareto-tostring"
import * as gcoll from "res-pareto-collation"
import * as gts from "res-typescript"
import * as gforeach from "res-pareto-foreach"

import { $$ as createSerializer } from "./createSerializer.p"

import { Cserialize } from "../api"

export const $$:Cserialize = ($, $i) => {
    createSerializer({
        'createIdentifier': gts.$a.createIdentifier,
        'mapLiana2States': gliana2pareto.$a.createLiana2StatesMapper({
            'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
        }),
        'serializeStates': gpareto2typescript.$a.createStatesSerializer({
            'arrayForEach': gforeach.$a.arrayForEach,
            'dictionaryForEach': gforeach.$a.createDictionaryForEach({
                'compare': gcoll.$a.localeIsABeforeB,
            }),
            'enrichedArrayForEach': gforeach.$a.enrichedArrayForEach,
            'enrichedDictionaryForEach': gforeach.$a.createEnrichedDictionaryForEach({
                'compare': gcoll.$a.localeIsABeforeB,
            }),
            'createIdentifier': gts.$a.createIdentifier,
            'createApostrophedString': gts.$a.createApostrophedString,
        }),
        'joinNestedStrings': gtostring.$a.joinNestedStrings({
            'maximum': [false],
            'separator': "_",
        }, {}),
        'dictionaryForEach': gforeach.$a.createDictionaryForEach({
            'compare': () => false,//HACK: serialize in the order they have been added
        }),
    })($, $i)
}