var UserDefinedTypeGuards;
(function (UserDefinedTypeGuards) {
    function getSmallPet() {
        // ...
    }
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    function isFishBool(pet) {
        return pet.swim !== undefined;
    }
    var pet = getSmallPet();
    if (isFish(pet)) {
        pet.swim();
    }
    var pet2 = getSmallPet();
    if (isFishBool(pet2)) {
        pet2.swim(); // error
    }
})(UserDefinedTypeGuards || (UserDefinedTypeGuards = {}));
