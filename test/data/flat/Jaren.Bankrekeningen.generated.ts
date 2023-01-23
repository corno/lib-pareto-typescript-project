import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Bankrekeningen: string,
    //////
    Beginsaldo: string,
    Nieuw: string,
    operation: string,
    Nieuw_Nee_Jaar: string,
    Nieuw_Nee_Rekening: string,
    Grootboekrekening: string,
) {
    return {
        'Beginsaldo': FIXSTRING,
        'Nieuw': pl.cc(Nieuw, ($) => {
            switch ($) {
                case "Nee": {
                    return ['Nee', {
                        'Jaar': FIXSTRING,
                        'Rekening': FIXSTRING,
                    }]
                }
                case "Ja": {
                    return ['Ja', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Nieuw}`)
            }
        }),
        'Grootboekrekening': FIXSTRING,
        'Mutaties': {},
    }
}