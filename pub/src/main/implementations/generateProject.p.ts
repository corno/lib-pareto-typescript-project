import * as mapi from "../api"
import * as mpareto2typescript from "../../submodules/pareto2typescript"
import * as mforeach from "res-pareto-foreach"
import * as mcoll from "res-pareto-collation"
import * as mmain from "res-pareto-main"
import * as mts from "res-typescript"

import { $a } from "../index"

export const $$: mapi.CgenerateProject = ($) => {
    const a = mforeach.$a.arrayForEach
    const d = mforeach.$a.createDictionaryForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })
    const ea = mforeach.$a.enrichedArrayForEach
    const ed = mforeach.$a.createEnrichedDictionaryForEach({
        compare: mcoll.$a.localeIsABeforeB,
    })

    const sg = mpareto2typescript.$a.createGlossarySerializer({
        enrichedDictionaryForEach: ed,
        dictionaryForEach: d,
        createIdentifier: mts.$a.createIdentifier,
        createApostrophedString: mts.$a.createApostrophedString,
        createBacktickedString: mts.$a.createBacktickedString,
        createQuotedString: mts.$a.createQuotedString,
    })

    $a.createProjectGenerator(
        {
            serializeProject: mpareto2typescript.$a.createProjectSerializer(
                {
                    dictionaryForEach: d,
                    enrichedDictionaryForEach: ed,
                    serializeGlossary: sg,
                    serializeModuleDefinition: mpareto2typescript.$a.createModuleDefinitionSerializer(
                        {
                            dictionaryForEach: d,
                            serializeGlossary: sg,
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
            decorateDictionaryEntriesWithKey: mforeach.$a.decorateDictionaryEntriesWithKey,
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
