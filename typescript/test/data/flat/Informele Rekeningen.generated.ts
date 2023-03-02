import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Grootboekrekening: null | string,
    prop_Beginsaldo: null | string,
    prop_Nieuw: null | string,
    operation_Nieuw: null | string,
    prop_Nieuw_$Nee_$Jaar: null | string,
    prop_Nieuw_$Nee_$Rekening: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Grootboekrekening': prop_Grootboekrekening,
            'Beginsaldo': parseInt(assertNotNull(prop_Beginsaldo)),
            'Nieuw': pl.cc(prop_Nieuw, ($) => {
                switch ($) {
                    case 'Nee': {
                        return ['Nee', {
                            'Jaar': prop_Nieuw_$Nee_$Jaar,
                            'Rekening': prop_Nieuw_$Nee_$Rekening,
                        }]
                    }
                    case 'Ja': {
                        return ['Ja', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Nieuw}'`)
                }
            }),
        }
    }
}