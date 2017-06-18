namespace UserDefinedTypeGuards {
    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    function getSmallPet(): Fish | Bird {
        // ...
    }

    function isFish( pet: Fish | Bird ): pet is Fish {
        return ( <Fish>pet ).swim !== undefined;
    }

    function isFishBool( pet: Fish | Bird ): Boolean {
        return ( <Fish>pet ).swim !== undefined;
    }


    let pet = getSmallPet();
    if ( isFish( pet ) ) {
        pet.swim();
    }

    let pet2 = getSmallPet();
    if ( isFishBool( pet2 ) ) {
        pet2.swim(); // error
    }
}