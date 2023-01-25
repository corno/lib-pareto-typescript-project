import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Jaren: string,
    parent_BTW__periodes: string,
    id: string,
    item_operation: string,
    //////
    prop_Bestand: null | string,
) {
    return  {
        'parents': {
            'Jaren': parent_Jaren,
            'BTW periodes': parent_BTW__periodes,
        },
        'id': id,
        'data': {
            'Bestand': assertNotNull(prop_Bestand),
        }
    }
}