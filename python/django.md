# Django

## Outline

- What is Django?
- When not to use Django
- Models
- Views
- Templates
- Manage.py Helpful Functions

## What is Django?

A better question is what *isn't* Django?

Django manages cookies, sessions, databases, HTML templating, administrative panels, API routing, CSRF protection, caching, file serving, RSS feeds, user authentication, site security, and more. It's also what Instagram ran on, supporting up to 40 millions users perfectly fine, before Facebook acquired them and they switched to something else.

But if you want to get technical, Django is a web framework written in Python that allows developers to quickly and reliably get a web server up and running that handles most of the basic needs of an application. It's comparable to Ruby on Rails or, more recently, Laravel.

<details>
  <summary>Framework or library?</summary>
  It's a bit pedantic, but the difference actually does matter when you're potentially locking yourself - and future developers - into a certain technology.
  <br>
  A <em>library</em> is a module of code that exposes certain functions or objects that perform a certain task. Usually complicated, common, or otherwise annoying tasks that can be tested in a library and then you know they're good. The library here is under your control as the developer. Think of it as a <em>building block</em>.
  <br>
  A <em>framework</em> is software design pattern that performs many "core" tasks while being extendable and configurable by the developer. It has an opinionated (i.e. set) way of performing those tasks. Here, you are under control of the framework. Think of it as <em>the building itself</em>.
  <br>
  Note however that there really is no clear cut line and something like React - which does quite a bit more than you would expect from a simple library and certainly has an opinionated way of doing things, but does not do quite as many things as, say, Django - walks the line and is really a personal call.
</details>

For Daily Bruin, that means that we use Django when we need an application - almost always internal - that has all the bells and whistles: a database, user accounts, cookies, an API, etc.

*Note: While Django is incredibly useful and you'll be hard-pressed to find a framework with as big a community, Online is not a Django club. We have, do, and will build apps using other tools. It's all about finding the best fit for the application.*

## When to use something else

If you have an application or system that has **frequent, small** writes and/or needs real-time functionality, consider **Node.js**.

If you just need a web server and not all this fanciness, consider **Flask** for Python lovers :snake: and **Express** for JavaScripters. :yellow_heart:

If you need a web server and a simple database, but not sessions, user accounts, or more than a few database tables, consider **Express + MongoDB** which is behind many of our interactives. See [here](https://github.com/dailybruin/interactive.2019.graduation-issue) and [here](https://github.com/dailybruin/interactive.2019.registration-issue). Or **Flask**.

If you need the stuff Django provides, but don't like Python, consider the Daily Bruin's [PERN starter](https://github.com/dailybruin/starter.pern) which powers our very own online design notes system, [Buzz](https://buzz.dailybruin.com).

