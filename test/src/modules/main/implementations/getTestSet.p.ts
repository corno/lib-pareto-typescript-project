import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-state'
import * as pr from 'pareto-core-raw'

import * as tst from "lib-pareto-test"

import * as api from "../api"
// import * as us from "res-pareto-ugly-stuff"

import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group
} from "../../../../../pub/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "../../../../../pub/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "../../../../../pub/dist/modules/project"
import * as mliana from "../../../../../pub/dist/modules/liana"
import * as mliana2Pareto from "../../../../../pub/dist/modules/liana2Pareto"
const d = pr.wrapRawDictionary


import * as pub from "../../../../../pub/dist"
import { $ as module } from "../../../data/project.p"
// import * as pubTypes from "../../../../pub/dist/modules/public"
// import * as pubPrivate from "../../../../pub/dist/modules/private"

import { $ as lianaModel } from "../../../data/lianaModel.p"

export const $$: api.CgetTestSet = ($) => {
    pub.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$.testDirectory}/project`]),
        },
        'project': {
            'modules': d({
                "main": module
            }),
            'main': "main",
        },
    })
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
    //             return pl.asyncValue({
    //                 elements: pr.wrapRawDictionary({})
    //             })
    //         },
    //         log: ($) => {
    //             pl.logDebugMessage($)
    //         }
    //     }
    // )(
    //     pr.wrapRawArray(["foo"])
    // )



    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$.testDirectory}/liana`]),

        },
        'model': lianaModel,
    })


    // mserialize.$a.createModuleDefinitionSerializer({

    // })(mliana2Pareto.$a.createLiana2ParetoMapper({})(model), )
    // mliana2Pareto.$a.createLiana2ParetoMapper({})(model)

    const builder = pm.createUnsafeDictionaryBuilder<tst.TTestElement>()
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

    return pl.asyncValue(null).map(() => {
        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    })
}
