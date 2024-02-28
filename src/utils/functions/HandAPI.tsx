import axios from "axios";
import type { AxiosResponse } from "axios";

export async function getHands(data: any): Promise<AxiosResponse> {
    return await axios.post("hand-detail/getHands", data)
}

export async function getHand(handId: string | undefined): Promise<AxiosResponse> {
    return await axios.get(`hand-detail/getHand/${handId}`)
}