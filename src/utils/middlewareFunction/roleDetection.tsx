export const roleDetection = (list: any[], category: string): boolean => {
    if (list.length === 0) return false
    else return list.includes(category)
};