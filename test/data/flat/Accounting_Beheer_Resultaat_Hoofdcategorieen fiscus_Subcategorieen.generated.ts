import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Hoofdcategorieen__fiscus: string,
    id: string,
    item_operation: string,
    //////
) {
    return  {
        'parents': {
            'Hoofdcategorieen fiscus': parent_Hoofdcategorieen__fiscus,
        },
        'id': id,
        'data': {}
    }
}