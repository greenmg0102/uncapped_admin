import axios from "axios";

export async function postGet(data: any): Promise<any> {
    const result = await axios.post('support/post-get', data).then((result: any) => { return result.data })
    return result
}

export async function answerSend(data: any): Promise<any> {
    const result = await axios.post('support/anwser-send', data).then((result: any) => { return result.data })
    return result
}
