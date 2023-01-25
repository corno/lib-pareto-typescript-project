import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    id: string,
    item_operation: string,
    //////
    prop_Zijde: null | string,
    operation_Zijde: null | string,
) {
    return  {
        'parents': {},
        'id': id,
        'data': {
            'Zijde': pl.cc(prop_Zijde, ($) => {
                switch ($) {
                    case "Activa": {
                        return ['Activa', {}]
                    }
                    case "Passiva": {
                        return ['Passiva', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Zijde}'`)
                }
            }),
            'Subcategorieen': {},
        }
    }
}