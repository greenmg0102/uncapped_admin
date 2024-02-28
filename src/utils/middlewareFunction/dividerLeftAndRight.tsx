

export default function dividerLeftAndRight(list: any): any {
    // console.log("activeNumber", activeNumber);
    let real = nodeStatus(list)

    if (real.length === 7 || real.length === 8) {

    } else {
        return distinguishLowSB(real)
    }
}

export function nodeStatus(list: any) {

    let real: any[] = [];
    list.slice(0, list.length - 1).forEach((item: any, index: any) => {
        list[index].actions.forEach((element: any) => {
            if (element.amount === list[index + 1].sequence[list[index + 1].sequence.length - 1].amount) {
                real.push({
                    position: index,
                    amount: element.amount
                })
            }
        });
    });
    return real
}

export function distinguishLowSB(list: any) {

    let real = list
    let left = 0

    for (let i = real.length - 3; i >= 0; i--) {
        if (real[i].amount !== 0) {
            left = i
            break
        }
    }

    return {
        left: left,
        right: list.length === 0 ? list.length : list.length - 1
    }
}