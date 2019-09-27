# JavaScript

*This text does not assume you have previous programming experience, but - in order to try and reach a middle ground between our wide variety of experience levels and attendees - does move rather quickly through concepts that may be tricky. Linked at the end of most sections are further reference materials.*

## Outline

- What is JavaScript?
- Variables
  - Types
    - Arrays
    - Objects
- Control Flow
  - Conditionals
  - Iterations
- Functions
- Modules

## What.JS?

JavaScript is a programming language written in literally 10 days by Brendan Eich hired by Netscape, who was the Chrome of the late 90s, owning 80% of browser market share. Eich wanted a language that emphasized **flexibility** above all, a principle which guided most of the design decisions of the language.

Some tech specs :nerd_face:: JavaScript is...

- **Weakly-typed** - Types can be converted very easily and liberally.
  - i.e. `"3" == 3`, despite being a string and a number, is `true`
- **Dynamic** - JS is largely an interpreted language, not being compiled ahead of time. This can lead to runtime errors and surprises, but also dramatically improves development time (the time it takes to write something in JS).
- **Everywhere!** - JavaScript is the only language currently able to run in the browser and on the server.

<details>
  <summary>More about JavaScript's History</summary>
  JavaScript was originally titled "Mocha," a blatant reference to Java. This was because - believe it or not - Java was the new, trendy language of the late 90s and all the web developers were coming from that as their primary language. Because of this, Eich designed JavaScript to use Java's familiar <em>syntax</em> (curly braces, semi-colons, optional whitespace) while incorporating functional programming <em>features</em> (functions being first class (i.e. able to be assigned to a variable), prototypical inheritance (from Self, in contrast to class-based inheritance from Java), and dynamic typing). This allowed JavaScript to, while being far from perfect as you'll see in countless jokes over the Internet, last as long as it has. Maybe Eich knew what he was doing after all!
  <br>
  <br>
  Oh, and the name came from wanting to go past "Mocha" and literally just say "Java." Honesty is a virtue! The "script" comes from Netscape wanting to make it sound as least scary as possible as to attract the most programmers. It's not that scary old programming language Java! Why, this? It's just a scripting language. A little tiny script! (With JS files pushing 2 MB these days, we might laugh at this today.)
</details>

## Variables :package:

<details>
  <summary>What's a variable?</summary>
  A variable is just what it is in math: a particular unique name associated with a certain value. In algebra, you have x = 3 * 9 * 10 / 4. In computer science, you have the exact same thing! Think of a variable as a drawer. You put a label on the drawer, say "socks," and put anything you want into it. Ideally, it would indeed be socks! Now you have a nice organized place to put your socks. If you ever wanted to change up your sock collection, all you have to do is go into that drawer, take out some stuff, put in some stuff, and you're good! 
  <br>
  <br>
  Also! While we're at it, this is a good time to show the difference between a strongly- and weakly-typed language. A strongly-typed language - OCaml or Rust - will not let you put anything except socks in that drawer. No exceptions: not shoes, not tights, not even stockings. This drawer is <strong>strictly</strong> for socks, buddy. On the other hand, the more weakly-typed a language is, the more it will allow. A slightly weaker language - C or C++ - might allow stockings and tights, but definitely not shoes. An even weaker language - JavaScript - might allow practically anything: shoes, dogs, the CS professor who first ruined your GPA, etc.
</details>

Variable declaration in JavaScript looks like this:

```javascript
let myVariable = 5;
```

To declare a constant variable (one that cannot be reassigned), we use `const` instead:

```javascript
const DAYS_PER_YEAR = 365;
```

<details>
  <summary>But what about var?</summary>
  Sigh... must we? Fine, fine, if we must.
  <br>
  "var" assigns a variable which is <strong>globally</strong> scoped. This means that if you define a variable inside a function using var, when you exit the function that variable will still be valid. This gives the most flexibility and is the most appealing in the context of just writing smaller files to animate your website logo, but as JavaScript now handles your Social Security Number, bank statements, and entire life in its tragic little hands, we prefer to use "let" and "const" instead nowadays.
  <br>
  "let" assigns a variable which is <strong>block</strong> scoped. If you declare a variable inside a function using let, once you exit that function, it will no longer be valid. While less flexible and perhaps more annoying, this tends to produce more consistent results, which is exactly what you want on your server handling sensitive user data.
</details>

### Types

JavaScript has a few main types: Number, String, Boolean, Object, and Array.

#### Arrays

Arrays are a contiguous (i.e. in order) list of items that do **not** have to be the same type. If you're new to arrays, keep in mind that unlike human lists, they do not start at 1, but rather 0.

```javascript
const myArray = [2, true, "A String"];

console.log(myArray[0]); // prints "2"
console.log(myArray[2]); // prints "A String"
```

#### Objects

If you come from other programming languages, you may already be familiar with objects! They're also called dictionaries, hash maps, and associative arrays.

```javascript
let DailyBruin = {
  name: "Daily Bruin",
  founded: 1919,
  isAwesome: true,
  members: 500
};

console.log(DailyBruin.isAwesome); // prints "true"
console.log(DailyBruin["isAwesome"]); // prints "true"

DailyBruin.members = 500 + 1;
console.log(DailyBruin.members); // prints "501"
```



## Control Flow :arrows_counterclockwise:

### If-Else

<details>
  <summary>What's control flow?</summary>
  Great question! Control flow is basically the fancy word for "if this, then that." Very rarely will a program do the same exact thing with all the input it ever gets under any circumstances. 99.9% of the time, you want to say "OK, computer, IF this one thing is true, then do this, OTHERWISE, just do that." Except instead of otherwise, we say else probably because it's shorter. 
  Every programming language will have some concept of control flow and usually the syntax is fairly similar.
</details>

`if-else` in JavaScript takes the following form:

```javascript
let creditsEnrolled = 12;
if (creditsEnrolled < 12) {
    console.log("Not enough credits to be full-time :/");
} else if (creditsEnrolled > 21) {
    console.log("Whoa, slow down there, you'll need permission to go that hard.");
} else {
    console.log("Your credits are between 12 and 21 (inclusive). A+!");
}
```

*Note: The parentheses are required.*

### Loops

#### For

```javascript
for (let i = 0; i < 100; i++) {
     console.log(i + 1 + "/ 100 iterations complete!");
}
```



#### While

```javascript
let i = 0;
while (i < 100) {
    console.log(i + 1 + "/ 100 iterations complete!");
    i++;
}
```



## Functions :phone:

Functions in JavaScript are almost analogous to their mathematical counterparts: they take in some input and return some output. But unlike mathematical functions, JS functions don't *have* to return something or take in anything. They can merely *do* something as well. Or nothing! Total freedom.

In computer science, the "input" to a function is called its **arguments** or **parameters** and the "output" is called its **return value**.

<details>
  <summary>Fun(ction) Fact</summary>
  Technically, the annotations for the input a function accepts (i.e. two integers, or a floating point value and a string, with an optional boolean) are called the "parameters", while the actual passed-in values are the "arguments."
</details>

JavaScript uses the `function` keyword most times:

```javascript
function add(a, b) {
    return a + b;
}
```

And you use/"invoke" the function by calling its name:

```javascript
const threePlusFour = add(3, 4);
```

JavaScript also supports **arrow functions**:

```javascript
const addArrow = (a, b) => {
    return a + b;
}
// also equivalent is:
const addArrowSlim = (a, b) => a + b;

// called the exact same way as "regular" functions
const threePlusFour = addArrowSlim(3, 4);
```

*This is where JavaScript starts showing its functional programming roots!*

## Modules

This is all good and everything, but what use is all of this if you can't use it! To use JavaScript, you need to save the code into a `.js` file. However, for most projects, having all your JavaScript code in one file would be unmaintainable, confusing, hard to read, and a mess in any version control system like Git. 

To fix this, we usually keep a single file in charge of one thing, maybe it's a class definition, a complicated utility function, or a configuration object. How do we use this file in other files though? Modules!

A **module** is simply a JavaScript file that exports one or more *things*. They can be variables or functions (remember: in JavaScript, functions are first class values just like numbers and strings). To define a module, we use the `export` keyword. If we are only exporting one thing, it's best practice to use `export default` for clarity.

```javascript
// File path: ~/DailyBruinTrainingExamples/JavaScript/sayHello.js

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

export default sayHello
```

Now, time to use this super useful, complicated function! For this, we use the `import` keyword.

```javascript
// File path: ~/DailyBruinTrainingExamples/JavaScript/index.js

import sayHelloFunction from "./sayHello.js"; // relative to the current directory "JavaScript"

const myName = "Byron";
sayHelloFunction(myName); // prints out "Hello, Byron!"
```

We can also have **named exports**. These must be imported with the name given in the source module.

```javascript
// File path: ~/DailyBruinTrainingExamples/JavaScript/sayGoodbye.js

export function sayGoodbye(name) {
  console.log("Goodbye, " + name + "!");
}
```

And we must import them like this:

```javascript
// File path: ~/DailyBruinTrainingExamples/JavaScript/index.js

// Notice we MUST call it sayGoodbye, not sayGoodbyeFunc or iLoveDogs123
import { sayGoodbye } from "./sayGoodbye.js";

const myName = "Byron";
sayGoodbye(myName); // prints out "Goodbye, Byron!"
```

