const score: Array<number> = [];
const names: Array<string> = [];

function methodOne(val: boolean | number): boolean | number {
    if (typeof val === 'boolean') {
        return true;
    } else {
        return 0;
    }
}
function methodTwo(val: any): any {
    return val
}



function methodofGeneric<Type>(val: Type): Type {
    return val
}


methodofGeneric("H@Ai.com");
methodofGeneric(91);


// Short form of generics
function genericWithLetter<T>(val: T): T {
    return val
}


export { }

