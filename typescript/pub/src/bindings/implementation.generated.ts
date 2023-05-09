import { API } from "./api.generated"
import { $$ as icreateProjectGeneratorAndReporter } from "./implementations/createProjectGeneratorAndReporter.b"
import { $$ as iserializeGlossary } from "./implementations/serializeGlossary.b"

export const $api: API = {
    'createProjectGeneratorAndReporter': icreateProjectGeneratorAndReporter,
    'serializeGlossary': iserializeGlossary,
}