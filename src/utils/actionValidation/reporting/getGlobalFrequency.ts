import { gradientColor } from '../../reference/reporting'
import { playCardArray } from '../../reference/playCardArray'


export const getGlobalFrequency = (gloabalOpertunity: any): any => {

    let gfrquency: any = {}

    gloabalOpertunity.forEach((actionCategory: any) => {

        actionCategory.heroPosition.forEach((position: any) => {

            position.stackDepth.formattedCardCounts.forEach((card: any) => {

                if (card.formattedCards in gfrquency) gfrquency[card.formattedCards] = gfrquency[card.formattedCards] + card.count
                else gfrquency[card.formattedCards] = card.count

            });

        });

    });

    // gloabalOpertunity
    // .find((actionFind: any) => actionFind.action.some((item: any) => item === valueStatus.action)).heroPosition
    // .forEach((position: any) => {
    //     position.stackDepth.formattedCardCounts.forEach((card: any) => {
    //         if (card.formattedCards in gfrquency) gfrquency[card.formattedCards] = gfrquency[card.formattedCards] + card.count
    //         else gfrquency[card.formattedCards] = card.count
    //     });
    // });

    return gfrquency
};


export const getSubtruck = (global: any, current: any): any => {
    if (global === undefined || current === undefined) return 0
    else return global - current
};


export const findNearestColor = (num: number): string | undefined => {
    const keys = Object.keys(gradientColor).map(Number).sort((a, b) => a - b);

    let nearestKey = keys.reduce((prev, curr) => Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);

    if (gradientColor[nearestKey] === undefined) return 'bg-[#f06200]'
    else return gradientColor[nearestKey];
};


export const dividing = (globalFre: any, userInfoResult: any, userTab: any): any => {

    let result: any = {}

    playCardArray.forEach((cardPair: any) => {

        let gValue = globalFre[cardPair]

        let userValue = userTab === "total" ?
            userInfoResult[cardPair] && userInfoResult[cardPair].frequency && Object.values(userInfoResult[cardPair].frequency).reduce((acc: any, val: any) => acc + val, 0)
            :
            userInfoResult[cardPair] && userInfoResult[cardPair].frequency && userInfoResult[cardPair] && userInfoResult[cardPair].frequency[userTab]

        let buffer = 0

        if (gValue !== undefined && userValue !== undefined) {
            buffer = Number((userValue / gValue).toFixed(2)) > 1 ? 1 : Number((userValue / gValue).toFixed(2))
            result[cardPair] = buffer
        } else result[cardPair] = 0
    });

    return result
}

export const findMaxMin = (dividedValueList: any, userInfoResult: any): any => {

    let max = 0
    let min = 0

    Object.keys(dividedValueList).forEach((key: any, index: any) => {
        if (dividedValueList[key] > max) max = dividedValueList[key]
        if (dividedValueList[key] < min) min = dividedValueList[key]
    })

    return {
        max: max,
        min: min < 0 ? 0 : min
    }

}