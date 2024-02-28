import axios from "axios";

export async function blogRead(data: any): Promise<any> {
    const result = await axios.post("user/blog/read", data).then((result: any) => { return result.data })
    return result
}

export async function blogDetailRead(id: any): Promise<any> {
    const result = await axios.get(`user/blog/more-detail/${id}`).then((result: any) => { return result.data })
    return result
}


