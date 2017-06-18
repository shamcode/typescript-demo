namespace TypeAssertions {
    // Angle-bracket
    let someValueFoo: any = "this is a string";
    let strLengthFoo: number = ( <string>someValueFoo ).length;

    // as-syntax
    let someValueBar: any = "this is a string";
    let strLengthBar: number = ( someValueBar as string ).length;
}