import axios from "axios";

export async function scatterChart(data: any): Promise<any> {
    const result = await axios.post("report-stastic/scatter", data).then((result: any) => { return result.data })
    return result
}