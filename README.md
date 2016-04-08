# uServe

This is a README for the software side of the uServe project on 26/3/2016, after Ben Clifford, a volunteer worked on it.

##Contact
Ben - imbenclifford@gmail.com
Jorge - jorgeappiah@gmail.com

##What has been done

Search functionality on uServe for Khan Academy and Simple Wikipedia, using elastic search.

##What’s left to do

- Pagination on uServe to handle more than 20 results - you can change the number of results in the AJAX request using the size parameter - e.g. ?size=20
- Fully indexed wikipedia with only relevant articles - I did not have time to complete running the index and it indexes some weird things like Wikipedia Users
- Tidy up the html/css/js on the uServe site

##Components:

1. uServe site
2. Simple Wikipedia Local Copy
3. KA Lite local copy
4. ElasticSearch
5. Scrapy

##Installation and running

All the components should be on a memory stick given to you, if anything is missing I have provided instructions about how to download it.

1. uServe
This is the landing page for all other content and has the search interface.
Pull from github: https://github.com/imbenclifford/userve
Or download from dropbox: [missing]
You should spin up a server to run this on port 8009. e.g. on the command line, in the directory, type:
php -S localhost:8009

I should warn that there is a lot of commented out code on here. There was a lot of features which seemed redundant at this stage and made developing search harder so I got rid of them.

2. Simple Wikipedia
Simple Wikipedia is a lighter version of wikipedia written in Simple English. This makes it more suitable for those speaking English as a foreign language and children.
Download https://www.httrack.com/ and use it to download
https://simple.wikipedia.org/wiki/Main_Page

You may also want to explore XOWA - this lets you easily download wikipedia for offline reading. It may not work so smoothly in the browser.

Spin up a server for this on port 8007:
php -S localhost:8007

3. KA Lite
This is a fantastic piece of prebuilt software which contains the main content from Khan Academy and has the option to download additional content when connected to the internet.
Download and Install KA Lite: https://learningequality.org/ka-lite/
Once you have installed you can ‘Start KA Lite’ to run the site on port localhost:8008.

4. ElasticSearch
This is the search service which contains the indexed pages of Khan Academy and Wikipedia. Though it should be noted that while Khan Academy is fully indexed, Wikipedia is only partially indexed, so you will have to index the rest using scrapy (see below).

To run ElasticSearch run elasticsearch-2.2.1/bin/elasticsearch - this will run a search instance on port 9200.

You can install elasticsearch from scratch at: https://www.elastic.co/downloads/elasticsearch If you do so, you will need also need to index the Khan Academy and Wikipedia pages from scratch, using scrapy.

5. Scrapy
See: https://github.com/imbenclifford/uscrape
