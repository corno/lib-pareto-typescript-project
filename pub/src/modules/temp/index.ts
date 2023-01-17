import { API } from "./api"
import { $$ as icreateEnrichedDictionaryForEach } from "./implementations/createEnrichedDictionaryForEach.p"
import { $$ as icreateEnrichedArrayForEach } from "./implementations/createEnrichedArrayForEach.p"

export * from "./api"

export const $a: API = {
    createEnrichedDictionaryForEach: icreateEnrichedDictionaryForEach,
    createEnrichedArrayForEach: icreateEnrichedArrayForEach,
}