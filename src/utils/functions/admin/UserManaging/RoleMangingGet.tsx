import axios from "axios";
import type { AxiosResponse } from "axios";

export async function roleRegist(data: any): Promise<AxiosResponse> {
    const result = await axios.post("http://localhost:8000/api/v1/role/regist", data).then((result: any) => { return result.data })
    return result
}


export async function roleGet(): Promise<AxiosResponse> {
    const result = await axios.get("http://localhost:8000/api/v1/role/role-get").then((result: any) => { return result.data })
    return result
}

export async function roleUpdate(data: any): Promise<any> {
    const result = await axios.post("http://localhost:8000/api/v1/role/role-update", data).then((result: any) => { return result.data })
    return result
}

export async function roleDeleting(_id: string): Promise<any> {
    const result = await axios.get(`http://localhost:8000/api/v1/role/role-delete/${_id}`).then((result: any) => { return result.data })
    return result
}
