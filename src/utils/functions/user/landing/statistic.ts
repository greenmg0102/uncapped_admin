import axios from "axios";

export async function getInfo(): Promise<any> {
    const result = await axios.get("activity-log/get-statistic-info").then((result: any) => { return result.data })
    return result
}