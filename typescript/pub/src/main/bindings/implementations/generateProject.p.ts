import * as gpareto2typescript from "../../../submodules/pareto2typescript"
import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gmain from "res-pareto-main"
import * as gdictionary from "res-pareto-dictionary"
import * as gts from "res-typescript"
import * as gfp from "lib-fountain-pen"
import * as g_fse from "lib-pareto-filesystem/dist/submodules/errorhandlers"

import { $api as $pure } from "../../pure/implementation.generated"

import { generateProject } from "../api.generated"

export const $$: generateProject = ($) => {
    const a = gforeach.$r.arrayForEach
    const d = gforeach.$r.createDictionaryForEach({
        compare: gcoll.$r.localeIsABeforeB,
    })
    const ea = gforeach.$r.enrichedArrayForEach
    const ed = gforeach.$r.createEnrichedDictionaryForEach({
        compare: gcoll.$r.localeIsABeforeB,
    })

    $pure.createProjectGenerator(
        {

            'validateFiles': gpareto2typescript.$a.validateFiles,
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
            // 'logWriteFileError': ($) => {
            //     gmain.$r.logError(`FIXME WRITEFILEERROR`)
            // },
            // 'reportSuperfluousNode': ($) => {
            // },
            'decorateDictionaryEntriesWithKey': gforeach.$r.decorateDictionaryEntriesWithKey,
        },
    )(
        $,
        {
            'nodes': {
                'manualNode': ($) => {
                    gmain.$r.log(gfp.$a.createAllowedNodeMessage($))
                },
                'superfluousNode': ($) => {
                    gmain.$r.logError(gfp.$a.createSuperfluousNodeMessage($))

                }

            },
            'readDirError': ($) => g_fse.$a.readDir($, gmain.$r.logError),
            'writeFileError': ($) => g_fse.$a.writeFile($, gmain.$r.logError),
            
        }
    )
}