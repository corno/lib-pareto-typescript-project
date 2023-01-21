import * as pr from 'pareto-core-raw'

import * as mmoduleDefinition from "../../../pub/dist/modules/moduleDefinition"
import * as mproject from "../../../pub/dist/modules/project"
import * as mglossary from "../../../pub/dist/modules/glossary"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": null,
            }),
            'namespace': {
                'namespaces': d({
                    "resolved": {
                        'namespaces': d({
                            "types": {
                                'namespaces': d({}),
                                'templates': d({}),
                                'types': d({
                                    "Accounting": <mglossary.TType>['group', d({
                                        "Bankrekeningen": {
                                            'optional': false,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Beheer": {
                                            'optional': false,
                                            'type': <mglossary.TType>['group', d({
                                                "Balans": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['group', d({
                                                        "Grootboekrekeningen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Hoofdcategorie": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Hoofdcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Subcategorie": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Subcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Zijde": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Activa": <mglossary.TType>['group', d({})],
                                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                        "Hoofdcategorie fiscus": {
                                                                            'optional': false,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Hoofdcategorieen fiscus",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                        "Subcategorie fiscus": {
                                                                            'optional': false,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Subcategorieen",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                    })]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Activa": <mglossary.TType>['group', d({})],
                                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen fiscus": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Activa": <mglossary.TType>['group', d({})],
                                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })],
                                                },
                                                "BTW-categorieen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "BTW-heffing": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({
                                                                    "BTW-promillage": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                })],
                                                                "Nee": <mglossary.TType>['group', d({})],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Gebruikers": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Volledige naam": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['string', null],
                                                        },
                                                    })]],
                                                },
                                                "Resultaat": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['group', d({
                                                        "Correctietypes vennootschapsbelasting": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                        "Grootboekrekeningen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Hoofdcategorie": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Hoofdcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Subcategorie": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Subcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Zijde": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Kosten": <mglossary.TType>['group', d({
                                                                            "Correctie op vennootschapsbelasting": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['taggedUnion', d({
                                                                                    "Ja": <mglossary.TType>['group', d({
                                                                                        "Correctietype": {
                                                                                            'optional': false,
                                                                                            'type': <mglossary.TType>['template', {
                                                                                                'arguments': d({
                                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                                        'namespaces': a([]),
                                                                                                        'type': "Correctietypes vennootschapsbelasting",
                                                                                                    }],
                                                                                                }),
                                                                                                'template': "Reference",
                                                                                            }],
                                                                                        },
                                                                                    })],
                                                                                    "Nee": <mglossary.TType>['group', d({})],
                                                                                })],
                                                                            },
                                                                        })],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                        "Hoofdcategorie fiscus": {
                                                                            'optional': false,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Hoofdcategorieen fiscus",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                        "Subcategorie fiscus": {
                                                                            'optional': false,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Subcategorieen",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                    })]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Kosten": <mglossary.TType>['group', d({})],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen fiscus": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Kosten": <mglossary.TType>['group', d({})],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })],
                                                },
                                            })],
                                        },
                                        "Informele rekeningen": {
                                            'optional': false,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Jaren": {
                                            'optional': false,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Balans grootboekrekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Bankrekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Mutaties": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "BTW periodes": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "1. BTW-categorieen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                        "Documenten": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Informele rekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Inkopen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Regels": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Overige balans items": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Memoriaal boekingen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Resultaat grootboekrekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Salarisrondes": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Startdatum boekjar": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "Verkopen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Regels": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Verrekenposten": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Mutaties": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                            })]],
                                        },
                                        "Klanten": {
                                            'optional': false,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Licentieovereenkomsten": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Periodes": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
                                                        },
                                                    })]],
                                                },
                                                "Projecten": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Offertes": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Opbrengsten": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                        "Type": {
                                                                            'optional': false,
                                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                                "Project": <mglossary.TType>['group', d({
                                                                                    "Bedrag": {
                                                                                        'optional': false,
                                                                                        'type': <mglossary.TType>['number', null],
                                                                                    },
                                                                                    "Betaaldatum": {
                                                                                        'optional': false,
                                                                                        'type': <mglossary.TType>['number', null],
                                                                                    },
                                                                                })],
                                                                            })],
                                                                        },
                                                                    })]],
                                                                },
                                                            })]],
                                                        },
                                                    })]],
                                                },
                                            })]],
                                        },
                                        "Leveranciers": {
                                            'optional': false,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Medewerkers": {
                                            'optional': false,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                    })],
                                }),
                                'interfaces': d({}),
                            },
                        }),
                        'templates': d({}),
                        'types': d({
                            "Root": <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'namespaces': a(["types"]),
                                'type': "Accounting",
                            }],
                        }),
                        'interfaces': d({}),
                    },
                    "unresolved": {
                        'namespaces': d({
                            "types": {
                                'namespaces': d({}),
                                'templates': d({}),
                                'types': d({
                                    "Accounting": <mglossary.TType>['group', d({
                                        "Bankrekeningen": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Beheer": {
                                            'optional': true,
                                            'type': <mglossary.TType>['group', d({
                                                "Balans": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['group', d({
                                                        "Grootboekrekeningen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Hoofdcategorie": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Hoofdcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Subcategorie": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Subcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Zijde": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Activa": <mglossary.TType>['group', d({})],
                                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                        "Hoofdcategorie fiscus": {
                                                                            'optional': true,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Hoofdcategorieen fiscus",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                        "Subcategorie fiscus": {
                                                                            'optional': true,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Subcategorieen",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                    })]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Activa": <mglossary.TType>['group', d({})],
                                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Activa": <mglossary.TType>['group', d({})],
                                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })],
                                                },
                                                "BTW-categorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "BTW-heffing": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({
                                                                    "BTW-promillage": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                })],
                                                                "Nee": <mglossary.TType>['group', d({})],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Gebruikers": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Volledige naam": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['string', null],
                                                        },
                                                    })]],
                                                },
                                                "Resultaat": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['group', d({
                                                        "Correctietypes vennootschapsbelasting": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                        "Grootboekrekeningen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Hoofdcategorie": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Hoofdcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Subcategorie": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Subcategorieen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Zijde": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Kosten": <mglossary.TType>['group', d({
                                                                            "Correctie op vennootschapsbelasting": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['taggedUnion', d({
                                                                                    "Ja": <mglossary.TType>['group', d({
                                                                                        "Correctietype": {
                                                                                            'optional': true,
                                                                                            'type': <mglossary.TType>['template', {
                                                                                                'arguments': d({
                                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                                        'namespaces': a([]),
                                                                                                        'type': "Correctietypes vennootschapsbelasting",
                                                                                                    }],
                                                                                                }),
                                                                                                'template': "Reference",
                                                                                            }],
                                                                                        },
                                                                                    })],
                                                                                    "Nee": <mglossary.TType>['group', d({})],
                                                                                })],
                                                                            },
                                                                        })],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                        "Hoofdcategorie fiscus": {
                                                                            'optional': true,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Hoofdcategorieen fiscus",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                        "Subcategorie fiscus": {
                                                                            'optional': true,
                                                                            'type': <mglossary.TType>['template', {
                                                                                'arguments': d({
                                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                                        'context': <mglossary.TContext>['local', null],
                                                                                        'namespaces': a([]),
                                                                                        'type': "Subcategorieen",
                                                                                    }],
                                                                                }),
                                                                                'template': "Reference",
                                                                            }],
                                                                        },
                                                                    })]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Kosten": <mglossary.TType>['group', d({})],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Hoofdcategorieen fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Subcategorieen": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                                },
                                                                "Zijde": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Kosten": <mglossary.TType>['group', d({})],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })],
                                                },
                                            })],
                                        },
                                        "Informele rekeningen": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Jaren": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Balans grootboekrekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Bankrekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Mutaties": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "BTW periodes": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "1. BTW-categorieen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                        "Documenten": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Informele rekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Inkopen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Regels": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Overige balans items": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Memoriaal boekingen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Resultaat grootboekrekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Salarisrondes": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Startdatum boekjar": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "Verkopen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Regels": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                                "Verrekenposten": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Mutaties": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                        },
                                                    })]],
                                                },
                                            })]],
                                        },
                                        "Klanten": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Licentieovereenkomsten": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Periodes": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
                                                        },
                                                    })]],
                                                },
                                                "Projecten": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Offertes": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Opbrengsten": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                        "Type": {
                                                                            'optional': true,
                                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                                "Project": <mglossary.TType>['group', d({
                                                                                    "Bedrag": {
                                                                                        'optional': true,
                                                                                        'type': <mglossary.TType>['number', null],
                                                                                    },
                                                                                    "Betaaldatum": {
                                                                                        'optional': true,
                                                                                        'type': <mglossary.TType>['number', null],
                                                                                    },
                                                                                })],
                                                                            })],
                                                                        },
                                                                    })]],
                                                                },
                                                            })]],
                                                        },
                                                    })]],
                                                },
                                            })]],
                                        },
                                        "Leveranciers": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Medewerkers": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                    })],
                                }),
                                'interfaces': d({}),
                            },
                        }),
                        'templates': d({}),
                        'types': d({
                            "Root": <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'namespaces': a(["types"]),
                                'type': "Accounting",
                            }],
                        }),
                        'interfaces': d({}),
                    },
                }),
                'templates': d({
                    "Reference": {
                        'parameters': d({
                            "ReferencedType": null,
                        }),
                        'type': <mglossary.TType>['group', d({
                            "annotation": {
                                'optional': true,
                                'type': <mglossary.TType>['parameter', "Annotation"],
                            },
                            "referenced": {
                                'optional': true,
                                'type': <mglossary.TType>['parameter', "ReferencedType"],
                            },
                            "value": {
                                'type': <mglossary.TType>['string', null],
                            },
                        })],
                    },
                }),
                'types': d({}),
                'interfaces': d({}),
            },
            'functions': d({
                "Enrich": {
                    'async': XXX,'data': XXX,'return value': XXX,
                },
            }),
            'callbacks': d({
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', null],
                        'namespaces': a(["resolved"]),
                        'type': "Root",
                    },
                    'context': <mglossary.TContext>['import', "fp"],
                    'interface': "Line",
                },
            }),
            'pipes': d({}),
        },
        'api': {
            'imports': d({
                'common': "glo-pareto-common"
            }),
            'algorithms': d({
                'createEnricher': {
                    'definition': ['function', {
                        'function': "Enrich",
                    }],
                    'type': ['constructor', {
                        'configuration data': null,
                        'dependencies': d({}),
                    }],
                },
                'createSerializer': {
                    'definition': ['callback', {
                        'callback': "Serialize",
                    }],
                    'type': ['constructor', {
                        'configuration data': null,
                        'dependencies': d({}),
                    }],
                },
            }),
        },
    },
    'implementation': {
        'implementations': d({
            "createEnricher": {
                'constructor': true,
                'type': ['function', {
                    'block': {
                        'innerFunctions': d({
                            "Accounting": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({
                                            "Bankrekeningen": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
                                                    }],
                                                },
                                            }],
                                            "Beheer": ['groupInitializer', {
                                                'properties': d({
                                                    "Balans": ['groupInitializer', {
                                                        'properties': d({
                                                            "Grootboekrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Hoofdcategorie": ['implementMe', "liana2Pareto"],
                                                                            "Subcategorie": ['implementMe', "liana2Pareto"],
                                                                            "Zijde": ['switch', {
                                                                                'cases': d({
                                                                                    "Activa": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Passiva": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Hoofdcategorieen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Subcategorieen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Hoofdcategorie fiscus": ['implementMe', "liana2Pareto"],
                                                                                            "Subcategorie fiscus": ['implementMe', "liana2Pareto"],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Zijde": ['switch', {
                                                                                'cases': d({
                                                                                    "Activa": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Passiva": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Hoofdcategorieen fiscus": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Subcategorieen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Zijde": ['switch', {
                                                                                'cases': d({
                                                                                    "Activa": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Passiva": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                        })
                                                    }],
                                                    "BTW-categorieen": ['mapDictionary', {
                                                        'block': {
                                                            'innerFunctions': d({}),
                                                            'returnExpression': ['groupInitializer', {
                                                                'properties': d({
                                                                    "BTW-heffing": ['switch', {
                                                                        'cases': d({
                                                                            "Ja": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "BTW-promillage": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Nee": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({})
                                                                                }],
                                                                            },
                                                                        })
                                                                    }],
                                                                })
                                                            }],
                                                        },
                                                    }],
                                                    "Gebruikers": ['mapDictionary', {
                                                        'block': {
                                                            'innerFunctions': d({}),
                                                            'returnExpression': ['groupInitializer', {
                                                                'properties': d({
                                                                    "Volledige naam": ['implementMe', "liana2Pareto"],
                                                                })
                                                            }],
                                                        },
                                                    }],
                                                    "Resultaat": ['groupInitializer', {
                                                        'properties': d({
                                                            "Correctietypes vennootschapsbelasting": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({})
                                                                    }],
                                                                },
                                                            }],
                                                            "Grootboekrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Hoofdcategorie": ['implementMe', "liana2Pareto"],
                                                                            "Subcategorie": ['implementMe', "liana2Pareto"],
                                                                            "Zijde": ['switch', {
                                                                                'cases': d({
                                                                                    "Kosten": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Correctie op vennootschapsbelasting": ['switch', {
                                                                                                    'cases': d({
                                                                                                        "Ja": {
                                                                                                            'innerFunctions': d({}),
                                                                                                            'returnExpression': ['groupInitializer', {
                                                                                                                'properties': d({
                                                                                                                    "Correctietype": ['implementMe', "liana2Pareto"],
                                                                                                                })
                                                                                                            }],
                                                                                                        },
                                                                                                        "Nee": {
                                                                                                            'innerFunctions': d({}),
                                                                                                            'returnExpression': ['groupInitializer', {
                                                                                                                'properties': d({})
                                                                                                            }],
                                                                                                        },
                                                                                                    })
                                                                                                }],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                    "Opbrengsten": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Hoofdcategorieen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Subcategorieen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Hoofdcategorie fiscus": ['implementMe', "liana2Pareto"],
                                                                                            "Subcategorie fiscus": ['implementMe', "liana2Pareto"],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Zijde": ['switch', {
                                                                                'cases': d({
                                                                                    "Kosten": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Opbrengsten": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Hoofdcategorieen fiscus": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Subcategorieen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Zijde": ['switch', {
                                                                                'cases': d({
                                                                                    "Kosten": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Opbrengsten": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                        })
                                                    }],
                                                })
                                            }],
                                            "Informele rekeningen": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
                                                    }],
                                                },
                                            }],
                                            "Jaren": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "Balans grootboekrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({})
                                                                    }],
                                                                },
                                                            }],
                                                            "Bankrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Mutaties": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "BTW periodes": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "1. BTW-categorieen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Documenten": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Informele rekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({})
                                                                    }],
                                                                },
                                                            }],
                                                            "Inkopen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Regels": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Overige balans items": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Memoriaal boekingen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Resultaat grootboekrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({})
                                                                    }],
                                                                },
                                                            }],
                                                            "Salarisrondes": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({})
                                                                    }],
                                                                },
                                                            }],
                                                            "Startdatum boekjar": ['implementMe', "liana2Pareto"],
                                                            "Verkopen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Regels": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Verrekenposten": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Mutaties": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({})
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                        })
                                                    }],
                                                },
                                            }],
                                            "Klanten": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "Licentieovereenkomsten": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Periodes": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Bedrag": ['implementMe', "liana2Pareto"],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Projecten": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Offertes": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Opbrengsten": ['mapDictionary', {
                                                                                                'block': {
                                                                                                    'innerFunctions': d({}),
                                                                                                    'returnExpression': ['groupInitializer', {
                                                                                                        'properties': d({
                                                                                                            "Type": ['switch', {
                                                                                                                'cases': d({
                                                                                                                    "Project": {
                                                                                                                        'innerFunctions': d({}),
                                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                                            'properties': d({
                                                                                                                                "Bedrag": ['implementMe', "liana2Pareto"],
                                                                                                                                "Betaaldatum": ['implementMe', "liana2Pareto"],
                                                                                                                            })
                                                                                                                        }],
                                                                                                                    },
                                                                                                                })
                                                                                                            }],
                                                                                                        })
                                                                                                    }],
                                                                                                },
                                                                                            }],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                        })
                                                    }],
                                                },
                                            }],
                                            "Leveranciers": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
                                                    }],
                                                },
                                            }],
                                            "Medewerkers": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
                                                    }],
                                                },
                                            }],
                                        })
                                    }],
                                },
                            },
                        }),
                        'returnExpression': ['switch', {
                            'cases': d({})
                        }],
                    },
                }],
            },
        }),
    },
}