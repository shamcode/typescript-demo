var IntersectionTypes;
(function (IntersectionTypes) {
    function addLoggingForPerson(p, logger) {
        var result = {};
        for (var id in p) {
            result[id] = p[id];
        }
        for (var id in logger) {
            if (!result.hasOwnProperty(id)) {
                result[id] = logger[id];
            }
        }
        return result;
    }
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLog = (function () {
        function ConsoleLog() {
        }
        ConsoleLog.prototype.log = function () { };
        return ConsoleLog;
    }());
    var p = addLoggingForPerson(new Person('John'), new ConsoleLog());
})(IntersectionTypes || (IntersectionTypes = {}));
