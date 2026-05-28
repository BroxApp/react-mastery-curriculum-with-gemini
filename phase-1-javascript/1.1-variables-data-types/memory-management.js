// --- 1. Primitive Types (Stack) ---
// In this case, the actual value is copied
let scoreA = 100;
let scoreB = scoreA; // Copy of value 100

scoreB = 200; 

console.log("Primitive Check:");
console.log("scoreA:", scoreA); // 100 (remains unchanged)
console.log("scoreB:", scoreB); // 200

// --- 2. Reference Types (Heap) ---
// In this case, the memory "address" is copied, not the content
const userA = {
    name: "Brox",
    role: "Developer"
};

const userB = userA; // Copy of memory address! Both point to the same object

userB.role = "Lead Engineer"; // Changing the second one also affects the first one

console.log("\nReference Check:");
console.log("userA role:", userA.role); // "Lead Engineer"
console.log("userB role:", userB.role); // "Lead Engineer"

// --- 3. The React Lesson: Immutability ---
// In React, objects shouldn't be mutated directly. Create a new copy instead:
const userC = { ...userA, role: "Senior Developer" }; // Spread Operator for a shallow copy

console.log("\nImmutability Check (The Right Way):");
console.log("userA role:", userA.role); // "Lead Engineer" (remains unchanged)
console.log("userC role:", userC.role); // "Senior Developer"

// Engineering Tip: 
// Primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Reference: Objects, Arrays, Functions
``