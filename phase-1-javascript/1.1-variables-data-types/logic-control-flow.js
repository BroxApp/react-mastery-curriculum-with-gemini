/**
 * Phase 1.1: Logic & Control Flow
 * Goal: Understanding Truthy/Falsy and Logical Short-circuiting for React.
 */

// 1. Truthy vs Falsy Practice
const checkValue = (val) => {
    if (val) {
        console.log(`Value [${val}] is: TRUTHY`);
    } else {
        console.log(`Value [${val}] is: FALSY`);
    }
};

checkValue(0);         // Expected: FALSY
checkValue("Hello");   // Expected: TRUTHY
checkValue("");        // Expected: FALSY
checkValue([]);        // Expected: TRUTHY (Empty arrays are objects, thus Truthy!)

// 2. Logical Operators in Action (React Patterns)

// Short-circuiting AND (&&) - Often used for showing/hiding components
const isLoggedIn = true;
const userRole = "admin";
const dashboard = isLoggedIn && "Welcome to Dashboard"; 
console.log("Dashboard Status:", dashboard);

// Logical OR (||) - Used for default values
let userSetTheme = ""; // User didn't pick a theme
const activeTheme = userSetTheme || "light-mode";
console.log("Active Theme:", activeTheme); // Output: "light-mode"

// Nullish Coalescing (??) - Safety for 0 and ""
let productCount = 0;
const displayCountOR = productCount || "No products"; // WRONG: will show "No products" for 0
const displayCountNullish = productCount ?? "No products"; // CORRECT: will show 0

console.log({ displayCountOR, displayCountNullish });

/**
 * 📝 TOMORROW'S CHALLENGE:
 * Write a function 'calculatePrice(isAvailable, price, discount)'
 * 1. If NOT available, return "Not Available".
 * 2. If available, return (price - discount).
 * 3. IMPORTANT: Use logical operators (&&, ||, ??) to handle cases where 
 *    discount might be 0 or null without breaking the logic.
 * 
 * Example: calculatePrice(true, 100, 0) should return 100, not "Not Available".
 */

// TODO: Implement here tomorrow...
