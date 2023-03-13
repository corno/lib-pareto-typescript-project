import * as g_pareto2typescript from "../../submodules/pareto2typescript"
import * as g_foreach from "res-pareto-foreach"
import * as g_coll from "res-pareto-collation"
import * as g_main from "res-pareto-main"
import * as g_dictionary from "res-pareto-dictionary"
import * as g_ts from "res-typescript"
import * as g_fp from "lib-fountain-pen"
import * as g_this from "../../main"
import * as g_fse from "lib-pareto-filesystem/dist/submodules/errorhandlers"

import { generateProject } from "../api.generated"

export const $$: generateProject = ($) => {
    const a = g_foreach.$r.arrayForEach
    const d = g_foreach.$r.createDictionaryForEach({
        compare: g_coll.$r.localeIsABeforeB,
    })
    const ea = g_foreach.$r.enrichedArrayForEach
    const ed = g_foreach.$r.createEnrichedDictionaryForEach({
        compare: g_coll.$r.localeIsABeforeB,
    })

    g_this.$a.createProjectGenerator(
        {

            'validateFiles': g_pareto2typescript.$a.validateFiles,
            'serializeProject': g_pareto2typescript.$a.createProjectSerializer(
                {
                    'dictionaryForEach': d,
                    'enrichedDictionaryForEach': ed,
                    'serializeGlossary': g_pareto2typescript.$a.createGlossarySerializer({
                        'enrichedDictionaryForEach': ed,
                        'dictionaryForEach': d,
                        'dictionaryIsEmpty': g_dictionary.$r.isEmpty,
                        'createIdentifier': g_ts.$r.createIdentifier,
                        'createApostrophedString': g_ts.$r.createApostrophedString,
                        'createBacktickedString': g_ts.$r.createBacktickedString,
                        'createQuotedString': g_ts.$r.createQuotedString,
                    }),
                    'serializeImplementation': g_pareto2typescript.$a.createImplementationSerializer(
                        {
                            'arrayForEach': a,
                            'dictionaryForEach': d,
                            'enrichedArrayForEach': ea,
                            'enrichedDictionaryForEach': ed,
                            'createIdentifier': g_ts.$r.createIdentifier,
                            'createApostrophedString': g_ts.$r.createApostrophedString,
                            'createBacktickedString': g_ts.$r.createBacktickedString,
                            'createQuotedString': g_ts.$r.createQuotedString,
                        }
                    ),
                    'createIdentifier': g_ts.$r.createIdentifier,
                    'createApostrophedString': g_ts.$r.createApostrophedString,
                    'createBacktickedString': g_ts.$r.createBacktickedString,
                    'createQuotedString': g_ts.$r.createQuotedString,
                }
            ),
            'serializeTemplate': g_pareto2typescript.$a.createTemplateSerializer(
                {
                    'dictionaryForEach': d,
                    'createIdentifier': g_ts.$r.createIdentifier,
                    'createApostrophedString': g_ts.$r.createApostrophedString,
                    'createBacktickedString': g_ts.$r.createBacktickedString,
                    'createQuotedString': g_ts.$r.createQuotedString,
                }
            ),
            // 'logWriteFileError': ($) => {
            //     g_main.$r.logError(`FIXME WRITEFILEERROR`)
            // },
            // 'reportSuperfluousNode': ($) => {
            // },
            'decorateDictionaryEntriesWithKey': g_foreach.$r.decorateDictionaryEntriesWithKey,
        },
    )(
        $,
        {
            'nodes': {
                'manualNode': ($) => {
                    g_main.$r.log(null, ($i) => {
                        g_fp.$a.createAllowedNodeMessage($)
                    })
                },
                'superfluousNode': ($) => {
                    g_main.$r.logError(null, ($i) => {
                        g_fp.$a.createSuperfluousNodeMessage($)
                    })
                }
            },
            'readDirError': ($) => {
                g_main.$r.logError(null, ($i) => {
                    g_fse.$a.readDir($, $i)
                })
            },
            'writeFileError': ($) => {
                g_main.$r.logError(null, ($i) => {
                    g_fse.$a.writeFile($, $i)
                })
            },
        }
    )
}
