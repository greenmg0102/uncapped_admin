export const maceDate = (dateList: any, y: any, x: any): any => {

    let count: any = []
    let xAxios: any = []

    dateList.forEach((item: any) => {
        count.push(item[y])
        xAxios.push(item[x])
    })

    return {
        count: count,
        xAxios: xAxios
    }
};

