import * as pl from 'pareto-core-lib'

import * as api from "../api"
export const $$: api.CcreateSerializer = ($d) => {
    return ($) => {
        function Context() {
            return pl.cc($, ($) => {
                switch ($) {
                    case 'import': {
                        return {}
                    }
                    case 'local': {
                        return {}
                    }
                }
            })
        }
        function Glossary() {
            return {
                'callbacks': $.map(($) => {
                    return {
                        'context': Context(),
                        'data': OptionalTypeReference(),
                        'interface': pl.implementMe(`liana2Pareto`),
                    }
                }),
                'functions': $.map(($) => {
                    return {
                        'async': pl.implementMe(`liana2Pareto`),
                        'data': TypeReference(),
                        'return value': TypeReference(),
                    }
                }),
                'imports': $.map(($) => {
                    return {}
                }),
                'namespace': Namespace(),
                'parameters': $.map(($) => {
                    return {}
                }),
                'pipes': $.map(($) => {
                    return {
                        'in': InterfaceReference(),
                        'out': InterfaceReference(),
                    }
                }),
            }
        }
        function Interface() {
            return {
                'group': {
                    'members': $.map(($) => {
                        return Interface()
                    }),
                },
                'method': {
                    'data': OptionalTypeReference(),
                    'interface': pl.cc($, ($) => {
                        switch ($) {
                            case 'null': {
                                return {}
                            }
                            case 'set': {
                                return {
                                    'interface': pl.implementMe(`liana2Pareto`),
                                }
                            }
                        }
                    }),
                },
                'reference': InterfaceReference(),
            }
        }
        function InterfaceReference() {
            return {
                'context': Context(),
                'interface': pl.implementMe(`liana2Pareto`),
            }
        }
        function Namespace() {
            return {
                'interfaces': $.map(($) => {
                    return Interface()
                }),
                'namespaces': $.map(($) => {
                    return Namespace()
                }),
                'templates': $.map(($) => {
                    return {
                        'parameters': $.map(($) => {
                            return {}
                        }),
                        'type': Type(),
                    }
                }),
                'types': $.map(($) => {
                    return Type()
                }),
            }
        }
        function OptionalTypeReference() {
            return pl.cc($, ($) => {
                switch ($) {
                    case 'not set': {
                        return {}
                    }
                    case 'set': {
                        return TypeReference()
                    }
                }
            })
        }
        function Type() {
            return {}
        }
        function TypeReference() {
            return {
                'context': Context(),
                'namespaces': $.map(($) => {
                    return pl.implementMe(`liana2Pareto`)
                }),
                'type': pl.implementMe(`liana2Pareto`),
            }
        }
        return pl.cc($, ($) => {
            switch ($) {}
        })
    }
}