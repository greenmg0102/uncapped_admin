import axios from "axios";

export async function profileGet(_id: any): Promise<any> {
    const result = await axios.get(`profile/${_id}`).then((result: any) => { return result.data })
    return result
}

export async function summaryProGet(_id: any): Promise<any> {
    const result = await axios.get(`profiles/user-info/${_id}`).then((result: any) => { return result.data })
    return result
}

export async function activityLogRead(data: any): Promise<any> {
    const result = await axios.post('activity-log/read', data).then((result: any) => { return result.data })
    return result
}