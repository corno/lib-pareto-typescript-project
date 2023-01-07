import { API } from "./api"
import { icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { iserializeLeafType } from "./implementations/serializeLeafType.p"

export * from "./api"

export const $a: API = {
    "createGlossarySerializer": icreateGlossarySerializer,
    "serializeLeafType": iserializeLeafType,
}