install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	sudo npm link

wrap:
	make publish
	make link

rec:
	asciinema rec

even:
	node bin/brain-even.js

calc:
	node bin/brain-calc.js

gcd:
	node bin/brain-gcd.js

progression:
	node bin/brain-progression.js

prime:
	node bin/brain-prime.js

fix:
	npx eslint . --fix

eslint:
	npx eslint .