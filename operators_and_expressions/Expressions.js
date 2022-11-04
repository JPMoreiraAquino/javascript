var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = "Gato" && "Cão";   // t && t returns Cão
var a6 = false && "Gato";   // f && t returns false
var a7 = "Gato" && false;   // t && f returns false

// The following code shows examples of the operator || (logical OR).

var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Gato" || "Cão";   // t || t returns Gato
var o6 = false || "Gato";   // f || t returns Gato
var o7 = "Gato" || false;   // t || f returns Gato

// The following code shows examples of the negation (logical negation).

var n1 = !true;   // !t returns false
var n2 = !false;  // !f returns true
var n3 = !"Gato"; // !t returns false

// Using NOT

n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !''                 // !f returns true
n4 = !'Cat'              // !t returns false

// The same conversion can be done through the Boolean function.

n1 = !!true                   // !!truthy returns true
n2 = !!{}                     // !!truthy returns true: any object is truthy...
n3 = !!(new Boolean(false))   // ...even Boolean objects with a false .valueOf()!
n4 = !!false                  // !!falsy returns false
n5 = !!""                     // !!falsy returns false
n6 = !!Boolean(false)         // !!falsy returns false
n7 = !!undefined              // !!falsy returns false

