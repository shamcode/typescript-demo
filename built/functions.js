var Functions;
(function (Functions) {
    function add(x, y) {
        return x + y;
    }
    function buildName(firstName, lastName) {
        if (lastName) {
            return firstName + " " + lastName;
        }
        else {
            return firstName;
        }
    }
    function buildName2(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        return firstName + " " + lastName;
    }
    function buildName3(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
})(Functions || (Functions = {}));
