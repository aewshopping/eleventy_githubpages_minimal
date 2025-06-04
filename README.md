# Minimal eleventy with github pages

Objective is to make a minimal eleventy site and serve with github pages.

I am going to copy the output directory _site to the repo, rather than do what you should normally do which is .gitignore it.

To get github pages to work you need to set the output path directory to `docs`. No other directory is available to be selected in the github pages settings - a bit odd but there you go.

This is to make github pages setup super easy, at the cost of duplicating code.