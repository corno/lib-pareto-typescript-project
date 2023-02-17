import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Bedrag: null | string,
    prop_Datum: null | string,
    prop_Grootboekrekening: null | string,
    prop_Omschrijving: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Bedrag': parseInt(assertNotNull(prop_Bedrag)),
            'Datum': parseInt(assertNotNull(prop_Datum)),
            'Grootboekrekening': prop_Grootboekrekening,
            'Omschrijving': assertNotNull(prop_Omschrijving),
        }
    }
}