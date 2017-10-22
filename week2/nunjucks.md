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
[Template Inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) and [`extends`](https://mozilla.github.io/nunjucks/templating.html#extends)


## Conditionals
Conditionals: [`if`](https://mozilla.github.io/nunjucks/templating.html#if) and [`for`](https://mozilla.github.io/nunjucks/templating.html#for)
