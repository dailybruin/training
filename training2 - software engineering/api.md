# REST

**REST**, or representational state transfer, APIs are one of the most widely
used conventions on how fun things happen on the internet. If you have never
heard of the term _API_, it simply stands for Application Programming Interface,
and what it really is is simply a contract between the programmer and another
system on how to make said system do certain things, and what one might
reasonably expect to happen to the system after said thing is done.

For instance, `getline`, which you may or may not be familiar with from CS31, is
an API between you and the operating system. This API says that if you invoke
the method `getline` with a source as the first _parameter_, and a reference to
a string as the second, the operating system will grab a line from the source
and put it into the string for you. Neat!

On the internet, things are pretty much the same. Let's say you create a to-do
list service. You can tell the whole world if you use HTTP (remember what that
is?) to `GET` a path `/greeneggsandham` on your server, you'll add a thousand
reminders to buy eggs and ham on the to-do list. And perhaps if you `GET`
another path `/charliechaplin`, your service will randomly delete one of the
reminders you have. Other than the fact that this is completely nonsensical, for
all intends and purposes this is actually a completely valid API that you can
tell the world about!

But REST wants to do you one better. A RESTful service (and associated API), if
designed to spec, helps make it easy to scale out your web application so that
you can handle much much more users, and provides a straightforward interface
that others can make assumptions and guarantees about! (there are _many_ are
benefits, see https://en.wikipedia.org/wiki/Representational_state_transfer)

## So...

A short, straightforward guide on how to design a good REST API unfortunately
doesn't quite exist. There are many different guidelines and schools of thought
for what is best practice (and many edge cases to consider) and all of those
would ultimately lead to a document way way longer than this. But for now, here
are a few key concepts to take note of when you're working on your next REST API
for DB:

1. _State Transfer_ - this is literally part of the name. A REST API always
   assumes the client (that is, the JavaScript sending requests from your web
   browser or some other server sending out requests) provides all the
   information required for it to complete the request.

Here's an example: `GET /nextArticlesPage`.

What's wrong with this? Think for a moment how the server would provide the
correct response to this request. It'll need to save - and somehow identify -
**every** client's it has ever interacted with's last requested page. That's
clearly extremely expensive, and in modern designs where you probably have
multiple similar instances of a single server (think Google's server farms
serving the search engine), having to synchronize the client state between all
of these servers is ridiculously hard, and almost impossible to achieve.

So how does REST solve this? We instead pass our existing state to our server as
part of our request either the _URI query parameters_ in `GET`, or as data in
the _body_ of a `POST` request. In our case, it might look something like this:

`GET /articles?page=2` or `GET /articles?orderBy=id&last=54&limit=30`

See how this is so much easier for servers for handle?

2. _URIs identify Resources_ - this is kind of straightforward (and it also
   applies to designing how you structure your websites in general), but it's
   definitely worth saying. The URI should tell you up front what resource
   you're expecting to get out of this. Here are a few possible examples:

- `GET /post/{post ID} => /posts/1423` - gets you the post with an ID of 1423
- `GET /article` - get a list of articles
- `GET /article/{article slug} => /article/sports-usc-ucla-2017` - gets you the
  specific article
- `GET /article/{article slug}/comment => /article/sports-usc-ucla-2017/comment` -
  gets you the comments for the article

3. _Verbs mean Things_ - HTTP gives you a whole bunch of verbs to play with, and
   you really should use them! Each of the verbs have a different meaning, and
   they need to conform to certain expected behaviors. Here's a
   [useful table](http://www.restapitutorial.com/lessons/httpmethods.html).
   There's also an idea of _idempotency_ associated with the various verbs, and
   here's another
   [useful link](http://www.restapitutorial.com/lessons/idempotency.html) to
   explain the concept (so I won't have to).
