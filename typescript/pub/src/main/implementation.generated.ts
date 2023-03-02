import { API } from "./definition/api.generated"
import { $$ as icreateParametersParser } from "./implementations/createParametersParser.p"
import { $$ as icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { $$ as igenerateProject } from "./implementations/generateProject.p"

export const $a: API = {
    'createParametersParser': icreateParametersParser,
    'createProjectGenerator': icreateProjectGenerator,
    'generateProject': igenerateProject,
}