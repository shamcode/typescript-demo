var RemoveNullAndUndefined;
(function (RemoveNullAndUndefined) {
    function broken(name) {
        return name.charAt(0);
    }
    function fixed(name) {
        function postfix(epithet) {
            return name.charAt(0) + '.  the ' + epithet; // ok
        }
        name = name || "Bob";
        return postfix("great");
    }
})(RemoveNullAndUndefined || (RemoveNullAndUndefined = {}));
