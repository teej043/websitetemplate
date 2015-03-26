#Website Template

###For E-bureauet frontend developer collaboration

The aim of this project is to create our own basic frontend template as foundation for all future websites we will develop. This template should conform to the best practices and standards.

Prerequisites needed to be done on the developer machine:

* Install Node.JS and obtain the nodejs command prompt. https://nodejs.org/download/
  * Install Grunt, on the nodejs command prompt ```npm install -g grunt```.
  * Install Bower, on the nodejs command prompt ```npm install -g bower```.
* Install CSS Processors. You need ruby installed on your machine http://rubyinstaller.org/
  * Using the ruby command prompt, ```gem install sass``` and ```gem install compass```
  * Note: if the above code didn't work try input this first: ```gem source -a http://rubygems.org/```

Once you have a cloned or forked repository of this, you need to open up your command line interface and type in:

```
npm install
```
and then
```
bower install
```

Doing so will download all dependencies this project requires automatically.

Run the development utility tasks by running grunt, just input:  ```grunt``` on the command line.

To have the grunt pre-processor tasks for css and html run as you edit files, just input ```grunt watch```, this will monitor your file modifications and run the tasks automatically.
