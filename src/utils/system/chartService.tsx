import { playCardArray, playCardInitialArray } from '../../utils/reference/playCardArray'

export function extractPairs() {
    return playCardArray.filter((item: string) => {
        if (item.length === 2) return item
    })
}

export function extractSuited() {
    let real: any[] = []
    playCardInitialArray.forEach((item: any) => {
        playCardArray.forEach((each: any) => {
            if (each[0] === "A" && each[1] === item && each.length === 3 && each[2] === "s") real.push(each.slice(0, 2))
        })
    })
    return real
}

export function extractPairsValue(handList: any, order: any) {
    return Object.keys(handList).filter((key: any) => {
        if (key.length === 2) return handList[key].played[order]
    }).reverse()
}