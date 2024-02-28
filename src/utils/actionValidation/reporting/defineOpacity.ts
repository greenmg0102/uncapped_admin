export const defineOpacity = (userCardFrequency: any): any => {

    let buffer = {
        fold: 0,
        call: 0,
        raise: 0,
        allin: 0,
        total: 0,
        color: {
            fold: "#3d7cb8",
            call: "#00cf00",
            raise: "#ff0000",
            allin: "#7d1f1f",
            total: "#323424"
        }
    };

    for (const key in userCardFrequency) {
        if (userCardFrequency.hasOwnProperty(key)) {
            const item = userCardFrequency[key].frequency;
            buffer.fold = Math.max(buffer.fold, item.fold);
            buffer.call = Math.max(buffer.call, item.call);
            buffer.raise = Math.max(buffer.raise, item.raise);
            buffer.allin = Math.max(buffer.allin, item.allin);
            buffer.total = Math.max(buffer.total, item.fold + item.call + item.raise + item.allin);
        }
    }

    return buffer;
};