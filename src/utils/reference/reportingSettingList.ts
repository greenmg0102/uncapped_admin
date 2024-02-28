
export const heroPosition = ['UTG', 'UTG+1', 'LJ', 'HJ', 'CO', 'BTN', 'SB', 'BB']
export const villainPosition = ['UTG', 'UTG+1', 'LJ', 'HJ', 'CO', 'BTN', 'SB', 'BB']
export const stackDepth = ['10bb', '15bb', '20bb', '25bb', '30bb', '398750bb', '50bb', '60bb', '80bb', '100bb']
export const action = ['RFI', 'vs 3-bet', 'vs RFI', '4-bet', '3-bet', 'vs 4-bet', 'Multiway', 'vs Squeeze', 'Cold 4-bet', 'vs Limp', 'vs ISO']

export const preflopStatisticalBreakDownIndicator = [
    {
        abbrev: 'VPIP',
        definition: 'Voluntarily Put In Pot',
        firstRange: 20,
        lastRange: 28,
        Actual: 'yellow'
    },
    {
        abbrev: 'PFR',
        definition: 'Pre Flop Raise',
        firstRange: 15,
        lastRange: 19
    },
    {
        abbrev: '3bet',
        definition: 'Raise an open preflop',
        firstRange: 8,
        lastRange: 10,
        Actual: 'red'
    },
    {
        abbrev: 'FT3B',
        definition: 'Fold to 3bet preflop',
        firstRange: 46,
        lastRange: 51
    },
    {
        abbrev: 'RFI + Limp (SB)',
        definition: 'Raise first in + limps from the Small Blind',
        firstRange: 80,
        lastRange: 90,
        Actual: 'green'
    },
    {
        abbrev: 'RFI (BTN)',
        definition: 'Raise first in from the Button',
        firstRange: 45,
        lastRange: 55
    },
    {
        abbrev: 'RFI (CO)',
        definition: 'Raise first in from the Cutoff',
        firstRange: 30,
        lastRange: 39
    },
    {
        abbrev: 'RFI (MP)',
        definition: 'Raise first in from the Middle Position',
        firstRange: 21,
        lastRange: 25
    },
    {
        abbrev: 'RFI (EP)',
        definition: 'Raise first in from the Early Position',
        firstRange: 14,
        lastRange: 19,
        Actual: 'yellow'
    },
    {
        abbrev: 'Call PF 2b in EP',
        definition: '',
        firstRange: 5,
        lastRange: 7
    },
    {
        abbrev: 'Call PF 2b in MP',
        definition: '',
        firstRange: 6,
        lastRange: 8
    },
    {
        abbrev: 'Call PF 2b in CO',
        definition: '',
        firstRange: 8,
        lastRange: 10
    },
    {
        abbrev: 'Call PF 2b in BTN',
        definition: '',
        firstRange: 11,
        lastRange: 13
    }
]


export const winRateStatisticalBreakDownIndicator = [
    {
        abbrev: 'bb/100 (AIA) AVG',
        definition: 'Average across all positions',
        firstRange: 4,
        lastRange: 100,
        baseline: 0,
        Actual: 'green'
    },
    {
        abbrev: 'bb/100 (AIA) BB',
        definition: 'Win rate from the BB',
        firstRange: -35,
        lastRange: 100,
        baseline: -44,
        Actual: 'green'
    },
    {
        abbrev: 'bb/100 (AIA) SB',
        definition: 'Win rate from the SB',
        firstRange: -15,
        lastRange: 100,
        baseline: -21
    },
    {
        abbrev: 'bb/100 (AIA) EP',
        definition: 'Win rate from the EP',
        firstRange: 10,
        lastRange: 100,
        baseline: 7,
        Actual: 'red'
    },
    {
        abbrev: 'bb/100 (AIA) MP',
        definition: 'Win rate from the MP',
        firstRange: 15,
        lastRange: 100,
        baseline: 12,
        Actual: 'yellow'
    },
    {
        abbrev: 'bb/100 (AIA) CO',
        definition: 'Win rate from the CO',
        firstRange: 20,
        lastRange: 100,
        baseline: 18
    },
    {
        abbrev: 'bb/100 (AIA) BTN',
        definition: 'Win rate from the BTN',
        firstRange: 30,
        lastRange: 100,
        baseline: 28
    }
]

export const rangeCategory = [
    {
        title: "Strategy",
        isShow: false
    },
    {
        title: "EV",
        isShow: true
    },
    {
        title: "Equity",
        isShow: true
    },
    {
        title: "EQR",
        isShow: true
    },
    {
        title: "Range",
        isShow: true
    }
]