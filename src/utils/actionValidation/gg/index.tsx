
import { categoryExtract } from './category'

export const actionExtract = (action: any): any => {

    if (action !== undefined) {
        let category = categoryExtract(action)
        if (category !== undefined) {
            return {
                category: category,
                action: action
            }
        }
    } else {
        return
    }
}

export const anteExtract = (actionList: any): any => {

    let real: any[] = [];
    actionList.forEach((element: any) => {
        if (element.includes("ante")) {

            let amount = "0"
            let player = ""
            const regex = /(\w+): posts the ante (\d+)/;
            const matches = regex.exec(element);
            if (matches && matches.length > 2) {
                player = matches[1];
                amount = matches[2];
            }
            real.push({
                type: 'ante',
                amount: amount,
                player: player
            })

        }
    });

    return {
        type: 'ante',
        real: real
    }
}