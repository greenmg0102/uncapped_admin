export interface PokerSite {
    name: string;
    regex: RegExp;
}

export const RoomTypes = {
    poker888: '888Poker',
    chico: 'BetOnlinePoker',
    ggPoker: 'GGPoker',
    ignitionPoker: 'BetOnlinePoker',
    acr: 'ACR',
    partyPoker: 'PartyPokerPoker',
    pokerStars: 'PokerStars',
    iPoker: 'IPoker',
    Ignition: 'Ignition',
    winamaxPoker: 'Winamax',
    wpn: 'WPNPoker',
    noType: 'Not Recognized'
}

const pokerSites: PokerSite[] = [
    { name: RoomTypes.poker888, regex: /^(\*{5} 888poker)(?=.+)/ },
    { name: RoomTypes.chico, regex: /BetOnline Hand #(\d+)/ },
    {
        name: RoomTypes.ggPoker,
        regex: /Poker Hand #TM\d+: Tournament #\d+/,
    },
    { name: RoomTypes.ignitionPoker, regex: /Ignition Hand #\d+:/ },
    {
        name: RoomTypes.wpn,
        regex:
            /^Game Hand #[0-9]+ - Tournament #[0-9]+ - Holdem\(No Limit\) - Level [0-9]+ \([\d.]+\/[\d.]+\)- [\d/]+ [\d:]+ [A-Za-z]+/,
    },
    {
        name: RoomTypes.partyPoker,
        regex: /^\*\*\*\*\* Hand History For Game [A-Za-z0-9]+ \*\*\*\*\*/,
    },
    { name: RoomTypes.pokerStars, regex: /PokerStars Hand #\d+:/ },
    {
        name: RoomTypes.iPoker,
        regex:
            /^GAME #[0-9]+ Version:[\d.]+ Uncalled:[YN] Texas Hold'em NL  Tournament/,
    },
    {
        name: RoomTypes.winamaxPoker,
        regex: /^Winamax Poker - Tournament/,
    },
];


export const identityPokerNet = (section: string): string => {
    const headData = section.trim().split('\n').slice(0, 2);
    for (const roomRegex of pokerSites) {
        if (
            roomRegex.regex.test(headData[0]) ||
            roomRegex.regex.test(headData[1])
        ) {
            return roomRegex.name;
        }
    }
    return RoomTypes.noType;
}