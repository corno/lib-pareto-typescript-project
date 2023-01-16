import { API } from "./api"
import { icreateEnrichedDictionaryForEach } from "./implementations/createEnrichedDictionaryForEach.p"
import { icreateEnrichedArrayForEach } from "./implementations/createEnrichedArrayForEach.p"

export * from "./api"

export const $a: API = {
    createEnrichedDictionaryForEach: icreateEnrichedDictionaryForEach,
    createEnrichedArrayForEach: icreateEnrichedArrayForEach,
}