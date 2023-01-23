import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Overige balans items: string,
    Memoriaal boekingen: string,
    //////
    Bedrag: string,
    Datum: string,
    Grootboekrekening: string,
    Omschrijving: string,
) {
    return {
        'Bedrag': FIXSTRING,
        'Datum': FIXSTRING,
        'Grootboekrekening': FIXSTRING,
        'Omschrijving': FIXSTRING,
    }
}