import { API } from "./api"
import { icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"

export * from "./api"

export const $a: API = {
    "createProjectSerializer": icreateProjectSerializer,
    "createTemplateSerializer": icreateTemplateSerializer,
}