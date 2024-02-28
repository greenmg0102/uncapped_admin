import axios from "axios";
import type { AxiosResponse } from "axios";
import { GetPreflopInterface } from '../../../../interface/user/analysis/analysis.dto'

export async function getPreflopModel(data: GetPreflopInterface): Promise<AxiosResponse> {
    const result = await axios.post("getPreflop-analyze/get-node", data).then((result: any) => { return result.data })
    return result
}

export async function getHandStatus(handId: string | undefined): Promise<any> {
    const result = await axios.get(`getPreflop-analyze/get-hand-status/${handId}`).then((result: any) => { return result.data })
    return result
}

export async function registFlag(data: any): Promise<any> {
    const result = await axios.post(`getPreflop-analyze-flag/regist-flag`, data).then((result: any) => { return result.data })
    return result
}

export async function getFlag(data: any): Promise<any> {
    const result = await axios.post(`getPreflop-analyze-flag/get-flag`, data).then((result: any) => { return result.data })
    return result
}