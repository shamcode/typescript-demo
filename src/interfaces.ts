namespace Interfaces {
    interface SquareConfig {
        color?: string;
        width?: number;
        readonly x: number;
        [ propName: string ]: any;
    }

    interface SearchFunc {
        ( source: string, subString: string ): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function( source: string, subString: string ) {
        let result = source.search( subString );
        return result > -1;
    }
}



