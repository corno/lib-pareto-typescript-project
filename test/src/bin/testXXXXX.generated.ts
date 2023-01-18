import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as algorithm_createSerializer } from "../modules/algorithm/createSerializer.generated"
import { test as glossary_createSerializer } from "../modules/glossary/createSerializer.generated"
import { test as liana2Pareto_createLiana2ParetoMapper } from "../modules/liana2Pareto/createLiana2ParetoMapper.generated"
import { test as liana2Pareto_createProjectGenerator } from "../modules/liana2Pareto/createProjectGenerator.generated"
import { test as liana2Pareto_generateProject } from "../modules/liana2Pareto/generateProject.generated"
import { test as main_createParametersParser } from "../modules/main/createParametersParser.generated"
import { test as main_createProjectGenerator } from "../modules/main/createProjectGenerator.generated"
import { test as main_generateProject } from "../modules/main/generateProject.generated"
import { test as moduleDefinition_createSerializer } from "../modules/moduleDefinition/createSerializer.generated"
import { test as pareto2typescript_createGlossarySerializer } from "../modules/pareto2typescript/createGlossarySerializer.generated"
import { test as pareto2typescript_createImplementationSerializer } from "../modules/pareto2typescript/createImplementationSerializer.generated"
import { test as pareto2typescript_createModuleDefinitionSerializer } from "../modules/pareto2typescript/createModuleDefinitionSerializer.generated"
import { test as pareto2typescript_createProjectSerializer } from "../modules/pareto2typescript/createProjectSerializer.generated"
import { test as pareto2typescript_createTemplateSerializer } from "../modules/pareto2typescript/createTemplateSerializer.generated"
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
        'createParametersParser': main_createParametersParser,
        'createProjectGenerator': main_createProjectGenerator,
        'generateProject': main_generateProject,
    }),
    'moduleDefinition': pr.wrapRawDictionary({
        'createSerializer': moduleDefinition_createSerializer,
    }),
    'pareto2typescript': pr.wrapRawDictionary({
        'createGlossarySerializer': pareto2typescript_createGlossarySerializer,
        'createImplementationSerializer': pareto2typescript_createImplementationSerializer,
        'createModuleDefinitionSerializer': pareto2typescript_createModuleDefinitionSerializer,
        'createProjectSerializer': pareto2typescript_createProjectSerializer,
        'createTemplateSerializer': pareto2typescript_createTemplateSerializer,
    }),
    'project': pr.wrapRawDictionary({
        'createSerializer': project_createSerializer,
        'createSerializerWithContext': project_createSerializerWithContext,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))