export function isNumber(input: any, shouldThrow = false): boolean {
    if (input instanceof Number) {
        return true;
    }

    if (input) {
        const castedInput = input as Number;
        if (castedInput instanceof Number) {
            return true;
        }
    }

    if (shouldThrow) {
        throw "Input is expected to be a number";
    }

    return false;
}