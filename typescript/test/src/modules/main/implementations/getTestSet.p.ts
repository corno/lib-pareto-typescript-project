import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"
import * as gproject from "../../../../../pub/dist/submodules/project"
import * as gfp from "lib-fountain-pen"
import * as gpub from "../../../../../pub"

const d = pm.wrapRawDictionary

import { $ as module } from "../../../data/project/module/project.test"
import { $ as tc } from "../../../data/project/project/tokenconsumer/project.data"

import { CgetTestSet } from "../definition/api.generated"

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
                'license': "TBD",
                'dependencies': d({
                    "lib-pareto-fubar": null
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

    const writer = gfp.$a.createDirectory({
        onError: ($) => {
            pv.logDebugMessage($)
        },
        reportSuperfluousNode: ($) => {
            pv.logDebugMessage(gfp.$a.createSuperfluousNodeMessage($))
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
