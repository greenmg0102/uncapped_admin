import axios from "axios";

type GlobalOpportunityAction = { type: string, payload: any };

export async function report(data: any): Promise<any> {
    const result = await axios.post('report/collections', data).then((result: any) => { return result.data })
    return result
}

export async function userHandInfo(data: any): Promise<any> {
    const result = await axios.post('report/user-hand-info', data).then((result: any) => { return result.data })
    return result
}

export async function reportEachPair(body: any): Promise<any> {
    const result = await axios.post('report/report-each-pair', body).then((result: any) => { return result.data })
    return result
}

export async function conditionPair(body: any): Promise<any> {
    const result = await axios.post('report/condition-pair', body).then((result: any) => { return result.data })
    return result
}

export async function reportIntegration(data: any): Promise<any> {
    const result = await axios.post('report/report-integration', data)
        .then((result: any) => { return result.data })
        .catch((error: any) => console.log('@@@@@@@@@@@@@@'))
    return result
}

export async function handDataGet(data: any): Promise<any> {
    const result = await axios.get(`report/get-node-hand/${data}`).then((result: any) => { return result.data })
    return result
}

export async function mainDataHandInfo(data: any): Promise<any> {
    const result = await axios.post(`report/main-data-hand-info`, data).then((result: any) => { return result.data })
    return result
}

export async function detailedTableGet(data: any): Promise<any> {
    const result = await axios.post(`report/detailed-table`, data).then((result: any) => { return result.data })
    return result
}

export async function getGloabalOpertunity(data: any): Promise<GlobalOpportunityAction> {

    const gloabalOpertunity = await axios.post(`report/opportunity-global`, data).then((result: any) => { return result.data })

    return gloabalOpertunity;
}

