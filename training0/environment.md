## Setting Up Your Web Development Environment

Developers use a wide variety of apps and tools in order to be most productive while working. Every developer has their own preferred setup and favorite tools that is often shaped by years of experience. Since knowing what applications to use can be daunting to beginners, we have some recommendations on tools to use. If you don't have any or much dev experience, we'd recommend using the tools listed below, but you don't have to. 

[TOC]

## Text Editor

In order to build websites, you need to be able to write code. In order to write code, you need to be able to edit text efficiently. This is where a [text editor](https://en.wikipedia.org/wiki/Text_editor) comes in.

Our recommended text editor for beginners is [Visual Studio Code](https://code.visualstudio.com). It's free, cross-platform, and modifiable enough to fit anyone's personal preference. It's also very commonly used and a good starting point for anyone who decides to move to a different editor in the future.

You can download VS Code from [its website](https://atom.io).

If you already have a favorite text editor, you can use that as well. Just be aware that we will be teaching for Atom, so you may have to find some alternatives to packages or keybinding we teach.

### Extensions

A big reason why VS Code is so popular is its package ecosystem: many developers have written extensions for VS Code, extensions that to do everything from change its appearance to extend its functionality. We reccomend you check out the [VS Code extension marketplace](https://code.visualstudio.com) for any cool extensions you may want to install. Through training, we'll also be reccomending extensions that you install. You should do that!

After you install Code, play around with it a little bit. The best way to learn any editor is to use it! Some helpful resources we like are:

- [Official VS Code docs](https://code.visualstudio.com/docs): probably the best written knowledgebase on VSCode and super readable by users of all skill levels.
- [LevelUp Tutorials: VSCode Tutorials](https://www.youtube.com/playlist?list=PLLnpHn493BHHkdpK8E37x_d5cOZBr4GlL): a helpful video series for beginners



### Other Text Editors

We won’t be teaching them in class, but it’s helpful to know about some other text editors out there today.

- [Atom](https://atom.io) Microsoft’s take on a stripped down code editor. More opinonated and has a lot more tools and magic prepared and set up for you right out of the box.
- [PyCharm/Webstorm](https://www.jetbrains.com/) A literal IDE. Code intelligence, package management and pretty much everything else you’ll need in one package. Also free for students!
- [Sublime Text](https://www.sublimetext.com/) OG GUI-based text editor. Super fast, but harder to configure right.
- _Vim/Emacs_ ..…you probably know what you’re dealing with already.

## Package Manager

A [package manager](https://en.wikipedia.org/wiki/Package_manager) is a program that manages the installation, updates, and deletion of other programs. It will make your life a lot easier, especially once we start downloading web development tools.

On Windows, the most popular package manager is called [Chocolatey](https://chocolatey.org). On macOS, the package manager most commonly used is [Homebrew](https://brew.sh). They're pretty similar, so download the appropriate one for your system. The instructions for both should be pretty straightforward.

## The Command Line

A command-line interface (CLI) is a program that enables a text-based way of interfacing with a computer. Although it has connotations of being only for the “pros”, the truth is the command line is really just another way to interface with your computer and can actually be a lot faster.

A CLI is usually implemented by a program called a [shell](https://en.wikipedia.org/wiki/Shell_(computing)). Although they [technically refer to separate things](https://askubuntu.com/questions/506510/what-is-the-difference-between-terminal-console-shell-and-command-line), for our purposes the terms "shell", "command line", and "terminal" all refer to the same thing.

### CMDer (Windows)

To get a cool CLI on Windows, you want to download a program called [CMDer](http://cmder.net). Download it with the command:
```shell
choco install cmder
```

Noticed how you used Chocolatey to install it? Told you package managers would make your life easy.

### bash (macOS)

To set up your CLI on macOS, just open the "Terminal" application. (It's in the `Utilities` folder in your `Applications` folder.) It's that easy!

### Using the Command Line

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

### Further Resources

- [Don’t Fear The Command Line](http://readwrite.com/2014/07/18/command-line-tutorial-intro/)
- [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line): A great interactive tutorial from CodeAcademy.
- [Beginner’s Guide to the Bash Terminal](https://www.youtube.com/watch?v=oxuRxtrO2Ag): A long video that goes much more in depth than we did, but covers a lot of great stuff.

## TL;DR

Use VS Code as your text editor. Use Homebrew or Chocolatey as your package manager. Get acquainted to the command line.
