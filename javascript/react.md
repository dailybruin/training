# React

## Outline

- What is React?
- Components
  - Our First Component - Pet the Dog
    - Importing React
    - Functions and JSX
    - Returning JSX
- State
  - Pet the Dog
    - Array Destructuring
    - useState
    - Nested Functions
    - Updating State
    - JSX Syntax

## What is React?

React is, for all the hype and fanfare, a JavaScript library. Specifically, a JavaScript UI (User Interface) library centered around the idea of "components" and application state. That's it! Of course, the specifics of React are quite a deal more complicated than that, but if you want a clear starting point, that's it.

It was made by Facebook to make building brandable, reliable, and testable UIs easier by breaking them down into components - small building blocks that are exactly one part of the overall app. It also provides ways to manage the "state" of the application (i.e. address information in a form, the number of times a button was clicked, or the progress bar below a video) as well as data flow (fetching data from an API).

That's a lot to do for one little library! Let's see how it works.

## Components

Components are the building blocks of React. The navbar is a component, just like every comment on a Facebook post, the post itself, and all the buttons around the post. Instead of thinking of web pages as one big UI that all flows together, in React we think of them as big collections of components, all working together individually. This is called ["Thinking in React."](https://reactjs.org/docs/thinking-in-react.html)

Let's have our first component be a button and some text saying how many times we clicked the button.

```react
import React from "react";

function PetTheDog() {
	return (
		<div>
			<button>Pet the dog</button>
			<p>The dog has been pet 0 times.</p>
		</div>
	);
}
```

We'll start here, because this already a lot to take in.

### PetTheDog :dog:

#### Import React from "react"

First, we have to import React from the "react" library. The `React` object is exported by default so we don't need to do `import { React }`. But why import at all? We don't do anything with `React`.

Good question! We have to import React in order to have that fancy return value from the `PetTheDog` function. You can see that we're returning... HTML? From a function? Not even an HTML string, but actual HTML?

Almost! We're actually returning JSX (JavaScript eXtended because developers like to 1. be cool and 2. use "x" when naming things), which allows for HTML-like syntax with JavaScript-enabled features! We'll make more use of the JS part of JSX later.

#### function PetTheDog

A React component is just a **function returning JSX**. That's it! And we have that! Phew.

But one small caveat, you must name your components starting with a capital letter. `petTheDog` will not work.

Once again, a *function* returning *JSX* = *component*.

#### return \<div>

Importing React allows us to return JSX, which uses HTML elements in combination with JavaScript, from a function. This function is called a component and this component is what is "rendered"/shown on the screen.

Ok, so now that we have that down, what's next? It always says that we pet the dog 0 times. :cry: How can we pet the dog? 

By introducing **state**. 

## State

State is... well, the current state of the component. Not helpful, we know. But maybe some examples will help. 

The state of a text input component will be whatever the user has typed in so far, as well as if that input is valid or not (for example, if we have password requirements). The state of a button can be if it has been clicked, how many times it has been clicked, and if it is disabled. The state of a notification icon can be how many notifications to show.

So, loosely, state is the *things* that can change within a component, specifically the *things* that we care about; if a button's state changes from enabled to disabled, we want to know that so we make sure someone can't click it. When the state changes, we almost always want to *do* something with that change.

In our case, we want our state to include how many times we have clicked the "pet the dog" button. Very important business here! :triumph:

To use state, we need to import... `useState`. If nothing else, the React team sure knows their naming game!

```react
import React, { useState } from "react";

function PetTheDog() {
  // We will set the initial value of "count" to be 0
  // useState returns an array with two elements:
  //   1. the state variable
  //   2. a function used to update that state
  const [count, setCount] = useState(0);
  
  function incrementCount() {
    setCount(count + 1);
  }
  
	return (
		<div>
			<button onClick={incrementCount}>Pet the dog</button>
			<p>The dog has been pet {count} times.</p>
		</div>
	);
}
```

*Whoa whoa whoa. Ok! I was with you for state, but what's this weird [ ] thing? And we're passing 0 into a function? A function inside a function? Mom?* 

Let's explain...

### PetTheDog

#### [count, setCount]

Admittedly, this syntax is super weird. This is called *destructuring* and it allows us to define and assign variables in one go, skipping an intermediate assignment step.

*Huh?*

Ok, so `useState` returns an array with two elements:

```javascript
[firstReturnValue, secondReturnValue]
```

So, we could totally 100% do this as well:

```javascript
const countArray = useState(0);
const count = countArray[0];
const setCount = countArray[1];
```

And that is totally valid! However, it takes up more lines, can become really cluttered with more than one state variable, and isn't really conventional. Basically, everyone else uses the destructured way, so we do too.

What destructuring does is take apart (i.e. *de-structure*) the array for you all in one line. When you write:

```javascript
const [count] = useState(0);
```

The programming language automatically assigns the first element from `useState` to the `count` variable we defined. Likewise with `const [count, setCount]`.

#### useState(0)

`useState` takes in its first parameter as the initial value of the state variable. In this case, we start off with 0 because that's what feels most logical. Maybe you have a particularly well-pet dog and instead want to start off your state variable with 5,000. That's totally fine too! It doesn't really matter. Do note however, that React will take issue when you assign the state to initially be `undefined` and then magically get a value. So, if you're using state for a text input, don't set the initial value to be `undefined` and then switch to whatever the user typed in. Try starting off with empty string instead (`""`).

#### Nested Functions

Yep, they're allowed! Even in vanilla JavaScript. They're just more common in React specifically because each function represents a "component" that often requires helper functions to go about its business. No need to say `this` or `self` or anything like that, unless you're using class components.

#### setCount(count + 1)

React state is **immutable** or unchangeable.

*But... didn't you say state is what CHANGES earlier?*

Yes, we did! But you don't actually "change" the state by directly modifying it. To allow React to do all its magic, you have to go through it when you change state. This allows it to know when to re-render your components or re-fetch data. We "change" the state by replacing it! So rather than doing:

```javascript
let count = count + 1;
```

We actually make count a *constant* and simply get a new count variable whenever we want to change things.

```javascript
setCount(count + 1);
// Note that this is not count++ or count+=1
// There is no assignment here, we are just passing in the value one higher than count
// We could just as well do:
const newCount = count + 1;
setCount(newCount);
```

#### onClick? Curly braces?? { count } ???

Don't freak! This is all just the syntax of JSX.

`onClick` actually comes from the DOM and is a pretty standard, old way to call functions when a button is clicked.

Curly braces tell JSX "Hey, this is not a literal or a string or anything. This is actually a *value*." So, when we pass in the function `incrementCount` we do **not** do:

```react
<button onClick=incrementCount />
```

We have to do:

```react
<button onClick={incrementCount} />
```

Similarly we can't just say:

```react
<p>The dog has been pet count times.</p>
```

Or else how is React supposed to know that "count" is a variable but the word "dog" isn't? To a computer they look exactly the same. To tell React we want the *value* of the count state variable, we must instead write:

```react
<p>The dog has been pet {count} times.</p>
```

