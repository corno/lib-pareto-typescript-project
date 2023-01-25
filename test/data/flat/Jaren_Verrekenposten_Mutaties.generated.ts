import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Jaren: string,
    parent_Verrekenposten: string,
    id: string,
    item_operation: string,
    //////
    prop_Bedrag: null | string,
) {
    return  {
        'parents': {
            'Jaren': parent_Jaren,
            'Verrekenposten': parent_Verrekenposten,
        },
        'id': id,
        'data': {
            'Bedrag': parseInt(assertNotNull(prop_Bedrag)),
            'Afhandeling': FIXCOMPONENT,
        }
    }
}