var AbstractClasses;
(function (AbstractClasses) {
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log("roaming the earth...");
        };
        return Animal;
    }());
})(AbstractClasses || (AbstractClasses = {}));
