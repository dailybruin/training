# DB Online Training Week 1: Home Setup

Every developer has their own preferred setup. If you're coming into the Daily Bruin with web development experience, awesome! Use whatever tools you want. Just know that while what we teach may not apply to you, you'll still be responsible for learning it on your own for your particular setup.

## Text Editor

In order to build websites, you need to be able to write code. In order to write code, you need to be able to edit text efficiently. This is where a [text editor](https://en.wikipedia.org/wiki/Text_editor) comes in.

Our recommended text editor for beginners is [Atom](https://atom.io). It's free, cross-platform, and modifiable enough to fit anyone's personal preference. It's also very commonly used and a good starting point for anyone who decides to move to a different editor in the future.

You can download atom from [its website](https://atom.io).

## Package Manager

A [package manager](https://en.wikipedia.org/wiki/Package_manager) is a program that manages the installation, updates, and deletion of other programs. It will make your life a lot easier.

On Windows, the package manager everyone uses is called [Chocolatey](https://chocolatey.org). Download and install it.

On macOS, the package manager most commonly used is [Homebrew](https://brew.sh). Download and install it.

## Command Line

*Windows is tricky—use [CMDer](http://cmder.net) and [Gow](https://github.com/bmatzelle/gow)?*

macOS is built on top of an operating system called Unix.

A [shell](https://en.wikipedia.org/wiki/Unix_shell) is a program that makes it easy for you to run other programs. It's what you see hackers use all the time in [TV and movies](https://www.youtube.com/watch?v=PGjLhOhMLXc). Although it has connotations of being only for the “pros”, the truth is the shell is really just another way to interface with your computer and can actually be a lot faster.

There are multiple shells. [Bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) is probably the most common, and the default on macOS and most Linux distributions. You may have also heard of [Zsh](https://en.wikipedia.org/wiki/Z_shell) (pronounced "Z shell"), which is a popular choice among command line enthusiasts. We're going to use neither of them, and instead use a shell called [fish](https://en.wikipedia.org/wiki/Friendly_interactive_shell), or the friendly interactive shell, which has a very nice autocompletion feature that makes it easy to learn.

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
`
Now you can change your default shell to fish.

```shell
chsh -s /usr/local/bin/fish
```

Open a new terminal window. See the difference?

## Using the Command Line

Now that you have your command line set up, let's go over the commands you need to know.

### pwd (Print Working Directory)

`pwd` tells you what directory you are currently located in. 

```shell
› pwd
/Users/nathan
```

### ls (List Directory)

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

Another useful option is `-a`, which tells ls to also list all [hidden files](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory).

### cd (Change Directory)

Being in the same directory the entire time is kinda boring, so `cd` allows you to move directories. Specify the name of the directory you want to go to after the cd command.

```shell
› cd Documents
```

### mkdir (Make Directory)

Let's make some directories of our own! Type `mkdir` followed by the name of the directory you want to create.

```shell
› cd newDir
```

### cp (Copy)

```shell
› cp file1 Documents/file2
```

### mv (Move)

```shell
› mv file1 Documents/file2
```

```shell
› mv file1 file2
```

### rm (Remove)

```shell
› rm file1
```

```shell
› rm -r directory1
```

### cat (Concatenate)

```shell
› cat file1
```

### man (Manual)

If you want to learn about any command in depth use `man`. 

```shell
› man ls
```

Press `q` to exit the man view.

