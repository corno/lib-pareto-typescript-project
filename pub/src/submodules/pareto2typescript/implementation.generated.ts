import { API } from "./api"
import { $$ as icreateBuildEnvironmentSerializer } from "./implementations/createBuildEnvironmentSerializer.p"
import { $$ as icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.p"
import { $$ as icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"
import { $$ as icreateParetoEnvironmentSerializer } from "./implementations/createParetoEnvironmentSerializer.p"
import { $$ as icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { $$ as icreateStatesSerializer } from "./implementations/createStatesSerializer.p"
import { $$ as icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"

export const $a: API = {
    'createBuildEnvironmentSerializer': icreateBuildEnvironmentSerializer,
    'createGlossarySerializer': icreateGlossarySerializer,
    'createImplementationSerializer': icreateImplementationSerializer,
    'createModuleDefinitionSerializer': icreateModuleDefinitionSerializer,
    'createParetoEnvironmentSerializer': icreateParetoEnvironmentSerializer,
    'createProjectSerializer': icreateProjectSerializer,
    'createStatesSerializer': icreateStatesSerializer,
    'createTemplateSerializer': icreateTemplateSerializer,
}