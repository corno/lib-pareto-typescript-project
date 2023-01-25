import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Jaren: string,
    parent_Overige__balans__items: string,
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
            'Jaren': parent_Jaren,
            'Overige balans items': parent_Overige__balans__items,
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