import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pv from 'pareto-core-dev'


import * as mtst from "lib-pareto-test"

import * as api from "../api"
// import * as us from "res-pareto-ugly-stuff"

import {
    dictionary, member, taggedUnion, types, group
} from "../../../../../pub/dist/submodules/glossary/shorthands"


import * as mliana_flat from "../../../../../pub/dist/submodules/liana_flat"
import * as mproject from "../../../../../pub/dist/submodules/project"
import * as mliana from "../../../../../pub/dist/submodules/liana"
import * as mliana2Pareto from "../../../../../pub/dist/submodules/liana2Pareto"
import * as mfp from "lib-fountain-pen"

const d = pm.wrapRawDictionary


import * as pub from "../../../../../pub"
import { $ as module } from "../../../data/project/module/project.test"
// import * as pubTypes from "../../../../pub/dist/submodules/public"
// import * as pubPrivate from "../../../../pub/dist/submodules/private"

import { $ as simpleModel } from "../../../data/liana/model/simpleModel.data"
import { $ as glossary } from "../../../data/liana/model/glossary.data"
import { $ as accountingModel } from "../../../data/liana2Pareto/mappedModel/accounting.data"
import { $ as tc } from "../../../data/project/project/tokenconsumer/project.data"

export const $$: api.CgetTestSet = ($) => {
    const $XXX = $

    function genProj<Annotation>(dir: string, proj: mproject.T.Project<Annotation>) {
        pub.$a.generateProject({
            'mainData': {
                'arguments': pm.wrapRawArray([dir]),
            },
            'project': proj,
        })

    }
    function generateModule<Annotation>(dir: string, module: mproject.T.Module<Annotation>) {
        pub.$a.generateProject({
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
                    'submodules': d<mproject.T.Module<Annotation>>({}),
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
    //             return pl.asyncValue({
    //                 elements: pd.wrapRawDictionary({})
    //             })
    //         },
    //         log: ($) => {
    //         }
    //     }
    // )(
    //     pr.wrapRawArray(["foo"])
    // )
    const resolve = mliana.$a.createResolver({
        'onError': ($) => {
            pv.logDebugMessage($)
        }
    })

    const writer = mfp.$a.createWriter({
        onError: ($) => {
            pv.logDebugMessage($)
        },
        reportSuperfluousNode: ($) => {
            pv.logDebugMessage(mfp.$a.createSuperfluousNodeMessage($))
        },
    })
    writer([$XXX.testDirectory, 'flat'], ($i) => {
        mliana_flat.$a.serialize(accountingModel, $i)
    })

    function x<Annotation>($: mliana.T.Model<Annotation>) {
        const res = resolve($)
        switch (res[0]) {
            case 'not set':
                pl.cc(res[1], ($) => {
                    //pv.logDebugMessage(`NOT SET`)
                })
                break
            case 'set':
                pl.cc(res[1], ($) => {
                    //pv.logDebugMessage(`SET`)
                    $.model.stringTypes.dictionary.__forEach(() => false, ($, key) => {
                        //pv.logDebugMessage(key)
                    })
                    $.model.globalTypes.dictionary.__forEach(() => false, ($, key) => {
                        //pv.logDebugMessage(key)
                    })
                    //pv.logDebugMessage(`has errors? ${$['has errors']}`)
                })
                break
            default: pl.au(res[0])
        }
    }
    // x(lianaModel)
    x(accountingModel.model)
    x(simpleModel)

    const mappedGlossary = mliana2Pareto.$a.mapLiana2Pareto({
        'model': glossary,

        'stringmapping': pm.wrapRawDictionary({
            "identifier": ['string', null]
        }),
    })
    mappedGlossary.modules.__forEach(() => false, ($, key) => {
        generateModule(`${$XXX.testDirectory}/fubar/${key}`, $)
    })

    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pm.wrapRawArray([`${$XXX.testDirectory}/liana/glossary`]),
        },
        'model': {
            'model': glossary,

            'stringmapping': pm.wrapRawDictionary({
                "identifier": ['string', null]
            }),
        },
    })
    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pm.wrapRawArray([`${$XXX.testDirectory}/liana/accounting`]),
        },
        'model': accountingModel,
    })


    // mserialize.$a.createModuleDefinitionSerializer({

    // })(mliana2Pareto.$a.createLiana2ParetoMapper({})(model), )
    // mliana2Pareto.$a.createLiana2ParetoMapper({})(model)

    const builder = ps.createUnsafeDictionaryBuilder<mtst.T.TestElement>()
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
