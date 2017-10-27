# Foundation
Foundation is what's known as a web framework: it's a collection of pre-written CSS (and JavaScript) code that is reusable accross most sites—things like a dropdown menu, image gallery, grid system, and more.

Note: the version of Foundation we use is Foundation 6 for Sites.

## Adding Foundation
To add Foundation to your project, add the line
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css">
```
in your `<head>`, before any of your custom CSS files. Also add the line
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.min.js"></script>
```
at the end of your `<body>`, but before any custom JavaScript files.

These lines fetch Foundation from a CDN, or Content Delivery Network, which is just a fancy way of saying a server meant to host frameworks and libraries like Foundation.

## The Grid System
Grids are the most important tool you have in your web design arsenal. They're the scaffolding for making websites aesthetic and modular across all screens. The basic idea works like this: you divide up your webpage into 12 columns and align parts of your site to these 12 columns. On different screen sizes, different components can take up a different number of the 12 columns. It's sort of tough to explain without visuals, so please check out UCLA ACM Hack's [slides on grid systems](grids.pdf) as well as [this video](https://youtu.be/k1zizfK2xbQ) from Zurb (the company that makes Foundation).

As you could probably guess from the video, Foundation offers you a grid system to work with. This is what we use when using grids at the Daily Bruin! Read more about Foundation's grid system here in their docs.

Note: With the release of Foundation 6.4, Zurb introduced a new grid system called the XY-grid. It's still pretty new so we haven't gotten around to using it and won't cover it in training but it looks cool so you may want to check it out in your free time.

## Useful Components
As well a grid system, Foundation supplies you with a lot of other common website components. Here are some useful ones that you should know about:
- **Buttons**: Buttons are a pretty big part of any webpage and Foundation supports many different options. [Foundation Docs: Button](https://foundation.zurb.com/sites/docs/button.html).
- **Menus**: Foundation has support for lots of different forms of menus, including:
  - [Plain Menu](https://foundation.zurb.com/sites/docs/menu.html)
  - [Dropdown Menu](https://foundation.zurb.com/sites/docs/dropdown-menu.html)
  - [Drilldown Menu](https://foundation.zurb.com/sites/docs/drilldown-menu.html)
  - [Accordian Menu](https://foundation.zurb.com/sites/docs/accordion-menu.html)
- **Reveal**: Foundation's implementation of modal pop-up windows. [Foundation Docs: Reveal](https://foundation.zurb.com/sites/docs/reveal.html)
- **Orbit**: Orbit is an image carousel. It's pretty cool! [Foundation Docs: Orbit](https://foundation.zurb.com/sites/docs/orbit.html)

### The Kitchen Sink
In the Foundation docs, there's a page called ["Kitchen Sink"](https://foundation.zurb.com/sites/docs/kitchen-sink.html) that contains every component in Foundation. Take a scroll through it and get a feel for all Foundation can do for you. 

## Further Resources
- [Foundation 6 for Site Documentation](https://foundation.zurb.com/sites/docs/)
- [Zero to Website: The Complete Guide to Building a Responsive Website with Foundation](https://foundation.zurb.com/sites/docs/kitchen-sink.html)
- [Lynda: Learning Foundation 6](https://www.lynda.com/Foundation-tutorials/Learning-Foundation-6/622086-2.html) (Lynda is free for all UCLA students!)

- [Codeacademy: Learn Responsive Design](https://www.codecademy.com/learn/learn-responsive-design)
