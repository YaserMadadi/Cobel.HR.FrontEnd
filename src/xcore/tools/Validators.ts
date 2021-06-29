

export class Validators {
    constructor() {

    }

    static ValidateString(stringValue?: string): boolean {
        return stringValue !== null && stringValue.length > 0;
    }

    static ValidateBoolean(booleanValue?: boolean): boolean {
        return booleanValue !== null;
    }

    static ValidateNumber(numberValue: number): boolean {
        return numberValue > 0;
    }

    static RangeValidate(numberVlue: number, min: number, max: number): boolean {
        return numberVlue >= min && numberVlue <= max;
    }

}