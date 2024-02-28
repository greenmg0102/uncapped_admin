
export default function defineWidth(toolData: any) {
    let count = 0
    Object.keys(toolData).map((key: any) => {
        if (toolData[key] === "0.00") count++
    })
    return count === 0 ? '24.5%' : count === 1 ? '33%' : '49.7%'
    // return '25%'
};