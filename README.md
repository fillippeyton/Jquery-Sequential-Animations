# Jquery Sequential Animations!

This small Jquery plugin is used to (much like the name suggests) sequentially animate HTML elements on a page. You can animate practically any CSS property that Jquery can accept. This is very useful for animating elements in or out of a page.

At its core, this plugin uses Jquery's ```[.animate()](http://api.jquery.com/animate/)``` to animate CSS properties with Jquery. Just pass the plugin CSS Object literal in ```animateFrom``` and ```animateTo``` to animate!

## Features
- Chainable
- Animate any CSS property that Jquery can animate
- Can run a callback function after all animations have completed





## Available Options:
```javascript
$('.block').sequentialAnimations({
	animateFrom: {},
		// Required?: Yes
		// Default value: {}
		// Accepted value type: CSS object literal
	animateTo: {},
		// Required?: Yes
		// Default value: {}
		// Accepted value type: CSS object literal
	animationDelay: 500,
		// Required?: No
		// Default value: 500
		// Accepted value type: int
	animationSpeed: 1000,
		// Required?: No
		// Default value: 1000
		// Accepted value type: int
	callback: null
		// Required?: No
		// Default value: null
		// Accepted value type: function
});
```