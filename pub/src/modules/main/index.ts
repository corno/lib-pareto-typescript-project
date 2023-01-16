import { API } from "./api"
import { icreateGlossarySerializer } from "./implementations/createGlossarySerializer.p"
import { icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"
import { icreateParametersParser } from "./implementations/createParametersParser.p"
import { icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { icreateProjectSerializer } from "./implementations/createProjectSerializer.p"
import { icreateTemplateSerializer } from "./implementations/createTemplateSerializer.p"
import { igenerateProject } from "./implementations/generateProject.p"
import { iserializeLeafType } from "./implementations/serializeLeafType.p"

export * from "./api"

export const $a: API = {
    "createGlossarySerializer": icreateGlossarySerializer,
    "createModuleDefinitionSerializer": icreateModuleDefinitionSerializer,
    "createParametersParser": icreateParametersParser,
    "createProjectGenerator": icreateProjectGenerator,
    "createProjectSerializer": icreateProjectSerializer,
    "createTemplateSerializer": icreateTemplateSerializer,
    "generateProject": igenerateProject,
    "serializeLeafType": iserializeLeafType,
}