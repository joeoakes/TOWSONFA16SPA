
echo "Making SPA directory structure in $PWD"

# Make the higher level directories
mkdir css
mkdir images
mkdir js
mkdir libs
mkdir template

# make the index
touch index.html


# populate the lower level directories
cd js

mkdir models
mkdir views
mkdir controller

# create the js dependiencies
touch app.js
