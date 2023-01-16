import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"
import * as tst from "lib-pareto-test"

import { test as main_createGlossarySerializer } from "../modules/main/createGlossarySerializer.p"
import { test as main_createModuleDefinitionSerializer } from "../modules/main/createModuleDefinitionSerializer.p"
import { test as main_createParametersParser } from "../modules/main/createParametersParser.p"
import { test as main_createProjectGenerator } from "../modules/main/createProjectGenerator.p"
import { test as main_createProjectSerializer } from "../modules/main/createProjectSerializer.p"
import { test as main_createTemplateSerializer } from "../modules/main/createTemplateSerializer.p"
import { test as main_generateProject } from "../modules/main/generateProject.p"
import { test as main_serializeLeafType } from "../modules/main/serializeLeafType.p"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    "glossary": pr.wrapRawDictionary({}),
    "main": pr.wrapRawDictionary({
        "createGlossarySerializer": main_createGlossarySerializer,
        "createModuleDefinitionSerializer": main_createModuleDefinitionSerializer,
        "createParametersParser": main_createParametersParser,
        "createProjectGenerator": main_createProjectGenerator,
        "createProjectSerializer": main_createProjectSerializer,
        "createTemplateSerializer": main_createTemplateSerializer,
        "generateProject": main_generateProject,
        "serializeLeafType": main_serializeLeafType,
    }),
    "moduleDefinition": pr.wrapRawDictionary({}),
    "project": pr.wrapRawDictionary({}),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))