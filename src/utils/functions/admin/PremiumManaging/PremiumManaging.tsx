import axios from "axios";

export async function premiumRead(): Promise<any> {
    const result = await axios.get("premium/read").then((result: any) => { return result.data })
    return result
}

export async function premiumRegist(data: any): Promise<any> {
    const result = await axios.post("premium/regist", data).then((result: any) => { return result.data })
    return result
}

export async function premiumGet(id: any): Promise<any> {
    const result = await axios.get(`premium/get/${id}`).then((result: any) => { return result.data })
    return result
}


