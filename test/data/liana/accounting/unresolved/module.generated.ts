import * as pr from 'pareto-core-raw'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"

const d = pr.wrapRawDictionary
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
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Beheer": {
                            'optional': false,
                            'type': <mglossary.T.Type>['group', d({
                                "Balans": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['group', d({
                                        "Grootboekrekeningen": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': false,
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
                                                    'optional': false,
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
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <mglossary.T.Type>['group', d({})],
                                                        "Passiva": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': false,
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
                                                            'optional': false,
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
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <mglossary.T.Type>['group', d({})],
                                                        "Passiva": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "BTW-heffing": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Ja": <mglossary.T.Type>['group', d({
                                                    "BTW-promillage": {
                                                        'optional': false,
                                                        'type': <mglossary.T.Type>['number', {}],
                                                    },
                                                })],
                                                "Nee": <mglossary.T.Type>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "Gebruikers": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Volledige naam": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Resultaat": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['group', d({
                                        "Correctietypes vennootschapsbelasting": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                        },
                                        "Grootboekrekeningen": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': false,
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
                                                    'optional': false,
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
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <mglossary.T.Type>['group', d({
                                                            "Correctie op vennootschapsbelasting": {
                                                                'optional': false,
                                                                'type': <mglossary.T.Type>['taggedUnion', d({
                                                                    "Ja": <mglossary.T.Type>['group', d({
                                                                        "Correctietype": {
                                                                            'optional': false,
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
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': false,
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
                                                            'optional': false,
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
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <mglossary.T.Type>['group', d({})],
                                                        "Opbrengsten": <mglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Jaren": {
                            'optional': false,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Jaren",
                                'arguments': d({}),
                            }],
                        },
                        "Klanten": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Licentieovereenkomsten": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Periodes": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Bedrag": {
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['number', {}],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                                "Projecten": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Offertes": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                "Opbrengsten": {
                                                    'optional': false,
                                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                                        "Type": {
                                                            'optional': false,
                                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                                "Project": <mglossary.T.Type>['group', d({
                                                                    "Bedrag": {
                                                                        'optional': false,
                                                                        'type': <mglossary.T.Type>['number', {}],
                                                                    },
                                                                    "Betaaldatum": {
                                                                        'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Medewerkers": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                    })]
                },
                "Afhandeling": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['taggedUnion', d({
                        "BTW-periode": <mglossary.T.Type>['group', d({
                            "BTW-periode": {
                                'optional': false,
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
                                'optional': false,
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
                                'optional': false,
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
                                'optional': false,
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
                                'optional': false,
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
                                'optional': false,
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
                                'optional': false,
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
                                'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "Grootboekrekening": {
                            'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['taggedUnion', d({
                                "Ja": <mglossary.T.Type>['group', d({})],
                                "Nee": <mglossary.T.Type>['group', d({
                                    "Jaar": {
                                        'optional': false,
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
                                        'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['taggedUnion', d({
                                "Ja": <mglossary.T.Type>['group', d({})],
                                "Nee": <mglossary.T.Type>['group', d({})],
                            })],
                        },
                        "Balans grootboekrekeningen": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Type": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Bankrekening": <mglossary.T.Type>['group', d({})],
                                        "Informele rekening": <mglossary.T.Type>['group', d({})],
                                        "Overig": <mglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Bankrekeningen": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Beginsaldo": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Omschrijving": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                        "Status": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Nog te verwerken": <mglossary.T.Type>['group', d({})],
                                                "Verwerkt": <mglossary.T.Type>['group', d({
                                                    "Afhandeling": {
                                                        'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Ja": <mglossary.T.Type>['group', d({})],
                                        "Nee": <mglossary.T.Type>['group', d({
                                            "Jaar": {
                                                'optional': false,
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
                                                'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "Beginsaldo Winstreserve": {
                            'optional': false,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "BTW periodes": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "1. BTW-categorieen": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                },
                                "Documenten": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bestand": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Omschrijving": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['string', {}],
                                },
                                "Status": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Aangegeven": <mglossary.T.Type>['group', d({
                                            "Afronding": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                            "Bedrag": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                            "Datum": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                        })],
                                        "Openstaand": <mglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Eerste boekjaar": {
                            'optional': false,
                            'type': <mglossary.T.Type>['taggedUnion', d({
                                "Ja": <mglossary.T.Type>['group', d({})],
                                "Nee": <mglossary.T.Type>['group', d({
                                    "Vorig boekjaar": {
                                        'optional': false,
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
                            'optional': false,
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
                            'optional': false,
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
                            'optional': false,
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
                            'optional': false,
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
                            'optional': false,
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
                            'optional': false,
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
                            'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Informele Rekeningen",
                                'arguments': d({}),
                            }],
                        },
                        "Inkopen": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Afhandeling": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Mutaties": <mglossary.T.Type>['group', d({})],
                                        "Nog te betalen": <mglossary.T.Type>['group', d({
                                            "Betalingstermijn": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['number', {}],
                                            },
                                        })],
                                        "Rekening courant": <mglossary.T.Type>['group', d({
                                            "Rekening courant": {
                                                'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Niet van toepassing": <mglossary.T.Type>['group', d({})],
                                        "Nog toevoegen": <mglossary.T.Type>['group', d({})],
                                        "Ontbreekt": <mglossary.T.Type>['group', d({})],
                                        "Toegevoegd": <mglossary.T.Type>['group', d({
                                            "Document": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-regime": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Binnenland heffing verlegd": <mglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
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
                                                'optional': false,
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
                                                'optional': false,
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
                                                'optional': false,
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
                                                'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Regels": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Bekend": <mglossary.T.Type>['group', d({
                                                    "Bedrag inclusief BTW": {
                                                        'optional': false,
                                                        'type': <mglossary.T.Type>['number', {}],
                                                    },
                                                    "BTW": {
                                                        'optional': false,
                                                        'type': <mglossary.T.Type>['number', {}],
                                                    },
                                                })],
                                                "Nog niet bekend": <mglossary.T.Type>['group', d({
                                                    "Aantekeningen": {
                                                        'optional': false,
                                                        'type': <mglossary.T.Type>['string', {}],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                        "Type": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Balans": <mglossary.T.Type>['group', d({
                                                    "Balans item": {
                                                        'optional': false,
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
                                                        'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Bonnetje": <mglossary.T.Type>['group', d({})],
                                        "Inkoop (met crediteur)": <mglossary.T.Type>['group', d({
                                            "Crediteur": {
                                                'optional': false,
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
                                                'optional': false,
                                                'type': <mglossary.T.Type>['string', {}],
                                            },
                                        })],
                                        "Loonheffing": <mglossary.T.Type>['group', d({
                                            "Ronde": {
                                                'optional': false,
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
                                                'optional': false,
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
                                                'optional': false,
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
                                                'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Beginsaldo": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "Grootboekrekening": {
                                            'optional': false,
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
                                            'optional': false,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Ja": <mglossary.T.Type>['group', d({})],
                                        "Nee": <mglossary.T.Type>['group', d({
                                            "Balans item": {
                                                'optional': false,
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
                                                'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Salarisrondes": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "Startdatum boekjaar": {
                            'optional': false,
                            'type': <mglossary.T.Type>['number', {}],
                        },
                        "Verkopen": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Afhandeling": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Mutaties": <mglossary.T.Type>['group', d({})],
                                        "Rekening courant": <mglossary.T.Type>['group', d({
                                            "Rekening courant": {
                                                'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['number', {}],
                                },
                                "Brondocument": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Nog toevoegen": <mglossary.T.Type>['group', d({})],
                                        "Toegevoegd": <mglossary.T.Type>['group', d({
                                            "Document": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-periode": {
                                    'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "Licentieovereenkomst": <mglossary.T.Type>['group', d({
                                            "Overeenkomst": {
                                                'optional': false,
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
                                                'optional': false,
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
                                                'optional': false,
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
                                    'optional': false,
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
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Bedrag exclusief BTW": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['number', {}],
                                        },
                                        "BTW-regime": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Binnenland heffing verlegd": <mglossary.T.Type>['group', d({})],
                                                "Export buiten de EU": <mglossary.T.Type>['group', d({})],
                                                "Installatie of afstandsverkopen binnen de EU": <mglossary.T.Type>['group', d({})],
                                                "Intracommunautair": <mglossary.T.Type>['group', d({})],
                                                "Standaard": <mglossary.T.Type>['group', d({
                                                    "BTW-cateogrie": {
                                                        'optional': false,
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
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Licentieovereenkomst": <mglossary.T.Type>['group', d({
                                                    "Periode": {
                                                        'optional': false,
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
                                                        'optional': false,
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
                                            'optional': false,
                                            'type': <mglossary.T.Type>['string', {}],
                                        },
                                        "Type": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['taggedUnion', d({
                                                "Balans": <mglossary.T.Type>['group', d({
                                                    "Balans item": {
                                                        'optional': false,
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
                                                        'optional': false,
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
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "Mutaties": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                        "Afhandeling": {
                                            'optional': false,
                                            'type': <mglossary.T.Type>['reference', {
                                                'context': <mglossary.TContext>['local', {}],
                                                'type': "Afhandeling",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Bedrag": {
                                            'optional': false,
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
            'functions': d({
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Accounting",
                        'arguments': d({}),
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
                        'context': <mglossary.TContext>['import', {
                            'glossary': "fp",
                            'arguments': d({}),
                        }],
                        'interface': "Line",
                    }],
                    'return type': ['nothing', {}],
                },
            }),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': ['local', {}],
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}