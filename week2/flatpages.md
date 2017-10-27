# The Flatpage Template
At the Daily Bruin, we make a lot of static, front-end content we call _flatpages_.


Gulp what's called a task runner: it automates common development tasks for you and runs them automatically. What can it do? Compile Nunjucks and Sass files, compress images, [minify](https://blog.stackpath.com/glossary/minification/) (**mandatory**) files, and a whole lot of other very useful things in the development workflow.

There are a couple of different task runners, but the one we use at the Daily Bruin is called [Gulp](https://gulpjs.com) (**mandatory**).

## Installation
To install Gulp, you'll need to first install Node.

Mac:
```shell
brew install node
```

Windows:
```shell
choco install nodejs
```

After installing Node, the command for installing Gulp is the same for both systems:
```shell
npm install gulp-cli -g
```

## The Gulpfile
The main idea of Gulp is that you specify tasks for it to perform through a file called a Gulpfile. A Gulpfile is written in JavaScript (which we won't cover until next week!) but you can take advantage of a Gulpfile that we've already written right now in the [Flatpage Template](https://github.com/daily-bruin/flatpage-template).