# How the Internet Works
Before we can start to build websites, we need to consider the underlying architecture that allows people to access our websites.

## Web Browsers
You and me and everyone else with a computer access the web through a __web browser__. Popular examples of browsers are Chrome, Safari, Firefox, Opera, Edge, and Internet Explorer. One of the most important things to remember as a web developer is that different people use different browsers, some of which may not be up-to-date, meaning you can never rely on being able to use the latest browser technology. This is especially true at the Daily Bruin, where our mission is to make the news accessible to the largest amount of people possible.

### Devices
Since the release of the iPhone in 2007 and the iPad in 2010, more and more web traffic has come from mobile devices. As a developer it’s crucial that you keep various screen sizes and orientations in mind and don’t only develop for desktop computers.

### Screen Readers
Not everyone can look at a screen. __Screen Readers__ are programs that read out the contents of a computer screen to a user. They’re most commonly used by users with visual impairments. Many laws have been passed that require websites to be accessible to people with disabilities, not to mention that making your website as accessible as possible is just the right thing to do. The [a11y project](http://a11yproject.com) is an effort to make the web more accessible.

## Web Servers
__Web Servers__ are a special type of computer. What makes them different any old laptop or desktop is that they’re constantly connected to the internet and optimized to send web pages out. Big companies and organizations such as Google and Wikimedia have their own servers, but many medium to small companies and organizations (such as the Daily Bruin) rent servers  from a __web host__ such as Amazon or DigitalOcean.

## Connecting the Browser and the Server
The often overlooked part of the internet is the part in between the browser and the server—the series of tubes. This is perhaps best explained with a concrete example:

Say you want to connect to [dailybruin.com](http://dailybruin.com). How do you do that? You just type in “dailybruin.com”.

When you do this and hit “enter”, your computer needs send a request to the Daily Bruin server. However, it doesn’t know where on the Internet the DB server is, so first goes to a server called a __Domain Name Server__ (DNS). The DNS server will look for the particular domain name provided, in this case “dailybruin.com”, and return an __IP Address__ associated to that domain name back to your browser. Every device on the web has a unique IP address associated with it, and it serves as the way computers know where each other are.

Now that your browser has an IP address, it contacts the computer at that IP address (the Daily Bruin server) and requests the home page, which is sent to the browser in small chunks of about 1000-1500 bytes called __Packets__.

The browser then renders the file once it is fully rendered for you!

