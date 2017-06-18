/// <reference path="namespaces.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable( s: string ) {
            return lettersRegexp.test( s );
        }
    }
}

// Validators to use
let validatorsFoo: { [s: string]: Validation.StringValidator; } = {};
validatorsFoo[ "ZIP code" ] = new Validation.ZipCodeValidator();
validatorsFoo[ "Letters only" ] = new Validation.LettersOnlyValidator();