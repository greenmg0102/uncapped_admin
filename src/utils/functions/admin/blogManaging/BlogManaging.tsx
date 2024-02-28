import axios from "axios";

export async function blogRead(data: any): Promise<any> {
    const result = await axios.post("admin/blog/read", data).then((result: any) => { return result.data })
    return result
}

export async function blogRegist(data: any): Promise<any> {
    const result = await axios.post("admin/blog/regist", data).then((result: any) => { return result.data })
    return result
}

export async function blogDelete(id: any): Promise<any> {
    const result = await axios.post(`admin/blog/delete/${id}`).then((result: any) => { return result.data })
    return result
}

export async function blogDetailRead(id: any): Promise<any> {
    const result = await axios.get(`admin/blog/more-detail/${id}`).then((result: any) => { return result.data })
    return result
}


