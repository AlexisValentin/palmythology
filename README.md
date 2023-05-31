# Palmythology

A website revealing many things about the legends and myths of the mythologies around the world.

## Requirements

Make sure you meet all the following requirements below :

- `npm` (node package manager) must be set up
- `node` must be installed on your computer
- Don't forget to `npm install` so you can update your dependencies via the `node_modules` folder

The following statements list the recommendations for the best possible experience :

- Optimal use meant for `vscode` users
- `prettier`, `git blame` and `react` snippets are recommended

## Scripts

### `npm run dev`

Automatically launches a local web server on your browers, allowing you to build and running the website, starting from the home page.

### `npm run test`

Runs all unit tests from the `.test.ts` files and prompt their success of their failure.

### `npm run watch`

Similar to `npm run test` except it can take an additional parameter `[pattern]` to only run the unit tests on the matched pattern file names.

### `npm run coverage`

Will do the same as `npm run test`, except is will display the current test coverage in percentage, in order to show what test files could be improved or not, and if all the cases are tested.

### `npm run prettier`

Runs `prettier` formatting and all the following extension files :

- typescript files `.tsx` and `.ts`
- javascript files `.js`
- styling files `.css`
  Note : `node_modules` files are of course ignored.

### `npm run push`

Allows you to push any new commit to a known branch (pushing to an undefined remote branch will cause prompt to display the following parameter for `git push` : `--set-upstream origin new_branch`). It will execute the following command lines :

- `git add .` -> adds all updated files of the current folder
- `npm run test` -> runs all unit tests to make sure they all are successful
- `git commit` -> creates a new commit and will provide a prompt in order to name it
- `git push` -> pushed your commit to the known remote branch

### `npm run push:fast`

Allows you to quickly push your diff to the remote. It will execute the following command lines :

- `git add .` -> adds all updated files of the current folder
- `git commit --amend -no-edit` -> merge current staging into the previous commit and keep the same name
- `git push --force-with-lease` -> force push to the remote without risking overwritting any modification

### `npm run build`

Provided an archive of the built sources, mostly in order to optimize production usage and to prepare website deployment.

### ncu (npm-check-updates)

Checks if current packages are up-to-date and propose to upgrade to the newest versions.
It is used this way :

- `ncu` or `npm-check-updates` to get the list of deprecated packages
- `ncu install` or `npm-check-updates instamm` to change to the newer package versions inside `package.json`
- Perform a simple `npm i` or `npm install` to upgrade your dependencies

Be sure to check the state of the website. Big steps of versions can be deathly sometimes!

## External services

### Storyblok

Storyblok is a headless CMS meant to dynamically and easily organize website content with no need to deploy any version of a codebase.

Access to Palmythology's API is done by `fetchAllStories` methods in `src/helpers/storyblok.ts`.
This way, you're meant to get all the stories from Storyblok. Stories are divided into 3 different components :

- `card` -> meant to be used for website carrousel when searching for a specific card
- `quoi2neuf` -> meant to be used for Quoi 2 neuf section into the Folders topic
- `quEstCeQueCaFiche` -> meant to be used for website carrousel when accessing from the Folders topic
