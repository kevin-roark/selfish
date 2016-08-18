all:
	browserify js/main.js -o js/build.js
	node build.js

client:
	browserify js/main.js -o js/build.js

server:
	node build.js
