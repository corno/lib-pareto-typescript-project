import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Type: null | string,
    operation_Type: null | string,
    prop_Type_$Project_$Betaaldatum: null | string,
    prop_Type_$Project_$Bedrag: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Type': pl.cc(prop_Type, ($) => {
                switch ($) {
                    case "Project": {
                        return ['Project', {
                            'Betaaldatum': parseInt(assertNotNull(prop_Type_$Project_$Betaaldatum)),
                            'Bedrag': parseInt(assertNotNull(prop_Type_$Project_$Bedrag)),
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Type}'`)
                }
            }),
        }
    }
}