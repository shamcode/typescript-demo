export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator {
    isAcceptable( s: string ) {
        return 5 === s.length && numberRegexp.test( s );
    }
}

class ZipCodeValidatorFoo extends ZipCodeValidator {

}

export { ZipCodeValidatorFoo };
export { ZipCodeValidator as mainValidator };

export default "123";