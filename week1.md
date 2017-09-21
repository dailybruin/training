# DB Online Training Week 1

## Introduction to Journalism
Even though you will be working in the Online department of the Daily Bruin, you are still considered to be a journalist. __What does it mean to be a journalist?__ As a journalist, you are a storyteller.

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

Online in particular does a lot of __[Data Journalism](http://stack.dailybruin.com)__. What does that mean? As a data journalist, you tell stories through data using interactive or static visualizations.

Types of data journalism that you might be doing:

- Standalone stories (a project that mostly formats and supports the text)
- Standalone graphics/interactives (that tell a story by themselves)
- Supporting graphics/interactives for a story
- Live coverage

__Watch:__ [Data Viz: You're Doin' it Wrong (Noah Illinksy/5:19)](https://www.youtube.com/watch?v=i93iWza8sG8)
__Watch:__ [The beauty of data visualization (David McCandless/17:56)](http://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization?language=en)


### Examples of Online Journalism
- [Map: Where are the gun permits in your neighborhood](http://web.archive.org/web/20150731154625/http://archive.lohud.com/interactive/article/20121223/NEWS01/121221011/Map-Where-gun-permits-your-neighborhood-)
	_(Note: this is currently offline so it can only be accessed from the internet archive)_
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


## Tools
Developers use a wide variety of apps and tools in order to be most productive while working. Every developer has their own preferred setup and favorite tools that is often shaped by years of experience. Since knowing what applications to use can be daunting to beginers, we have some reccomendations on tools to use. If you don't have any or much dev experience, we'd reccomend using the tools listed below, but you don't have to. 

### Text Editor (Atom)
In order to build websites, you need to be able to write code. In order to write code, you need to be able to edit text efficiently. This is where a [text editor](https://en.wikipedia.org/wiki/Text_editor) comes in.

Our recommended text editor for beginners is [Atom](https://atom.io). It's free, cross-platform, and modifiable enough to fit anyone's personal preference. It's also very commonly used and a good starting point for anyone who decides to move to a different editor in the future.

You can download Atom from [its website](https://atom.io).

#### Atom Packages
A big reason why Atom is so popular is its package ecosystem: many developers have written extensions to Atom to do everything from change its appearance to extend its functionality. If you write code for the Daily Bruin, you __must__ have these extensions installed and configured:

- [editorconfig](https://atom.io/packages/editorconfig)
- [emmet](https://atom.io/packages/emmet)
- [linter](https://atom.io/packages/linter)
- [linter-htmlhint](https://atom.io/packages/linter-htmlhint)
- [linter-stylelint](https://atom.io/packages/linter-stylelint)
- [linter-eslint](https://atom.io/packages/linter-eslint)
- [prettier-atom]()
- [language-nunjucks]()
- [markdown-preview](https://atom.io/packages/markdown-preview)
- git-blame

If you already have a favorite text editor, you can use that as well. Just be aware that we will be teaching for Atom, so you may have to find some alternatives to packages we recommend.

After you install Atom, watch through [this video series](https://www.youtube.com/playlist?list=PLLnpHn493BHHf0w8uGu9NM8LPf498ZvL_). It'll give you a great overview of all of the features and capabilities Atom has to offer. Feel free to customize it to your own liking too!

### Package Manager (Homebrew or Chocolatey)
A [package manager](https://en.wikipedia.org/wiki/Package_manager) is a program that manages the installation, updates, and deletion of other programs. It will make your life a lot easier.

Note that "package" in this case refers to a computer program (such as [Node](https://nodejs.org/en/)), not an Atom extension as mentioned in the previous section. 

On Windows, the most popular package manager is called [Chocolatey](https://chocolatey.org). On macOS, the package manager most commonly used is [Homebrew](https://brew.sh). They're pretty similar, so download the appropriate one for your system.

### Command Line
A [shell](https://en.wikipedia.org/wiki/Unix_shell) is a program that makes it easy for you to run other programs. It's what you see hackers use all the time in [TV and movies](https://www.youtube.com/watch?v=PGjLhOhMLXc). Although it has connotations of being only for the “pros”, the truth is the shell is really just another way to interface with your computer and can actually be a lot faster.

There are multiple shells. [Bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) is probably the most common, and the default on macOS and most Linux distributions. You may have also heard of [Zsh](https://en.wikipedia.org/wiki/Z_shell) (pronounced "Z shell"), which is a popular choice among command line enthusiasts or the [fish shell](https://en.wikipedia.org/wiki/Friendly_interactive_shell).

#### Windows
Windows isn't a Unix based system, which means that it can't use Unix shells as easily as on macOS. However, there's still a cool terminal called [CMDer](http://cmder.net) that gives you a pretty close experience. Download it with the command:
```shell
choco install cmder
```

Noticed how you used Chocolatey to install it?

#### Mac
You can install it by going to Terminal and running:

```shell
brew install fish
```
`
You may have noticed this uses Homebrew to install fish. Isn't that nice?

You now want to add fish to `/etc/shells`. This will require your password.

```shell
echo "/usr/local/bin/fish" | sudo tee -a /etc/shells
```

Now you can change your default shell to fish.

```shell
chsh -s /usr/local/bin/fish
```

Open a new terminal window. See the difference?

#### Using the Command Line
Now that you have your command line set up, let's go over the commands you need to know.

##### pwd (Print Working Directory)
`pwd` tells you what directory you are currently located in. 

```shell
› pwd
/Users/nathan
```

##### ls (List Directory)
`ls` lists all the contents of the current directory you're in.

```shell
› ls
Applications   Developer      Downloads      Library        Music          Public
Desktop        Documents      Movies         Pictures
```

Now might be a good time to mention __Flags__. A flag (also called an option) is passed to a program to modify its behavior in some way. For example, the `l` flag tells `ls` to list in long format. Flags are specified by the `-` symbol before them.

```shell
› ls -l
total 0
drwxrwxr-x    5 nathan  staff   170 Jun 14 17:15 Applications
drwx------+  19 nathan  staff   646 Jul  1 13:41 Desktop
drwxr-xr-x   25 nathan  staff   850 Jun 14 16:27 Developer
drwx------+  26 nathan  staff   884 Jul  1 09:15 Documents
drwx------+ 157 nathan  staff  5338 Jul  1 13:51 Downloads
drwxrwxr-x+  79 nathan  staff  2686 Mar 26 20:41 Library
drwx------+  21 nathan  staff   714 Jun 28 22:05 Movies
drwx------+  25 nathan  staff   850 Jun 22 22:41 Music
drwx------+  23 nathan  staff   782 Jun 25 19:12 Pictures
drwxr-xr-x+   6 nathan  staff   204 Jul 25  2015 Public
```

Another useful option is `-a`, which tells ls to also list all [hidden files](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory).

##### cd (Change Directory)
Being in the same directory the entire time is kinda boring, so `cd` allows you to move directories. Specify the name of the directory you want to go to after the cd command.

```shell
› cd Documents
```

##### mkdir (Make Directory)
Let's make some directories of our own! Type `mkdir` followed by the name of the directory you want to create.

```shell
› cd newDir
```

##### cp (Copy)
`cp` copies files! Pretty straightforward, right?

```shell
› cp file1 Documents/file2
```

##### mv (Move)
`mv` moves files! It also renames files if you don't move them from their current directory.

```shell
› mv file1 Documents/file2
```

```shell
› mv file1 file2
```

That second command just renamed `file1` to `file2`.

##### rm (Remove)
`rm` is short for "remove", which does exactly what you think it would. Be careful with this command—there is no trash can/recycling bin concept with `rm`; once you delete a file it's gone.

```shell
› rm file1
```

```shell
› rm -r directory1
```

Sometimes people on the internet tell you to run the command

```shell
› rm -rf /
```

or some variation. __Don't do this!__

##### cat (Concatenate)
`cat` prints things out to the terminal. If you give it multiple files, it will concatenate and print out the contents of all the files given. Lots of people just use it to get the output of one file though!

```shell
› cat file1
```

```shell
› cat file1 file2 file3
```

##### man (Manual)
If you want to learn about any command in depth use `man`. If you don't like reading in the terminal, you could also just Google it.

```shell
› man ls
```

Press `q` to exit the man view.

## How the Internet Works

Before we can start to build websites, we need to consider the underlying architecture that allows people to access our websites.

### Web Browsers

You and me and everyone else with a computer access the web through a __web browser__. Popular examples of browsers are Chrome, Safari, Firefox, Opera, Edge, and Internet Explorer. One of the most important things to remember as a web developer is that different people use different browsers, some of which may not be up-to-date, meaning you can never rely on being able to use the latest browser technology. This is especially true at the Daily Bruin, where our mission is to make the news accessible to the largest amount of people possible.

#### Devices

Since the release of the iPhone in 2007 and the iPad in 2010, more and more web traffic has come from mobile devices. As a developer it’s crucial that you keep various screen sizes and orientations in mind and don’t only develop for desktop computers.

#### Screen Readers

Not everyone can look at a screen. __Screen Readers__ are programs that read out the contents of a computer screen to a user. They’re most commonly used by users with visual impairments. Many laws have been passed that require websites to be accessible to people with disabilities, not to mention that making your website as accessible as possible is just the right thing to do. The [a11y project](http://a11yproject.com) is an effort to make the web more accessible.

### Web Servers

__Web Servers__ are a special type of computer. What makes them different any old laptop or desktop is that they’re constantly connected to the internet and optimized to send web pages out. Big companies and organizations such as Google and Wikimedia have their own servers, but many medium to small companies and organizations (such as the Daily Bruin) rent servers  from a __web host__ such as Amazon or DigitalOcean.

### Connecting the Browser and the Server

The often overlooked part of the internet is the part in between the browser and the server—the series of tubes. This is perhaps best explained with a concrete example:

Say you want to connect to [dailybruin.com](http://dailybruin.com). How do you do that? You just type in “dailybruin.com”.

When you do this and hit “enter”, your computer needs send a request to the Daily Bruin server. However, it doesn’t know where on the Internet the DB server is, so first goes to a server called a __Domain Name Server__ (DNS). The DNS server will look for the particular domain name provided, in this case “dailybruin.com”, and return an __IP Address__ associated to that domain name back to your browser. Every device on the web has a unique IP address associated with it, and it serves as the way computers know where each other are.

Now that your browser has an IP address, it contacts the computer at that IP address (the Daily Bruin server) and requests the home page, which is sent to the browser in small chunks of about 1000-1500 bytes called __Packets__.

The browser then renders the file once it is fully rendered for you!

## HTML

__HTML__, or Hypertext Markup Language, is the fundamental building block of the web. It essentially specifies the layout of a web page.

### Hello World
In computer science, there’s this concept of a [“Hello World” program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program). The idea is that the best way to learn is through examples and practice, and as such, a simple program that says “Hello World!” is a great introduction to any new programming language. Although HTML isn’t a programming language[^1] the “Hello World” concept still applies. Below is a super simple webpage that says “Hello World!”. Let’s go through the syntax of it.

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

#### Doctype Declaration

`<!DOCTYPE html>` is what’s known as a doctype declaration, which basically tells the browser what version of HTML the file is written in. The current standard is [HTML 5](https://en.wikipedia.org/wiki/HTML5), which was released in October 2014. There are other doctypes for formats such as HTML 4 and [XHTML](https://en.wikipedia.org/wiki/XHTML), but no one really uses them anymore, so any HTML file you write in practice will start with just `<!DOCTYPE html>`.[^2]

#### Elements and Tags

As you can see, a HTML document has lots of words inside angle brackets such as `<head>`, `<body>`, `<title>`, and `<h1>`. These are called __elements__, and essentially specify to a web browser how to treat a part of the web page. Each element has an __opening tag__ that looks like `<this>` and a __closing tag__ that looks like `</this>`.[^3] Every element has a specific meaning and is rendered by the browser differently.

#### Attributes

`<html lang="en-us">` tells a browser that the document is HTML. It has a matching closing tag (`</html>`) at the end of the document. The `lang="en-us"` part inside is known as an __attribute__, which provides additional information about the tag. They’re always specified in the start tag, and usually come in a `name="value"` format. From that info, you might be able to guess what the `lang="en-us" ` attribute specifies: that this HTML document will be in US English. Since all Daily Bruin content is in English, it’s always a good idea to add the `lang` attribute.

#### Head and Body Tags

The `<head>` and `<body>` tags are two of the most important tags in HTML. `<head>` specifies information about the web page and links the page to any external CSS and Javascript (which we’ll cover later). `<body>` contains all visible page content.

#### Meta Tag
Like the `lang` attribute, you should include the line

```html
<meta charset="UTF-8">
```

in any HTML file you create. It basically tells tells the browser use the [UTF-8](https://en.wikipedia.org/wiki/UTF-8) character encoding, which is essential if you want your special characters (like “¢”) to be rendered correctly.

In general, the `<meta>` tag is followed by attributes that provide metadata about a page.

#### Title

The `<title>` element specifies the title of the page. It’s required for all HTML documents and is used for display in brower tabs, bookmarks, and search engine results.

#### Comments
You can make comments, or text that isn't shown by the browser, in HTML by enclosing it in these weird arrow looking things: `<!--` and `-->`. Comments are great to divide up large pages where it may not be obvious what the code is doing at first glance. Notice how in our Hello World example, there's a comment telling us that a header is being made: `<!-- Make a header -->`.

#### Headings

Moving into the `<body>` of the page, we notice a `<h1>` element. This stands for “Heading 1”. There are six different heading levels, from `<h1>` being the largest heading to `<h6>` being the smallest.

#### Paragraphs

The `<p>`, or paragraph element, is the bread and butter of the web pages that the Daily Bruin develops. It specifies a paragraph of writing.

### Conclusion
And that's about it for HTML! During training, we'll cover some more elements and coding HTML

#### Links
##### Learning
- [Mozilla Developer Network: Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML): A more in-depth overview of HTML. Also read about [images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).
- [CodeAcademy: Learn HTML](Learn HTML): Interactive HTML practice.

##### Reference
- [htmlreference.io](http://htmlreference.io): A great reference of every HTML element.
- [How to Use The HTML5 Sectioning Elements](http://blog.teamtreehouse.com/use-html5-sectioning-elements): The latest version of HTML, HTML 5, introduced sectioning elements. What are those? Read this to find out.
- [HTML Best Practices](https://github.com/hail2u/html-best-practices): A very comprehensive list of HTML best practices.

## Git
Now that you know how to make web pages, its time to learn how to develop web pages collaboratively and iteratively. In order to this without having to create a bunch of folders with titles like `v1.0`, `v1.1`, `v1.1-FIXED`, and email those to our team members every time we make a change, we use a piece of software called [Git](https://en.wikipedia.org/wiki/Git). Git is what’s called a version control system, which does exactly what it sounds like: manages and keeps track of changes to your code[^4], so that it’s easier to keep track of, share, and revert changes. You can also run Git on a server, so that your team members can make changes, put those changes on the server, and allow you to download those changes so that everyone has the latest code. [Github](https://github.com) is probably the most popular Git server, and what the Daily Bruin uses to host all of our code.

Let’s _git_ started!

### Install

### Configuration

Firstly, you should configure Git who it knows who you are:

	$ git config --global user.name <Your Name Here>
	$ git config --global user.email <Your Email Here>

You should also probably tell it what editor you use:

	$ git config --global core.editor "atom --wait"

(more editors [here](https://help.github.com/articles/associating-text-editors-with-git))

### Creating Repositories

The terminology for any project in Git is called a _repository_. To __initialize__ a repository on your local computer, you can use the command:

	$ git init <Project Name>

If you don’t specify a project name, i.e., run just `git init`, a repository will be initialized in your current working directory.

A git repository is really just defined by a folder called `.git` that git uses to keep track of everything in the repository. If you want to keep all of the files in a repository but no longer have it be a repository, you can just delete the `.git` folder.

### Cloning Repositories

Often times, though, you aren’t the one creating a project; you’re working on a project someone else created. In this case, you want to __clone__ a repository from a server, usually from Github. The command for that is:

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
- `git commit -a -m "<Your Commit Message>"` (or just ``git commit -am "<Your Commit Message>"`) skips the staging process and just commits all changed files in your working directory.

### Git Town
Since all of these Git commands can get a little confusing, there's this really cool tool called [Git Town](http://www.git-town.com) that makes working with Git easier. Watch the video on the page to check it out!

#### Installing Git Town
```shell
brew install git-town
git town install-fish-autocompletion
```

For Windows, you'll want to go to Git Town's [releases page](https://github.com/Originate/git-town/releases) and download the appropriate Windows version.

Once you've installed Git Town, you'll want to run the alias command:
```shell
git town alias
```
This makes 

#### Using Git Town

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
- [Mihir Mathur](http://mihirmathur.com)
- [Ruthie Johnson](https://ruthjohnson95.github.io/ruthjohnson.me/)
- [Shannon Phu](http://shannonphu.github.io)
- [Ky-Cuong Huynh](https://kycode.me)
- [Nathan Smith](http://nathansmith.io)

The [Hackathon Hackers Websites and Resumes Facebook Group](https://www.facebook.com/groups/1487708811477672/) is also a good place to check out other people’s personal sites, and receive feedback on your own.

[^1]:	Although it may look like code, HTML is actually considered to be a [markup language](https://en.wikipedia.org/wiki/Markup_language), because it really only specifies the contents and layout of a web page. A programming language, on the other hand, specifies instructions for a computer to run to produce output. In the most basic sense, a markup language says how to _display_ data, while a programming language _transforms_ data from input to output.

[^2]:	After reading the next section, you may wonder if the doctype declaration is a tag. Although it looks like a tag, it technically isn’t. Sorry :(.

[^3]:	Actually, I just lied to your there. There are some HTML elements that don’t have a closing tag because it wouldn’t make sense. We’ll cover that later in this section.

[^4]:	Technically, though, it can keep track of any set of files, meaning you could use Git to keep track of blog posts, mockups, or anything else you can think of.


