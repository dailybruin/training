# Python

*This text does not assume you have previous programming experience, but - in order to try and reach a middle ground between our wide variety of experience levels and attendees - does move rather quickly through concepts that may be tricky. Linked at the end of most sections are further reference materials.*

## Outline

- What is Python?
- Variables
  - Best Practices
  - Types
- Control Flow
  - Conditionals
  - Iterations
- Functions
- Modules

## Hisstory

What came in December of 1989 that changed the world forever? That's right: Taylor Swift!

Oh, and this thing called Python, I guess...

Unlike JavaScript, which was made in industry for industry, Python was primarily made in an academic setting for UNIX programmers. Specifically, it was written by Guido van Rossum, a Dutch programmer working at an institute developing a distributed operating system. Why does this matter? Because, like JavaScript, Python's history informs much of its present.

- **Whitespace-sensitive** - Focused on the task at hand rather than cluttered with braces and semi-colons, Python employs indentation to structure its code. Most people find this to be easier to read, although of course YMMV.
- **Dynamic** - Python usually employs an interpreter, which allows faster development time. This makes it easy to quickly sketch out a script rather than worry about compiling, assembling, and linking. 
  - Important! Just because Python is a dynamic language does *not* mean it's as weakly-typed as JavaScript. While JavaScript will allow something like `5 + true + "3"`, Python will not!
- **Extensible** - Since near its beginning, Python has been open source and community driven. This has given it thousands of packages that are used in everything from machine learning to web development and greatly contributed to its popularity.

<details>
  <summary>More about Python's history</summary>
  Van Rossum was working on this language called "ABC" at work, but it was not extensible and it made things too difficult. However, he did like a few features of it, including its distinctive use of whitespace to structure programs. Because he was working on an operating system, performing system calls was very important. However, if you've ever tried it in C, you'll know it isn't easy. Van Rossum needed a simpler way to do that. And so he developed Python.
  <br>
  It's also important to realize that in the 80s and 90s when Python was made, things like ABC were platform-specific. Python decidely was not. Van Rossum did not want it to be an Amoeba-specific language (the OS was named AMOEBA). We can speculate and say that if it was, it most likely wouldn't have become one of the world's top languages if it was.
  <br>
  In the first years after release, Python was shaped into the language we know today by the contributors. Functional aspects of it like map(), reduce(), and filter() were contributed by a LISP programmer. 
  <br>
  For those really interested (and with a minute to scroll to the bottom), you can view the entire changelog of Python <a href="https://raw.githubusercontent.com/python/cpython/master/Misc/HISTORY">here</a>.
</details>

## Variables

Unlike most languages, Python does not have a variable declaration keyword. So there's no `let`, `var`, or `int x =`.

Instead, anything in Python that is not a keyword or a value is assumed to be a variable. Variables in Python are locally-scoped. 

<details>
  <summary>What about globals?</summary>
  The closest you can get to a global variable in Python is to define the variable in the top-most level of the module.
</details>

```python
myVariable = 5
```

This creates a variable called `myVariable` and assigns it the value 5.

```
myVariable = 6
```

Here we can reassign to `myVariable` without any complaints from the interpreter about being constant or mutable.

### Best Practices

It is somewhat convention in Python to define variables in "snake case." Whether this is a side effect of the name or not we will never know.

So, rather than:

```python
myLongVariableName = "Daily Bruin"
```

we have

```python
my_long_variable_name = "Daily Bruin"
```

In general, this goes along with Python's commitment to readability.

Mutable variables are generally all lowercase (as above) while constants are all upper-case:

```python
MY_CONSTANT = 5.0
```

### Types

In general, types are unremarkable in Python. You don't have to worry about them like C, but they don't behave strangely like JavaScript.

You have three kinds of numbers (integers, floats, and complex numbers), strings (text), and booleans (true or false).

```python
3.4 / 3 # 1.3333333
3.4 // 3 # 1.0
```

For floats and ints, Python performs about what you would expect and produces a float as the result of any operation between the two, even if you do integer division and round down with the double division operator `//` you still get a float in return.

```python
type(3.4 // 3) # <type 'float'>
```

You can add together (formally called "concatenate") strings together with the `+` sign as well.

```python
"Daily" + " " + "Bruin" # 'Daily Bruin'
```

Note that in Python, booleans are <u>uppercase</u>, instead of lowercase like most languages.

```python
true # this raises an ERROR unless you have a variable named "true" (pls dont do this)
True # the value True
```

In addition to booleans, we also have `None`, Python's concept of nil/null.

```python
5 # 5
5 is None # False
(5 is None) is False # True
```

Wait what? `is`? You can write English in Python?

Yep! :+1: In fact, many operators in Python are English words:

```python
True and True # True
True or False # True
True is True # True
False is False # True
((True is False) is False) is True # True; do you feel like Alice in Wonderland yet?
```

<details>
  <summary>What about double-equals?</summary>
  Good question! Like JavaScript, equality is complicated in Python, although perhaps less so. Python has two concepts: equality and identity.
  <br>
  Specifically, "is" is the identity operator where "==" is the equality operator. Identity checks for things like if they refer to the same address, whereas equality checks the actual value. So if you do:
  <br>
  <code>
    a = [1, 2]
    a is [1, 2] # False
    a == [1, 2] # True
  </code>
  <br>
  This is because the variable "a" refers to a particular memory address, so a is not the same thing as the value [1, 2], but it does have the same value inside, so they're equal.
  <br>
  Think of it this way: if you have two pieces of lined paper, they're both equal. It doesn't really matter which one you use. But they're not the same piece of paper. #deep
</details>



## Control Flow

### Conditionals

