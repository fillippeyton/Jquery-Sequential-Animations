# Jquery Sequential Animations!

This small Jquery plugin is used to (much like the name suggests) sequentially animate HTML elements on a page. You can animate practically any CSS property that Jquery can accept. This is very useful for animating elements in or out of a page.

At its core, this plugin uses Jquery's [```.animate()```](http://api.jquery.com/animate/) to animate CSS properties with Jquery. Just pass the plugin CSS Object literal in ```animateFrom``` and ```animateTo``` to animate!

## Features
- Chainable
- Animate any CSS property that Jquery can animate
- Can run a callback function after all animations have completed





## Available Options:
```javascript
$('.block').sequentialAnimations({
	animateFrom: {},
		// Required: Yes
		// Accepted: Jquery object literal
		// Default: {}
	animateTo: {},
		// Required: Yes
		// Accepted: Jquery object literal
		// Default: {}
	animationDelay: 500,
		// Required: No
		// Accepted: int
		// Default: 500
	animationSpeed: 1000,
		// Required: No
		// Accepted: int
		// Default: 1000
	callback: null
		// Required: No
		// Accepted: function
		// Default: null
});
```
