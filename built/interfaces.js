var Interfaces;
(function (Interfaces) {
    var mySearch;
    mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
})(Interfaces || (Interfaces = {}));
