import { API } from "./api.generated"
import { $$ as icreateParametersParser } from "./implementations/createParametersParser.p"
import { $$ as icreateProjectGenerator } from "./implementations/createProjectGenerator.p"

export const $api: API = {
    'createParametersParser': icreateParametersParser,
    'createProjectGenerator': icreateProjectGenerator,
}