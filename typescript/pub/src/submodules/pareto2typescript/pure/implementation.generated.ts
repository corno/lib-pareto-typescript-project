import { API } from "./api.generated"
import { $$ as icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.p"
import { $$ as icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { $$ as icreateStatesSerializer } from "./implementations/createStatesSerializer.p"
import { $$ as icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"
import { $$ as ivalidateFiles } from "./implementations/validateFiles.p"

export const $api: API = {
    'createGlossarySerializer': icreateGlossarySerializer,
    'createImplementationSerializer': icreateImplementationSerializer,
    'createProjectSerializer': icreateProjectSerializer,
    'createStatesSerializer': icreateStatesSerializer,
    'createTemplateSerializer': icreateTemplateSerializer,
    'validateFiles': ivalidateFiles,
}