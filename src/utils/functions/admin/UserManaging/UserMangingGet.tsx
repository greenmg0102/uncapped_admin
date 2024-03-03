import axios from "axios";
import type { AxiosResponse } from "axios";

export async function userMangingGet(data: any): Promise<AxiosResponse> {
    const result = await axios.post("https://api.uncappedtheory.com/api/v1/profile/user-manging-get", data).then((result: any) => { return result.data })
    return result
}

export async function userRoleChange(data: any): Promise<AxiosResponse> {
    const result = await axios.post("https://api.uncappedtheory.com/api/v1/profile/user-role-change", data).then((result: any) => { return result.data })
    return result
}