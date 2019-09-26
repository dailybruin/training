# HTML and CSS

## Outline

- HTML

  - What is HTML?
  - Hello World
  - Common Elements
    - Text
    - Multimedia
    - Semantic HTML
    - Accessible HTML

- CSS

  - What is CSS?
  - Common properties
  - Box Model
  - Common CSS layouts
    - Flexbox
    - Grid

## HTML

HTML, or Hypertext Markup Language, is the fundamental building block of the web. It essentially specifies the layout of a web page. It specifies the *structure* of a web page using specific markup (i.e. tags).

<details>
  <summary>History of HTML</summary>
  <br>
  HTML was invented in 1989 at CERN by Tim Berners-Lee in order to better keep track of project documents and resources. Berners-Lee said that its use of "non-linear" "hypertext" - e.g. creating a web of references between documents - was perfect for linked information systems, such as those found in practically any large organization. Rarely can real life situations be modeled as organized trees such as those found in typical file systems.
</details>

### Hello World! :wave:

<details>
  <summary>What's A "Hello World"?</summary>
  In computer science, there’s this concept of a <a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program">“Hello World” program</a>. The idea is that the best way to learn is through examples and that a simple program that says “Hello World!” is a great introduction to any new programming language. Although HTML isn’t technically a programming language (it's a markup language) the “Hello World” concept still applies. Below is a super simple webpage that says “Hello World!”. Let’s go through the syntax of it.
</details>

```html
<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <!-- This makes a header -->
  <h1>Hello World!</h1>
  <p>What's up?</p>
</body>
</html>
```

If you want to follow along, put this into a new VS Code window and save the file as `hello.html`. Then open it in a web browser. Congrats, you just made your first web page! :sunglasses:

#### Doctype Declaration

`<!DOCTYPE html>` is what’s known as a doctype declaration, which basically tells the browser what version of HTML the file is written in. The current standard is [HTML 5](https://en.wikipedia.org/wiki/HTML5), which was released in October 2014. Thesre are other doctypes for formats such as HTML 4 and [XHTML](https://en.wikipedia.org/wiki/XHTML), but no one really uses them anymore, so any HTML file you write in practice will start with just `<!DOCTYPE html>`.

#### Elements and Tags

As you can see, a HTML document has lots of words inside angle brackets (`<` and `>`) such as `<head>`, `<body>`, `<title>`, and `<h1>`. These are called **elements**, and essentially specify to a web browser how to treat a part of the web page. Each element has an **opening tag** that looks like `<this>` and a **closing tag** that looks like `</this>`. Every element has a specific meaning and is rendered by the browser differently.

#### Attributes

`<html lang="en-us">` tells a browser that the document is HTML. It has a matching closing tag (`</html>`) at the end of the document. The `lang="en-us"` part inside is known as an **attribute**, which provides additional information about the tag. They’re always specified in the start tag, and usually come in a `name="value"` format. From that info, you might be able to guess what the `lang="en-us" ` attribute specifies: that this HTML document will be in US English. Since screen readers use this attribute to provide text to speech capabilities, it’s a good idea to add the `lang` attribute.

#### Head and Body Tags

The `<head>` and `<body>` tags are two of the most important tags in HTML. `<head>` specifies information about the web page (called "meta information") and links the page to any external CSS (which we’ll cover later). `<body>` contains all visible page content.

#### Meta Tag

Like the `lang` attribute, you should include the line

```html
<meta charset="UTF-8">
```

in any HTML file you create. It basically tells tells the browser use the [UTF-8](https://en.wikipedia.org/wiki/UTF-8) character encoding, which is essential if you want your special characters (like “¢”) to be rendered correctly. If you've ever seen a page littered with `â€™` instead of quotes, that's a perfect example of why this tag matters.

In general, the `<meta>` tag is followed by attributes that provide [metadata](https://en.wikipedia.org/wiki/Metadata) about a page.

#### Title

The `<title>` tag specifies the title of the page. It’s used for display in brower tabs, bookmarks, and search engine results.

#### Comments

You can make comments, or text that isn't shown by the browser, in HTML by enclosing it in these weird arrow looking things: `<!--` and `-->`. Comments are great to divide up HTML files where it may not be obvious what the code is doing at first glance. Notice how in our Hello World example, there's a comment telling us that a header is being made: `<!-- This makes a header -->`.

#### Headings

Moving into the `<body>` of the page, we notice a `<h1>` element. This stands for “Heading 1”. There are six different heading levels, from `<h1>` being the largest heading to `<h6>` being the smallest.

### Common Tags

#### (Hyper) Text​ :cloud_with_lightning:

##### Paragraphs

```html
<p>This is my paragraph!</p>
```

Paragraphs ("p-tags") are by far the most popular tag on the Internet, just representing one block of text. Each paragraph has a line break before it, like you would in a text editor (Word or Google Docs). 

##### Links :anchor:

```html
<a href="https://www.dailybruin.com">Click here to get quality news.</a>
```

While you would expect it to be a `<link>` tag, that word is reserved for linking *the page itself* to particular resources such as CSS, image, or font files and can only be used in the head of the page. Instead, we use the `<a>` tag (for "anchor") with an `href` attribute ("hypertext reference") pointing to the page we want to link the *user* to.

<details>
  <summary>Why are they called anchors?</summary>
  The same guy who created HTML (and the World Wide Web) wrote the first spec for it and called them anchors, abbreviated with the A tag. Understand that Berners-Lee created HTML because he kept losing track of information in the huge context of CERN. What he wanted was a way to link to a document and never have it leave or lose track of it, to <em>anchor</em> it in one place.
  Also, anchors (what we call links) are meant to actually be used both ways within a document. Not only can an anchor link to something else (be the "source") with the href attribute, it can also be the thing linked to (be the "destination") with the id attribute.
</details>

#### Images

```html
<img src="https://dailybruin.com/img/db_logo.svg" alt="Daily Bruin masthead" />
```

We use the image tag (save a few letters) `<img>` with two attributes to link an image, which the browser will fetch for us and put inside our page. First, we have the `src` attribute which gives the link to the image, usually ending in some file extension. Second, we have the `alt` attribute which gives the reader fallback text to use if the image is not found, takes a long time to load, or is using a screen reader.

You'll notice that this tag does not have a closing partner! The image tag is one of the few "self-closing" tags out there.

#### Semantic HTML

##### Div: The Old Way

For over two decades, web developers have been using the `<div>` tag to represent a "box" or "section" of the page (technically "<u>div</u>ision" but we're not that fancy here) that they can throw a group of content inside to more easily move around, style, or access in their other, very important endeavors as web devs.

The problem is that a lot of pages ended up with "div soup": div after div with no inherent structure. Divs for headers, divs for logos inside headers, divs for navigation menus, divs for more divs. If this sounds confusing to you, imagine that you're a screen reader with no eyes to see the page visually. You're left to hopelessly scan the page until you've maybe found what you're looking for.

##### HTML5 To The Rescue! :rocket:

To combat this, HTML5 has introduced a few different elements with semantics, or meanings, built right in. They are as follows:

- `<article>` - Used to group together a bundle of related content.
- `<header>` - Used to represent the title of the article (or the top most header for site logos and mastheads).
- `<section>` - The smallest unit with an article that can be isolated and still make sense. For example, you could represent this section of this file (titled "HTML5 To The Rescue :rocket:") with a `<section>` tag.
- `<nav>` - Used to represent a navigation menu or bar.
- `<aside>` - Content that is very loosely related to the main content in the article, but not quite. For example, pull quotes, sidebars, "More Posts Like This" lists, etc.
- `<footer>` - The part of the article that comes after the main article content. For example, author bios, social media plugs, etc.



## CSS

All our HTML pages so far, frankly, look kinda ugly and reminiscent of a [CS class page](http://web.cs.ucla.edu/classes/spring17/cs35L/). We can fix that with CSS, Cascading Style Sheets!

We were going to write a CSS guide, but then we realized that we were basically copying Mozilla's and since it was better anyways, we figured we should just link you to [their's instead](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS) (**mandatory**). Read all the sections and be sure you especially understand selectors, how the cascade and inheritance work, and the box model.

### Refresher :watermelon: :droplet: :lemon:

CSS syntax is as follows:

```css
selector(, selector, selector, etc.) {
	property: value;
	property: value;
}
/* comment */
```

And more specific selectors override less specific.

### Common Rules

#### Flexbox

```css
div {
	display: flex;
}
```

Flexboxes are single-handedly the most powerful tool in your belt to create simple, sensible layouts. While they can't do everything you want them to, they 95% solve the everlasting problem of centering things in CSS. (Click [here](http://howtocenterincss.com) to see how we used to have to do it or read [this StackOverflow question](https://stackoverflow.com/questions/17550044/css-responsive-way-to-center-a-fluid-div-without-px-width-while-limiting-the) before flexbox and then be thankful! :pray:)

Read a complete guide [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Or play a (totally educational :pencil:) game [here](https://flexboxfroggy.com).