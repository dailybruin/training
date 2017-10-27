# Nunjucks
Hardcoding all HTML content can become a little tedious, espicially with content that is repeated (e.g., a menu bar or head tags). With HTML you'd need to manually copy these repeated elements and manually update each one when a change is made. Nunjucks allows use to reuse common HTML components!

Nunjucks files end with the `.njk` extension.

## Partials
We can take commonly used parts of HTML and pull them out into smaller files. For example consider this webpage with a navigation bar and footer:

```html
<!DOCTYPE html>
<html lang="en-us">
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <div class="content">
    <h1>Prentend there's some content here</h1>
  </div>
  <footer>
    Made by the Daily Bruin. 
  </footer>
</body>
</html>
```

Both the `nav` and the `footer` would be repeated on multiple pages. In plain HTML, we'd just have copy/paste each repeated section into every HTML file that needs it. With Nunjucks, we can use partials to make multiple smaller files like so:

`index.njk`:
```html
<!DOCTYPE html>
<html lang="en-us">
<body>
  {% include "nav.njk" %}
  <div class="content">
    <h1>Prentend there's some content here</h1>
  </div>
  <footer>
    Made by the Daily Bruin. 
  </footer>
</body>
</html>
```

`nav.njk`:
```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

`footer.njk`:
```html
<footer>
  Made by the Daily Bruin. 
</footer>
```

Pretty cool right? You can read a bit more about `include` in the [Nunjucks docs](https://mozilla.github.io/nunjucks/templating.html#include) (**mandatory**).

## Templating
Another cool feature of Nunjucks is templating: it makes it easy to define a base page with "blocks" of content that can specified in child pages. 

For example, let's say that all articles on a site follow a similar layout, with the only differences between pages being article content. We could model this in Nunjucks with the following:

`article.njk`:
```html
<!DOCTYPE html>
<html lang="en-us">
{% include "head.njk" %}
<body>
  {% include "nav.njk" %}
  <div class="content">
    {% block content %}{% endblock %}
  </div>
  {% include "footer.njk" %}
</body>
</html>
```

A particular article would look like:
```html
{% extends "article.njk" %}

{% block content %}
<h1>Arthur Wang: UCSD fundraising campaign demonstrates favorability for UC privatization</h1>
<span class="byline">By Arthur Wang</span>
<p>
  UC San Diego, the University of California campus built for the Cold War, has been getting the cold shoulder from its alumni lately.
</p>
...
{% endblock %}
```

Note that partials are great for reusable components on a website while templates are great for pages that share a design and differ only in content.

Read more about templating with [Template Inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) and [`extends`](https://mozilla.github.io/nunjucks/templating.html#extends).


## Conditionals
You can use conditionals with Nunjucks! These statements allow you to add some logic into your templating and do some more complex things. Let's take a look below.

### If Statements
If statements take in the boolean value from a variable or statement. If the value is true, the stuff inside the if statement is displayed, if not the compiler moves on. Pretty simple right? You can also use elseif and else statements.
```html
{% if programmer %}
  I'm a programmer.
{% elif designer %}
  I'm a designer.
{% else %}
  I'm not a programmer or a designer, but I'm still cool.
{% endif %}
```

Read more about `if` statements [here](https://mozilla.github.io/nunjucks/templating.html#if).

### For Loops
For statements iterate over a set of data, and can be especially useful when it comes to creating flatpages that feature a lot of static content. The best way to see how these work is through an example. Let's check one out below.

In this example, we have an array named `stories`. Each story object contains a headline, a description and a URL. This piece of code displays that headline (which also acts as a link to the actual story) and a short description of the story below it. This will save you tons of work - you can display an essentially unlimited number of pieces of content with a few short lines of code.

```html
<h1>Headlines</h1>
<p>Click on a headline below to read the story.</p>
{% for story in stories %}
  <h3><a href="{{ story.url }}">{{ story.title }}</a></h3>
  <p>{{ story.description }}</p>
{% endfor %}
```

You can read more about `for` statements [here](https://mozilla.github.io/nunjucks/templating.html#for).

## Compiling

## Further Resources
