import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Hoofdcategorie__fiscus: null | string,
    prop_Subcategorie__fiscus: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Hoofdcategorie fiscus': prop_Hoofdcategorie__fiscus,
            'Subcategorie fiscus': prop_Subcategorie__fiscus,
        }
    }
}