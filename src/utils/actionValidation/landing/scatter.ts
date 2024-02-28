
import { hero8Site } from '../../../utils/reference/playCardColor'

export function scatterGet(main: any, user: any, action: any, type: any): any {

    let bufferList: any = []

    Object.keys(user).forEach((key: any) => {

        if (main.filter((item: any) => item.position === user[key].position && item.stack === user[key].stack).length > 0) {

            let mainDataCorresponding = main.find((item: any) => item.position === user[key].position && item.stack === user[key].stack).handResult
            let userFrenquency = userDataAnalysis(user[key].handResult, type)
            let mainFrenquency = mainDataAnalysis(mainDataCorresponding, type)

            bufferList.push({
                x: user[key].stack === 398750 ? 40 : user[key].stack,
                y: Number(Object.keys(hero8Site).filter((each: any) => hero8Site[each] === user[key].position)[0]),
                z: Math.abs(mainFrenquency - userFrenquency) * 100
            })
        }
    })

    return bufferList
}

export function userDataAnalysis(hand: any, type: any): any {


    let lenght = Object.keys(hand).length
    let total = 0

    Object.keys(hand).forEach((item: any) => {

        const sum: number = Object.values(hand[item].frequency).reduce((acc: number, curr: any) => acc + curr, 0);
        total += hand[item].frequency[type] / sum;
    });

    return Number.isNaN(Number(total / lenght)) ? 0 : Number(total / lenght)
}

export function mainDataAnalysis(hand: any, type: any): any {

    let lenght = Object.keys(hand).length
    let total = 0

    Object.keys(hand).forEach((item: any) => {

        const sum: number = hand[item].played[2]
        total += sum;
    });

    return Number.isNaN(Number(total / lenght)) ? 0 : Number(total / lenght)
}