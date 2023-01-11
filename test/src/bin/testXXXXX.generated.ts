import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as api_createModuleDefinitionSerializer } from "../modules/api/createModuleDefinitionSerializer.p"
import { test as glossary_createGlossarySerializer } from "../modules/glossary/createGlossarySerializer.p"
import { test as glossary_serializeLeafType } from "../modules/glossary/serializeLeafType.p"
import { test as main_createParametersParser } from "../modules/main/createParametersParser.p"
import { test as main_createProjectGenerator } from "../modules/main/createProjectGenerator.p"
import { test as main_generateProject } from "../modules/main/generateProject.p"
import { test as project_createProjectSerializer } from "../modules/project/createProjectSerializer.p"
import { test as project_createTemplateSerializer } from "../modules/project/createTemplateSerializer.p"

const x = pr.wrapRawDictionary({
    "api": pr.wrapRawDictionary({
        "createModuleDefinitionSerializer": api_createModuleDefinitionSerializer,
    }),
    "glossary": pr.wrapRawDictionary({
        "createGlossarySerializer": glossary_createGlossarySerializer,
        "serializeLeafType": glossary_serializeLeafType,
    }),
    "main": pr.wrapRawDictionary({
        "createParametersParser": main_createParametersParser,
        "createProjectGenerator": main_createProjectGenerator,
        "generateProject": main_generateProject,
    }),
    "project": pr.wrapRawDictionary({
        "createProjectSerializer": project_createProjectSerializer,
        "createTemplateSerializer": project_createTemplateSerializer,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))