import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mpareto2typescript from "../../pareto2typescript"

import * as mtemp from "../../temp/implementation.generated"
import * as mcoll from "res-pareto-collation"
import * as mmain from "lib-pareto-main"
import * as mts from "res-typescript"

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
            serializeProject: mpareto2typescript.$a.createProjectSerializer(
                {
                    dictionaryForEach: d,
                    serializeModuleDefinition: mpareto2typescript.$a.createModuleDefinitionSerializer(
                        {
                            dictionaryForEach: d,
                            serializeGlossary: mpareto2typescript.$a.createGlossarySerializer({
                                enrichedDictionaryForEach: ed,
                                dictionaryForEach: d,
                                createIdentifier: mts.$a.createIdentifier,
                                createApostrophedString: mts.$a.createApostrophedString,
                                createBacktickedString: mts.$a.createBacktickedString,
                                createQuotedString: mts.$a.createQuotedString,
                            }),
                            createIdentifier: mts.$a.createIdentifier,
                            createApostrophedString: mts.$a.createApostrophedString,
                            createBacktickedString: mts.$a.createBacktickedString,
                            createQuotedString: mts.$a.createQuotedString,
                        }
                    ),
                    serializeImplementation: mpareto2typescript.$a.createImplementationSerializer(
                        {
                            arrayForEach: a,
                            dictionaryForEach: d,
                            enrichedArrayForEach: ea,
                            enrichedDictionaryForEach: ed,
                            createIdentifier: mts.$a.createIdentifier,
                            createApostrophedString: mts.$a.createApostrophedString,
                            createBacktickedString: mts.$a.createBacktickedString,
                            createQuotedString: mts.$a.createQuotedString,
                        }
                    ),
                    createIdentifier: mts.$a.createIdentifier,
                    createApostrophedString: mts.$a.createApostrophedString,
                    createBacktickedString: mts.$a.createBacktickedString,
                    createQuotedString: mts.$a.createQuotedString,
                }
            ),
            serializeTemplate: mpareto2typescript.$a.createTemplateSerializer(
                {
                    dictionaryForEach: d,
                    createIdentifier: mts.$a.createIdentifier,
                    createApostrophedString: mts.$a.createApostrophedString,
                    createBacktickedString: mts.$a.createBacktickedString,
                    createQuotedString: mts.$a.createQuotedString,
                }
            ),
            logError: mmain.$a.logError,
            decorateDictionaryEntriesWithKey: mtemp.$a.decorateDictionaryEntriesWithKey,
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
