all:
	git pull
	ng build
	cd dist && ln -s ../data data && cd ..
