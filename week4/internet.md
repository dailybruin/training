# How the Internet Works
This may seem a little silly, or even a little out of scope, but it's actually really important for us as web developers to have at minimum some understanding of what's going on under the hoods. As a bonus, "What happens when you type google.com into the browser" is a popular interview question with companies such as Stripe! 

Let's try and tackle this question with one of our own web services - Bruinwalk!

## Step 1: The DNS
When you type `http://bruinwalk.com` into your web browser, your OS is tasked with the job of finding out just how exactly to get to this `http://bruinwalk.com`. Of course, the internet, as it is designed (the _Internet Protocol, IP_) is not navigatable using these human readable strings and names, and requires a translation into an **IP Address**, which the network understands, to identify the machine at the other end of the wire that contains all the wonderful content that you want.

> There is no cloud. It's just someone else's computer.

So how is this IP address acquired by your computer? The primary method is through a _caching recursive DNS resolver_, which is basically someone else's computer (your ISP's, or El Goog's) which does this translations for you by asking the _top level domain server_ (.com/.org/.edu/.io - .com in the Bruinwalk case) what IP address this is. Now those servers figure that you really are looking for the _authorative name server_ for `bruinwalk.com`, and they redirect you to Cloudflare's name servers - the company we designated to control and manage the `bruinwalk.com` domain. For our purposes, this is where our journey ends, and the Cloudflare servers give us the `A` record which records the IP address of our Bruinwalk server.

> Live Demo: Cloudflare

The alternative method is through this special thing known as the hosts file. On *nix it's found at `/etc/hosts` and on Windows it's `C:\Windows\System32\Drivers\etc\hosts`. Here you can basically define your own translations for whatever purposes you fancy.

## Step 2: Hosts and Ports
Our journey, however, is not quite finished. While we have located the network address of this other computer (and presumably we can reach them ... somehow), we aren't exactly interested in talking to a piece of hardware - we really want to speak to some software on the computer that can respond to our demands for grade distributions. 

Luckily, some smart people (some of whom are UCLA alumnus!) came up with an accompanying protocol to IP - the **Transmission Control Protocol (TCP)**. This cool thing contains the ideas of _ports_ that accompany a machine's physical address. If the IP address was the _street address_ of a Hotel for instance, then the port would be _room number_. To continue with the analogy, this allows some "Bruinwalk program" to sit and wait inside the hotel room to wait until someone comes knocking.

(and yes in our world of TCP/IP hotels, they are all single occupancy. So strictly only one _process_ per port, but a greedy process can hold multiple ports.)

> Live Demo: https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections-on-a-vps

But wait! We don't specify a room number when we type `bruinwalk.com` into the address bar! That's just really for your convenience. With the stuff you browse on websites, the port 80 (or 443 on #secure HTTPS) is _implied_. 

## Step 3: Speak HTTP and Enter
Hooray, we've now located the Bruinwalk server process, and now we can finally see that sweet 90% A curve ... or can we? We now need to somehow tell the server what our intentions are, and what exactly it is we want, and we do that with another fancy protocol: **HTTP**. HTTP is what we call a plaintext protocol, which means that you our dear reader can read and write HTTP! 

This is where all those `/professors/paul-r-eggert/com-sci-33/` bits come in. This, in the parlance of HTTP, is the _resource path_. By convention, this is how and where you're supposed to specify how to find a particular resource. When you hit enter to navigate to this URL,`http://www.bruinwalk.com/professors/paul-r-eggert/com-sci-33/` what you are really doing is sending this bit of text (which is HTTP) to the server:

```
GET /professors/paul-r-eggert/com-sci-33/ HTTP/1.1
Host: www.bruinwalk.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Referer: http://www.bruinwalk.com/professors/paul-r-eggert/
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
```

The part you really have to care about is the first couple of characters (in caps) - `GET`. This is what we call a **HTTP Verb**, and this will be very important and useful when we talk about how to design REST APIs. On the web, the bulk of actions you'll be performing will be `GET`, although there'll be situations when you send out `POST` and `DELETE` commands as well.

> Live Demo: Dev Tools Network Waterfall

On the server side of things, the server process (in reality - the Nginx web server, then passed on to the Bruinwalk Django application server) reads the HTTP command you just sent over, tries to locate the resource path you specified, and either fails (and returns you a 404 page), or successfully finds it, runs some code to fetch your grade distributions for the class and returns it back to you as a nice HTML page.

## Step 4: Profit?
...and we're done! If you want to know more about the nitty gritty of this whole shebang, take CS 118! (where you'll learn more than you possibly will ever want to know about networks)
