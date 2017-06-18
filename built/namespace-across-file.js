/// <reference path="namespaces.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
// Validators to use
var validatorsFoo = {};
validatorsFoo["ZIP code"] = new Validation.ZipCodeValidator();
validatorsFoo["Letters only"] = new Validation.LettersOnlyValidator();
