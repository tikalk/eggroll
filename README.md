## Prerequisites
1. Install NodeJS - http://nodejs.org/ or via [command line](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
1. Gulpjs: ```npm install -g gulp```

## Steps to run the app
Run npm to install dependencies  
```npm install```  
Build project (will run bower install, compile less and concat js)
```npm run serve```

Open <http://localhost:3000>
### Javascript Code Styleguide
1. js code styleguide should follow [google's js code styleguide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
2. nodejs code stytelguide should follow the [common best practices of nodejs styleguide](http://stackoverflow.com/a/5497467)

### Javascript Linter
1. using jshint as global nodejs service: ```npm install -g jshint```
2. The project follows '.jshintrc' as the best practices [of node.js styleguide](https://github.com/felixge/node-style-guide)
3. [Instructions for setting jshint with sublime linter plugin for sublimetext](https://github.com/SublimeLinter/SublimeLinter-jshint)

## Git & Github Guidelines
The guideline is to work in a feature branch flow as described well in [Github's Scott's blog post](http://scottchacon.com/2011/08/31/github-flow.html)

### Naming Convention for Feature Branch
Each feature branch should be named with a prefix of "**feature-**", so that the automation won't run any tests, build etc.. on these branches.

i.e., a branch for feature of date picker should be named:
**feature-date-picker**

__based on angular fullstack yeoman generator__
