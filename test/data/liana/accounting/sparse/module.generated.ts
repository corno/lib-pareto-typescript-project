import * as pr from 'pareto-core-data'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"

const d = pd.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Accounting": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['group', d({
                        "Bankrekeningen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Beheer": {
                            'optional': true,
                            'type': <mglossary.T.Type>['group', d({
                                "Balans": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['group', d({
                                        "Grootboekrekeningen": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Subcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <mglossary.T.Type>['group', d({})],
                                                        "Passiva": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.T.Type>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.T.Type>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <mglossary.T.Type>['group', d({})],
                                                        "Passiva": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <mglossary.T.Type>['group', d({})],
                                                        "Passiva": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                    })],
                                },
                                "BTW-categorieen": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "BTW-heffing": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Ja": <mglossary.T.Type>['group', d({
                                                    "BTW-promillage": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['number', {}],
                                                    },
                                                })],
                                                "Nee": <mglossary.T.Type>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "Gebruikers": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Volledige naam": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Resultaat": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['group', d({
                                        "Correctietypes vennootschapsbelasting": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                        },
                                        "Grootboekrekeningen": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Subcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <mglossary.T.Type>['group', d({
                                                            "Correctie op vennootschapsbelasting": {
                                                                'optional': true,
                                                                'type': <mglossary.T.Type>['taggedUnion', d({
                                                                    "Ja": <mglossary.T.Type>['group', d({
                                                                        "Correctietype": {
                                                                            'optional': true,
                                                                            'type': <mglossary.T.Type>['reference', {
                                                                                'context': <mglossary.TContext>['import', {
                                                                                    'glossary': "common",
                                                                                    'arguments': d({}),
                                                                                }],
                                                                                'type': "Reference",
                                                                                'arguments': d({}),
                                                                            }],
                                                                        },
                                                                    })],
                                                                    "Nee": <mglossary.T.Type>['group', d({})],
                                                                })],
                                                            },
                                                        })],
                                                        "Opbrengsten": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.T.Type>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.T.Type>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <mglossary.T.Type>['group', d({})],
                                                        "Opbrengsten": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <mglossary.T.Type>['group', d({})],
                                                        "Opbrengsten": <mglossary.T.Type>['group', d({})],
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
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Jaren": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Jaren",
                                'arguments': d({}),
                            }],
                        },
                        "Klanten": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Licentieovereenkomsten": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Periodes": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Bedrag": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['number', {}],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                                "Projecten": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Offertes": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Opbrengsten": {
                                                    'optional': true,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                        "Type": {
                                                            'optional': true,
                                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                                "Project": <mglossary.T.Type>['group', d({
                                                                    "Bedrag": {
                                                                        'optional': true,
                                                                        'type': <mglossary.T.Type>['number', {}],
                                                                    },
                                                                    "Betaaldatum": {
                                                                        'optional': true,
                                                                        'type': <mglossary.T.Type>['number', {}],
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
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Medewerkers": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                    })]
                },
                "Afhandeling": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['taggedUnion', d({
                        "BTW-periode": <mglossary.T.Type>['group', d({
                            "BTW-periode": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Informele rekening": <mglossary.T.Type>['group', d({
                            "Informele rekening": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Inkoop": <mglossary.T.Type>['group', d({
                            "Inkoop": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Verkoop": <mglossary.T.Type>['group', d({
                            "Inkoop": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Verrekenpost": <mglossary.T.Type>['group', d({
                            "Verrekenpost": {
                                'optional': true,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                    })]
                },
                "Informele Rekeningen": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                        "Beginsaldo": {
                            'optional': true,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "Grootboekrekening": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Nieuw": {
                            'optional': true,
                            'type': <mglossary.T.Type>['taggedUnion', d({
                                "Ja": <mglossary.T.Type>['group', d({})],
                                "Nee": <mglossary.T.Type>['group', d({
                                    "Jaar": {
                                        'optional': true,
                                        'type': <mglossary.T.Type>['reference', {
                                            'context': <mglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "Rekening": {
                                        'optional': true,
                                        'type': <mglossary.T.Type>['reference', {
                                            'context': <mglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                })],
                            })],
                        },
                    })]]
                },
                "Jaren": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                        "Afgesloten": {
                            'optional': true,
                            'type': <mglossary.T.Type>['taggedUnion', d({
                                "Ja": <mglossary.T.Type>['group', d({})],
                                "Nee": <mglossary.T.Type>['group', d({})],
                            })],
                        },
                        "Balans grootboekrekeningen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Type": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Bankrekening": <mglossary.T.Type>['group', d({})],
                                        "Informele rekening": <mglossary.T.Type>['group', d({})],
                                        "Overig": <mglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Bankrekeningen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Beginsaldo": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Mutaties": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                        "Status": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Nog te verwerken": <mglossary.T.Type>['group', d({})],
                                                "Verwerkt": <mglossary.T.Type>['group', d({
                                                    "Afhandeling": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['local', {}],
                                                            'type': "Afhandeling",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Ja": <mglossary.T.Type>['group', d({})],
                                        "Nee": <mglossary.T.Type>['group', d({
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Rekening": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Beginsaldo nog aan te geven BTW": {
                            'optional': true,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "Beginsaldo Winstreserve": {
                            'optional': true,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "BTW periodes": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "1. BTW-categorieen": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                },
                                "Documenten": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bestand": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Omschrijving": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['string', {}],
                                },
                                "Status": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Aangegeven": <mglossary.T.Type>['group', d({
                                            "Afronding": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                            "Bedrag": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                            "Datum": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                        })],
                                        "Openstaand": <mglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Eerste boekjaar": {
                            'optional': true,
                            'type': <mglossary.T.Type>['taggedUnion', d({
                                "Ja": <mglossary.T.Type>['group', d({})],
                                "Nee": <mglossary.T.Type>['group', d({
                                    "Vorig boekjaar": {
                                        'optional': true,
                                        'type': <mglossary.T.Type>['reference', {
                                            'context': <mglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                })],
                            })],
                        },
                        "Grootboek BTW periode": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboek inkoop saldo": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboek verkoop saldo": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor BTW afrondingen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor nog aan te geven BTW": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor resultaat dit jaar": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor winstreserve": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Informele rekeningen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Informele Rekeningen",
                                'arguments': d({}),
                            }],
                        },
                        "Inkopen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Afhandeling": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Mutaties": <mglossary.T.Type>['group', d({})],
                                        "Nog te betalen": <mglossary.T.Type>['group', d({
                                            "Betalingstermijn": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                        })],
                                        "Rekening courant": <mglossary.T.Type>['group', d({
                                            "Rekening courant": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Brondocument": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Niet van toepassing": <mglossary.T.Type>['group', d({})],
                                        "Nog toevoegen": <mglossary.T.Type>['group', d({})],
                                        "Ontbreekt": <mglossary.T.Type>['group', d({})],
                                        "Toegevoegd": <mglossary.T.Type>['group', d({
                                            "Document": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-regime": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Binnenland heffing verlegd": <mglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Geen BTW van toepassing": <mglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Import van buiten de EU": <mglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Intracommunautair": <mglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Standaard": <mglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Datum": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Regels": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Bekend": <mglossary.T.Type>['group', d({
                                                    "Bedrag inclusief BTW": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['number', {}],
                                                    },
                                                    "BTW": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['number', {}],
                                                    },
                                                })],
                                                "Nog niet bekend": <mglossary.T.Type>['group', d({
                                                    "Aantekeningen": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['string', {}],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                        "Type": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Balans": <mglossary.T.Type>['group', d({
                                                    "Balans item": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Kosten": <mglossary.T.Type>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "Type": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Bonnetje": <mglossary.T.Type>['group', d({})],
                                        "Inkoop (met crediteur)": <mglossary.T.Type>['group', d({
                                            "Crediteur": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Factuurnummer": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['string', {}],
                                            },
                                        })],
                                        "Loonheffing": <mglossary.T.Type>['group', d({
                                            "Ronde": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Salaris": <mglossary.T.Type>['group', d({
                                            "Medewerker": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Ronde": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "WBSO": <mglossary.T.Type>['group', d({
                                            "Ronde": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Overige balans items": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Beginsaldo": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Memoriaal boekingen": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Grootboekrekening": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['reference', {
                                                'context': <mglossary.TContext>['import', {
                                                    'glossary': "common",
                                                    'arguments': d({}),
                                                }],
                                                'type': "Reference",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Ja": <mglossary.T.Type>['group', d({})],
                                        "Nee": <mglossary.T.Type>['group', d({
                                            "Balans item": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Resultaat grootboekrekeningen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Salarisrondes": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Startdatum boekjaar": {
                            'optional': true,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "Verkopen": {
                            'optional': true,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Afhandeling": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Mutaties": <mglossary.T.Type>['group', d({})],
                                        "Rekening courant": <mglossary.T.Type>['group', d({
                                            "Rekening courant": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Betalingstermijn": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Brondocument": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Nog toevoegen": <mglossary.T.Type>['group', d({})],
                                        "Toegevoegd": <mglossary.T.Type>['group', d({
                                            "Document": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-periode": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Contracttype": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Licentieovereenkomst": <mglossary.T.Type>['group', d({
                                            "Overeenkomst": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Project": <mglossary.T.Type>['group', d({
                                            "Offerte": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Project": {
                                                'optional': true,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Debiteur": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Regels": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag exclusief BTW": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "BTW-regime": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Binnenland heffing verlegd": <mglossary.T.Type>['group', d({})],
                                                "Export buiten de EU": <mglossary.T.Type>['group', d({})],
                                                "Installatie of afstandsverkopen binnen de EU": <mglossary.T.Type>['group', d({})],
                                                "Intracommunautair": <mglossary.T.Type>['group', d({})],
                                                "Standaard": <mglossary.T.Type>['group', d({
                                                    "BTW-cateogrie": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Contracttype": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Licentieovereenkomst": <mglossary.T.Type>['group', d({
                                                    "Periode": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Los": <mglossary.T.Type>['group', d({})],
                                                "Project": <mglossary.T.Type>['group', d({
                                                    "Opbrengst": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                        "Type": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Balans": <mglossary.T.Type>['group', d({
                                                    "Balans item": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Opbrengsten": <mglossary.T.Type>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': true,
                                                        'type': <mglossary.T.Type>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
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
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Mutaties": {
                                    'optional': true,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Afhandeling": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['reference', {
                                                'context': <mglossary.TContext>['local', {}],
                                                'type': "Afhandeling",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                    })]],
                                },
                            })]],
                        },
                    })]]
                },
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}