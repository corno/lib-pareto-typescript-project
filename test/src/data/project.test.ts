import * as pr from 'pareto-core-raw'
import {
    array,
    externalReference as er,
    null_,
    string as str,
    reference,
    reference as ref,
    typeReference,
    boolean as bln,
    number as nr,
    nested,
    template,
    optional,
    dictionary, group as grp, member, taggedUnion, types, _function, group, externalTypeReference
} from "../../../pub/dist/modules/glossary/api/shorthands.p"

import * as mproject from "../../../pub/dist/modules/project"

import * as mglossary from "../../../pub/dist/modules/glossary"

type GRP = {
    type: mglossary.TType
    optional?: boolean
}

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
            'templates': d({
                "Reference": {
                    'parameters': d({
                        "ReferencedType": null,
                    }),
                    'type': <mglossary.TType>['group', d({})],
                },
            }),
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
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['null', null],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Subcategorie": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['null', null],
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
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['null', null],
                                                            }),
                                                            'template': "Reference",
                                                        }],
                                                    },
                                                    "Subcategorie fiscus": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['template', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['null', null],
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
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['null', null],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Subcategorie": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['null', null],
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
                                                                            'context': <mglossary.TContext>['local', null],
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['null', null],
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
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['null', null],
                                                            }),
                                                            'template': "Reference",
                                                        }],
                                                    },
                                                    "Subcategorie fiscus": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['template', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['null', null],
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
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Jaren",
                        }],
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
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                        "Jaar": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Informele rekening": <mglossary.TType>['group', d({
                        "Informele rekening": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Inkoop": <mglossary.TType>['group', d({
                        "Inkoop": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                        "Jaar": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Verkoop": <mglossary.TType>['group', d({
                        "Inkoop": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                        "Jaar": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Verrekenpost": <mglossary.TType>['group', d({
                        "Verrekenpost": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['null', null],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                })],
                "Informele Rekeningen": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                    "Beginsaldo": {
                        'optional': false,
                        'type': <mglossary.TType>['number', null],
                    },
                    "Grootboekrekening": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
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
                                        'context': <mglossary.TContext>['local', null],
                                        'arguments': d({
                                            "RererencedType": <mglossary.TType>['null', null],
                                        }),
                                        'template': "Reference",
                                    }],
                                },
                                "Rekening": {
                                    'optional': false,
                                    'type': <mglossary.TType>['template', {
                                        'context': <mglossary.TContext>['local', null],
                                        'arguments': d({
                                            "RererencedType": <mglossary.TType>['null', null],
                                        }),
                                        'template': "Reference",
                                    }],
                                },
                            })],
                        })],
                    },
                })]],
                "Jaren": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
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
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['null', null],
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
                                        'type': <mglossary.TType>['string', null],
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
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Rekening": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
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
                                        'type': <mglossary.TType>['string', null],
                                    },
                                })]],
                            },
                            "Omschrijving": {
                                'optional': false,
                                'type': <mglossary.TType>['string', null],
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
                                        'context': <mglossary.TContext>['local', null],
                                        'arguments': d({
                                            "RererencedType": <mglossary.TType>['null', null],
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
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboek inkoop saldo": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboek verkoop saldo": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor BTW afrondingen": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor nog aan te geven BTW": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor resultaat dit jaar": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor winstreserve": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Informele rekeningen": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Informele Rekeningen",
                        }],
                    },
                    "Inkopen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Afhandeling": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Mutaties": <mglossary.TType>['group', d({})],
                                    "Nog te betalen": <mglossary.TType>['group', d({
                                        "Betalingstermijn": {
                                            'optional': false,
                                            'type': <mglossary.TType>['number', null],
                                        },
                                    })],
                                    "Rekening courant": <mglossary.TType>['group', d({
                                        "Rekening courant": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                            "Brondocument": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Niet van toepassing": <mglossary.TType>['group', d({})],
                                    "Nog toevoegen": <mglossary.TType>['group', d({})],
                                    "Ontbreekt": <mglossary.TType>['group', d({})],
                                    "Toegevoegd": <mglossary.TType>['group', d({
                                        "Document": {
                                            'optional': false,
                                            'type': <mglossary.TType>['string', null],
                                        },
                                    })],
                                })],
                            },
                            "BTW-regime": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Binnenland heffing verlegd": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Geen BTW van toepassing": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Import van buiten de EU": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Intracommunautair": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Standaard": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                            "Datum": {
                                'optional': false,
                                'type': <mglossary.TType>['number', null],
                            },
                            "Regels": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Bedrag": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Bekend": <mglossary.TType>['group', d({
                                                "Bedrag inclusief BTW": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "BTW": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                            })],
                                            "Nog niet bekend": <mglossary.TType>['group', d({
                                                "Aantekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['string', null],
                                                },
                                            })],
                                        })],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                    "Type": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Balans": <mglossary.TType>['group', d({
                                                "Balans item": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                            "Kosten": <mglossary.TType>['group', d({
                                                "Grootboekrekening": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                        })],
                                    },
                                })]],
                            },
                            "Type": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Bonnetje": <mglossary.TType>['group', d({})],
                                    "Inkoop (met crediteur)": <mglossary.TType>['group', d({
                                        "Crediteur": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Factuurnummer": {
                                            'optional': false,
                                            'type': <mglossary.TType>['string', null],
                                        },
                                    })],
                                    "Loonheffing": <mglossary.TType>['group', d({
                                        "Ronde": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Salaris": <mglossary.TType>['group', d({
                                        "Medewerker": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Ronde": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "WBSO": <mglossary.TType>['group', d({
                                        "Ronde": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
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
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['null', null],
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
                                            'context': <mglossary.TContext>['local', null],
                                            'arguments': d({
                                                "RererencedType": <mglossary.TType>['null', null],
                                            }),
                                            'template': "Reference",
                                        }],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
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
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Jaar": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
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
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
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
                                            'type': <mglossary.TType>['string', null],
                                        },
                                    })],
                                })],
                            },
                            "BTW-periode": {
                                'optional': false,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['null', null],
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
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Project": <mglossary.TType>['group', d({
                                        "Offerte": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Project": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
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
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['null', null],
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
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
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
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
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
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                        })],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                    "Type": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Balans": <mglossary.TType>['group', d({
                                                "Balans item": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                            "Opbrengsten": <mglossary.TType>['group', d({
                                                "Grootboekrekening": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['null', null],
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
            }),
            'interfaces': d({}),
            'functions': d({
                "Enrich": {
                    'data': {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Root",
                    },
                    'managed input interface': null,
                    'output interface': null,
                    'return type': ['data', {
                        'type': {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Root",
                        },
                        'asynchronous': false,
                    }],
                },
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Root",
                    },
                    'managed input interface': null,
                    'output interface': {
                        'context': <mglossary.TContext>['import', "fp"],
                        'interface': "Line",
                    },
                    'return type': ['nothing', null],
                },
            }),
        },
        'api': {
            'imports': d({
                'common': "glo-pareto-common"
            }),
            'algorithms': d({
                'createEnricher': {
                    'definition': {
                        'function': "undefined",
                    },
                    'type': ['constructor', {
                        'configuration data': null,
                        'dependencies': d({}),
                    }],
                },
                'createSerializer': {
                    'definition': {
                        'function': "undefined",
                    },
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
                                            "Jaren": ['call', {
                                                'function': "Jaren",
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
                            "Informele Rekeningen": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['mapDictionary', {
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
                                },
                            },
                            "Jaren": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['mapDictionary', {
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
                                                    "Informele rekeningen": ['call', {
                                                        'function': "Informele Rekeningen",
                                                    }],
                                                    "Inkopen": ['mapDictionary', {
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
                                                                            "Nog te betalen": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "Betalingstermijn": ['implementMe', "liana2Pareto"],
                                                                                    })
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
                                                                    "Brondocument": ['switch', {
                                                                        'cases': d({
                                                                            "Niet van toepassing": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({})
                                                                                }],
                                                                            },
                                                                            "Nog toevoegen": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({})
                                                                                }],
                                                                            },
                                                                            "Ontbreekt": {
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
                                                                    "BTW-regime": ['switch', {
                                                                        'cases': d({
                                                                            "Binnenland heffing verlegd": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "BTW-periode": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Geen BTW van toepassing": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "BTW-periode": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Import van buiten de EU": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "BTW-periode": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Intracommunautair": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "BTW-periode": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Standaard": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "BTW-periode": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                        })
                                                                    }],
                                                                    "Datum": ['implementMe', "liana2Pareto"],
                                                                    "Regels": ['mapDictionary', {
                                                                        'block': {
                                                                            'innerFunctions': d({}),
                                                                            'returnExpression': ['groupInitializer', {
                                                                                'properties': d({
                                                                                    "Bedrag": ['switch', {
                                                                                        'cases': d({
                                                                                            "Bekend": {
                                                                                                'innerFunctions': d({}),
                                                                                                'returnExpression': ['groupInitializer', {
                                                                                                    'properties': d({
                                                                                                        "Bedrag inclusief BTW": ['implementMe', "liana2Pareto"],
                                                                                                        "BTW": ['implementMe', "liana2Pareto"],
                                                                                                    })
                                                                                                }],
                                                                                            },
                                                                                            "Nog niet bekend": {
                                                                                                'innerFunctions': d({}),
                                                                                                'returnExpression': ['groupInitializer', {
                                                                                                    'properties': d({
                                                                                                        "Aantekeningen": ['implementMe', "liana2Pareto"],
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
                                                                                            "Kosten": {
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
                                                                    "Type": ['switch', {
                                                                        'cases': d({
                                                                            "Bonnetje": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({})
                                                                                }],
                                                                            },
                                                                            "Inkoop (met crediteur)": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "Crediteur": ['implementMe', "liana2Pareto"],
                                                                                        "Factuurnummer": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Loonheffing": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "Ronde": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "Salaris": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "Medewerker": ['implementMe', "liana2Pareto"],
                                                                                        "Ronde": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                            "WBSO": {
                                                                                'innerFunctions': d({}),
                                                                                'returnExpression': ['groupInitializer', {
                                                                                    'properties': d({
                                                                                        "Ronde": ['implementMe', "liana2Pareto"],
                                                                                    })
                                                                                }],
                                                                            },
                                                                        })
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