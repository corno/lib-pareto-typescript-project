import * as gpareto2typescript from "../../submodules/pareto2typescript"
import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gmain from "res-pareto-main"
import * as gdictionary from "res-pareto-dictionary"
import * as gts from "res-typescript"
import * as gfp from "lib-fountain-pen"

import { $a } from ".."

import { generateProject } from "../definition/api.generated"

export const $$: generateProject = ($) => {
    const a = gforeach.$r.arrayForEach
    const d = gforeach.$r.createDictionaryForEach({
        compare: gcoll.$r.localeIsABeforeB,
    })
    const ea = gforeach.$r.enrichedArrayForEach
    const ed = gforeach.$r.createEnrichedDictionaryForEach({
        compare: gcoll.$r.localeIsABeforeB,
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
                        'dictionaryIsEmpty': gdictionary.$r.isEmpty,
                        'createIdentifier': gts.$r.createIdentifier,
                        'createApostrophedString': gts.$r.createApostrophedString,
                        'createBacktickedString': gts.$r.createBacktickedString,
                        'createQuotedString': gts.$r.createQuotedString,
                    }),
                    'serializeAPI': gpareto2typescript.$a.createAPISerializer(
                        {
                            'dictionaryForEach': d,
                            'createIdentifier': gts.$r.createIdentifier,
                            'createApostrophedString': gts.$r.createApostrophedString,
                            'createBacktickedString': gts.$r.createBacktickedString,
                            'createQuotedString': gts.$r.createQuotedString,
                        }
                    ),
                    'serializeImplementation': gpareto2typescript.$a.createImplementationSerializer(
                        {
                            'arrayForEach': a,
                            'dictionaryForEach': d,
                            'enrichedArrayForEach': ea,
                            'enrichedDictionaryForEach': ed,
                            'createIdentifier': gts.$r.createIdentifier,
                            'createApostrophedString': gts.$r.createApostrophedString,
                            'createBacktickedString': gts.$r.createBacktickedString,
                            'createQuotedString': gts.$r.createQuotedString,
                        }
                    ),
                    'createIdentifier': gts.$r.createIdentifier,
                    'createApostrophedString': gts.$r.createApostrophedString,
                    'createBacktickedString': gts.$r.createBacktickedString,
                    'createQuotedString': gts.$r.createQuotedString,
                }
            ),
            'serializeTemplate': gpareto2typescript.$a.createTemplateSerializer(
                {
                    'dictionaryForEach': d,
                    'createIdentifier': gts.$r.createIdentifier,
                    'createApostrophedString': gts.$r.createApostrophedString,
                    'createBacktickedString': gts.$r.createBacktickedString,
                    'createQuotedString': gts.$r.createQuotedString,
                }
            ),
            'logWriteFileError': ($) => {
                gmain.$r.logError(`FIXME WRITEFILEERROR`)
            },
            'reportSuperfluousNode': ($) => {
                gmain.$r.logError(gfp.$a.createSuperfluousNodeMessage($))
            },
            'decorateDictionaryEntriesWithKey': gforeach.$r.decorateDictionaryEntriesWithKey,
        }
    )($)
}
