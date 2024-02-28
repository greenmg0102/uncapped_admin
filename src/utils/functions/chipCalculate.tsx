import { chipAmountColor, chipAmountColorInBB } from '../reference/playCardArray'

export function getChipStatus(chipAmount: number): { [key: number]: number } {
    const sortedAmounts: number[] = Object.keys(chipAmountColor).map(Number).sort((a, b) => b - a);

    const chipStatus: { [key: number]: number } = {};

    for (const amount of sortedAmounts) {
        const count: number = Math.floor(chipAmount / amount);
        if (count > 0) {
            chipStatus[amount] = count;
            chipAmount -= amount * count;
        }
    }

    return chipStatus;
}


export function getBBStatus(chipAmount: number): { [key: number]: number } {
    const sortedAmounts: number[] = Object.keys(chipAmountColorInBB).map(Number).sort((a, b) => b - a);

    const chipStatus: { [key: number]: number } = {};

    for (const amount of sortedAmounts) {
        const count: number = Math.floor(chipAmount / amount);
        if (count > 0) {
            chipStatus[amount] = count;
            chipAmount -= amount * count;
        }
    }

    return chipStatus;
}