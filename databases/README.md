# Databases

## Outline

## What's A Database?

Believe it or not, a "database" is just a set of files. Granted, it's a set of files managed by a database management system that performs complex query optimizations and utilizes special storage formats and techniques to provide the best possible representation... but it's just a set of files at the end of the day. This set of files, the database, is managed by a database management system (DBMS) which does all the things we typically think of as "a database."

A database is essential to any application or system that needs to store persistent data, for example, user names and passwords, articles and authors, and grades and student records. 

### Types

#### Relational

Relational databases like MySQL and PostgreSQL are the most popular type of DBMS (called RDBMS). They represent a database like a collection of spreadsheets. Each different spreadsheet is a different **table**. Each table represents a different "thing" (formally called an "entity"). For example, Twitter has `users`, `tweets`, and `likes` tables while UCLA might have `students`, `courses`, `faculty`, and `enrollments` tables. Each table has **rows** or records and **columns** or attributes. For example, the Twitter user table might have columns of `username`, `bio`, `theme_color`, `profile_picture_url`, and so on. A particular user would be represented as a row/record in that table. So given those columns/attributes, we could represent Taylor Swift's Twitter account as `(taylorswift13, Lover out now, blue, https://pbs.twimg.com/profile_images/1153776393139830784/JWFUWY7I_400x400.jpg)`. 

You might notice something about those tables we gave as examples though: they're *related* to each other. A given Twitter `user` will `like` a `tweet`! Each one involving a particular row in those tables! A relational database handles these relations extremely efficiently, using integer IDs between tables to make queries and lookups lightning fast.

For example, let's say Taylor Swift liked her own tweet (how embarrassing!). We could represent that in our hypothetical Twitter database as follows:

`users` Table

| username      | bio           | theme_color | profile_picture_url                                          |
| ------------- | ------------- | ----------- | ------------------------------------------------------------ |
| taylorswift13 | Lover out now | blue        | https://pbs.twimg.com/profile_images/1153776393139830784/JWFUWY7I_400x400.jpg |

`tweets` Table

| id                  | text              | user          | time                |
| ------------------- | ----------------- | ------------- | ------------------- |
| 1164995436169629697 | WHAT IS LIFE EVEN | taylorswift13 | 23 Aug 2019 1:18 PM |

`likes` Table

| tweet               | user          | liked_at            |
| ------------------- | ------------- | ------------------- |
| 1164995436169629697 | taylorswift13 | 23 Aug 2019 1:19 PM |

*Note: The user in the likes table is not the poster of the tweet. They're just the same because Taylor liked her own tweet remember!*

As we can see here, our `likes` table *relates* or *references* both of our other tables. In SQL, this is called a **foreign key**.