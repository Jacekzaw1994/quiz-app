//HTML escaping function

const html = (raw, ...cooked) => {
    let result = '';
    cooked.forEach((cook, i) => {
        let rw = raw[i];
        if (Array.isArray(cook)) {
            cook = cook.join('');
        }
        result += rw;
        result += cook;
    });
    result += raw[raw.length - 1];
    return result;
};

export { html };