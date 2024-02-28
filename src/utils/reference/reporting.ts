export const defaultReportSetting: any = {
    heroPosition: [
        {
            id: 0,
            title: "Early",
            stringList: ["UTG", "UTG+1", "LJ"],
            valueList: [0, 1, 2]
        },
        {
            id: 1,
            title: "Middle",
            stringList: ["LJ", "HJ"],
            valueList: [2, 3]
        },
        {
            id: 2,
            title: "Late",
            stringList: ["HJ", "CO", "BTN"],
            valueList: [3, 4, 5]
        },
        {
            id: 3,
            title: "Blinds",
            stringList: ["SB", "BB"],
            valueList: [6, 7]
        }
    ],
    VillianPosition: [
        {
            id: 0,
            title: "Early",
            stringList: ["UTG", "UTG+1", "LJ"],
            valueList: [0, 1, 2]
        },
        {
            id: 1,
            title: "Middle",
            stringList: ["LJ", "HJ"],
            valueList: [2, 3]
        },
        {
            id: 2,
            title: "Late",
            stringList: ["HJ", "CO", "BTN"],
            valueList: [3, 4, 5]
        },
        {
            id: 3,
            title: "Blinds",
            stringList: ["SB", "BB"],
            valueList: [6, 7]
        }
    ],
    stackDepth: [
        {
            id: 0,
            title: "Deep Stack",
            subTitle: "(> 60bb)",
            valueList: [60, 80, 100]
        },
        {
            id: 1,
            title: "Middle Stack",
            subTitle: "(20bb - 60bb)",
            valueList: [25, 30, 398750, 50]
        },
        {
            id: 2,
            title: "Shallow Stack",
            subTitle: "(< 20bb)",
            valueList: [10, 15, 20]
        }
    ],
    action: [
        {
            id: 0,
            title: "VPIP",
            valueList: "VPIP"
        },
        {
            id: 1,
            title: "RFI",
            valueList: "RFI"
        },
        {
            id: 2,
            title: "vs RFI",
            valueList: "vs RFI"
        },
        {
            id: 3,
            title: "PFR",
            valueList: "PFR"
        },
        {
            id: 4,
            title: "3-Bet",
            valueList: "3-Bet"
        },
        {
            id: 5,
            title: "vs 3-Bet",
            valueList: "vs 3-Bet"
        },
        // {
        //     id: 6,
        //     title: "Bb/100",
        //     valueList: "Bb/100"
        // },
        {
            id: 7,
            title: "4-Bet",
            valueList: "4-Bet"
        },
        {
            id: 8,
            title: "VS 4-Bet",
            valueList: "VS 4-Bet"
        },
        // {
        //     id: 9,
        //     title: "bb/100",
        //     valueList: "bb/100"
        // },
        {
            id: 10,
            title: "5-Bet +",
            valueList: "5-Bet +"
        },
        // {
        //     id: 11,
        //     title: "vs 5-Bet +",
        //     valueList: "vs 5-Bet +"
        // }
    ]
}


export const gradientColor: any = {

    // 0: '#111827',   // dark-gray

    0: '#1639fa',      // blue
    0.04: '#2150fa',
    0.08: '#3275fb',
    0.12: '#459afb',
    0.16: '#55befb',

    0.2: '#67e1fc',
    0.24: '#72faf5',
    0.28: '#72f8d2',
    0.32: '#72f7ad',
    0.36: '#71f787',

    0.4: '#70f55f',
    0.44: '#70f538',
    0.52: '#74f52f',
    0.56: '#86f631',
    0.6: '#9ff633',

    0.64: '#bbf835',
    0.68: '#d9f938',
    0.72: '#f6fa3b',
    0.76: '#fae238',
    0.8: '#f5be31',

    0.84: '#f19b2c',
    0.88: '#ee7627',
    0.92: '#ec5223',
    0.96: '#e13b22',
    1: '#ea1b22',      // red

}