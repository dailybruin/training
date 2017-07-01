# DB Online Training Week 1: Journalism, The Internet, HTML, Basic Git, and CSS

## Introduction to Journalism
Even though you will be working in the Online department of the Daily Bruin, you are still considered to be a journalist. **What does it mean to be a journalist?** As a journalist, you are a storyteller.

> Were it left to me to decide whether we should have a government without newspapers, or newspapers without a government, I should not hesitate a moment to prefer the latter.
> 
>  — [Thomas Jefferson](https://en.wikiquote.org/wiki/Thomas_Jefferson#1780s)

What's the purpose of journalism?

- To give a voice to the voiceless
- To keep people/groups accountable
- To keep readers informed about the larger world — it's empowering and fun!
- To educate readers

To be a good journalist, follow the [SPJ Code of Ethics](http://www.spj.org/ethicscode.asp). The major sections are:

- Seek truth and report it
- Minimize harm
- Act independently
- Be accountable and transparent

### Data Journalism

Online in particular does a lot of **[Data Journalism](http://stack.dailybruin.com)**. What does that mean? As a data journalist, you tell stories through data using interactive or static visualizations.

Types of data journalism that you might be doing:

- Standalone stories (a project that mostly formats and supports the text)
- Standalone graphics/interactives (that tell a story by themselves)
- Supporting graphics/interactives for a story
- Live coverage

![](DraggedImage.png)

**Watch:** [Data Viz: You're Doin' it Wrong (Noah Illinksy/5:19)](https://www.youtube.com/watch?v=i93iWza8sG8)
**Watch:** [The beauty of data visualization (David McCandless/17:56)](http://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization?language=en)


### Examples of Online Journalism
- [Map: Where are the gun permits in your neighborhood](http://web.archive.org/web/20150731154625/http://archive.lohud.com/interactive/article/20121223/NEWS01/121221011/Map-Where-gun-permits-your-neighborhood-)
	*(Note: this is currently offline so it can only be accessed from the internet archive)*
	This violates the “minimize harm” part of SPJ code of ethics. Read the [NYT's reaction](http://www.nytimes.com/2013/01/19/nyregion/newspaper-takes-down-map-of-gun-permit-holders.html?_r=0) to it.
- [The Calderon Family's Connections](http://graphics.latimes.com/calderon/)
	Read [this article](http://knightlab.northwestern.edu/2015/04/17/how-byron-lutz-untangled-the-calderon-familys-connections-and-what-it-tells-us-about-social-network-analysis/) from the Knight Foundation about how DB alum [Byron](http://blutz.io) made it.
- [Timeline: Gay Marriage Chronology](http://graphics.latimes.com/usmap-gay-marriage-chronology/)
	This was built using a map generator.
- [Wake of the Storm: Remembering San Joaquin](http://yolanda.dailybruin.com/remembering-san-joaquin/)
- [Snow Fall: The Avalanche at Tunnel Creek](http://www.nytimes.com/projects/2012/snow-fall/#/?part=tunnel-creek)
	This started the trend of long-form stories; to "snow fall" is now used as a verb.
- [Can You Live on the Minimum Wage?](http://www.nytimes.com/interactive/2014/02/09/opinion/minimum-wage.html)
- [4th Down: When to Go for It and Why](http://www.nytimes.com/2014/09/05/upshot/4th-down-when-to-go-for-it-and-why.html)
- [California Cookbook](http://recipes.latimes.com/)
	Also read about [how it was built](https://source.opennews.org/en-US/articles/how-we-made-new-california-cookbook/).
- [What 2,000 Calories Looks Like](http://www.nytimes.com/interactive/2014/12/22/upshot/what-2000-calories-looks-like.html)
- [In the Shadows](http://malawi.dailybruin.com/)
	A good example of how to minimize harm.
- [More than 150 Republican Leaders Don't Support Donald Trump](http://www.nytimes.com/interactive/2016/08/29/us/politics/at-least-110-republican-leaders-wont-vote-for-donald-trump-heres-when-they-reached-their-breaking-point.html)
- [Who's On Track For The Nomination](http://projects.fivethirtyeight.com/election-2016/delegate-targets/democrats/)
- [Blue Feed, Red Feed](http://graphics.wsj.com/blue-feed-red-feed/)

A lot more examples [can be found here](http://simp.ly/publish/gzxgH2).

## How the Internet Works

![](DraggedImage-1.png)

Before we can start to build websites, we need to consider the underlying architecture that allows people to access our websites.

### Web Browsers

You and me and everyone else with a computer access the web through a **web browser**. Popular examples of browsers are Chrome, Safari, Firefox, Opera, Edge, and the dreaded Internet Explorer. One of the most important things to remember as a web developer is that different people use different browsers, some of which may not be up-to-date, meaning you can never rely on being able to use the latest browser technology. This is especially true at the Daily Bruin, where our mission is to make the news accessible to the largest amount of people possible.

#### Devices

Since the release of the iPhone in 2007 and the iPad in 2010, more and more web traffic has come from mobile devices. As a developer it’s crucial that you keep various screen sizes and orientations in mind and don’t only develop for desktop computers. 

#### Screen Readers

Not everyone can look at a screen. **Screen Readers** are programs that read out the contents of a computer screen to a user. They’re most commonly used by users with visual impairments. Many laws have been passed that require websites to be accessible to people with disabilities, not to mention that making your website as accessible as possible is just the right thing to do. The [a11y project](http://a11yproject.com) is an effort to make the web more accessible. 

### Web Servers

![Taken by Wikipedia user Victor Grigas.](DraggedImage-2.png "Wikimedia Foundation Servers")

**Web Servers** are a special type of computer. What makes them different any old laptop or desktop is that they’re constantly connected to the internet and optimized to send web pages out. Big companies and organizations such as Google and Wikimedia have their own servers, but many medium to small companies and organizations (such as the Daily Bruin) rent servers  from a **web host** such as Amazon or DigitalOcean.

### Connecting the Browser and the Server

The often overlooked part of the internet is the part in between the browser and the server—the series of tubes. This is perhaps best explained with a concrete example:

Say you want to connect to [dailybruin.com](http://dailybruin.com). How do you do that? You just type in “dailybruin.com”.

When you do this and hit “enter”, your computer needs send a request to the Daily Bruin server. However, it doesn’t know where on the Internet the DB server is, so first goes to a server called a **Domain Name Server** (DNS). The DNS server will look for the particular domain name provided, in this case “dailybruin.com”, and return an **IP Address** associated to that domain name back to your browser. Every device on the web has a unique IP address associated with it, and it serves as the way computers know where each other are. 

Now that your browser has an IP address, it contacts the computer at that IP address (the Daily Bruin server) and requests the home page, which is sent to the browser in small chunks of about 1000-1500 bytes called **Packets**.

The browser then renders the file once it is fully rendered for you!

## HTML

**HTML**, or Hypertext Markup Language, is the fundamental building block of the web. It essentially specifies the layout of a web page.

In computer science, there’s this concept of a [“Hello World” program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program). The idea is that the best way to learn is through examples and practice, and as such, a simple program that says “Hello World!” is a great introduction to any new programming language. Although HTML isn’t a programming language[^1] the “Hello World” concept still applies. Below is a super simple webpage that says “Hello World!”. Let’s go through the syntax of it.

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

### Doctype Declaration

`<!DOCTYPE html>` is what’s known as a doctype declaration, which basically tells the browser what version of HTML the file is written in. The current standard is [HTML 5](https://en.wikipedia.org/wiki/HTML5), which was released in October 2014. There are other doctypes for formats such as HTML 4 and [XHTML](https://en.wikipedia.org/wiki/XHTML), but no one really uses them anymore, so any HTML file you write in practice will start with just `<!DOCTYPE html>`.[^2]

### Elements and Tags

As you can see, a HTML document has lots of words inside angle brackets such as `<head>`, `<body>`, `<title>`, and `<h1>`. These are called elements, and essentially specify to a web browser how to treat a part of the web page. Each element has an opening tag that looks like `<this>` and a closing tag that looks like `</this>`.[^3] Every element has a specific meaning and is rendered by the browser differently.

#### HTML Tag (and Attributes)

`<html lang="en-us">` tells a browser that the document is HTML. It has a matching closing tag (`</html>`) at the end of the document. The `lang="en-us"` part inside is known as an **attribute**, which provide additional information about the tag. They’re always specified in the start tag, and usually come in a `name="value"` format. From that info, you might be able to guess what the `lang="en-us" ` attribute specifies: that this HTML document will be in US English. Since all Daily Bruin content is in English, it’s always a good idea (and actually specified in our style guide) to add the `lang` attribute.

#### Head and Body Tags

The `<head>` and `<body>` tags are two of the most important tags in HTML. `<head>` specifies information about the web page and links the page to any external CSS and Javascript (which we’ll cover later). `<body>` contains all visible page content.

#### Meta Tag
Like the `lang` attribute, you should include the line

	<meta charset="UTF-8">

in any HTML file you create. It basically tells tells the browser use the [UTF-8](https://en.wikipedia.org/wiki/UTF-8) character encoding, which is essential if you want your special characters (like “¢”) to be rendered correctly.

In general, the `<meta>` tag is followed by attributes that provide metadata about a page.

#### Title

The `<title>` element specifies the title of the page. It’s required for all HTML documents and is used for display in brower tabs, bookmarks, and search engine results.

#### Heading 

Moving into the `<body>` of the page, we notice a `<h1>` element. This stands for “Heading 1”. There are six different heading levels, from `<h1>` being the largest heading to `<h6>` being the smallest.

#### Paragraphs

The `<p>`, or paragraph element, is the bread and butter of the web pages that the Daily Bruin develops. It specifies a paragraph of writing.

## Git

Now that you know how to make web pages, its time to learn how to develop web pages collaboratively and iteratively. In order to this without having to create a bunch of folders with titles like `v1.0`, `v1.1`, `v1.1-FIXED`, and email those to our team members every time we make a change, we use a piece of software called [Git](https://en.wikipedia.org/wiki/Git). Git is what’s called a version control system, which does exactly what it sounds like: manages and keeps track of changes to your code[^4], so that it’s easier to keep track of, share, and revert changes. You can also run Git on a server, so that your team members can make changes, put those changes on the server, and allow you to download those changes so that everyone has the latest code. [Github](https://github.com) is probably the most popular Git server, and what the Daily Bruin uses to host all of our code.

**centralized** and **distributed**.

You should have installed Git in Week 0’s instructions, so let’s *git* started!

### Configuration

Firstly, you should configure Git who it knows who you are:

	$ git config --global user.name <Your Name Here>
	$ git config --global user.email <Your Email Here>

You should also probably tell it what editor you use:

	$ git config --global core.editor "atom --wait"

(more editors [here](https://help.github.com/articles/associating-text-editors-with-git))

### Creating Repositories

The terminology for any project in Git is called a *repository*. To **initialize** a repository on your local computer, you can use the command:

	$ git init <Project Name>

If you don’t specify a project name, i.e., run just `git init`, a repository will be initialized in your current working directory.

A git repository is really just defined by a folder called `.git` that git uses to keep track of everything in the repository. If you want to keep all of the files in a repository but no longer have it be a repository, you can just delete the `.git` folder.

### Cloning Repositories

Often times, though, you aren’t the one creating a project; you’re working on a project someone else created. In this case, you want to **clone** a repository from a server, usually from Github. The command for that is:

	$ git clone <Project Url>

### Making Changes

Once you’re in a repository, you can start making changes in your text editor. However, before we get into the commands you’ll need, there’s one more important concept to cover: staging.

The staging area in Git is an intermediate area between a modified file and a committed file. It results from the idea of what a commit should be: a distinct change or addition to your code. A lot of the time programmers make multiple unrelated logical changes to a file, and it’s kinda bad practice to commit unrelated changes in the same commit in case you need to roll back a commit later. Enter staging. Before making a commit, you must stage all changes you make, and git gives you the granularity to only stage individual lines or hunks of a file, so that each commit contains only the related logic necessary.

Now let’s get to the commands!

- `git status` lists all new, modified, and deleted files.
- `git diff` shows all the file differences not yet staged. 
- `git diff --staged` shows all file differences between the staged files and last commit.
- `git add <Your File(s)>` stages your file.
- `git commit -m "<Your Commit Message>"` commits your staged files with the commit message specified.
- `git commit -a -m "<Your Commit Message>"` skips the staging process and just commits all changed files in your working directory.

### Git GUIs

Once you get a handle of it, the command line is probably the quickest way to interact with Git. However, remembering all these commands and concepts can be a lot, especially when you’re just trying to code. As a result, many GUI (Graphical User Interface) clients have been developed for Git. I personally recommend Tower, which is paid but well worth the price, especially with the 50% student discount they give. Sourcetree and GitKraken are good free alternatives, though, and as of recently, Github has been integrating Git commands into Atom so you don’t even have to leave your text editor. If you don’t know where to begin, start with the built in Git integration to Atom, then move to another tool if you find it doesn’t fit your or you need more power. 

## CSS

All our HTML pages so far, frankly, look kinda ugly and reminiscent of a [CS class page](http://web.cs.ucla.edu/classes/spring17/cs35L/). We can fix that with CSS!

CSS stands for Cascading Style Sheets. The style sheets part is pretty understandable: CSS adds style to HTML elements. The cascading part means that 


## More Practice

The goal of this tutorial (and all others in this series) is not to make you an expert in HTML, but to give you a good starting ground to get started making something in HTML. Your assignment for this week is to develop (or redesign, if you already have one) a personal site.

Here are some examples of good personal sites from former and current DBers:

- [Harrison Liddiard](https://harrisonliddiard.com)
- [Chang Liu](http://changliu.io) (also see his post on [building his site](http://changliu.io/blog/website-redesign/))
- [Frank Chen](https://kfrankc.me)
- [Mahir Mathur](http://mihirmathur.com)
- [Ruthie Johnson](https://ruthjohnson95.github.io/ruthjohnson.me/)
- [Shannon Phu](http://shannonphu.github.io)
- [Ky-Cuong Huynh](https://kycode.me)
- [Nathan Smith](http://nathansmith.io) (shameless plug)

The [Hackathon Hackers Websites and Resumes Facebook Group](https://www.facebook.com/groups/1487708811477672/) is also a good place to check out other people’s personal sites, and receive feedback on your own.

Next week we’ll be covering more advanced front-end design with Sass, CSS Frameworks, task runners, and some more advanced Git so feel free to take a peak at that while working on your site.

[^1]:	Although it may look like code, HTML is actually considered to be a [markup language](https://en.wikipedia.org/wiki/Markup_language), because it really only specifies the contents and layout of a web page. A programming language, on the other hand, specifies instructions for a computer to run to produce output. In the most basic sense, a markup language says how to *display* data, while a programming language *transforms* data from input to output.

[^2]:	After reading the next section, you may wonder if the doctype declaration is a tag. Although it looks like a tag, it technically isn’t. Sorry :(.

[^3]:	Actually, I just lied to your there. There are some HTML elements that don’t have a closing tag because it wouldn’t make sense. We’ll cover that later in this section.

[^4]:	Technically, though, it can keep track of any set of files, meaning you could use Git to keep track of blog posts, mockups, or anything else you can think of.