import { API } from "./api"
import { icreateSerializer } from "./implementations/createSerializer.p"
import { icreateSerializerWithContext } from "./implementations/createSerializerWithContext.p"

export * from "./api"

export const $a: API = {
    'createSerializer': icreateSerializer,
    'createSerializerWithContext': icreateSerializerWithContext,
}