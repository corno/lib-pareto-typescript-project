import * as pl from 'pareto-core-lib'
export function $$(
    BTW-categorieen: string,
    //////
    BTW-heffing: string,
    operation: string,
    BTW-heffing_Ja_BTW-promillage: string,
) {
    return {
        'BTW-heffing': pl.cc(BTW-heffing, ($) => {
            switch ($) {
                case "Nee": {
                    return ['Nee', {}]
                }
                case "Ja": {
                    return ['Ja', {
                        'BTW-promillage': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${BTW-heffing}`)
            }
        }),
    }
}