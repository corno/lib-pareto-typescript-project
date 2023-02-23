import * as pr from 'pareto-core-data'

import * as gmoduleDefinition from "./import_moduleDefinition"
import * as gproject from "./import_project"
import * as gglossary from "./import_glossary"

const d = pd.wrapRawDictionary
const a = pr.wrapRawArray

export const $: gproject.TModule = {
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
                    'type': <gglossary.T.Type>['group', d({
                        "Bankrekeningen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "Beheer": {
                            'optional': true,
                            'type': <gglossary.T.Type>['group', d({
                                "Balans": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['group', d({
                                        "Grootboekrekeningen": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['reference', {
                                                        'context': <gglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Subcategorie": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['reference', {
                                                        'context': <gglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type>['group', d({})],
                                                        "Passiva": <gglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <gglossary.T.Type>['reference', {
                                                                'context': <gglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <gglossary.T.Type>['reference', {
                                                                'context': <gglossary.TContext>['import', {
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
                                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type>['group', d({})],
                                                        "Passiva": <gglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type>['group', d({})],
                                                        "Passiva": <gglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                    })],
                                },
                                "BTW-categorieen": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "BTW-heffing": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Ja": <gglossary.T.Type>['group', d({
                                                    "BTW-promillage": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['number', {}],
                                                    },
                                                })],
                                                "Nee": <gglossary.T.Type>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "Gebruikers": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Volledige naam": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Resultaat": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['group', d({
                                        "Correctietypes vennootschapsbelasting": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                                        },
                                        "Grootboekrekeningen": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['reference', {
                                                        'context': <gglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Subcategorie": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['reference', {
                                                        'context': <gglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type>['group', d({
                                                            "Correctie op vennootschapsbelasting": {
                                                                'optional': true,
                                                                'type': <gglossary.T.Type>['taggedUnion', d({
                                                                    "Ja": <gglossary.T.Type>['group', d({
                                                                        "Correctietype": {
                                                                            'optional': true,
                                                                            'type': <gglossary.T.Type>['reference', {
                                                                                'context': <gglossary.TContext>['import', {
                                                                                    'glossary': "common",
                                                                                    'arguments': d({}),
                                                                                }],
                                                                                'type': "Reference",
                                                                                'arguments': d({}),
                                                                            }],
                                                                        },
                                                                    })],
                                                                    "Nee": <gglossary.T.Type>['group', d({})],
                                                                })],
                                                            },
                                                        })],
                                                        "Opbrengsten": <gglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <gglossary.T.Type>['reference', {
                                                                'context': <gglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <gglossary.T.Type>['reference', {
                                                                'context': <gglossary.TContext>['import', {
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
                                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type>['group', d({})],
                                                        "Opbrengsten": <gglossary.T.Type>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type>['group', d({})],
                                                        "Opbrengsten": <gglossary.T.Type>['group', d({})],
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
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "Jaren": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['local', {}],
                                'type': "Jaren",
                                'arguments': d({}),
                            }],
                        },
                        "Klanten": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Licentieovereenkomsten": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Periodes": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Bedrag": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['number', {}],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                                "Projecten": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Offertes": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                "Opbrengsten": {
                                                    'optional': true,
                                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                                        "Type": {
                                                            'optional': true,
                                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                                "Project": <gglossary.T.Type>['group', d({
                                                                    "Bedrag": {
                                                                        'optional': true,
                                                                        'type': <gglossary.T.Type>['number', {}],
                                                                    },
                                                                    "Betaaldatum": {
                                                                        'optional': true,
                                                                        'type': <gglossary.T.Type>['number', {}],
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
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "Medewerkers": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                    })]
                },
                "Afhandeling": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type>['taggedUnion', d({
                        "BTW-periode": <gglossary.T.Type>['group', d({
                            "BTW-periode": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Informele rekening": <gglossary.T.Type>['group', d({
                            "Informele rekening": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Inkoop": <gglossary.T.Type>['group', d({
                            "Inkoop": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Verkoop": <gglossary.T.Type>['group', d({
                            "Inkoop": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Verrekenpost": <gglossary.T.Type>['group', d({
                            "Verrekenpost": {
                                'optional': true,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['import', {
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
                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                        "Beginsaldo": {
                            'optional': true,
                            'type': <gglossary.T.Type>['number', {}],
                        },
                        "Grootboekrekening": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Nieuw": {
                            'optional': true,
                            'type': <gglossary.T.Type>['taggedUnion', d({
                                "Ja": <gglossary.T.Type>['group', d({})],
                                "Nee": <gglossary.T.Type>['group', d({
                                    "Jaar": {
                                        'optional': true,
                                        'type': <gglossary.T.Type>['reference', {
                                            'context': <gglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "Rekening": {
                                        'optional': true,
                                        'type': <gglossary.T.Type>['reference', {
                                            'context': <gglossary.TContext>['import', {
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
                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                        "Afgesloten": {
                            'optional': true,
                            'type': <gglossary.T.Type>['taggedUnion', d({
                                "Ja": <gglossary.T.Type>['group', d({})],
                                "Nee": <gglossary.T.Type>['group', d({})],
                            })],
                        },
                        "Balans grootboekrekeningen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Type": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Bankrekening": <gglossary.T.Type>['group', d({})],
                                        "Informele rekening": <gglossary.T.Type>['group', d({})],
                                        "Overig": <gglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Bankrekeningen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Beginsaldo": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Mutaties": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['number', {}],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['string', {}],
                                        },
                                        "Status": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Nog te verwerken": <gglossary.T.Type>['group', d({})],
                                                "Verwerkt": <gglossary.T.Type>['group', d({
                                                    "Afhandeling": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['local', {}],
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
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Ja": <gglossary.T.Type>['group', d({})],
                                        "Nee": <gglossary.T.Type>['group', d({
                                            "Jaar": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Rekening": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                            'type': <gglossary.T.Type>['number', {}],
                        },
                        "Beginsaldo Winstreserve": {
                            'optional': true,
                            'type': <gglossary.T.Type>['number', {}],
                        },
                        "BTW periodes": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "1. BTW-categorieen": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                                },
                                "Documenten": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Bestand": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Omschrijving": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['string', {}],
                                },
                                "Status": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Aangegeven": <gglossary.T.Type>['group', d({
                                            "Afronding": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['number', {}],
                                            },
                                            "Bedrag": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['number', {}],
                                            },
                                            "Datum": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['number', {}],
                                            },
                                        })],
                                        "Openstaand": <gglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Eerste boekjaar": {
                            'optional': true,
                            'type': <gglossary.T.Type>['taggedUnion', d({
                                "Ja": <gglossary.T.Type>['group', d({})],
                                "Nee": <gglossary.T.Type>['group', d({
                                    "Vorig boekjaar": {
                                        'optional': true,
                                        'type': <gglossary.T.Type>['reference', {
                                            'context': <gglossary.TContext>['import', {
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
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboek inkoop saldo": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboek verkoop saldo": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor BTW afrondingen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor nog aan te geven BTW": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor resultaat dit jaar": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor winstreserve": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Informele rekeningen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['local', {}],
                                'type': "Informele Rekeningen",
                                'arguments': d({}),
                            }],
                        },
                        "Inkopen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Afhandeling": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Mutaties": <gglossary.T.Type>['group', d({})],
                                        "Nog te betalen": <gglossary.T.Type>['group', d({
                                            "Betalingstermijn": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['number', {}],
                                            },
                                        })],
                                        "Rekening courant": <gglossary.T.Type>['group', d({
                                            "Rekening courant": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Niet van toepassing": <gglossary.T.Type>['group', d({})],
                                        "Nog toevoegen": <gglossary.T.Type>['group', d({})],
                                        "Ontbreekt": <gglossary.T.Type>['group', d({})],
                                        "Toegevoegd": <gglossary.T.Type>['group', d({
                                            "Document": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-regime": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Binnenland heffing verlegd": <gglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Geen BTW van toepassing": <gglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Import van buiten de EU": <gglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Intracommunautair": <gglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Standaard": <gglossary.T.Type>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                                    'type': <gglossary.T.Type>['number', {}],
                                },
                                "Regels": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Bekend": <gglossary.T.Type>['group', d({
                                                    "Bedrag inclusief BTW": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['number', {}],
                                                    },
                                                    "BTW": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['number', {}],
                                                    },
                                                })],
                                                "Nog niet bekend": <gglossary.T.Type>['group', d({
                                                    "Aantekeningen": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['string', {}],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['string', {}],
                                        },
                                        "Type": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Balans": <gglossary.T.Type>['group', d({
                                                    "Balans item": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Kosten": <gglossary.T.Type>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
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
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Bonnetje": <gglossary.T.Type>['group', d({})],
                                        "Inkoop (met crediteur)": <gglossary.T.Type>['group', d({
                                            "Crediteur": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Factuurnummer": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['string', {}],
                                            },
                                        })],
                                        "Loonheffing": <gglossary.T.Type>['group', d({
                                            "Ronde": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Salaris": <gglossary.T.Type>['group', d({
                                            "Medewerker": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Ronde": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "WBSO": <gglossary.T.Type>['group', d({
                                            "Ronde": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Beginsaldo": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Memoriaal boekingen": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['number', {}],
                                        },
                                        "Grootboekrekening": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['reference', {
                                                'context': <gglossary.TContext>['import', {
                                                    'glossary': "common",
                                                    'arguments': d({}),
                                                }],
                                                'type': "Reference",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['string', {}],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Ja": <gglossary.T.Type>['group', d({})],
                                        "Nee": <gglossary.T.Type>['group', d({
                                            "Balans item": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "Salarisrondes": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "Startdatum boekjaar": {
                            'optional': true,
                            'type': <gglossary.T.Type>['number', {}],
                        },
                        "Verkopen": {
                            'optional': true,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Afhandeling": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Mutaties": <gglossary.T.Type>['group', d({})],
                                        "Rekening courant": <gglossary.T.Type>['group', d({
                                            "Rekening courant": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                                    'type': <gglossary.T.Type>['number', {}],
                                },
                                "Brondocument": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Nog toevoegen": <gglossary.T.Type>['group', d({})],
                                        "Toegevoegd": <gglossary.T.Type>['group', d({
                                            "Document": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-periode": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Contracttype": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "Licentieovereenkomst": <gglossary.T.Type>['group', d({
                                            "Overeenkomst": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Project": <gglossary.T.Type>['group', d({
                                            "Offerte": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Project": {
                                                'optional': true,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['import', {
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
                                    'type': <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Regels": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Bedrag exclusief BTW": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['number', {}],
                                        },
                                        "BTW-regime": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Binnenland heffing verlegd": <gglossary.T.Type>['group', d({})],
                                                "Export buiten de EU": <gglossary.T.Type>['group', d({})],
                                                "Installatie of afstandsverkopen binnen de EU": <gglossary.T.Type>['group', d({})],
                                                "Intracommunautair": <gglossary.T.Type>['group', d({})],
                                                "Standaard": <gglossary.T.Type>['group', d({
                                                    "BTW-cateogrie": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
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
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Licentieovereenkomst": <gglossary.T.Type>['group', d({
                                                    "Periode": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Los": <gglossary.T.Type>['group', d({})],
                                                "Project": <gglossary.T.Type>['group', d({
                                                    "Opbrengst": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
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
                                            'type': <gglossary.T.Type>['string', {}],
                                        },
                                        "Type": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['taggedUnion', d({
                                                "Balans": <gglossary.T.Type>['group', d({
                                                    "Balans item": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Opbrengsten": <gglossary.T.Type>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': true,
                                                        'type': <gglossary.T.Type>['reference', {
                                                            'context': <gglossary.TContext>['import', {
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
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "Mutaties": {
                                    'optional': true,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                        "Afhandeling": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['reference', {
                                                'context': <gglossary.TContext>['local', {}],
                                                'type': "Afhandeling",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <gglossary.T.Type>['number', {}],
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