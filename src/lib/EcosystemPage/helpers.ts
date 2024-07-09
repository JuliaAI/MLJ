export function cleanString(str: string) {
    if (str.endsWith('.jl')) {
        str = str.slice(0, -3);
    }

    if (str.startsWith('MLJ')) {
        str = str.slice(3);
    }

    return str;
}