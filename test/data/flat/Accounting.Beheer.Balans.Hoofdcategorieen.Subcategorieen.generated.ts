import * as pl from 'pareto-core-lib'
export function $$(
    Hoofdcategorieen: string,
    Subcategorieen: string,
    //////
    Hoofdcategorie fiscus: string,
    Subcategorie fiscus: string,
) {
    return {
        'Hoofdcategorie fiscus': FIXSTRING,
        'Subcategorie fiscus': FIXSTRING,
    }
}