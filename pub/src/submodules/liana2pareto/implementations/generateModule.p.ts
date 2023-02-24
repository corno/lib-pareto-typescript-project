

import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gmoduleDefinition from "../../moduleDefinition"
import * as gmain from "res-pareto-main"
import * as gproject from "../../project"
import * as gglossary_temp from "../../glossary_temp"
import * as galgorithm from "../../algorithm"

import { $a } from ".."

import { CgenerateModule } from "../api"

export const $$:CgenerateModule = ($) => {
    const a = gforeach.$a.arrayForEach
    const d = gforeach.$a.createDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })
    const ea = gforeach.$a.enrichedArrayForEach
    const ed = gforeach.$a.createEnrichedDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })

    $a.createModuleGenerator(
        {
            'dictionaryForEach': gforeach.$a.createDictionaryForEach({
                'compare': gcoll.$a.localeIsABeforeB,
            }),
            'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
            'logError': gmain.$a.logError,
            'mapLiana2Pareto': $a.createLiana2ParetoMapper({
                'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
            }),
            'serializeProject': gproject.$a.createSerializerWithContext({
                'serialize': gproject.$a.createSerializer({
                    'dictionaryForEach': d,
                    'enrichedArrayForEach': ea,
                    'serializeModuleDefinition': gmoduleDefinition.$a.createSerializer({

                        'dictionaryForEach': d,
                        'enrichedArrayForEach': ea,
                        'serializeGlossary': gglossary_temp.$a.createSerializer({
                            'arrayForEach': a,
                            'dictionaryForEach': d,
                            'enrichedArrayForEach': ea,
                            'enrichedDictionaryForEach': ed,
                        })
                    }),
                    'serializeImplementation': galgorithm.$a.createImplementationSerializer({
                        'arrayForEach': a,
                        'dictionaryForEach': d,
                        'enrichedArrayForEach': ea,
                        'enrichedDictionaryForEach': ed,
                    }),
                })
            })
        }
    )($)
}
