export declare class GetPreflopInterface {
    nodeNumber: number;
    chipAmount: number;
    maxUser: string;
}
export declare class GetHandStatus {
    handId: string | undefined | number
}

export declare class MiddlewareCurrentOption {
    gameType: string;
    stackSize: number;
    players: string;
    Limps: boolean;
    Cold: boolean;
}

export declare class MiddlewareReportingOption {
    heroPosiotionList: never | [number | undefined];
    villianPosiotionList: never | [number | undefined];
    stackDepthList: never | [number | undefined];
    actionList: never | [string | undefined];
}