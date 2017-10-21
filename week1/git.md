# Git
Now that you know how to make web pages, its time to learn how to develop web pages collaboratively and iteratively. In order to this without having to create a bunch of folders with titles like `v1.0`, `v1.1`, `v1.1-FIXED`, and email those to our team members every time we make a change, we use a piece of software called [Git](https://en.wikipedia.org/wiki/Git) (**mandatory**). Git is what’s called a version control system, which does exactly what it sounds like: manages and keeps track of changes to your code, so that it’s easier to keep track of, share, and revert changes. You can also run Git on a server, so that your team members can make changes, put those changes on the server, and allow you to download those changes so that everyone has the latest code. [GitHub](https://github.com) (**mandatory**) is probably the most popular Git server, and what the Daily Bruin uses to host all of our code.

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

You should also probably tell it what editor you use:

```shell
git config --global core.editor "atom --wait"
```

(If you're using a different editor, go [here](https://help.github.com/articles/associating-text-editors-with-git).)

## Creating Repositories

The terminology for any project in Git is called a **repository**. To **initialize** a repository on your local computer, you can use the command:

```shell
git init <Project Name>
```

If you don’t specify a project name, i.e., run just `git init`, a repository will be initialized in your current working directory.

A git repository is really just defined by a folder called `.git` that git uses to keep track of everything in the repository. If you want to keep all of the files in a repository but no longer have it be a repository, you can just delete the `.git` folder (i.e, `rm -rf .git`).

## Cloning Repositories
Often times, though, you aren’t the one creating a project; you’re working on a project someone else created. In this case, you want to **clone** a repository from a server, usually from Github. The command for that is:

```shell
git clone <Project Url>
```

## Making Changes
Once you’re in a repository, you can start making changes in your text editor. However, before we get into the commands you’ll need, there’s one more important concept to cover: **staging**.

The staging area in Git is an intermediate area between a modified file and a committed file. It results from the idea of what a commit should be: a distinct change or addition to your code. A lot of the time programmers make multiple unrelated logical changes to a file, and it’s kinda bad practice to commit unrelated changes in the same commit in case you need to roll back a commit later. Enter staging. Before making a commit, you must stage all changes you make, and git gives you the granularity to only stage individual lines or hunks of a file, so that each commit contains only the related logic necessary.

Now let’s get to the commands!

- `git status` lists all new, modified, and deleted files.
- `git diff` shows all the file differences not yet staged.
- `git diff --staged` shows all file differences between the staged files and last commit.
- `git add <Your File(s)>` stages your file.
- `git commit -m "<Your Commit Message>"` commits your staged files with the commit message specified.
- `git commit -a -m "<Your Commit Message>"` (or just `git commit -am "<Your Commit Message>"`) skips the staging process and just commits all changed files in your working directory.

## Branching
Creating, cloning, and making changes in Git are all great when you want to work on a project by yourself, but what do you do when you're working with multiple people who may be making changes to the same file at the same time? This is where Git becomes both powerful and complicated.

Git supports a feature called **branching**, which is a way to keep track of changes. A branch can contain all of the commits that add a feature or fix a bug. This code is separate from the regular code, which is always in a branch called `master`.

Relevant branching commands are as follows:
- `git checkout -b <New Branch Name>` creates and moves (or checks out) a new branch.
- `git checkout <Existing Branch>` checks out an existing branch.
- `git branch -m <New Branch Name>` renames the current branch.
- `git branch -d <Branch>` deletes a branch.
- `git push origin <Branch>` makes a branch available remotely, by pushing it to the git host.

Branches can get real confusing real quick, so don't worry if you don't get this at first. Also don't worry about the commands in this part either, we'll cover a much easier branching process in a couple of sections.

### Branching Best Practices
DB follows this naming scheme: `<first name>/<descriptive feature name>`. So if Nathan were to create a new branch that changed [dailybruin.com](http://dailybruin.com) to comic sans, he'd name his branch to `nathan/comic-sans` or something similar. `master` is considered to be our stable branch; anything in it should be production ready. New branches should also only be branched from `master`.

Our branching scheme is based off of a couple of other popular models. If you're curious, you can read about how other people do it:
- [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) (_optional_)
- [GitHub Flow](https://guides.github.com/introduction/flow/) (_optional_)
- [GitLab Flow](https://docs.gitlab.com/ee/workflow/gitlab_flow.html) (_optional_)


## Merging
When a developer is done with their branch, they **merge** it back into another branch (almost always `master`). This is done with the `git merge --squash <Branch You Want to Merge Into the Current Branch>`. Be careful to remember the `--squash`! Git can merge branches in a couple of different ways, but the way we prefer to do it in DB is with `--squash`.

## GitHub
As mentioned earlier, GitHub is where DB hosts all of our code. If you haven't already [go make a GitHub account](https://github.com)!(**mandatory** if you don't have an account)

In addition to just hosting Git, though, GitHub has a lot of cool features that make code collaboration easier. Read about these cool features (all are **mandatory**):
- [Customizing Your Profile](https://help.github.com/articles/customizing-your-profile/)
- [Pull Requests](https://help.github.com/articles/about-pull-requests/), [Reviewing Pull Requests](https://help.github.com/articles/reviewing-changes-in-pull-requests/), and [Incorporating Pull Requests](https://help.github.com/articles/incorporating-changes-from-a-pull-request/)
- [Issues](https://help.github.com/articles/managing-your-work-with-issues/)
- [Projects](https://help.github.com/articles/tracking-the-progress-of-your-work-with-project-boards/)

GitHub also gives away a lot of free stuff to students! Sign up for the [student developer pack](https://education.github.com/pack) (**mandatory**) if you haven't already!

## Git Town
Since all of these Git commands can get a little confusing, there's this really cool tool called [Git Town](http://www.git-town.com) (**mandatory**) that makes working with Git easier. Watch the video on the page to check it out!

### Installing Git Town
#### Windows
For Windows, you'll want to go to Git Town's [releases page](https://github.com/Originate/git-town/releases) and download the appropriate Windows version.

#### Mac
Install it via Homebrew!
```shell
brew install git-town
git town install-fish-autocompletion
```

For either platform, once you've installed Git Town, you'll want to run the alias command:
```shell
git town alias true
```

This makes it so that all Git Town commands don't need the `git town` prefix. (e.g., instead of typing `git town hack`, you can just type `git hack`)

### Using Git Town
Git Town adds [4 main commands](https://github.com/Originate/git-town#commands) (**mandatory**) that you can use:
- `git hack`: Instead of creating a new branch with `git checkout -b`, create a new branch with `git hack` instead. It will make sure that this new branch is always branched from `master` and up to date.
- `git sync`: Makes sure your branch is up to date with all other branches, and makes any merges nessecary.
- `git new-pull-request`: Syncs your current branch, and makes a new pull request for that branch.
- `git ship`: Syncs the branch, merges it into `master`, and deletes said branch.

## Git GUIs
Once you get a handle of it, the command line is probably the quickest way to interact with Git. However, remembering all these commands and concepts can be a lot, especially when you’re just trying to code. As a result, many GUI (Graphical User Interface) clients have been developed for Git. Our recommendation is [Tower](https://www.git-tower.com/mac/), which is paid but well worth the price, especially with the 50% student discount they give. [Sourcetree](https://www.sourcetreeapp.com/) and [GitKraken](https://www.gitkraken.com/)are good free alternatives, though, and as of recently, Github has been [integrating Git commands into Atom](http://blog.atom.io/2017/05/16/git-and-github-integration-comes-to-atom.html) (**mandatory**) so you don’t even have to leave your text editor. If you don’t know where to begin, start with the built in Git integration to Atom, then move to another tool if you find it doesn’t fit your or you need more power.

## TL;DR
Keep track of all code you write in Git. You either initialize or clone a repopository, and make changes by creating a new branch and making commits on it. Once a branch is finished, you merge it back into `master`. There are a lot of tools to help with Git workflows such as GitHub, Git Town, and Git GUIs. How we maintain our code is essential so knowing Git well is an extremely valuable skill!