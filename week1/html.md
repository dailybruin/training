# HTML

**HTML**, or Hypertext Markup Language, is the fundamental building block of the web. It essentially specifies the layout of a web page.

## Hello World
In computer science, there’s this concept of a [“Hello World” program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) (_optional_). The idea is that the best way to learn is through examples and practice, and as such, a simple program that says “Hello World!” is a great introduction to any new programming language. Although HTML isn’t technically a programming language (it's a markup language) the “Hello World” concept still applies. Below is a super simple webpage that says “Hello World!”. Let’s go through the syntax of it.

```html
<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <!-- Make a header -->
  <h1>Hello World!</h1>
  <p>What's up?</p>
</body>
</html>
```

If you want to follow along, put this into a new Atom window and save the file as `hello.html`. Then open it in a web browser. Congrats, you just made your first web page!

### Doctype Declaration
`<!DOCTYPE html>` is what’s known as a doctype declaration, which basically tells the browser what version of HTML the file is written in. The current standard is [HTML 5](https://en.wikipedia.org/wiki/HTML5), which was released in October 2014. There are other doctypes for formats such as HTML 4 and [XHTML](https://en.wikipedia.org/wiki/XHTML), but no one really uses them anymore, so any HTML file you write in practice will start with just `<!DOCTYPE html>`.

### Elements and Tags
As you can see, a HTML document has lots of words inside angle brackets such as `<head>`, `<body>`, `<title>`, and `<h1>`. These are called **elements**, and essentially specify to a web browser how to treat a part of the web page. Each element has an **opening tag** that looks like `<this>` and a **closing tag** that looks like `</this>`. Every element has a specific meaning and is rendered by the browser differently.

### Attributes
`<html lang="en-us">` tells a browser that the document is HTML. It has a matching closing tag (`</html>`) at the end of the document. The `lang="en-us"` part inside is known as an **attribute**, which provides additional information about the tag. They’re always specified in the start tag, and usually come in a `name="value"` format. From that info, you might be able to guess what the `lang="en-us" ` attribute specifies: that this HTML document will be in US English. Since all Daily Bruin content is in English, it’s always a good idea to add the `lang` attribute.

### Head and Body Tags
The `<head>` and `<body>` tags are two of the most important tags in HTML. `<head>` specifies information about the web page and links the page to any external CSS and Javascript (which we’ll cover later). `<body>` contains all visible page content.

### Meta Tag
Like the `lang` attribute, you should include the line

```html
<meta charset="UTF-8">
```

in any HTML file you create. It basically tells tells the browser use the [UTF-8](https://en.wikipedia.org/wiki/UTF-8) character encoding, which is essential if you want your special characters (like “¢”) to be rendered correctly.

In general, the `<meta>` tag is followed by attributes that provide metadata about a page.

### Title
The `<title>` element specifies the title of the page. It’s required for all HTML documents and is used for display in brower tabs, bookmarks, and search engine results.

### Comments
You can make comments, or text that isn't shown by the browser, in HTML by enclosing it in these weird arrow looking things: `<!--` and `-->`. Comments are great to divide up large pages where it may not be obvious what the code is doing at first glance. Notice how in our Hello World example, there's a comment telling us that a header is being made: `<!-- Make a header -->`.

### Headings
Moving into the `<body>` of the page, we notice a `<h1>` element. This stands for “Heading 1”. There are six different heading levels, from `<h1>` being the largest heading to `<h6>` being the smallest.

### Paragraphs
The `<p>`, or paragraph element, is the bread and butter of the web pages that the Daily Bruin develops. It specifies a paragraph of writing.

## Advanced HTML
Read through Mozilla Developer Network's [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) (**mandatory**. Read all sections except "Advanced text formatting") Also read about [images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) (**mandatory**).

## TL;DR
HTML defines the layout for webpages. Different **elements** are rendered different by the browser, and are written with **tags**. HTML tags can also have **attributes** which can affect their appearance/function as well. 

## Further Resources
- [CodeAcademy: Learn HTML](https://www.codecademy.com/learn/learn-html): Interactive HTML practice.
- [HTML Dog: HTML Tutorials](http://htmldog.com/guides/html/)
- [How to Use The HTML5 Sectioning Elements](http://blog.teamtreehouse.com/use-html5-sectioning-elements): The latest version of HTML, HTML 5, introduced sectioning elements. What are those? Read this to find out. (**mandatory**)
- [htmlreference.io](http://htmlreference.io): A great reference of every HTML element. You may want to bookmark this.
- [HTML Best Practices](https://github.com/hail2u/html-best-practices): A very comprehensive list of HTML best practices. You may want to bookmark this too.
