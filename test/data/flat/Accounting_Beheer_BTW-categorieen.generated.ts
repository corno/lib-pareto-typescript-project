import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    id: string,
    item_operation: string,
    //////
    prop_BTW_miheffing: null | string,
    operation_BTW_miheffing: null | string,
    prop_BTW_miheffing_$Ja_$BTW_mipromillage: null | string,
) {
    return  {
        'parents': {},
        'id': id,
        'data': {
            'BTW-heffing': pl.cc(prop_BTW_miheffing, ($) => {
                switch ($) {
                    case "Nee": {
                        return ['Nee', {}]
                    }
                    case "Ja": {
                        return ['Ja', {
                            'BTW-promillage': parseInt(assertNotNull(prop_BTW_miheffing_$Ja_$BTW_mipromillage)),
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_BTW_miheffing}'`)
                }
            }),
        }
    }
}