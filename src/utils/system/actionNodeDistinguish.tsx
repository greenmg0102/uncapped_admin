

export function actionNodeDistinguish(handData: any, userTab: any): any {

    if (handData === undefined) return []
    else {
        if (userTab === 4) return handData.foldNode
        if (userTab === 3) return handData.callNode
        if (userTab === 2) return handData.raiseNode
        if (userTab === 1) return handData.allinNode
        if (userTab === 0) return [...handData.foldNode, ...handData.callNode, ...handData.raiseNode, ...handData.allinNode]
    }

}