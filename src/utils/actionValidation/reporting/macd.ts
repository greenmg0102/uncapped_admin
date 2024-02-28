export const macdSortCard = (globalOpportunity: { _id: { formattedCards: string }, count: number }[]): any => {
    const sameRankGroup: { [key: string]: number } = {};
    const equivalentHandsGroupO: { [key: string]: number } = {};
    const equivalentHandsGroupS: { [key: string]: number } = {};

    globalOpportunity.forEach((item) => {
        let formattedCards = item._id.formattedCards;
        const lastChar = formattedCards.slice(-1); // Get the last character of the string

        if (lastChar === 'o' || lastChar === 's') {
            // Handle the combinations like "2Ao" and "A2o" as equivalent hands
            if (formattedCards.length === 3 && (formattedCards[0] !== formattedCards[1])) {
                formattedCards = formattedCards[1] + formattedCards[0] + formattedCards[2];
            }

            if (lastChar === 'o') {
                if (!equivalentHandsGroupO[formattedCards as keyof typeof equivalentHandsGroupO]) {
                    equivalentHandsGroupO[formattedCards as keyof typeof equivalentHandsGroupO] = 0;
                }
                equivalentHandsGroupO[formattedCards as keyof typeof equivalentHandsGroupO] += item.count;
            } else if (lastChar === 's') {
                if (!equivalentHandsGroupS[formattedCards as keyof typeof equivalentHandsGroupS]) {
                    equivalentHandsGroupS[formattedCards as keyof typeof equivalentHandsGroupS] = 0;
                }
                equivalentHandsGroupS[formattedCards as keyof typeof equivalentHandsGroupS] += item.count;
            }
        } else {
            if (!sameRankGroup[formattedCards]) {
                sameRankGroup[formattedCards] = 0;
            }
            sameRankGroup[formattedCards] += item.count;
        }
    });

    // Combine the values for "2Ao" and "A2o" keys into "A2o" key
    if (equivalentHandsGroupO['2Ao'] && equivalentHandsGroupO['A2o']) {
        equivalentHandsGroupO['A2o'] = (equivalentHandsGroupO['A2o'] || 0) + (equivalentHandsGroupO['2Ao'] || 0);
        delete equivalentHandsGroupO['2Ao'];
    }

    // Sort the equivalent hands groups based on the card ranking
    const sortedEquivalentHandsGroupO: { [key: string]: number } = {};
    Object.keys(equivalentHandsGroupO)
        .sort((a, b) => getCardRank(b) - getCardRank(a))
        .forEach(key => {
            sortedEquivalentHandsGroupO[key[1] + key[0] + key[2]] = equivalentHandsGroupO[key as keyof typeof equivalentHandsGroupO];
        });

    const sortedEquivalentHandsGroupS: { [key: string]: number } = {};
    Object.keys(equivalentHandsGroupS)
        .sort((a, b) => getCardRank(b) - getCardRank(a))
        .forEach(key => {
            sortedEquivalentHandsGroupS[key[1] + key[0] + key[2]] = equivalentHandsGroupS[key as keyof typeof equivalentHandsGroupS];
        });

    return {
        sameRankGroup,
        equivalentHandsGroupO: sortedEquivalentHandsGroupO,
        equivalentHandsGroupS: sortedEquivalentHandsGroupS
    };
};

// Helper function to get the card rank
const getCardRank = (card: string): number => {
    const cardRankOrder: { [key: string]: number } = {
        'A': 14,
        'K': 13,
        'Q': 12,
        'J': 11,
        'T': 10,
        '9': 9,
        '8': 8,
        '7': 7,
        '6': 6,
        '5': 5,
        '4': 4,
        '3': 3,
        '2': 2
    };
    return cardRankOrder[card[0]];
};
