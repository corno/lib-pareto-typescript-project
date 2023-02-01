import { API } from "./api"
import { $$ as icreateEnricher } from "./implementations/createEnricher.native"
import { $$ as icreateSerializer } from "./implementations/createSerializer.native"

export const $a: API = {
    'createEnricher': icreateEnricher,
    'createSerializer': icreateSerializer,
}