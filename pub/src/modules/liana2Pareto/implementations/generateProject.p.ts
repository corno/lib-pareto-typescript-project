import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mtemp from "../../temp/implementation.generated"
import * as mcoll from "res-pareto-collation"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"
import * as mglossary from "../../glossary"
import * as malgorithm from "../../algorithm"

import { $a } from "../index"

export const $$: api.CgenerateProject = ($) => {
    const a = mtemp.$a.createArrayForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const d = mtemp.$a.createDictionaryForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const ea = mtemp.$a.createEnrichedArrayForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const ed = mtemp.$a.createEnrichedDictionaryForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })


    $a.createProjectGenerator(
        {
            decorateDictionaryEntriesWithKey: mtemp.$a.decorateDictionaryEntriesWithKey,
            logError: mmain.$a.logError,
            mapLiana2Pareto: $a.createLiana2ParetoMapper({
                decorateDictionaryEntriesWithKey: mtemp.$a.decorateDictionaryEntriesWithKey,
            }),
            serializeProject: mproject.$a.createSerializerWithContext({
                serialize: mproject.$a.createSerializer({
                    dictionaryForEach: d,
                    enrichedArrayForEach: ea,
                    serializeModuleDefinition: mmoduleDefinition.$a.createSerializer({

                        dictionaryForEach: d,
                        enrichedArrayForEach: ea,
                        serializeGlossary: mglossary.$a.createSerializer({
                            arrayForEach: a,
                            dictionaryForEach: d,
                            enrichedArrayForEach: ea,
                            enrichedDictionaryForEach: ed,
                        })
                    }),
                    serializeImplementation: malgorithm.$a.createImplementationSerializer({
                        arrayForEach: a,
                        dictionaryForEach: d,
                        enrichedArrayForEach: ea,
                        enrichedDictionaryForEach: ed,
                    }),
                    //serializeLeafType: mserialize.$a,
                })
            })
            // serializeProject: foo.$a.createProjectSerializer(
            //     {
            //         compare: mcoll.$a.localeIsABeforeB,
            //         serializeModuleDefinition: foo.$a.createModuleDefinitionSerializer(
            //             {
            //                 compare: mcoll.$a.localeIsABeforeB,
            //                 serializeGlossary: foo.$a.createGlossarySerializer({
            //                     compare: mcoll.$a.localeIsABeforeB,
            //                     enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
            //                         compare: mcoll.$a.localeIsABeforeB,
            //                     })
            //                 }),
            //                 serializeLeafType: foo.$a.serializeLeafType,
            //             }
            //         ),
            //         serializeLeafType: foo.$a.serializeLeafType,
            //     }
            // ),
            // serializeTemplate: foo.$a.createTemplateSerializer(
            //     {
            //         compare: mcoll.$a.localeIsABeforeB,
            //     }
            // ),
            //af_getSingleArgument: () => { pl.panic(`SSDFSFSF`)},
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
