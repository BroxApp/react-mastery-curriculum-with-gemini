// 1. Const vs Let
const API_URL = "https://api.example.com"; // Constant and immutable (Re-assignment Error)
let loginAttempts = 0; // Can be changed in the future

loginAttempts++; // Valid

// 2. Primitive Types (immutable by nature)
const studentName = "Brox"; // String
const age = 25; // Number
const isGraduated = false; // Boolean
const graduationYear = null; // Null (intentional empty value)
let score; // Undefined (not yet assigned)

// 3. Objects (Reference Types)
const studentProfile = {
    name: studentName,
    age: age,
    skills: ['Git', 'JavaScript']
};

// Engineering Tip: modifying the content of a const object is allowed
studentProfile.age = 26; 
studentProfile.skills.push('React');

console.log("Student Profile:", studentProfile);
console.log("Type of name:", typeof studentName);
console.log("Type of profile:", typeof studentProfile);

// 4. Re-assignment Check (Uncommenting this will cause an Error)
// API_URL = "new-url"; // TypeError: Assignment to constant variable.