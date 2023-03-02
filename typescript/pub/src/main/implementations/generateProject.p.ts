import * as gpareto2typescript from "../../submodules/pareto2typescript"
import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gmain from "res-pareto-main"
import * as gts from "res-typescript"

import { $a } from ".."

import { CgenerateProject } from "../api"

export const $$: CgenerateProject = ($) => {
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

            'validateFiles': gpareto2typescript.$a.createFilesValidator({}),
            'serializeProject': gpareto2typescript.$a.createProjectSerializer(
                {
                    'dictionaryForEach': d,
                    'enrichedDictionaryForEach': ed,
                    'serializeGlossary': gpareto2typescript.$a.createGlossarySerializer({
                        'enrichedDictionaryForEach': ed,
                        'dictionaryForEach': d,
                        'createIdentifier': gts.$a.createIdentifier,
                        'createApostrophedString': gts.$a.createApostrophedString,
                        'createBacktickedString': gts.$a.createBacktickedString,
                        'createQuotedString': gts.$a.createQuotedString,
                    }),
                    'serializeAPI': gpareto2typescript.$a.createAPISerializer(
                        {
                            'dictionaryForEach': d,
                            'createIdentifier': gts.$a.createIdentifier,
                            'createApostrophedString': gts.$a.createApostrophedString,
                            'createBacktickedString': gts.$a.createBacktickedString,
                            'createQuotedString': gts.$a.createQuotedString,
                        }
                    ),
                    'serializeImplementation': gpareto2typescript.$a.createImplementationSerializer(
                        {
                            'arrayForEach': a,
                            'dictionaryForEach': d,
                            'enrichedArrayForEach': ea,
                            'enrichedDictionaryForEach': ed,
                            'createIdentifier': gts.$a.createIdentifier,
                            'createApostrophedString': gts.$a.createApostrophedString,
                            'createBacktickedString': gts.$a.createBacktickedString,
                            'createQuotedString': gts.$a.createQuotedString,
                        }
                    ),
                    'createIdentifier': gts.$a.createIdentifier,
                    'createApostrophedString': gts.$a.createApostrophedString,
                    'createBacktickedString': gts.$a.createBacktickedString,
                    'createQuotedString': gts.$a.createQuotedString,
                }
            ),
            'serializeTemplate': gpareto2typescript.$a.createTemplateSerializer(
                {
                    'dictionaryForEach': d,
                    'createIdentifier': gts.$a.createIdentifier,
                    'createApostrophedString': gts.$a.createApostrophedString,
                    'createBacktickedString': gts.$a.createBacktickedString,
                    'createQuotedString': gts.$a.createQuotedString,
                }
            ),
            'logError': gmain.$a.logError,
            'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
        }
    )($)
}
