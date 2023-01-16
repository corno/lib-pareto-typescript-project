import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"
import * as tst from "lib-pareto-test"

import { test as glossary_createSerializer } from "../modules/glossary/createSerializer.p"
import { test as liana2Pareto_createLiana2ParetoMapper } from "../modules/liana2Pareto/createLiana2ParetoMapper.p"
import { test as liana2Pareto_createProjectGenerator } from "../modules/liana2Pareto/createProjectGenerator.p"
import { test as liana2Pareto_generateProject } from "../modules/liana2Pareto/generateProject.p"
import { test as main_createGlossarySerializer } from "../modules/main/createGlossarySerializer.p"
import { test as main_createModuleDefinitionSerializer } from "../modules/main/createModuleDefinitionSerializer.p"
import { test as main_createParametersParser } from "../modules/main/createParametersParser.p"
import { test as main_createProjectGenerator } from "../modules/main/createProjectGenerator.p"
import { test as main_createProjectSerializer } from "../modules/main/createProjectSerializer.p"
import { test as main_createTemplateSerializer } from "../modules/main/createTemplateSerializer.p"
import { test as main_generateProject } from "../modules/main/generateProject.p"
import { test as moduleDefinition_createSerializer } from "../modules/moduleDefinition/createSerializer.p"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    "glossary": pr.wrapRawDictionary({
        "createSerializer": glossary_createSerializer,
    }),
    "liana": pr.wrapRawDictionary({}),
    "liana2Pareto": pr.wrapRawDictionary({
        "createLiana2ParetoMapper": liana2Pareto_createLiana2ParetoMapper,
        "createProjectGenerator": liana2Pareto_createProjectGenerator,
        "generateProject": liana2Pareto_generateProject,
    }),
    "main": pr.wrapRawDictionary({
        "createGlossarySerializer": main_createGlossarySerializer,
        "createModuleDefinitionSerializer": main_createModuleDefinitionSerializer,
        "createParametersParser": main_createParametersParser,
        "createProjectGenerator": main_createProjectGenerator,
        "createProjectSerializer": main_createProjectSerializer,
        "createTemplateSerializer": main_createTemplateSerializer,
        "generateProject": main_generateProject,
    }),
    "moduleDefinition": pr.wrapRawDictionary({
        "createSerializer": moduleDefinition_createSerializer,
    }),
    "project": pr.wrapRawDictionary({}),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))