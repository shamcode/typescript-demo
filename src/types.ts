namespace types {

    // Boolean
    let isDone: boolean = false;

    // Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    // String
    let color: string = "blue";
    color = 'red';
    let fullName: string = `Bob Bobbington`;
    let sentence: string = `Hello, my name is ${ fullName }.`;

    // Array
    let listFoo: number[] = [ 1, 2, 3 ];
    let listBar: Array<number> = [ 1, 2, 3 ];

    // Tuple
    let x: [string, number] = [ "hello", 10 ];

    // Enum
    enum Color { Red = 1, Green = 2, Blue = 4 }
    let c: Color = Color.Green;

    // Any
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false;

    // Void
    function warnUser(): void {
        alert("This is my warning message");
    }
    let unusable: void = undefined;

    // Null and Undefined
    let u: undefined = undefined;
    let n: null = null;

    // Never
    function error(message: string): never {
        throw new Error(message);
    }
}
