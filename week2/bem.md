# BEM
CSS is awesome, but can lead to a lot of problems if not managed in a consistant and methodical way.

BEM is a naming convention for CSS that makes frontend code much easier to read, understand, manage, and scale. 

BEM puts all page elements into 3 categories:
1. Block
2. Element
3. Modifier

Let's go over each of them.

## Block
A block is a standalone component of a website (e.g., a menubar, button, logo, etc.) Blocks can be nested and interact with each other,, but they are all considered equal.

Blocks are denoted by being given a meaningful CSS class name, with multiple words separated by dashes as nessecary.

## Element
An element is a part of a block that has no standalone meaning; it has to be tied to a block (e.g., options of a menubar, the title of a header).

Elements are denoted by a class name of the format `.block-name__element-name`.

## Modifier
Modifiers change the appearence, behavior, or state of a block or an element (e.g., disabled button, big box, checked box).

Modifiers are denoted by a class name of the format `.block-name--modifier-name` on blocks or `.block-name__element-name--modifier-name` on elements.

## TL;DR
BEM makes CSS much more maintainable and readable, espicially on larger projects. You should use it!

## Further Resources
All are (**mandatory**).
- [BEM Introduction](http://getbem.com/introduction/)
- [BEM Naming](http://getbem.com/naming/)
- [BEM FAQ](http://getbem.com/faq/)