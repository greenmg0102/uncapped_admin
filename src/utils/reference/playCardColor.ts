
export const playCardColorSet: any = {
    "s": {
        from: "#333232",
        to: "#ffffffb6",
    },
    "S": {
        from: "#333232",
        to: "#ffffffb6",
    },
    "h": {
        from: "#e63131",
        to: "#ffffffb6",
    },
    "H": {
        from: "#e63131",
        to: "#ffffffb6",
    },
    "c": {
        from: "#1d7a00",
        to: "#ffffffb6",
    },
    "C": {
        from: "#1d7a00",
        to: "#ffffffb6",
    },
    "d": {
        from: "#0b08df",
        to: "#ffffffb6",
    },
    "D": {
        from: "#0b08df",
        to: "#ffffffb6",
    },
}

export const playCardSymbolSet: any = {
    "small-c": "Green_Club.png",
    "small-d": "Blue_Diamond.png",
    "small-h": "Red_Heart.png",
    "small-s": "Grey_Spade.png",
    "c": "Green_Club.png",
    "d": "Blue_Diamond.png",
    "h": "Red_Heart.png",
    "s": "Grey_Spade.png",
}

export const hero8Site: any = {
    0: "UTG",
    1: "UTG+1",
    2: "LJ",
    3: "HJ",
    4: "CO",
    5: "BTN",
    6: "SB",
    7: "BB",
}

export const hero9Site: any = {
    0: "UTG",
    1: "UTG+1",
    2: "UTG+2",
    3: "LJ",
    4: "HJ",
    5: "CO",
    6: "BTN",
    7: "SB",
    8: "BB",
}

export const actionArray = ["VPIP", "PFR", "RFI", "vs RFI", "3-Bet", "vs 3-Bet", "4-Bet", "vs 4-Bet", "5-Bet"]

export const validationSeatWhenDefiningAction = {
    "VPIP": ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "RFI": ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "vs RFI": ["UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "PFR": ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "3-Bet": ["UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "vs 3-Bet": ["LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "Bb/100": ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "4-Bet": ["LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "VS 4-Bet": ["HJ", "CO", "BTN", "SB", "BB"],
    "bb/100": ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
    "5-Bet +": ["HJ", "CO", "BTN", "SB", "BB"],
    // "vs 5-Bet +": ["CO", "BTN", "SB", "BB"]
}

export const stackDepthArray: any = [
    10, 15, 20, 25, 30, 398750, 50, 60, 80, 100
]

export const stackArray: any = [
    100, 80, 60, 50, 40, 30, 25, 20, 15, 10
]

export const villianPokerTable: any = [
    {
        postion: 0,
        title: "UTG",
        gps: {
            top: -30,
            right: 50,
            left: 70,
            bottom: 0
        }
    },
    {
        postion: 1,
        title: "UTG+1",
        gps: {
            top: 15,
            right: 50,
            left: 110,
            bottom: 0
        }
    },
    {
        postion: 2,
        title: "LJ",
        gps: {
            top: 85,
            right: 50,
            left: 110,
            bottom: 0
        }
    },
    {
        postion: 3,
        title: "HJ",
        gps: {
            top: 130,
            right: 50,
            left: 70,
            bottom: 0
        }
    },
    {
        postion: 4,
        title: "CO",
        gps: {
            top: 130,
            right: 50,
            left: 30,
            bottom: 0
        }
    },
    {
        postion: 5,
        title: "BTN",
        gps: {
            top: 15,
            right: 50,
            left: -10,
            bottom: 0
        }
    },
    {
        postion: 6,
        title: "SB",
        gps: {
            top: 85,
            right: 50,
            left: -10,
            bottom: 0
        }
    },
    {
        postion: 7,
        title: "BB",
        gps: {
            top: -30,
            right: 50,
            left: 30,
            bottom: 0
        }
    }
]


export const pokerStageButtonExample: any = [
    {
        seat: "UTG",
        score: 40
    },
    {
        seat: "UTG+1",
        score: 40
    },
    {
        seat: "UTG+2",
        score: 40
    },
    {
        seat: "LJ",
        score: 40
    },
    {
        seat: "HJ",
        score: 40
    },
    {
        seat: "CO",
        score: 40
    },
    {
        seat: "BTN",
        score: 40
    },
    {
        seat: "SB",
        score: 40
    },
    {
        seat: "BB",
        score: 40
    }
]


export const colorCritical: any = [
    {
        stage: "A",
        color: '#7d1f1f'
    },
    {
        stage: "R",
        color: '#ff0000'
    },
    {
        stage: "C",
        color: '#00cf00'
    },
    {
        stage: "F",
        color: '#3d7cb8'
    }
]

export const pokerStreetOptionExample: any = [
    {
        id: 4,
        stage: "total",
        color: '#323424'
    },
    {
        id: 3,
        stage: "allin",
        color: '#7d1f1f'
    },
    {
        id: 2,
        stage: "raise",
        color: '#ff0000'
    },
    {
        id: 1,
        stage: "call",
        color: '#00cf00'
    },
    {
        id: 0,
        stage: "fold",
        color: '#3d7cb8'
    }
]

export const pokerStreetOptionUser: any = [
    {
        id: 4,
        stage: "fold",
        color: '#3d7cb8'
    },
    {
        id: 3,
        stage: "call",
        color: '#00cf00'
    },
    {
        id: 2,
        stage: "raise",
        color: '#ff0000'
    },
    {
        id: 1,
        stage: "allin",
        color: '#7d1f1f'
    },
    {
        id: 0,
        stage: "total",
        color: '#323424'
    },
]

export const pokerStageExample: any = [
    {
        stage: "HJ",
        amount: 200,
        steps: [
            {
                step: "Fold",
                amount: null,
            },
            {
                step: "Raise",
                amount: 200,
            },
            {
                step: "Allin",
                amount: 200,
            }
        ],
        activeStep: 'Fold'
    },
    {
        stage: "CO",
        amount: 200,
        steps: [
            {
                step: "Fold",
                amount: null,
            },
            {
                step: "Raise",
                amount: 200,
            },
            {
                step: "Allin",
                amount: 200,
            }
        ],
        activeStep: 'Raise'
    },
    {
        stage: "BTN",
        amount: 200,
        steps: [
            {
                step: "Fold",
                amount: null,
            },
            {
                step: "Allin",
                amount: 200,
            },
            {
                step: "Raise",
                amount: 2.5,
            }
        ],
        activeStep: 'Allin'
    },
    {
        stage: "SB",
        amount: 200,
        steps: [
            {
                step: "Fold",
                amount: null,
            },
            {
                step: "Raise",
                amount: 2.5,
            }
        ],
        activeStep: 'Raise'
    },
    {
        stage: "SB",
        amount: 200,
        steps: [
            {
                step: "Fold",
                amount: null,
            },
            {
                step: "Raise",
                amount: 200,
            },
            {
                step: "Allin",
                amount: 200,
            }
        ],
        activeStep: 'Allin'
    },
    {
        stage: "BB",
        amount: 200,
        steps: [
            {
                step: "Fold",
                amount: 2.5,
            },
            {
                step: "Raise",
                amount: 200,
            },
            {
                step: "Allin",
                amount: 200,
            }
        ],
        activeStep: 'Fold'
    },
]

export const cheapTest: any = [
    191.5, 200, 197.5, 199, 199.5, 200, 178.6, 199.5, 192
]

export const activePlayerTest: any = [
    0, 2, 0, 1, 1, 0, 1, 0, 1
]

export const positionSet: any = {
    2: [
        { x: 50, y: 0 },    //1
        { x: 50, y: 100 }   //2
    ],
    3: [
        { x: 50, y: 0 },    //1
        { x: 100, y: 100 }, //3
        { x: 0, y: 100 },   //2
    ],
    4: [
        { x: 50, y: 0 },    //1
        { x: 100, y: 50 },  //4
        { x: 50, y: 100 },  //3
        { x: 0, y: 50 },    //2
    ],
    5: [
        { x: 50, y: 0 },    //1
        { x: 100, y: 30 },  //5
        { x: 80, y: 100 },  //4
        { x: 20, y: 100 },  //3
        { x: 0, y: 30 },    //2
    ],
    6: [
        { x: 33, y: 0, dealer: false, dealerPosition: { x: 80, y: 40 } },                                               //1
        { x: 66, y: 0, dealer: true, dealerPosition: { x: 80, y: 30 } },                                                //6
        { x: 100, y: 50, dealer: false, dealerPosition: { x: 33, y: -10 }, cheapPosition: { x: 50, y: -90 } },          //5
        { x: 66, y: 100, dealer: false, dealerPosition: { x: -10, y: 30 }, cheapPosition: { x: -50, y: 10 } },          //4
        { x: 33, y: 100, dealer: false, dealerPosition: { x: -10, y: 40 } },                                            //3
        { x: 0, y: 50, dealer: false, dealerPosition: { x: 40, y: 80 }, cheapPosition: { x: 40, y: 170 } },             //2
    ],
    7: [
        { x: 50, y: 0, dealer: false, cheapPosition: { x: 120, y: 60 } },       // 1
        { x: 95, y: 20, dealer: false, cheapPosition: { x: 80, y: -120 } },     // 7
        { x: 95, y: 75, dealer: false, cheapPosition: { x: -90, y: -80 } },     // 6
        { x: 70, y: 100, dealer: false, cheapPosition: { x: -190, y: 40 } },    // 5
        { x: 30, y: 100, dealer: false, cheapPosition: { x: -190, y: 120 } },   // 4
        { x: 5, y: 75, dealer: false, cheapPosition: { x: -50, y: 210 } },      // 3
        { x: 5, y: 20, dealer: false, cheapPosition: { x: 80, y: 220 } },       // 2
    ],
    8: [
        { x: 70, y: 0, dealer: false, dealerPosition: { x: 120, y: 0 }, cheapPosition: { x: 150, y: -10 } },             //1
        { x: 100, y: 25, dealer: false, dealerPosition: { x: 90, y: -100 }, cheapPosition: { x: 90, y: -150 } },         //8  
        { x: 100, y: 80, dealer: false, dealerPosition: { x: -20, y: -90 }, cheapPosition: { x: -50, y: -120 } },        //7
        { x: 70, y: 100, dealer: false, dealerPosition: { x: -40, y: 10 }, cheapPosition: { x: -70, y: 10 } },           //6
        { x: 30, y: 100, dealer: false, dealerPosition: { x: -40, y: 70 }, cheapPosition: { x: -60, y: 70 } },           //5
        { x: 0, y: 80, dealer: true, dealerPosition: { x: -20, y: 150 }, cheapPosition: { x: -50, y: 190 } },            //4
        { x: 0, y: 25, dealer: false, dealerPosition: { x: 90, y: 130 }, cheapPosition: { x: 110, y: 190 } },            //3
        { x: 30, y: 0, dealer: false, dealerPosition: { x: 120, y: 40 }, cheapPosition: { x: 150, y: 70 } },             //2
    ],
    9: [
        { x: 50, y: 0 },    //1
        { x: 85, y: 15 },   //9
        { x: 100, y: 50 },  //8
        { x: 90, y: 85 },   //7
        { x: 70, y: 100 },  //6
        { x: 30, y: 100 },  //5
        { x: 10, y: 85 },   //4
        { x: 0, y: 50 },    //3
        { x: 15, y: 15 },   //2
    ]
}