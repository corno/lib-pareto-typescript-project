import { API } from "./api"
import { $$ as icreateAPISerializer } from "./implementations/createAPISerializer.p"
import { $$ as icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.p"
import { $$ as icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { $$ as icreateStatesSerializer } from "./implementations/createStatesSerializer.p"
import { $$ as icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"

export const $a: API = {
    'createAPISerializer': icreateAPISerializer,
    'createGlossarySerializer': icreateGlossarySerializer,
    'createImplementationSerializer': icreateImplementationSerializer,
    'createProjectSerializer': icreateProjectSerializer,
    'createStatesSerializer': icreateStatesSerializer,
    'createTemplateSerializer': icreateTemplateSerializer,
}