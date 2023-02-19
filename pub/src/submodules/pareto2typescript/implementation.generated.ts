import { API } from "./api"
import { $$ as icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.p"
import { $$ as icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"
import { $$ as icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { $$ as icreateStatesSerializer } from "./implementations/createStatesSerializer.p"
import { $$ as icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"

export const $a: API = {
    'createGlossarySerializer': icreateGlossarySerializer,
    'createImplementationSerializer': icreateImplementationSerializer,
    'createModuleDefinitionSerializer': icreateModuleDefinitionSerializer,
    'createProjectSerializer': icreateProjectSerializer,
    'createStatesSerializer': icreateStatesSerializer,
    'createTemplateSerializer': icreateTemplateSerializer,
}