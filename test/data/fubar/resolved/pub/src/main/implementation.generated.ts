import { API } from "./api"
import { $$ as icreateEnricher } from "./implementations/createEnricher.generated"
import { $$ as icreateSerializer } from "./implementations/createSerializer.generated"

export const $a: API = {
    'createEnricher': icreateEnricher,
    'createSerializer': icreateSerializer,
}