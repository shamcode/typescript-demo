namespace Validation {
    export interface StringValidator {
        isAcceptable( s: string ): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidator {
        isAcceptable( s: string ) {
            return s.length === 5 && numberRegexp.test( s );
        }
    }
}

// Validators to use
let validators: { [ s: string ]: Validation.StringValidator; } = {};
validators[ "ZIP code" ] = new Validation.ZipCodeValidator();