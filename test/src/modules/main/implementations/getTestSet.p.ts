import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pr from 'pareto-core-raw'

import * as mtst from "lib-pareto-test"

import * as api from "../api"
// import * as us from "res-pareto-ugly-stuff"

import {
    dictionary, member, taggedUnion, types, _function, group
} from "../../../../../pub/dist/modules/glossary/api/shorthands.p"


import * as mliana_flat from "../../../../../pub/dist/modules/liana_flat"
import * as mproject from "../../../../../pub/dist/modules/project"
import * as mliana from "../../../../../pub/dist/modules/liana"
import * as mliana2Pareto from "../../../../../pub/dist/modules/liana2Pareto"
import * as mpareto2typescript from "../../../../../pub/dist/modules/pareto2typescript"
import * as mtostring from "res-pareto-tostring"
import * as mtemp from "../../../../../pub/dist/modules/temp"
import * as mcoll from "res-pareto-collation"
import * as mfp from "lib-fountain-pen"
import * as mts from "res-typescript"
const d = pr.wrapRawDictionary


import * as pub from "../../../../../pub"
import { $ as module } from "../../../data/project.test"
// import * as pubTypes from "../../../../pub/dist/modules/public"
// import * as pubPrivate from "../../../../pub/dist/modules/private"

import { $ as simpleModel } from "../../../data/lianaModels/simpleModel.p"
import { $ as glossary } from "../../../data/lianaModels/glossary.p"
import { $ as accountingModel } from "../../../data/lianaModels/accounting.p"

export const $$: api.CgetTestSet = ($XXX) => {
    pub.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$XXX.testDirectory}/project`]),
        },
        'project': {
            'type': ['library', {}],
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
            createIdentifier: mts.$a.createIdentifier,
            mapLiana2States: mliana2Pareto.$a.createLiana2StatesMapper({
                decorateDictionaryEntriesWithKey: mtemp.$a.decorateDictionaryEntriesWithKey,
            }),
            serializeStates: mpareto2typescript.$a.createStatesSerializer({
                arrayForEach: mtemp.$a.createArrayForEach({
                    compare: mcoll.$a.localeIsABeforeB
                }),
                dictionaryForEach: mtemp.$a.createDictionaryForEach({
                    compare: mcoll.$a.localeIsABeforeB

                }),
                enrichedArrayForEach: mtemp.$a.createEnrichedArrayForEach({
                    compare: mcoll.$a.localeIsABeforeB

                }),
                enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                    compare: mcoll.$a.localeIsABeforeB

                }),
                createIdentifier: mts.$a.createIdentifier,
                createApostrophedString: mts.$a.createApostrophedString,
                
            }),
            joinNestedStrings: mtostring.$a.joinNestedStrings,
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
    x(accountingModel.model)
    x(simpleModel)

    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$XXX.testDirectory}/liana/glossary`]),
        },
        'model': {
            'model': glossary,

            'stringmapping': pr.wrapRawDictionary({
                "identifier": ['string', null]
            }),
        },
    })
    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`${$XXX.testDirectory}/liana/accounting`]),
        },
        'model': accountingModel,
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
