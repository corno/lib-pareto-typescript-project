import { API } from "./api"
import { $$ as icreateSerializer } from "./implementations/createSerializer.p"
import { $$ as icreateSerializerWithContext } from "./implementations/createSerializerWithContext.p"

export * from "./api"

export const $a: API = {
    'createSerializer': icreateSerializer,
    'createSerializerWithContext': icreateSerializerWithContext,
}