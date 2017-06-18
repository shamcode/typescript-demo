namespace UnionTypes {
    let foo: string | number;
    foo = 'Sveak';
    foo = 42;

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

    let pet = getSmallPet();
    pet.layEggs(); // okay
    pet.swim();    // errors
}