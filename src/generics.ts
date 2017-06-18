namespace Generircs {
    class GenericNumber<T> {
        zeroValue: T;
        add: ( x: T, y: T ) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function( x, y ) { return x + y; };


    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>( arg: T ): T {
        console.log( arg.length );  // Now we know it has a .length property, so no more error
        return arg;
    }

    function getProperty<T, K extends keyof T>( obj: T, key: K ) {
        return obj[ key ];
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };

    getProperty( x, "a" ); // okay
    getProperty( x, "m") ; // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

    class BeeKeeper {
        hasMask: boolean;
    }

    class ZooKeeper {
        nametag: string;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
    }

    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }

    const nametag = createInstance(Lion).keeper.nametag;  // typechecks!
    const hasMask = createInstance(Bee).keeper.hasMask;   // typechecks!
}