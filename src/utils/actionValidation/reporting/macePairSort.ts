export const macePairSort = (reportingResult: any, userInfoResult: any, action: any, range: any): any => {

    let reportObject: any = {}
    let userObject: any = {}
    let differenceObject: any = {}
    let pairX: any = []

    let reportObjectSuited: any = {}
    let userObjectSuited: any = {}
    let differenceObjectSuited: any = {}
    let suitedX: any = []

    let reportObjectOffSuited: any = {}
    let userObjectOffSuited: any = {}
    let differenceObjectOffSuited: any = {}
    let offSuitedX: any = []


    Object.keys(reportingResult).forEach((key: any) => {

        if (key.length === 2) {
            pairX.push(key)

            let reportingValue = distinguishAction(reportingResult[key].played, action) * 100
            let userTotalValue: any = userInfoResult[key] === undefined ? 0 : Object.values(userInfoResult[key].frequency).reduce((total: any, value: any) => total + value, 0)
            let userValue = userInfoResult[key] === undefined ? 0 : userInfoResult[key].frequency[action]

            let difference = userTotalValue === 0 ? 0 : reportingValue - (userValue / userTotalValue) * 100

            reportObject[key] = reportingValue
            userObject[key] = (userValue / userTotalValue) * 100
            differenceObject[key] = difference

        }

        if (key.length === 3 && key[key.length - 1] === "s") {
            if (key[0] === range) {
                suitedX.push(key)

                let reportingValue = distinguishAction(reportingResult[key].played, action) * 100
                let userTotalValue: any = userInfoResult[key] === undefined ? 0 : Object.values(userInfoResult[key].frequency).reduce((total: any, value: any) => total + value, 0)
                let userValue = userInfoResult[key] === undefined ? 0 : userInfoResult[key].frequency[action]

                let difference = userTotalValue === 0 ? 0 : reportingValue - (userValue / userTotalValue) * 100

                reportObjectSuited[key] = reportingValue
                userObjectSuited[key] = (userValue / userTotalValue) * 100
                differenceObjectSuited[key] = difference
            }
        }

        if (key.length === 3 && key[key.length - 1] === "o") {

            if (key[0] === range) {
                offSuitedX.push(key)

                let reportingValue = distinguishAction(reportingResult[key].played, action) * 100
                let userTotalValue: any = userInfoResult[key] === undefined ? 0 : Object.values(userInfoResult[key].frequency).reduce((total: any, value: any) => total + value, 0)
                let userValue = userInfoResult[key] === undefined ? 0 : userInfoResult[key].frequency[action]

                let difference = userTotalValue === 0 ? 0 : reportingValue - (userValue / userTotalValue) * 100

                reportObjectOffSuited[key] = reportingValue
                userObjectOffSuited[key] = (userValue / userTotalValue) * 100
                differenceObjectOffSuited[key] = difference
            }
        }
    })

    let reportResult = sorting(reportObject)
    let userResult = sorting(userObject)
    let differeceResult = sorting(differenceObject)

    let reportResultSuited = sorting(reportObjectSuited)
    let userResultSuited = sorting(userObjectSuited)
    let differeceResultSuited = sorting(differenceObjectSuited)

    let reportResultOffSuited = sorting(reportObjectOffSuited)
    let userResultOffSuited = sorting(userObjectOffSuited)
    let differeceResultOffSuited = sorting(differenceObjectOffSuited)

    return {
        pair: {
            reportResult: reportResult,
            userResult: userResult,
            differeceResult: differeceResult,
            pairX: pairX.reverse()
        },
        suited: {
            reportResult: reportResultSuited,
            userResult: userResultSuited,
            differeceResult: differeceResultSuited,
            suitedX: suitedX.reverse()
        },
        Offsuit: {
            reportResult: reportResultOffSuited,
            userResult: userResultOffSuited,
            differeceResult: differeceResultOffSuited,
            offSuitedX: offSuitedX.reverse()
        },
    }
};


export const distinguishAction = (array: any, type: any): any => {

    if (type === 'fold') return array[0]
    if (type === 'call') return array.length === 1 || array.length === 3 ? 0 : array[1]
    if (type === 'raise') return array.length === 1 || array.length === 3 ? array[1] : array[2]
    if (type === 'allin') return array.length === 1 || array.length === 3 ? array[2] : array[3]
}


export const sorting = (obj: any): any => {

    let customOrder: { [key: string]: number } = { 2: 0, 3: 1, 4: 2, 5: 3, 6: 4, 7: 5, 8: 6, 9: 7, T: 8, J: 9, Q: 10, K: 11, A: 12 };
    let sortedKeys: string[] = Object.keys(obj).sort((a, b) => customOrder[a] - customOrder[b]);
    let sortedValues: number[] = sortedKeys.map(key => Number(obj[key].toFixed(2)));

    return sortedValues.reverse()
}