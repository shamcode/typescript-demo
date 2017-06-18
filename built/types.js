var types;
(function (types) {
    // Boolean
    var isDone = false;
    // Number
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    // String
    var color = "blue";
    color = 'red';
    var fullName = "Bob Bobbington";
    var sentence = "Hello, my name is " + fullName + ".";
    // Array
    var listFoo = [1, 2, 3];
    var listBar = [1, 2, 3];
    // Tuple
    var x = ["hello", 10];
    // Enum
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 4] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
    // Any
    var notSure = 4;
    notSure = "maybe a string instead";
    notSure = false;
    // Void
    function warnUser() {
        alert("This is my warning message");
    }
    var unusable = undefined;
    // Null and Undefined
    var u = undefined;
    var n = null;
    // Never
    function error(message) {
        throw new Error(message);
    }
})(types || (types = {}));
