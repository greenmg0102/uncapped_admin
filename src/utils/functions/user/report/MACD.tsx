import axios from "axios";

export async function macd_pair(data: any): Promise<any> {
    const result = await axios.post('report-macd/card-pair', data).then((result: any) => { return result.data })
    return result
}


export async function macd_suited(data: any): Promise<any> {
    const result = await axios.post('report-macd/suited', data).then((result: any) => { return result.data })
    return result
}


export async function macd_offsuited(data: any): Promise<any> {
    const result = await axios.post('report-macd/off-suited', data).then((result: any) => { return result.data })
    return result
}


export async function macd_bb100(data: any): Promise<any> {
    const result = await axios.post('report-macd/bb100', data).then((result: any) => { return result.data })
    return result
}


export async function macd_allin_bb100(data: any): Promise<any> {
    const result = await axios.post('report-macd/allin-bb100', data).then((result: any) => { return result.data })
    return result
}


export async function macd_BB100(data: any): Promise<any> {
    const result = await axios.post('report-macd/BB', data).then((result: any) => { return result.data })
    return result
}


export async function accordingToDate(data: any): Promise<any> {
    const result = await axios.post('report-macd/according-to-Date', data).then((result: any) => { return result.data })
    return result
}


export async function handPair(data: any): Promise<any> {
    const result = await axios.post('report-macd/hands', data).then((result: any) => { return result.data })
    return result
}