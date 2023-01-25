import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Jaren: string,
    id: string,
    item_operation: string,
    //////
    prop_Type: null | string,
    operation_Type: null | string,
) {
    return  {
        'parents': {
            'Jaren': parent_Jaren,
        },
        'id': id,
        'data': {
            'Type': pl.cc(prop_Type, ($) => {
                switch ($) {
                    case "Bankrekening": {
                        return ['Bankrekening', {}]
                    }
                    case "Informele rekening": {
                        return ['Informele rekening', {}]
                    }
                    case "Overig": {
                        return ['Overig', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Type}'`)
                }
            }),
        }
    }
}