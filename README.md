# double-click-boilerplate
Boilerplate files for a Double Click banner campaign, includes templates for big box, leaderboard, and skyscraper. Uses grunt to optimize files for deployment.

## Getting Started

Step 1 - Install Node packages

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

```shell
npm install
```

Step 2 - Run optimizer

Edit and add files in the src folder, once you are done run the default grunt task:

```shell
grunt
```

This will create an optimized version of your banner in an opted directory

**Note:** The template is set up to take advantage of Double Click dynamic exit events, you can replace this with a standard click tag if the exit url needs to be static:

```js
var clickTag = 'http://google.com';

container.onclick = function() {
    //Enabler.exit('exit-link');
    window.open(clickTag);
}
```

For more information on Double Click:

[Enabler](https://support.google.com/richmedia/answer/2922448?hl=en&ref_topic=2922400)
[Exit Events](https://support.google.com/richmedia/answer/2922415?hl=en)
[Custom Tracking](https://support.google.com/richmedia/answer/2672519?hl=en&ref_topic=2922400
[Counter](https://support.google.com/richmedia/answer/2672585?hl=en&ref_topic=2922400)
[Timer](https://support.google.com/richmedia/answer/2672558?hl=en&ref_topic=2922400)