install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

eslint:
	npx eslint .

link:
	sudo npm link

rec:
	asciinema rec