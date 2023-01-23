import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Overige balans items: string,
    //////
    Beginsaldo: string,
    Grootboekrekening: string,
    Nieuw: string,
    operation: string,
    Nieuw_Nee_Jaar: string,
    Nieuw_Nee_Balans item: string,
) {
    return {
        'Beginsaldo': FIXSTRING,
        'Grootboekrekening': FIXSTRING,
        'Nieuw': pl.cc(Nieuw, ($) => {
            switch ($) {
                case "Nee": {
                    return ['Nee', {
                        'Jaar': FIXSTRING,
                        'Balans item': FIXSTRING,
                    }]
                }
                case "Ja": {
                    return ['Ja', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Nieuw}`)
            }
        }),
        'Memoriaal boekingen': {},
    }
}