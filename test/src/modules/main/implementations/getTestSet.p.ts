import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pr from 'pareto-core-raw'

import * as mtst from "lib-pareto-test"

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


import * as mliana_flat from "../../../../../pub/dist/modules/liana_flat"
import * as mproject from "../../../../../pub/dist/modules/project"
import * as mliana from "../../../../../pub/dist/modules/liana"
import * as mliana2Pareto from "../../../../../pub/dist/modules/liana2Pareto"
import * as mfp from "lib-fountain-pen"
const d = pr.wrapRawDictionary


import * as pub from "../../../../../pub"
import { $ as module } from "../../../data/project.p"
// import * as pubTypes from "../../../../pub/dist/modules/public"
// import * as pubPrivate from "../../../../pub/dist/modules/private"

import { $ as simpleModel } from "../../../data/lianaModels/simpleModel.p"
import { $ as lianaModel } from "../../../data/lianaModels/glossary.p"
import { $ as accountingModel } from "../../../data/lianaModels/accounting.p"

export const $$: api.CgetTestSet = ($XXX) => {
    pub.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$XXX.testDirectory}/project`]),
        },
        'project': {
            'type': ['library', null],
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
    const resolve = mliana.$a.createResolver({
        'onError': ($) => {
            pl.logDebugMessage($)
        }
    })

    const writer = mfp.$a.createWriter({
        onError: ($) => {
            pl.logDebugMessage($)
        },
        reportSuperfluousNode: ($) => {
            pl.logDebugMessage(mfp.$a.createSuperfluousNodeMessage($))
        },
    })
    writer([$XXX.testDirectory, 'flat'], ($i) => {
        mliana_flat.$a.createSerializer({

        })(accountingModel, $i)

    })

    function x($: mliana.TModel) {
        const res = resolve($)
        switch (res[0]) {
            case 'not set':
                pl.cc(res[1], ($) => {
                    //pl.logDebugMessage(`NOT SET`)
                })
                break
            case 'set':
                pl.cc(res[1], ($) => {
                    //pl.logDebugMessage(`SET`)
                    $.model.stringTypes.dictionary.forEach(() => false, ($, key) => {
                        //pl.logDebugMessage(key)
                    })
                    $.model.globalTypes.dictionary.forEach(() => false, ($, key) => {
                        //pl.logDebugMessage(key)
                    })
                    //pl.logDebugMessage(`has errors? ${$['has errors']}`)
                })
                break
            default: pl.au(res[0])
        }
    }
    // x(lianaModel)
    x(accountingModel)
    x(simpleModel)

    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$XXX.testDirectory}/liana/glossary`]),
        },
        'model': {
            'model': lianaModel,

            'stringmapping': pr.wrapRawDictionary({
                "identifier": ['string', null]
            }),
        },
    })
    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$XXX.testDirectory}/liana/accounting`]),

        },
        'model': {
            'model': accountingModel,
            'stringmapping': pr.wrapRawDictionary({
                "bedrag": ['number', null],
                "bestand": ['string', null],
                "dagen": ['number', null],
                "datum": ['number', null],
                "identifier": ['string', null],
                "multiline text": ['string', null],
                "promillage": ['number', null],
                "single line text": ['string', null],
            }),
        },
    })


    // mserialize.$a.createModuleDefinitionSerializer({

    // })(mliana2Pareto.$a.createLiana2ParetoMapper({})(model), )
    // mliana2Pareto.$a.createLiana2ParetoMapper({})(model)

    const builder = ps.createUnsafeDictionaryBuilder<mtst.TTestElement>()
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
