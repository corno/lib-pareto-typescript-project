import { API } from "./api"
import { icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"

export * from "./api"

export const $a: API = {
    "createGlossarySerializer": icreateGlossarySerializer,
    "createModuleDefinitionSerializer": icreateModuleDefinitionSerializer,
}