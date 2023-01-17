import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as foo from "../index"

import * as mtemp from "../../temp"
import * as mcoll from "res-pareto-collation"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mproject from "../../project"
import * as mglossary from "../../glossary"
import * as malgorithm from "../../algorithm"

import { icreateProjectGenerator } from "./createProjectGenerator.p"

export const igenerateProject: api.CgenerateProject = ($) => {

    icreateProjectGenerator(
        {
            sf_mapLiana2Pareto: foo.$a.createLiana2ParetoMapper({}),
            cb_serializeProject: mproject.$a.createSerializerWithContext({
                cb_serialize: mproject.$a.createSerializer({
                    sf_compare: mcoll.$a.localeIsABeforeB,
                    cb_serializeModuleDefinition: mmoduleDefinition.$a.createSerializer({
                        sf_compare: mcoll.$a.localeIsABeforeB,
                        // cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                        //     sf_compare: mcoll.$a.localeIsABeforeB,
                        // }),
                        cb_enrichedArrayForEach: mtemp.$a.createEnrichedArrayForEach({
                        }),
                        cb_serializeGlossary: mglossary.$a.createSerializer({
                            sf_compare: mcoll.$a.localeIsABeforeB,
                            cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                                sf_compare: mcoll.$a.localeIsABeforeB,
                            }),
                            cb_enrichedArrayForEach: mtemp.$a.createEnrichedArrayForEach({
                            }),
                        })
                    }),
                    cb_serializeImplementation: malgorithm.$a.createSerializer({
    
                        sf_compare: mcoll.$a.localeIsABeforeB,
                        cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                            sf_compare: mcoll.$a.localeIsABeforeB,
                        }),
                        cb_enrichedArrayForEach: mtemp.$a.createEnrichedArrayForEach({
                        }),
                    }),
                    cb_enrichedArrayForEach: mtemp.$a.createEnrichedArrayForEach({
                    })
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
