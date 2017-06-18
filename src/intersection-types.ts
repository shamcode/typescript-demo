namespace IntersectionTypes {
    interface IPerson {
        name: string;
    }

    interface ILoggable {
        log(): void;
    }

    function addLoggingForPerson( p: IPerson, logger: ILoggable ) : IPerson & ILoggable {
        let result = <IPerson & ILoggable>{};
        for ( let id in p ) {
            ( <any>result )[ id ] = ( <any>p )[ id ];
        }
        for ( let id in logger ) {
            if ( !result.hasOwnProperty( id ) ) {
                ( <any>result )[ id ] = ( <any>logger )[ id ];
            }
        }
        return result;
    }

    class Person implements IPerson {
        constructor( public name:string ) {}
    }

    class ConsoleLog implements ILoggable {
        log() {}
    }

    const p = addLoggingForPerson( new Person( 'John' ), new ConsoleLog() );
}
