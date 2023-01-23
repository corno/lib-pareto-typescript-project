import * as pl from 'pareto-core-lib'
export function $$(
    Klanten: string,
    Projecten: string,
    Offertes: string,
    Opbrengsten: string,
    //////
    Type: string,
    operation: string,
    Type_Project_Betaaldatum: string,
    Type_Project_Bedrag: string,
) {
    return {
        'Type': pl.cc(Type, ($) => {
            switch ($) {
                case "Project": {
                    return ['Project', {
                        'Betaaldatum': FIXSTRING,
                        'Bedrag': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Type}`)
            }
        }),
    }
}