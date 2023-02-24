import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"
import * as gliana_flat from "../../../../../pub/dist/submodules/liana_flat"
import * as gproject from "../../../../../pub/dist/submodules/project"
import * as gliana from "../../../../../pub/dist/submodules/liana"
import * as gliana2pareto from "../../../../../pub/dist/submodules/liana2pareto"
import * as gfp from "lib-fountain-pen"
import * as gpub from "../../../../../pub"

const d = pm.wrapRawDictionary

import { $ as module } from "../../../data/project/module/project.test"
import { $ as simpleModel } from "../../../data/liana/model/simpleModel.data"
import { $ as glossary } from "../../../data/liana/model/glossary.data"
import { $ as accountingModel } from "../../../data/liana2pareto/mappedModel/accounting.data"
import { $ as tc } from "../../../data/project/project/tokenconsumer/project.data"

import { CgetTestSet } from "../api"

export const $$: CgetTestSet = ($) => {
    const $XXX = $

    function genProj<Annotation>(dir: string, proj: gproject.T.Project<Annotation>) {
        gpub.$a.generateProject({
            'mainData': {
                'arguments': pm.wrapRawArray([dir]),
            },
            'project': proj,
        })

    }
    function generateModule<Annotation>(dir: string, module: gproject.T.Module<Annotation>) {
        gpub.$a.generateProject({
            'mainData': {
                'arguments': pm.wrapRawArray([dir]),
            },
            'project': {
                'author': "Corno",
                'description': "TBD",
                'license': "ISC",
                'dependencies': d({
                    "lib-pareto-fubar": {}
                }),
                'type': ['library', {

                    'main': module,
                    'submodules': d<gproject.T.Module<Annotation>>({}),
                    'executables': d({}),
                    'test': {
                        'dependencies': d({}),
                        'glossary': {
                            'functions': d({}),
                            'imports': d({}),
                            'parameters': d({}),
                            'types': d({}),
                            'interfaces': d({}),
                        },
                    },
                }],
                // 'type': ['resource', {
                //     'devDependencies': d({
                //         "a": {},
                //         "b": {},
                //     }),
                //     'definition': definition,
                //     'test': {
                //         'dependencies': d({}),
                //     },
                // }],
            },
        })

    }
    genProj(`${$XXX.testDirectory}/TOKENCONSUMER`, tc)
    //genProj(`${$XXX.testDirectory}/project`, module.definition)
    // pub.$a.createTestProgram(null, {
    //     getTestSet: () => {
    //         pl.panic("@@@")
    //     },
    //     log: () => {

    //     },
    //     logError: () => {

    //     },
    //     onTestErrors: () => {

    //     },
    // })

    // pub.$b.createTestProgram(
    //     {
    //         getTestSet: ($) => {
    //             return pa.asyncValue({
    //                 elements: pd.wrapRawDictionary({})
    //             })
    //         },
    //         log: ($) => {
    //         }
    //     }
    // )(
    //     pr.wrapRawArray(["foo"])
    // )
    const resolve = gliana.$a.createResolver({
        'onError': ($) => {
            pv.logDebugMessage($)
        }
    })

    const writer = gfp.$a.createWriter({
        onError: ($) => {
            pv.logDebugMessage($)
        },
        reportSuperfluousNode: ($) => {
            pv.logDebugMessage(gfp.$a.createSuperfluousNodeMessage($))
        },
    })
    writer([$XXX.testDirectory, 'flat'], ($i) => {
        gliana_flat.$a.serialize(accountingModel, $i)
    })

    function x<Annotation>($: gliana.T.Model<Annotation>) {
        const res = resolve($)
        switch (res[0]) {
            case false:
                //pv.logDebugMessage(`NOT SET`)
                break
            case true:
                pl.cc(res[1], ($) => {
                    //pv.logDebugMessage(`SET`)

                    //pv.logDebugMessage(`has errors? ${$['has errors']}`)
                })
                break
            default: pl.au(res[0])
        }
    }
    // x(lianaModel)
    x(accountingModel.model)
    x(simpleModel)

    const mappedGlossary = gliana2pareto.$a.mapLiana2Pareto({
        'mappedModel': {

            'model': glossary,

            'stringmapping': pm.wrapRawDictionary({
                "identifier": ['string', null]
            }),
        },
        'configuration': {

            'datamodel': [true, {
                'annotations': true,
                'properties optional': false,
                'reference mapping': ['string', {}],
            }],
            'algorithms': {},
        },

    })
    generateModule(`${$XXX.testDirectory}/fubar/UNRESOLVED`, mappedGlossary)

    gliana2pareto.$a.generateModule({
        'path': [`${$XXX.testDirectory}/liana/glossary`],
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'algorithms': {},
            },
            'mappedModel': {
                'model': glossary,

                'stringmapping': pm.wrapRawDictionary({
                    "identifier": ['string', null]
                }),
            },
        },
    })
    gliana2pareto.$a.generateModule({
        'path': [`${$XXX.testDirectory}/liana/accounting`],
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'algorithms': {},
            },
            'mappedModel': accountingModel,
        },
    })

    // mserialize.$a.createModuleDefinitionSerializer({

    // })(mliana2pareto.$a.createLiana2paretoMapper({})(model), )
    // mliana2pareto.$a.createLiana2paretoMapper({})(model)

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    //test that a failing test indeed fails!!! now it will make the program exit with an error code
    createTest(
        "TODO: ACTUALLY TEST THE LIB",
        "TODO: ACTUALLY TEST THE LIB",
        "TODO: ACTUALLY TEST THE LIB",
    )

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
