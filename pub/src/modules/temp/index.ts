import { API } from "./api"
import { icreateEnrichedDictionaryForEach } from "./implementations/createEnrichedDictionaryForEach.p"

export * from "./api"

export const $a: API = {
    createEnrichedDictionaryForEach: icreateEnrichedDictionaryForEach
}