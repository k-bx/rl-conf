build:
	yarn run build
.PHONY: build
deploy:
	yarn run build && firebase deploy
.PHONY: deploy
