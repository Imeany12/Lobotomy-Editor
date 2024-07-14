


export function brainrot_counter(str: string, target: string) {
    let r = str.indexOf(target);
    let c = 0;
    while (r != -1) {
        c++;
        r = str.indexOf(target, r + 1);
    }
    return c;
}