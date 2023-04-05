import { API } from "./api.generated"
import { $$ as iserializeGlossary } from "./implementations/serializeGlossary.s.p"
import { $$ as iserializeImplementation } from "./implementations/serializeImplementation.s.p"
import { $$ as iserializeProject } from "./implementations/serializeProject.s.p"
import { $$ as iserializeStates } from "./implementations/serializeStates.s.p"
import { $$ as ivalidateFiles } from "./implementations/validateFiles.s.p"

export const $api: API = {
    'serializeGlossary': iserializeGlossary,
    'serializeImplementation': iserializeImplementation,
    'serializeProject': iserializeProject,
    'serializeStates': iserializeStates,
    'validateFiles': ivalidateFiles,
}