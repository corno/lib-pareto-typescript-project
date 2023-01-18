import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as algorithm_createSerializer } from "../modules/algorithm/createSerializer.generated"
import { test as glossary_createSerializer } from "../modules/glossary/createSerializer.generated"
import { test as liana2Pareto_createLiana2ParetoMapper } from "../modules/liana2Pareto/createLiana2ParetoMapper.generated"
import { test as liana2Pareto_createProjectGenerator } from "../modules/liana2Pareto/createProjectGenerator.generated"
import { test as liana2Pareto_generateProject } from "../modules/liana2Pareto/generateProject.generated"
import { test as main_createGlossarySerializer } from "../modules/main/createGlossarySerializer.generated"
import { test as main_createImplementationSerializer } from "../modules/main/createImplementationSerializer.generated"
import { test as main_createModuleDefinitionSerializer } from "../modules/main/createModuleDefinitionSerializer.generated"
import { test as main_createParametersParser } from "../modules/main/createParametersParser.generated"
import { test as main_createProjectGenerator } from "../modules/main/createProjectGenerator.generated"
import { test as main_createProjectSerializer } from "../modules/main/createProjectSerializer.generated"
import { test as main_createTemplateSerializer } from "../modules/main/createTemplateSerializer.generated"
import { test as main_generateProject } from "../modules/main/generateProject.generated"
import { test as moduleDefinition_createSerializer } from "../modules/moduleDefinition/createSerializer.generated"
import { test as project_createSerializer } from "../modules/project/createSerializer.generated"
import { test as project_createSerializerWithContext } from "../modules/project/createSerializerWithContext.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'algorithm': pr.wrapRawDictionary({
        'createSerializer': algorithm_createSerializer,
    }),
    'glossary': pr.wrapRawDictionary({
        'createSerializer': glossary_createSerializer,
    }),
    'liana': pr.wrapRawDictionary({}),
    'liana2Pareto': pr.wrapRawDictionary({
        'createLiana2ParetoMapper': liana2Pareto_createLiana2ParetoMapper,
        'createProjectGenerator': liana2Pareto_createProjectGenerator,
        'generateProject': liana2Pareto_generateProject,
    }),
    'main': pr.wrapRawDictionary({
        'createGlossarySerializer': main_createGlossarySerializer,
        'createImplementationSerializer': main_createImplementationSerializer,
        'createModuleDefinitionSerializer': main_createModuleDefinitionSerializer,
        'createParametersParser': main_createParametersParser,
        'createProjectGenerator': main_createProjectGenerator,
        'createProjectSerializer': main_createProjectSerializer,
        'createTemplateSerializer': main_createTemplateSerializer,
        'generateProject': main_generateProject,
    }),
    'moduleDefinition': pr.wrapRawDictionary({
        'createSerializer': moduleDefinition_createSerializer,
    }),
    'project': pr.wrapRawDictionary({
        'createSerializer': project_createSerializer,
        'createSerializerWithContext': project_createSerializerWithContext,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))