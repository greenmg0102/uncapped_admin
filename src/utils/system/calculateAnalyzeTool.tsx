export const toolStaticDisplay = (hands: any, actions: any) => {

    const numberOfKeys = Object.keys(hands).length;

    return new Promise((resolve) => {

        let userResult = { allin: 0, raise: 0, call: 0, fold: 0 };

        let userResultAllin = 0;
        let userResultRaise = 0;
        let userResultCall = 0;
        let userResultFold = 0;

        const receivingIndexes = actions
            .map((action: any, index: any) => action.type === 'R' ? index : -1)
            .filter((index: any) => index !== -1);

        Object.keys(hands).forEach((key) => {

            let foldIndex = actions.findIndex((item: any, index: any) => item.type === "F");
            userResultFold += foldIndex === -1 ? 0 : hands[key].played[foldIndex] * 100

            let callIndex = actions.findIndex((item: any, index: any) => item.type === "C");
            userResultCall += callIndex === -1 ? 0 : hands[key].played[callIndex] * 100

            if (receivingIndexes.length === 1 && actions.length === 2) {

                let allinIndex = receivingIndexes[0];
                userResultAllin += hands[key].played[allinIndex] * 100

            } else if (receivingIndexes.length === 2) {

                let raiseIndex = receivingIndexes[0];
                userResultRaise += hands[key].played[raiseIndex] * 100

                let allinIndex = receivingIndexes[1];
                userResultAllin += hands[key].played[allinIndex] * 100
            }
        });

        userResult.fold = Number((userResultFold / numberOfKeys).toFixed(2))
        userResult.call = Number((userResultCall / numberOfKeys).toFixed(2))
        userResult.raise = Number((userResultRaise / numberOfKeys).toFixed(2))
        userResult.allin = Number((userResultAllin / numberOfKeys).toFixed(2))

        resolve({
            userResult: userResult,
        });
    })

};


export const restructure = (hands: any, actions: any) => {

    let indexFold = actions.findIndex((element: any) => element.type === "F")
    let indexCall = actions.findIndex((element: any) => element.type === "C")
    let indexListRaise = actions.reduce((acc: any, el: any, index: any) => {
        if (el.type === "R") {
            acc.push(index);
        }
        return acc;
    }, []);

    let result: any = {}
    let statistic: any = {}

    let allin = 0
    let raise = 0
    let call = 0
    let fold = 0

    Object.keys(hands).forEach((key: any) => {

        let played = [0, 0, 0, 0]
        let evs = [0, 0, 0, 0]

        played[0] = indexFold !== -1 ? hands[key].played[indexFold] : 0
        played[1] = indexCall !== -1 ? hands[key].played[indexCall] : 0
        played[2] = indexListRaise.length === 0 ? 0 : indexListRaise.length === 2 ? hands[key].played[indexListRaise[0]] : 0
        played[3] = indexListRaise.length === 0 ? 0 : indexListRaise.length === 2 ? hands[key].played[indexListRaise[1]] : hands[key].played[indexListRaise[0]]


        evs[0] = indexFold !== -1 ? hands[key].evs[indexFold] : 0
        evs[1] = indexCall !== -1 ? hands[key].evs[indexCall] : 0
        evs[2] = indexListRaise.length === 2 ? 0 : indexListRaise.length === 2 ? hands[key].evs[indexListRaise[0]] : 0
        evs[3] = indexListRaise.length === 0 ? 0 : indexListRaise.length === 2 ? hands[key].evs[indexListRaise[1]] : hands[key].evs[indexListRaise[0]]

        allin += played[3]
        raise += played[2]
        call += played[1]
        fold += played[0]

        result[key] = {
            weight: hands[key].weight,
            played: played,
            evs: evs
        }

        statistic = {
            allin: (Number(allin / Object.keys(hands).length) * 100).toFixed(2),
            raise: (Number(raise / Object.keys(hands).length) * 100).toFixed(2),
            call: (Number(call / Object.keys(hands).length) * 100).toFixed(2),
            fold: (Number(fold / Object.keys(hands).length) * 100).toFixed(2)
        }

    })

    return {
        handResult: result,
        statistic: statistic
    }
};
