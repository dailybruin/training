# jQuery
jQuery is an extremely popular JavaScript library, that allows you to do, well, a lot. The library is based on the principle _"write less, do more"_.

## Selecting Elements
jQuery revolves around the concept of manipulating elements within your webpage. In order to do that, you need to be able to select specific elements on the page. You can do this using jQuery selectors. We'll go over some important ones below.

### Class, ID and Tag
These are pretty basic, and make sense. To select something according to a class, id or tag, simply use the the conventions that you've been using in CSS. Be sure to use these inside the factory function `$()`

```javascript
$('.class')
$('#id')
$('li')
```

jQuery also allows you to perform more complex select operations. You can combine different selectors like this:

```javascript
$('.class li')
```

or use multiple selectors by delineating them with commas:

```javascript
$('firstSelector, secondSelector, thirdSelector')
```

You can also utilize some more advanced types of selectors. For example, if you wanted to select all even paragraphs in your page, you'd use `$('p:even')`. You can also do things like select all elements that match a certain value. Let's say that you wanted to select everything that had the value `special` from the following block.

```html
<div>
  <label>
    <input type="radio" name="newsletter" value="special">
    <span>name?</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="newsletter" value="nah">
    <span>value?</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="newsletter" value="special">
    <span>value?</span>
  </label>
</div>
```

You'd use `$('input[value="special"]')` to do that.

There are at _lots_ of other types of selectors, and you should check them out [here](https://api.jquery.com/category/selectors/).

## Manipulating Elements
Now that you know how to select elements, let's do something with them!
## Events
## AJAX
## Common Events and Usage
## TL;DR
## Further Resources

http://youmightnotneedjquery.com
