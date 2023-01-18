import { API } from "./api"
import { $$ as icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.p"
import { $$ as icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"
import { $$ as icreateParametersParser } from "./implementations/createParametersParser.p"
import { $$ as icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { $$ as icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { $$ as icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"
import { $$ as igenerateProject } from "./implementations/generateProject.p"

export const $a: API = {
    'createGlossarySerializer': icreateGlossarySerializer,
    'createImplementationSerializer': icreateImplementationSerializer,
    'createModuleDefinitionSerializer': icreateModuleDefinitionSerializer,
    'createParametersParser': icreateParametersParser,
    'createProjectGenerator': icreateProjectGenerator,
    'createProjectSerializer': icreateProjectSerializer,
    'createTemplateSerializer': icreateTemplateSerializer,
    'generateProject': igenerateProject,
}