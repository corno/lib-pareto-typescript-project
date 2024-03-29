import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'

import * as g_test from "lib-pareto-test"
import * as g_project from "../../../../../pub/dist/submodules/project"
import * as g_llts from "../../../../../pub/dist/submodules/lowlevel_typesystem"
import * as g_fp from "lib-fountain-pen"
import * as g_pub from "../../../../../pub/dist"

const d = pm.wrapRawDictionary

import { $ as tc } from "../../../data/project/project/tokenconsumer/project.data"

import { A } from "../api.generated"
import { data } from '../../../../../pub/dist/submodules/glossary/shorthands'

export const $$: A.getTestSet = ($) => {
    const $XXX = $

    //const llts: g_llts.T.Namespace<pd.SourceLocation> = 

    function genProj<Annotation>(dir: string, proj: g_project.T.Project<Annotation>) {
        g_pub.$b.createProjectGeneratorAndReporter().construct()(
            {
                'mainData': {
                    'arguments': pm.wrapRawArray([dir]),
                },
                'project': proj,
            }
        )
        //     ($b) => {
        //         $b({
        //             'mainData': {
        //                 'arguments': pm.wrapRawArray([dir]),
        //             },
        //             'project': proj,
        //         })
        //     }
        // )

    }
    // function generateModule<Annotation>(dir: string, module: g_project.T.Module<Annotation>) {
    //     g_pub.$a.generateProject({
    //         'mainData': {
    //             'arguments': pm.wrapRawArray([dir]),
    //         },
    //         'project': {
    //             'author': "Corno",
    //             'description': "TBD",
    //             'license': "TBD",
    //             'dependencies': d({
    //                 "lib-pareto-fubar": null
    //             }),
    //             'type': ['library', {

    //                 'main': module,
    //                 'submodules': d<g_project.T.Module<Annotation>>({}),
    //                 'executables': d({}),
    //                 'test': {
    //                     'dependencies': d({}),
    //                     'glossary': {
    //                         'functions': d({}),
    //                         'parameters': d({}),
    //                         'types': d({}),
    //                         'interfaces': d({}),
    //                     },
    //                     'imports': d({}),
    //                 },
    //             }],
    //             // 'type': ['resource', {
    //             //     'devDependencies': d({
    //             //         "a": {},
    //             //         "b": {},
    //             //     }),
    //             //     'definition': definition,
    //             //     'test': {
    //             //         'dependencies': d({}),
    //             //     },
    //             // }],
    //         },
    //     })

    // }
    genProj(`${$XXX.testDirectory}/TOKENCONSUMER`, tc)
    //genProj(`${$XXX.directory}/project`, module.definition)
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

    // const writer = g_fp.$b.createDirectory({
    //     onError: ($) => {
    //         pv.logDebugMessage(`FILESYSTEM ERROR`)
    //     },
    //     reportSuperfluousNode: ($) => {
    //         pv.logDebugMessage(g_fp.$b.createSuperfluousNodeMessage($))
    //     },
    // })


    // mserialize.$a.createModuleDefinitionSerializer({

    // })(mliana2pareto.$a.createLiana2paretoMapper({})(model), )
    // mliana2pareto.$a.createLiana2paretoMapper({})(model)

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
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
