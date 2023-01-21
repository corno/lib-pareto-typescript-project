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
                                                "Afgesloten": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Ja": <mglossary.TType>['group', d({})],
                                                        "Nee": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                                "Balans grootboekrekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Type": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Bankrekening": <mglossary.TType>['group', d({})],
                                                                "Informele rekening": <mglossary.TType>['group', d({})],
                                                                "Overig": <mglossary.TType>['group', d({})],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Bankrekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Beginsaldo": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Grootboekrekening": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Grootboekrekeningen",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Mutaties": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Datum": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Omschrijving": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Status": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Nog te verwerken": <mglossary.TType>['group', d({})],
                                                                        "Verwerkt": <mglossary.TType>['group', d({
                                                                            "Afhandeling": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Afhandeling",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Nieuw": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({})],
                                                                "Nee": <mglossary.TType>['group', d({
                                                                    "Jaar": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Jaar",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Rekening": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Bankrekeningen",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Beginsaldo nog aan te geven BTW": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "Beginsaldo Winstreserve": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
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
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bestand": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
                                                        },
                                                        "Omschrijving": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Status": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Aangegeven": <mglossary.TType>['group', d({
                                                                    "Afronding": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                    "Bedrag": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                    "Datum": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                })],
                                                                "Openstaand": <mglossary.TType>['group', d({})],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Eerste boekjaar": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Ja": <mglossary.TType>['group', d({})],
                                                        "Nee": <mglossary.TType>['group', d({
                                                            "Vorig boekjaar": {
                                                                'optional': false,
                                                                'type': <mglossary.TType>['template', {
                                                                    'arguments': d({
                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                            'context': <mglossary.TContext>['local', null],
                                                                            'namespaces': a([]),
                                                                            'type': "Jaren",
                                                                        }],
                                                                    }),
                                                                    'template': "Reference",
                                                                }],
                                                            },
                                                        })],
                                                    })],
                                                },
                                                "Grootboek BTW periode": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboek inkoop saldo": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboek verkoop saldo": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor BTW afrondingen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor nog aan te geven BTW": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor resultaat dit jaar": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor winstreserve": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Informele rekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Beginsaldo": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Grootboekrekening": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Grootboekrekeningen",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Nieuw": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({})],
                                                                "Nee": <mglossary.TType>['group', d({
                                                                    "Jaar": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Jaar",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Rekening": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Informele Rekening",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                    })]],
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
                                                        "Beginsaldo": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Grootboekrekening": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Grootboekrekeningen",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Memoriaal boekingen": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Datum": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Grootboekrekening": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Grootboekrekeningen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Omschrijving": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
                                                        },
                                                        "Nieuw": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({})],
                                                                "Nee": <mglossary.TType>['group', d({
                                                                    "Balans item": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Balans Items",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Jaar": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Jaar",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
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
                                                "Startdatum boekjaar": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "Verkopen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Afhandeling": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Mutaties": <mglossary.TType>['group', d({})],
                                                                "Rekening courant": <mglossary.TType>['group', d({
                                                                    "Rekening courant": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Rekeningen courant",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                        "Betalingstermijn": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Brondocument": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Nog toevoegen": <mglossary.TType>['group', d({})],
                                                                "Toegevoegd": <mglossary.TType>['group', d({
                                                                    "Document": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                        "BTW-periode": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "BTW-periodes",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Contracttype": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Licentieovereenkomst": <mglossary.TType>['group', d({
                                                                    "Overeenkomst": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Overeenkomsten",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                                "Project": <mglossary.TType>['group', d({
                                                                    "Offerte": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Offerte",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Project": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Projecten",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                        "Debiteur": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Klanten",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Regels": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag exclusief BTW": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "BTW-regime": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Binnenland heffing verlegd": <mglossary.TType>['group', d({})],
                                                                        "Export buiten de EU": <mglossary.TType>['group', d({})],
                                                                        "Installatie of afstandsverkopen binnen de EU": <mglossary.TType>['group', d({})],
                                                                        "Intracommunautair": <mglossary.TType>['group', d({})],
                                                                        "Standaard": <mglossary.TType>['group', d({
                                                                            "BTW-cateogrie": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "BTW Categorieen",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                                "Contracttype": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Licentieovereenkomst": <mglossary.TType>['group', d({
                                                                            "Periode": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "Periodes",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                        "Los": <mglossary.TType>['group', d({})],
                                                                        "Project": <mglossary.TType>['group', d({
                                                                            "Opbrengst": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "Opbrengsten",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                                "Omschrijving": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Type": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Balans": <mglossary.TType>['group', d({
                                                                            "Balans item": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "Balans items",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({
                                                                            "Grootboekrekening": {
                                                                                'optional': false,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "GRootboekrekeningen",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })]],
                                                },
                                                "Verrekenposten": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Mutaties": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Afhandeling": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Afhandeling",
                                                                    }],
                                                                },
                                                                "Bedrag": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
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
                                    "Afhandeling": <mglossary.TType>['taggedUnion', d({
                                        "BTW-periode": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "BTW-periodes",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Jaren",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Informele rekening": <mglossary.TType>['group', d({
                                            "Informele rekening": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Informele rekeningen",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Inkoop": <mglossary.TType>['group', d({
                                            "Inkoop": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Inkopen",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Jaren",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Verkoop": <mglossary.TType>['group', d({
                                            "Inkoop": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Verkopen",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Jaren",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Verrekenpost": <mglossary.TType>['group', d({
                                            "Verrekenpost": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Verrekenposten",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
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
                                                "Afgesloten": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Ja": <mglossary.TType>['group', d({})],
                                                        "Nee": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                                "Balans grootboekrekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Type": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Bankrekening": <mglossary.TType>['group', d({})],
                                                                "Informele rekening": <mglossary.TType>['group', d({})],
                                                                "Overig": <mglossary.TType>['group', d({})],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Bankrekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Beginsaldo": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Grootboekrekening": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Grootboekrekeningen",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Mutaties": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Datum": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Omschrijving": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Status": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Nog te verwerken": <mglossary.TType>['group', d({})],
                                                                        "Verwerkt": <mglossary.TType>['group', d({
                                                                            "Afhandeling": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Afhandeling",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                        "Nieuw": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({})],
                                                                "Nee": <mglossary.TType>['group', d({
                                                                    "Jaar": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Jaar",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Rekening": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Bankrekeningen",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Beginsaldo nog aan te geven BTW": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "Beginsaldo Winstreserve": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['number', null],
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
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bestand": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
                                                        },
                                                        "Omschrijving": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Status": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Aangegeven": <mglossary.TType>['group', d({
                                                                    "Afronding": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                    "Bedrag": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                    "Datum": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                })],
                                                                "Openstaand": <mglossary.TType>['group', d({})],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Eerste boekjaar": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Ja": <mglossary.TType>['group', d({})],
                                                        "Nee": <mglossary.TType>['group', d({
                                                            "Vorig boekjaar": {
                                                                'optional': true,
                                                                'type': <mglossary.TType>['template', {
                                                                    'arguments': d({
                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                            'context': <mglossary.TContext>['local', null],
                                                                            'namespaces': a([]),
                                                                            'type': "Jaren",
                                                                        }],
                                                                    }),
                                                                    'template': "Reference",
                                                                }],
                                                            },
                                                        })],
                                                    })],
                                                },
                                                "Grootboek BTW periode": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboek inkoop saldo": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboek verkoop saldo": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor BTW afrondingen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor nog aan te geven BTW": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor resultaat dit jaar": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Grootboekrekening voor winstreserve": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['template', {
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'namespaces': a([]),
                                                                'type': "Grootboekrekeningen",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                                "Informele rekeningen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Beginsaldo": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Grootboekrekening": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Grootboekrekeningen",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Nieuw": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({})],
                                                                "Nee": <mglossary.TType>['group', d({
                                                                    "Jaar": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Jaar",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Rekening": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Informele Rekening",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                    })]],
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
                                                        "Beginsaldo": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Grootboekrekening": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Grootboekrekeningen",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Memoriaal boekingen": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Datum": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Grootboekrekening": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['template', {
                                                                        'arguments': d({
                                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['local', null],
                                                                                'namespaces': a([]),
                                                                                'type': "Grootboekrekeningen",
                                                                            }],
                                                                        }),
                                                                        'template': "Reference",
                                                                    }],
                                                                },
                                                                "Omschrijving": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
                                                        },
                                                        "Nieuw": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({})],
                                                                "Nee": <mglossary.TType>['group', d({
                                                                    "Balans item": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Balans Items",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Jaar": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Jaar",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
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
                                                "Startdatum boekjaar": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "Verkopen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Afhandeling": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Mutaties": <mglossary.TType>['group', d({})],
                                                                "Rekening courant": <mglossary.TType>['group', d({
                                                                    "Rekening courant": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Rekeningen courant",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                        "Betalingstermijn": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['number', null],
                                                        },
                                                        "Brondocument": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Nog toevoegen": <mglossary.TType>['group', d({})],
                                                                "Toegevoegd": <mglossary.TType>['group', d({
                                                                    "Document": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', null],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                        "BTW-periode": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "BTW-periodes",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Contracttype": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Licentieovereenkomst": <mglossary.TType>['group', d({
                                                                    "Overeenkomst": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Overeenkomsten",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                                "Project": <mglossary.TType>['group', d({
                                                                    "Offerte": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Offerte",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                    "Project": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'namespaces': a([]),
                                                                                    'type': "Projecten",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
                                                                        }],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                        "Debiteur": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['template', {
                                                                'arguments': d({
                                                                    "RererencedType": <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Klanten",
                                                                    }],
                                                                }),
                                                                'template': "Reference",
                                                            }],
                                                        },
                                                        "Regels": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Bedrag exclusief BTW": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "BTW-regime": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Binnenland heffing verlegd": <mglossary.TType>['group', d({})],
                                                                        "Export buiten de EU": <mglossary.TType>['group', d({})],
                                                                        "Installatie of afstandsverkopen binnen de EU": <mglossary.TType>['group', d({})],
                                                                        "Intracommunautair": <mglossary.TType>['group', d({})],
                                                                        "Standaard": <mglossary.TType>['group', d({
                                                                            "BTW-cateogrie": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "BTW Categorieen",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                                "Contracttype": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Licentieovereenkomst": <mglossary.TType>['group', d({
                                                                            "Periode": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "Periodes",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                        "Los": <mglossary.TType>['group', d({})],
                                                                        "Project": <mglossary.TType>['group', d({
                                                                            "Opbrengst": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "Opbrengsten",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                                "Omschrijving": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Type": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                                        "Balans": <mglossary.TType>['group', d({
                                                                            "Balans item": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "Balans items",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                        "Opbrengsten": <mglossary.TType>['group', d({
                                                                            "Grootboekrekening": {
                                                                                'optional': true,
                                                                                'type': <mglossary.TType>['template', {
                                                                                    'arguments': d({
                                                                                        "RererencedType": <mglossary.TType>['reference', {
                                                                                            'context': <mglossary.TContext>['local', null],
                                                                                            'namespaces': a([]),
                                                                                            'type': "GRootboekrekeningen",
                                                                                        }],
                                                                                    }),
                                                                                    'template': "Reference",
                                                                                }],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })]],
                                                },
                                                "Verrekenposten": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Mutaties": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                                "Afhandeling": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['reference', {
                                                                        'context': <mglossary.TContext>['local', null],
                                                                        'namespaces': a([]),
                                                                        'type': "Afhandeling",
                                                                    }],
                                                                },
                                                                "Bedrag": {
                                                                    'optional': true,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                            })]],
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
                                    "Afhandeling": <mglossary.TType>['taggedUnion', d({
                                        "BTW-periode": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "BTW-periodes",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Jaren",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Informele rekening": <mglossary.TType>['group', d({
                                            "Informele rekening": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Informele rekeningen",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Inkoop": <mglossary.TType>['group', d({
                                            "Inkoop": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Inkopen",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Jaren",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Verkoop": <mglossary.TType>['group', d({
                                            "Inkoop": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Verkopen",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Jaren",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
                                        "Verrekenpost": <mglossary.TType>['group', d({
                                            "Verrekenpost": {
                                                'optional': true,
                                                'type': <mglossary.TType>['template', {
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'namespaces': a([]),
                                                            'type': "Verrekenposten",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                        })],
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
                                                            "Afgesloten": ['switch', {
                                                                'cases': d({
                                                                    "Ja": {
                                                                        'innerFunctions': d({}),
                                                                        'returnExpression': ['groupInitializer', {
                                                                            'properties': d({})
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
                                                            "Balans grootboekrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Type": ['switch', {
                                                                                'cases': d({
                                                                                    "Bankrekening": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Informele rekening": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Overig": {
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
                                                            "Bankrekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Beginsaldo": ['implementMe', "liana2Pareto"],
                                                                            "Grootboekrekening": ['implementMe', "liana2Pareto"],
                                                                            "Mutaties": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Bedrag": ['implementMe', "liana2Pareto"],
                                                                                            "Datum": ['implementMe', "liana2Pareto"],
                                                                                            "Omschrijving": ['implementMe', "liana2Pareto"],
                                                                                            "Status": ['switch', {
                                                                                                'cases': d({
                                                                                                    "Nog te verwerken": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({})
                                                                                                        }],
                                                                                                    },
                                                                                                    "Verwerkt": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({
                                                                                                                "Afhandeling": ['call', {
                                                                                                                    'function': "Afhandeling",
                                                                                                                }],
                                                                                                            })
                                                                                                        }],
                                                                                                    },
                                                                                                })
                                                                                            }],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Nieuw": ['switch', {
                                                                                'cases': d({
                                                                                    "Ja": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Nee": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Jaar": ['implementMe', "liana2Pareto"],
                                                                                                "Rekening": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
                                                                    }],
                                                                },
                                                            }],
                                                            "Beginsaldo nog aan te geven BTW": ['implementMe', "liana2Pareto"],
                                                            "Beginsaldo Winstreserve": ['implementMe', "liana2Pareto"],
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
                                                                                        'properties': d({
                                                                                            "Bestand": ['implementMe', "liana2Pareto"],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Omschrijving": ['implementMe', "liana2Pareto"],
                                                                            "Status": ['switch', {
                                                                                'cases': d({
                                                                                    "Aangegeven": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Afronding": ['implementMe', "liana2Pareto"],
                                                                                                "Bedrag": ['implementMe', "liana2Pareto"],
                                                                                                "Datum": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                    "Openstaand": {
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
                                                            "Eerste boekjaar": ['switch', {
                                                                'cases': d({
                                                                    "Ja": {
                                                                        'innerFunctions': d({}),
                                                                        'returnExpression': ['groupInitializer', {
                                                                            'properties': d({})
                                                                        }],
                                                                    },
                                                                    "Nee": {
                                                                        'innerFunctions': d({}),
                                                                        'returnExpression': ['groupInitializer', {
                                                                            'properties': d({
                                                                                "Vorig boekjaar": ['implementMe', "liana2Pareto"],
                                                                            })
                                                                        }],
                                                                    },
                                                                })
                                                            }],
                                                            "Grootboek BTW periode": ['implementMe', "liana2Pareto"],
                                                            "Grootboek inkoop saldo": ['implementMe', "liana2Pareto"],
                                                            "Grootboek verkoop saldo": ['implementMe', "liana2Pareto"],
                                                            "Grootboekrekening voor BTW afrondingen": ['implementMe', "liana2Pareto"],
                                                            "Grootboekrekening voor nog aan te geven BTW": ['implementMe', "liana2Pareto"],
                                                            "Grootboekrekening voor resultaat dit jaar": ['implementMe', "liana2Pareto"],
                                                            "Grootboekrekening voor winstreserve": ['implementMe', "liana2Pareto"],
                                                            "Informele rekeningen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Beginsaldo": ['implementMe', "liana2Pareto"],
                                                                            "Grootboekrekening": ['implementMe', "liana2Pareto"],
                                                                            "Nieuw": ['switch', {
                                                                                'cases': d({
                                                                                    "Ja": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Nee": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Jaar": ['implementMe', "liana2Pareto"],
                                                                                                "Rekening": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                        })
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
                                                                            "Beginsaldo": ['implementMe', "liana2Pareto"],
                                                                            "Grootboekrekening": ['implementMe', "liana2Pareto"],
                                                                            "Memoriaal boekingen": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Bedrag": ['implementMe', "liana2Pareto"],
                                                                                            "Datum": ['implementMe', "liana2Pareto"],
                                                                                            "Grootboekrekening": ['implementMe', "liana2Pareto"],
                                                                                            "Omschrijving": ['implementMe', "liana2Pareto"],
                                                                                        })
                                                                                    }],
                                                                                },
                                                                            }],
                                                                            "Nieuw": ['switch', {
                                                                                'cases': d({
                                                                                    "Ja": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Nee": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Balans item": ['implementMe', "liana2Pareto"],
                                                                                                "Jaar": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                })
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
                                                            "Startdatum boekjaar": ['implementMe', "liana2Pareto"],
                                                            "Verkopen": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Afhandeling": ['switch', {
                                                                                'cases': d({
                                                                                    "Mutaties": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Rekening courant": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Rekening courant": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                            "Betalingstermijn": ['implementMe', "liana2Pareto"],
                                                                            "Brondocument": ['switch', {
                                                                                'cases': d({
                                                                                    "Nog toevoegen": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({})
                                                                                        }],
                                                                                    },
                                                                                    "Toegevoegd": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Document": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                            "BTW-periode": ['implementMe', "liana2Pareto"],
                                                                            "Contracttype": ['switch', {
                                                                                'cases': d({
                                                                                    "Licentieovereenkomst": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Overeenkomst": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                    "Project": {
                                                                                        'innerFunctions': d({}),
                                                                                        'returnExpression': ['groupInitializer', {
                                                                                            'properties': d({
                                                                                                "Offerte": ['implementMe', "liana2Pareto"],
                                                                                                "Project": ['implementMe', "liana2Pareto"],
                                                                                            })
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            }],
                                                                            "Debiteur": ['implementMe', "liana2Pareto"],
                                                                            "Regels": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Bedrag exclusief BTW": ['implementMe', "liana2Pareto"],
                                                                                            "BTW-regime": ['switch', {
                                                                                                'cases': d({
                                                                                                    "Binnenland heffing verlegd": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({})
                                                                                                        }],
                                                                                                    },
                                                                                                    "Export buiten de EU": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({})
                                                                                                        }],
                                                                                                    },
                                                                                                    "Installatie of afstandsverkopen binnen de EU": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({})
                                                                                                        }],
                                                                                                    },
                                                                                                    "Intracommunautair": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({})
                                                                                                        }],
                                                                                                    },
                                                                                                    "Standaard": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({
                                                                                                                "BTW-cateogrie": ['implementMe', "liana2Pareto"],
                                                                                                            })
                                                                                                        }],
                                                                                                    },
                                                                                                })
                                                                                            }],
                                                                                            "Contracttype": ['switch', {
                                                                                                'cases': d({
                                                                                                    "Licentieovereenkomst": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({
                                                                                                                "Periode": ['implementMe', "liana2Pareto"],
                                                                                                            })
                                                                                                        }],
                                                                                                    },
                                                                                                    "Los": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({})
                                                                                                        }],
                                                                                                    },
                                                                                                    "Project": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({
                                                                                                                "Opbrengst": ['implementMe', "liana2Pareto"],
                                                                                                            })
                                                                                                        }],
                                                                                                    },
                                                                                                })
                                                                                            }],
                                                                                            "Omschrijving": ['implementMe', "liana2Pareto"],
                                                                                            "Type": ['switch', {
                                                                                                'cases': d({
                                                                                                    "Balans": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({
                                                                                                                "Balans item": ['implementMe', "liana2Pareto"],
                                                                                                            })
                                                                                                        }],
                                                                                                    },
                                                                                                    "Opbrengsten": {
                                                                                                        'innerFunctions': d({}),
                                                                                                        'returnExpression': ['groupInitializer', {
                                                                                                            'properties': d({
                                                                                                                "Grootboekrekening": ['implementMe', "liana2Pareto"],
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
                                                            "Verrekenposten": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({
                                                                            "Mutaties": ['mapDictionary', {
                                                                                'block': {
                                                                                    'innerFunctions': d({}),
                                                                                    'returnExpression': ['groupInitializer', {
                                                                                        'properties': d({
                                                                                            "Afhandeling": ['call', {
                                                                                                'function': "Afhandeling",
                                                                                            }],
                                                                                            "Bedrag": ['implementMe', "liana2Pareto"],
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
                            "Afhandeling": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['switch', {
                                        'cases': d({
                                            "BTW-periode": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "BTW-periode": ['implementMe', "liana2Pareto"],
                                                        "Jaar": ['implementMe', "liana2Pareto"],
                                                    })
                                                }],
                                            },
                                            "Informele rekening": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "Informele rekening": ['implementMe', "liana2Pareto"],
                                                    })
                                                }],
                                            },
                                            "Inkoop": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "Inkoop": ['implementMe', "liana2Pareto"],
                                                        "Jaar": ['implementMe', "liana2Pareto"],
                                                    })
                                                }],
                                            },
                                            "Verkoop": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "Inkoop": ['implementMe', "liana2Pareto"],
                                                        "Jaar": ['implementMe', "liana2Pareto"],
                                                    })
                                                }],
                                            },
                                            "Verrekenpost": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "Verrekenpost": ['implementMe', "liana2Pareto"],
                                                    })
                                                }],
                                            },
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