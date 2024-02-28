export const categoryExtract = (action: any) => {

    if (action.substring(0, 4) === "Seat") {

        let amount = "0"
        let player = ""
        const regexChip = /\(([\d,]+) in chips\)/;
        const regexPlayer = /: (.+?) \(/;
        const matchesChip = regexChip.exec(action);
        const matchesPlayer = regexPlayer.exec(action);

        if (matchesChip && matchesChip.length > 1) amount = matchesChip[1].replace(/,/g, "");
        if (matchesPlayer && matchesPlayer.length > 1) player = matchesPlayer[1].replace(/,/g, "");

        return {
            type: 'chip',
            amount: amount,
            player: player
        }
    } else if (action.includes("ante")) {

        let amount = "0"
        let player = ""
        const regex = /(\w+): posts the ante (\d+)/;
        const matches = regex.exec(action);
        if (matches && matches.length > 2) {
            player = matches[1];
            amount = matches[2];
        }
        return {
            type: 'ante',
            amount: amount,
            player: player
        }
        
    } else if (action.includes("posts small blind")) {

        let amount = "0"
        let player = ""
        const regex = /(\w+): posts small blind (\d+)/;
        const matches = regex.exec(action);
        if (matches && matches.length > 2) {
            player = matches[1];
            amount = matches[2];
        }

        return {
            type: 'smallBlind',
            amount: amount,
            player: player
        }
    } else if (action.includes("posts big blind")) {

        let amount = "0"
        let player = ""
        const regex = /(\w+): posts big blind (\d+)/;
        const matches = regex.exec(action);
        if (matches && matches.length > 2) {
            player = matches[1];
            amount = matches[2];
        }

        return {
            type: 'bigBlind',
            amount: amount,
            player: player
        }
    } else if (action.substring(0, 5) === "Dealt") {

        let player = ""
        const regex = /Dealt to (\w+)/;
        const matches = regex.exec(action);

        if (matches && matches.length > 1) player = matches[1];

        if (player === "Hero") {
            const regex = /Dealt to Hero \[([\w\s]+)\]/;
            const matches = regex.exec(action);
            if (matches && matches.length > 1) {
                const cards = matches[1].split(" ");
                return {
                    type: 'dealt',
                    player: player,
                    playCard: cards
                }
            }
        } else {
            return {
                type: 'dealt',
                player: player
            }
        }
    } else if (action.includes("*** HOLE CARDS ***")) {
        return {
            type: 'street',
            status: "HOLE"
        }
    } else if (action.includes(": folds")) {
        let player = ''

        const regexPlayer = /^(.*?): folds/;
        player = action.match(regexPlayer)[1];
        return {
            type: 'actionKind',
            status: "folds",
            player: player
        }
    } else if (action.includes(": calls")) {
        let player = ''
        let amount = ''

        const regexPlayer = /^(.*?): calls/;
        player = action.match(regexPlayer);

        const regexAmount = /calls\s+(\d{1,3}(?:,\d{3})*)(?!\d)/;
        amount = action.match(regexAmount);

        return {
            type: 'actionKind',
            status: "calls",
            player: player[1],
            amount: amount[1]
        }
    } else if (action.includes(": raises")) {

        let player = ''

        const regexPlayer = /^(.*?): raises/;
        player = action.match(regexPlayer)[1];

        const raisesRegex = /raises\s([\d,]+)/;
        const toRegex = /to\s([\d,]+)/;

        const raisesMatch = action.match(raisesRegex);
        const toMatch = action.match(toRegex);

        const raisesNumber = raisesMatch ? raisesMatch[1].replace(/,/g, "") : null;
        const toNumber = toMatch ? toMatch[1].replace(/,/g, "") : null;

        return {
            type: 'actionKind',
            status: "raises",
            player: player,
            raisesNumber: raisesNumber,
            toNumber: toNumber
        }
    } else if (action.includes(": shows")) {
        let player = ''
        let cards: any = ''

        const regexBeforeColon = /^([^:]+)/;
        player = action.match(regexBeforeColon)[1];

        const regex = /: shows \[([\w\s]+)\]/;
        const matches = regex.exec(action);
        if (matches && matches.length > 1) {
            cards = matches[1].split(" ");
        }
        return {
            type: 'showPlaycard',
            player: player,
            playCard: cards
        }
    } else if (action.includes("*** FLOP ***")) {
        return {
            type: 'street',
            status: "FLOP"
        }
    } else if (action.includes("*** TURN ***")) {
        return {
            type: 'street',
            status: "TURN"
        }
    } else if (action.includes("*** RIVER ***")) {
        return {
            type: 'street',
            status: "RIVER"
        }
    } else if (action.includes("*** SHOWDOWN ***")) {
        return {
            type: 'street',
            status: "SHOWDOWN"
        }
    } else if (action.includes("collected")) {
        let player = ''
        let amount = ''

        player = action.split(" ")[0];

        const regex = /(\d{1,3}(?:,\d{3})*)(?=\sfrom pot)/;
        amount = action.match(regex)[1].replace(/,/g, "");

        return {
            type: "SHOWDOWN",
            player: player,
            amount: amount,
        }
    } else {
        return undefined
    }
}