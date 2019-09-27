# Git

Now that you're a coding wizard, it's time to code with *other people*. :scream: But rather than have the infamous situation of `version1`, `version1 2`, `version1withbugfix`, `version1withbugfixFIXED`, `version1 2withbugfixFIXEDFORREAL`, we use [Git](https://en.wikipedia.org/wiki/Git).

## Outline

- What is Git?
- Installation
  - Windows
  - Mac
  - Linux
- Configuration
- Creating Repos
- Cloning Repos
- Making Changes
- Helpful Commands
- Branching
  - Best Practices
- GitHub
- TL;DR

## What is Git?

Git was made in 2005 by the same genius that made Linux. It was actually made *for* Linux. As you can imagine, keeping track of the code base for the largest free operating system in the world isn't quite as easy as emailing a few folders back and forth. It requires something to control all that code, all those different versions... some sort of system that controls everything, maybe... a **version control system**.

Git manages and keeps track of all changes to your code, not only making it easier to keep track of, but also keeping a history of all the changes made to that code ever and - perhaps the most beautiful gift ever given to mankind - making it impossible to delete stuff unless you explicitly tell it to. Daily Bruin, along with most of the developer community, uses [GitHub](https://github.com) to host our code.

Let’s _git_ started!

## Installation
### Windows
To install Git, run the command:
```shell
choco install git
```

### Mac
To install Git, run the command:
```shell
xcode-select --install
```

## Configuration

Firstly, you should configure Git who it knows who you are:

```shell
git config --global user.name <Your Name Here>
git config --global user.email <Your Email Here>
```

## Creating Repositories

The terminology for any project in Git is called a **repository**. To create/initialize a repository on your local computer, you can use the command:

```shell
git init <Project Name>
```

If you don’t specify a project name, i.e., run just `git init`, a repository will be initialized in your current working directory. Do this when you already have a directory created that contains all your code and you are inside that directory on your command line. 

A git repository is really just defined by a folder called `.git` that git uses to keep track of everything in the repository. If you want to keep all of the files in a repository but no longer have it be a repository, you can just delete the `.git` folder (i.e, `rm -rf .git`).

## Cloning Repositories
Most times, though, you aren’t the one creating a project; you’re working on a project someone else created. In this case, you want to **clone** a repository from a server, usually from GitHub. The command for that is:

```shell
git clone <Project Url>
```

## Making Changes
Once you’re in a repository, you can start making changes. However, before we get into the commands you’ll need, there’s one more important concept to cover: **staging**.

The staging area in Git is an intermediate area between a modified file and a committed file. It results from the idea of what a commit should be: a distinct change to your code. A lot of the time, programmers make multiple unrelated logical changes to a file, and it’s kinda bad practice to commit unrelated changes in the same commit in case you need to roll back a commit later. 

Enter staging. Before making a commit, you must "stage" all changes you make, and Git gives you the option to only stage individual lines or even chunks of a file, so that each commit contains only the related changes necessary.

Now let’s get to the commands!

## Helpful Commands

- `git status` lists all new, modified, and deleted files.
- `git diff <commit-1> <commit-2>` shows all the differences between two commits.
- `git diff --staged` shows all file differences between the staged files and last commit.
- `git add <Your File(s)>` stages your file.
  - `git add .` stages all untracked files.
- `git commit -m "<Your Commit Message>"` commits your staged files with the given commit message specified.
- `git commit -a -m "<Your Commit Message>"` (or just `git commit -am "<Your Commit Message>"`) stages and commits all tracked files with the given commit message.

## Branching
Creating, cloning, and making changes in Git are all great when you want to work on a project by yourself, but what do you do when you're working with multiple people who may be making changes to the same file at the same time? This is where Git becomes both powerful and complicated.

Git supports a feature called **branching**, which is a way to keep track of changes. A branch can contain all of the commits that add a feature or fix a bug. This code is separate from the regular code, which is always in a branch called `master`.

When you switch to a certain branch, it is said you "check out" that branch.

Relevant branching commands are as follows:
- `git checkout <Existing Branch>` checks out an existing branch.
- `git branch <New Branch Name>` creates a branch with the given name.
- `git checkout -b <New Branch Name>` creates and checks out a new branch (super convenient!)
- `git branch -d <Branch>` deletes a branch.
- `git push origin <Branch>` makes a branch available remotely, by pushing it to the git host.
  - If it's your first time pushing a branch remotely, you'll have to use `git push -u origin <branch>` instead. But just the first time!

Branches can get real confusing real quick, so don't worry if you don't get this at first. Also don't worry about the commands in this part either, we'll cover a much easier branching process in a couple of sections.

### Branching Best Practices
DB follows this naming scheme: `<first name>/<descriptive feature name>`. So if Nathan were to create a new branch that changed [dailybruin.com](http://dailybruin.com) to comic sans, he'd name his branch to `nathan/comic-sans` or something similar. `master` is considered to be our stable branch; anything in it should be production ready. New branches should also only be branched from `master`.


## Merging
When a developer is done with their branch, they **merge** it back into another branch (almost always `master`). This is done with the `git merge --squash <Branch You Want to Merge Into the Current Branch>`. Be careful to remember the `--squash`! Git can merge branches in a couple of different ways, but the way we prefer to do it in DB is with `--squash`.

## GitHub
As mentioned earlier, GitHub is where DB hosts all of our code. If you haven't already [go make a GitHub account](https://github.com)! (**Mandatory** if you don't have an account already.)

In addition to just hosting Git, though, GitHub has a lot of cool features that make code collaboration easier (note that none of the below are inherent to Git itself). Read about these cool features:
- [Customizing Your Profile](https://help.github.com/articles/customizing-your-profile/)
- [Pull Requests](https://help.github.com/articles/about-pull-requests/), [Reviewing Pull Requests](https://help.github.com/articles/reviewing-changes-in-pull-requests/), and [Incorporating Pull Requests](https://help.github.com/articles/incorporating-changes-from-a-pull-request/)
- [Issues](https://help.github.com/articles/managing-your-work-with-issues/)
- [Projects](https://help.github.com/articles/tracking-the-progress-of-your-work-with-project-boards/)

GitHub also gives away a lot of free stuff to students! Sign up for the [student developer pack](https://education.github.com/pack) if you haven't already!

## TL;DR
Keep track of all code you write in Git. You either initialize or clone a repopository, and make changes by creating a new branch and making commits on it. Once a branch is finished, you merge it back into `master`. How we maintain our code is essential, so knowing Git well is an extremely valuable skill!
