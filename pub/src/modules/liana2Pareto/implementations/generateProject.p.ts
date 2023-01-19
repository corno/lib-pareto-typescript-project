import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mtemp from "../../temp"
import * as mcoll from "res-pareto-collation"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"
import * as mglossary from "../../glossary"
import * as malgorithm from "../../algorithm"

import { $a } from "../index"

export const $$: api.CgenerateProject = ($) => {
    const a = mtemp.$a.createArrayForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })
    const d = mtemp.$a.createDictionaryForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })
    const ea = mtemp.$a.createEnrichedArrayForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })
    const ed = mtemp.$a.createEnrichedDictionaryForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })


    $a.createProjectGenerator(
        {
            pr_logError: mmain.$a.logError,
            sf_mapLiana2Pareto: $a.createLiana2ParetoMapper({}),
            cb_serializeProject: mproject.$a.createSerializerWithContext({
                cb_serialize: mproject.$a.createSerializer({
                    cb_dictionaryForEach: d,
                    cb_enrichedArrayForEach: ea,
                    cb_serializeModuleDefinition: mmoduleDefinition.$a.createSerializer({

                        cb_dictionaryForEach: d,
                        cb_enrichedArrayForEach: ea,
                        cb_serializeGlossary: mglossary.$a.createSerializer({
                            cb_arrayForEach: a,
                            cb_dictionaryForEach: d,
                            cb_enrichedArrayForEach: ea,
                            cb_enrichedDictionaryForEach: ed,
                        })
                    }),
                    cb_serializeImplementation: malgorithm.$a.createSerializer({
                        cb_arrayForEach: a,
                        cb_dictionaryForEach: d,
                        cb_enrichedArrayForEach: ea,
                        cb_enrichedDictionaryForEach: ed,
                    }),
                    //cb_serializeLeafType: mserialize.$a,
                })
            })
            // cb_serializeProject: foo.$a.createProjectSerializer(
            //     {
            //         sf_compare: mcoll.$a.localeIsABeforeB,
            //         cb_serializeModuleDefinition: foo.$a.createModuleDefinitionSerializer(
            //             {
            //                 sf_compare: mcoll.$a.localeIsABeforeB,
            //                 cb_serializeGlossary: foo.$a.createGlossarySerializer({
            //                     sf_compare: mcoll.$a.localeIsABeforeB,
            //                     cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
            //                         sf_compare: mcoll.$a.localeIsABeforeB,
            //                     })
            //                 }),
            //                 cb_serializeLeafType: foo.$a.serializeLeafType,
            //             }
            //         ),
            //         cb_serializeLeafType: foo.$a.serializeLeafType,
            //     }
            // ),
            // cb_serializeTemplate: foo.$a.createTemplateSerializer(
            //     {
            //         sf_compare: mcoll.$a.localeIsABeforeB,
            //     }
            // ),
            //af_getSingleArgument: () => { pl.panic(`SSDFSFSF`)},
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
