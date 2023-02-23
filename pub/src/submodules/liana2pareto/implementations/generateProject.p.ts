

import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gmoduleDefinition from "../../moduleDefinition"
import * as gmain from "res-pareto-main"
import * as gproject from "../../project"
import * as gglossary_temp from "../../glossary_temp"
import * as galgorithm from "../../algorithm"

import { $a } from ".."

import { CgenerateProject } from "../api"

export const $$:CgenerateProject = ($) => {
    const a = gforeach.$a.arrayForEach
    const d = gforeach.$a.createDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })
    const ea = gforeach.$a.enrichedArrayForEach
    const ed = gforeach.$a.createEnrichedDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })

    $a.createProjectGenerator(
        {
            dictionaryForEach: gforeach.$a.createDictionaryForEach({
                compare: gcoll.$a.localeIsABeforeB,
            }),
            decorateDictionaryEntriesWithKey: gforeach.$a.decorateDictionaryEntriesWithKey,
            logError: gmain.$a.logError,
            mapLiana2pareto: $a.createLiana2paretoMapper({
                decorateDictionaryEntriesWithKey: gforeach.$a.decorateDictionaryEntriesWithKey,
            }),
            serializeProject: gproject.$a.createSerializerWithContext({
                serialize: gproject.$a.createSerializer({
                    dictionaryForEach: d,
                    enrichedArrayForEach: ea,
                    serializeModuleDefinition: gmoduleDefinition.$a.createSerializer({

                        dictionaryForEach: d,
                        enrichedArrayForEach: ea,
                        serializeGlossary: gglossary_temp.$a.createSerializer({
                            arrayForEach: a,
                            dictionaryForEach: d,
                            enrichedArrayForEach: ea,
                            enrichedDictionaryForEach: ed,
                        })
                    }),
                    serializeImplementation: galgorithm.$a.createImplementationSerializer({
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
            //         compare: gcoll.$a.localeIsABeforeB,
            //         serializeModuleDefinition: foo.$a.createModuleDefinitionSerializer(
            //             {
            //                 compare: gcoll.$a.localeIsABeforeB,
            //                 serializeGlossary: foo.$a.createGlossarySerializer({
            //                     compare: gcoll.$a.localeIsABeforeB,
            //                     enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
            //                         compare: gcoll.$a.localeIsABeforeB,
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
            //         compare: gcoll.$a.localeIsABeforeB,
            //     }
            // ),
            //af_getSingleArgument: () => { pl.panic(`SSDFSFSF`)},
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
