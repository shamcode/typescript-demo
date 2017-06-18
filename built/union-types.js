var UnionTypes;
(function (UnionTypes) {
    var foo;
    foo = 'Sveak';
    foo = 42;
    function getSmallPet() {
        // ...
    }
    var pet = getSmallPet();
    pet.layEggs(); // okay
    pet.swim(); // errors
})(UnionTypes || (UnionTypes = {}));
