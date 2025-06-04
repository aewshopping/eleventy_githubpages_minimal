# Minimal eleventy with github pages

_Date last updated: 5 June 2025_

Objective is to make a minimal eleventy site and serve with github pages, as easily as possible!

My starting premise is that I am going to copy the output directory `_site` to the repo (noting that I need to rename the output directory to `docs`), rather than do what you should normally do which is .gitignore it.

## Option 1 - build automatically with `deploy from a branch`

If you select this option in settings **you will need to run the build process remotely** to create the build directory and then push this all to the repo.

Any changes to the repo (eg a change to the readme) will trigger github pages to update, even where there won't be any change to the site itself.

To get github pages to work you need to set the output path directory to `docs`. No other directory is available to be selected in the github pages settings - a bit odd but there you go.

## Option 2 - build with `GitHub actions`

This is what is currently selected in the settings. You now have two more options!

### Option 2(a) - use the official (and recommended) method...

...which can be found here [https://www.11ty.dev/docs/deployment/#deploy-an-eleventy-project-to-git-hub-pages](https://www.11ty.dev/docs/deployment/#deploy-an-eleventy-project-to-git-hub-pages). This is a single github actions yaml file which uses the action [https://github.com/peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

By default it will run every time the repo changes, building a new site and **not** requiring you to check in your build site to the repo which is a **good thing**.

### Option 2(b) - use the DIY method...

...which is what is currently in place for this repo. I created two workflows:

- an `eleventybuild.yaml` workflow which builds the site and saves the built site in the repo (under docs so I can switch back to the old method if I feel like it).
- a `docs_serve.yaml` which is triggered by completion of the above workflow and uses the boilerplate github actions workflow that you are presented with in settings if you go for the build with `GitHub actions` option and select the `static pages` workflow. I updated the path to `'./docs'` to point it to where the static files created above are stored. 

_Note that under **option 2(a)** and under **option 2(b)** you can configure the github actions file to run on push to the main branch or some other trigger. I have it on workflow dispatch right now - ie you have to click a button to deploy._
