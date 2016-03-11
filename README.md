# About

Ever had the experience of trying to talk to someone who doesn't speak your 
language? Maybe you resorted to using 
[Google Translate](https://translate.google.com) to understand them, but found 
the results incomprehensible. Maybe you then resorted to using the 
[Bing](https://bing.com/translator), [Frengly](http://frengly.com) and 
[Yandex](https://translate.yandex.com) translation services, and eventually 
gathered enough shreds of meaning from all 3 translations to make sense of the 
other person.

Now you can get crappy translations from 3 web translation services at once, 
[on one crappy website](https://limitless-spire-84378.herokuapp.com). Hopefully 
this will reduce the time you spend frantically typing instead of conversing by 
at least 2/3.

# Description

TranslationStation concurrently fetches translations from the Bing, Frengly and 
Yandex API's. It is styled to resemble Google Translate, with the addition of a 
language search feature.

Google Translate's API costs money and all the of the translation API's I 
implemented are free. So I thought it'd be funny to style this translaiton 
website to look just like Google Translate, while having it use the other API's 
instead.

Check out the live website [here](https://limitless-spire-84378.herokuapp.com)!

It's a work in progress.

# Technical Details

This website runs on [NodeJS](https://nodejs.org/), 
[Express 4](http://expressjs.com/) and [Angular 1.5.0](https://angularjs.org/). 
Maybe I'll add MongoDB so that I can officially say I built it on the MEAN 
stack. There's no reason to add a database now, although it could be useful for 
adding analytics features (e.g. to count queries and show users the most 
commonly searched translations for each language pairing). However, using an LRU 
cache to show users trending translation queries yields much faster load times 
than saving every translation query in a database, and completing a database 
query to find the most-searched translations of all time.

In order to make the user experience as blazingly fast as possible and to 
minimize costly API calls, I've taken advantage of Node's 
[node-cache](https://www.npmjs.com/package/node-cache) library to cache the 
results of recent translation queries. It isn't an LRU cache, but stores data 
until it expires.
