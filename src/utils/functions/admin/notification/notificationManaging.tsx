import axios from "axios";

export async function notificationCreate(data: any): Promise<any> {
    const result = await axios.post("notification/create", data).then((result: any) => { return result.data })
    return result
}

export async function notificationRead(data: any): Promise<any> {
    const result = await axios.post("notification/read", data).then((result: any) => { return result.data })
    return result
}

export async function notificationDelete(id: any): Promise<any> {
    const result = await axios.post(`notification/delete/${id}`).then((result: any) => { return result.data })
    return result
}