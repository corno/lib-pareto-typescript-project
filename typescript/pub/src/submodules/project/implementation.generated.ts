import { API } from "./definition/api.generated"
import { $$ as icreateSerializer } from "./implementations/createSerializer.p"
import { $$ as icreateSerializerWithContext } from "./implementations/createSerializerWithContext.p"

export const $a: API = {
    'createSerializer': icreateSerializer,
    'createSerializerWithContext': icreateSerializerWithContext,
}