import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Hoofdcategorieen: string,
    id: string,
    item_operation: string,
    //////
    prop_Hoofdcategorie__fiscus: null | string,
    prop_Subcategorie__fiscus: null | string,
) {
    return  {
        'parents': {
            'Hoofdcategorieen': parent_Hoofdcategorieen,
        },
        'id': id,
        'data': {
            'Hoofdcategorie fiscus': prop_Hoofdcategorie__fiscus,
            'Subcategorie fiscus': prop_Subcategorie__fiscus,
        }
    }
}