namespace Functions {
    function add( x: number, y: number ): number {
        return x + y;
    }

    function buildName( firstName: string, lastName?: string ) {
        if ( lastName ) {
            return firstName + " " + lastName;
        } else {
            return firstName;
        }
    }

    function buildName2( firstName: string, lastName = "Smith" ) {
        return firstName + " " + lastName;
    }

    function buildName3( firstName: string, ...restOfName: string[] ) {
        return firstName + " " + restOfName.join( " " );
    }
}