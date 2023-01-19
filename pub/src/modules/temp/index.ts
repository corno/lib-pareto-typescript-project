import { API } from "./api"
import { $$ as icreateDictionaryForEach } from "./implementations/createDictionaryForEach.p"
import { $$ as icreateArrayForEach } from "./implementations/createArrayForEach.p"
import { $$ as icreateEnrichedDictionaryForEach } from "./implementations/createEnrichedDictionaryForEach.p"
import { $$ as icreateEnrichedArrayForEach } from "./implementations/createEnrichedArrayForEach.p"

export * from "./api"

export const $a: API = {
    createArrayForEach: icreateArrayForEach,
    createDictionaryForEach: icreateDictionaryForEach,
    createEnrichedArrayForEach: icreateEnrichedArrayForEach,
    createEnrichedDictionaryForEach: icreateEnrichedDictionaryForEach,
}