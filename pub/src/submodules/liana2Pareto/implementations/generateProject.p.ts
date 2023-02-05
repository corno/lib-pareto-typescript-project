import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mforeach from "res-pareto-foreach"
import * as mcoll from "res-pareto-collation"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mmain from "res-pareto-main"
import * as mproject from "../../project"
import * as mglossary_temp from "../../glossary_temp"
import * as malgorithm from "../../algorithm"

import { $a } from "../index"

export const $$: api.CgenerateProject = ($) => {
    const a = mforeach.$a.createArrayForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const d = mforeach.$a.createDictionaryForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const ea = mforeach.$a.createEnrichedArrayForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const ed = mforeach.$a.createEnrichedDictionaryForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })


    $a.createProjectGenerator(
        {
            dictionaryForEach: mforeach.$a.createDictionaryForEach({
                compare: mcoll.$a.localeIsABeforeB,
            }),
            decorateDictionaryEntriesWithKey: mforeach.$a.decorateDictionaryEntriesWithKey,
            logError: mmain.$a.logError,
            mapLiana2Pareto: $a.createLiana2ParetoMapper({
                decorateDictionaryEntriesWithKey: mforeach.$a.decorateDictionaryEntriesWithKey,
            }),
            serializeProject: mproject.$a.createSerializerWithContext({
                serialize: mproject.$a.createSerializer({
                    dictionaryForEach: d,
                    enrichedArrayForEach: ea,
                    serializeModuleDefinition: mmoduleDefinition.$a.createSerializer({

                        dictionaryForEach: d,
                        enrichedArrayForEach: ea,
                        serializeGlossary: mglossary_temp.$a.createSerializer({
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
