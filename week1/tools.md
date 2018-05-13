## Tools
Developers use a wide variety of apps and tools in order to be most productive while working. Every developer has their own preferred setup and favorite tools that is often shaped by years of experience. Since knowing what applications to use can be daunting to beginners, we have some recommendations on tools to use. If you don't have any or much dev experience, we'd recommend using the tools listed below, but you don't have to. 

### Text Editor
In order to build websites, you need to be able to write code. In order to write code, you need to be able to edit text efficiently. This is where a [text editor](https://en.wikipedia.org/wiki/Text_editor) comes in.

Our recommended text editor for beginners is [Atom](https://atom.io). It's free, cross-platform, and modifiable enough to fit anyone's personal preference. It's also very commonly used and a good starting point for anyone who decides to move to a different editor in the future.

You can download Atom from [its website](https://atom.io).

If you already have a favorite text editor, you can use that as well. Just be aware that we will be teaching for Atom, so you may have to find some alternatives to packages or keybinding we teach.

#### Atom Packages
A big reason why Atom is so popular is its package ecosystem: many developers have written extensions to Atom to do everything from change its appearance to extend its functionality. Install these extensions to start (we'll add more later!):

- [editorconfig](https://atom.io/packages/editorconfig)
- [linter](https://atom.io/packages/linter)

After you install Atom, watch through [this video series](https://www.youtube.com/playlist?list=PLLnpHn493BHHf0w8uGu9NM8LPf498ZvL_). (**mandatory** for the 2, 3, 6, 7, 8, and 9 but _optional_ all others.) It'll give you a great overview of all of the features and capabilities Atom has to offer. Feel free to customize it to your own liking too!

### Package Manager
A [package manager](https://en.wikipedia.org/wiki/Package_manager) is a program that manages the installation, updates, and deletion of other programs. It will make your life a lot easier.

Note that "package" in this case refers to a computer program, not an Atom extension as mentioned in the previous section. 

On Windows, the most popular package manager is called [Chocolatey](https://chocolatey.org). On macOS, the package manager most commonly used is [Homebrew](https://brew.sh). They're pretty similar, so download the appropriate one for your system.

### The Command Line
A command-line interface (CLI) is a program that enables a text-based way of interfacing with a computer. Although it has connotations of being only for the “pros”, the truth is the command line is really just another way to interface with your computer and can actually be a lot faster.

A CLI is usually implemented by a program called a [shell](https://en.wikipedia.org/wiki/Shell_(computing)). Although they [technically refer to separate things](https://askubuntu.com/questions/506510/what-is-the-difference-between-terminal-console-shell-and-command-line) (_optional_), for our purposes the terms "shell", "command line", and "terminal" all refer to the same thing.

#### CMDer (Windows)
To get a cool CLI on Windows, you want to download a program called [CMDer](http://cmder.net). Download it with the command:
```shell
choco install cmder
```

Noticed how you used Chocolatey to install it? Told you package managers would make your life easy.

#### fish (macOS)
To set up your CLI on macOS, open the "Terminal" application. (It's in the `Utilities` folder in your `Applications` folder.) Now run the commands:

```shell
brew install fish
brew install wget
echo "/usr/local/bin/fish" | sudo tee -a /etc/shells
chsh -s /usr/local/bin/fish
wget https://raw.githubusercontent.com/daily-bruin/training/master/fish_prompt.fish -P .config/fish/functions/
wget https://github.com/daily-bruin/training/blob/master/DB%20Theme.terminal  -P ~/Downloads
```

Now double click on the `DB Theme.terminal` file in your `Downloads` folder. Go to Terminal>Preferences>Profile and make it your default theme. Now open a new window. So pretty wauw.

You may have noticed this uses Homebrew to install fish. Isn't that nice?

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

Now might be a good time to mention **Flags**. A flag (also called an option) is passed to a program to modify its behavior in some way. For example, the `l` flag tells `ls` to list in long format. Flags are specified by the `-` symbol before them.

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

Another useful option is `-a`, which tells ls to also list all [hidden files](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory) (_optional_).

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

or some variation. **Don't do this!** `/` is the root directory for all files and folders on your computer. Does that seem like something you want to delete?

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

## TL;DR
Use Atom as your text editor. Use Homebrew or Chocolatey as your package manager. Get acquainted to the command line.

## Further Resources
All further resources are (_optional_) unless marked otherwise. They're mainly here to provide more information/reference to the topics we talked about. We'd reccomend going over them if something above was unclear, you want to learn more about a particular thing mentioned above, or referring to them after a training session to review.

### Atom
- [Atom Flight Manual](http://flight-manual.atom.io): Useful bits are [Atom Basics](http://flight-manual.atom.io/getting-started/sections/atom-basics/) and all of [Chapter 2: Using Atom](http://flight-manual.atom.io/using-atom/).
- [Atom Video Tutorials](https://www.youtube.com/playlist?list=PLLnpHn493BHHf0w8uGu9NM8LPf498ZvL_)

### Other Text Editors
We won't be teaching them in class, but it's helpful to know about some other text editors out there today.
- [VSCode](https://code.visualstudio.com/) Microsoft's take on a stripped down code editor. More opinonated and has a lot more tools and magic prepared and set up for you right out of the box.
- [PyCharm/Webstorm](https://www.jetbrains.com/) A literal IDE. Code intelligence, package management and pretty much everything else you'll need in one package. Also free for students!
- [Sublime Text](https://www.sublimetext.com/) OG GUI-based text editor. Super fast, but harder to configure right.
- _Vim/Emacs_ ...you probably know what you're dealing with already.

### The Command Line
- [Don’t Fear The Command Line](http://readwrite.com/2014/07/18/command-line-tutorial-intro/)
- [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line): A great interactive tutorial from CodeAcademy.
- [Beginner's Guide to the Bash Terminal](https://www.youtube.com/watch?v=oxuRxtrO2Ag): A long video that goes much more in depth than we did, but covers a lot of great stuff.


