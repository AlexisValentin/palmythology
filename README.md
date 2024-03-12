# Palmythology

A website revealing many things about the legends and myths of the mythologies around the world.

## Requirements

Make sure you meet all the following requirements below :

- `npm` (node package manager) must be set up
- `node` must be installed on your computer, minimal requirement is `18.17.0` else you won't be able to launch the project
  - However it is recommended to use the stable version `lts/iron -> 20.10.0` via `nvm` (node version manager)
- Don't forget to `npm install` so you can update your dependencies via the `node_modules` folder

The following statements list the recommendations for the best possible experience :

- Optimal use is meant for `vscode` users
- `prettier`, `git blame` and `react` snippets are recommended

> It is important to notice that this project uses the latest versions of ReactJS, NextJS and TailwindCSS. If you need some updgrade about those tools, best be prepared by reading each documentations :
>
> - ReactJS: https://react.dev/ (-> you will need to feel comfortable with Javascript first)
> - NextJS: https://nextjs.org/ (-> you will need to feel proficient with ReactJS)
> - Typescript: https://www.typescriptlang.org/ (-> typing is quite important nowadays)
> - TailwindCSS: https://tailwindcss.com/ (-> do not be negligent with CSS in any circumstance!)

## Scripts

### `npm run dev`

Automatically launches a local web server on your browers, allowing you to build and running the website, starting from the home page.

### `npm run start`

Same usage as `npm run dev`, except it launches with production environnement variables.

### `npm run test`

Runs all unit tests from the `.test.ts` files and prompt their success of their failure.

### `npm run watch`

Similar to `npm run test` except it can take an additional parameter `[pattern]` to only run the unit tests on the matched pattern file names.

> ex: `npm run watch fileToTest.js`

### `npm run coverage`

Will do the same as `npm run test`, except is will display the current test coverage in percentage, in order to show what test files could be improved or not, and if all the cases are tested.

### `npm run prettier`

Runs `prettier` formatting and all the following extension files :

- typescript files `.tsx` and `.ts`
- javascript files `.js`
- styling files `.css`
  Note : `node_modules` files are of course ignored.

### `npm run build`

Provided an archive of the built sources, mostly in order to optimize production usage and to prepare website deployment.

As today we are using NextJS, we won't need to manually type this command because we won't need static assets because we are using SSR (Server Side Rendering).

### `npx npm-check-updates`

Checks if current packages are up-to-date and propose to upgrade to the newest versions. We are using it with `npx`, as it does not require any installation.

> - `ncu` or `npm-check-updates` to get the list of deprecated packages
> - `ncu install` or `npm-check-updates install` to change to the newer package versions inside `package.json`
> - Perform a simple `npm i` or `npm install` to upgrade your dependencies

Be sure to check the state of the website after any upgrade. Big steps of versions can be deathly sometimes!

## External services

### Vercel

Vercel is a deployment tools perfectly fitted to handle NextJS apps (but can also host many other project types like VueJS, Svelte...).

There are many features that allows us to correctly manage our webapp on different environnements:

#### Deployment

Our Vercel is linked to our GitHub organization **LePalmypede** and manage 2 types of environnements:

- **Production**: as its name states, production branch is the reflection of the master branch and it is what the final user sees on **https://palmythology.com**. Use case is to only merge pull requests on the master branch, so production environnement can be delivered by chunks. That way, once codebase is merged and ready to be versioned, do not forget to tag it!
- **Preview**: other branches that are not master are pushed on Vercel as preview environnement. You can find it onto the dashboard and test your branches, and even the develop branch, in order to prepare the merge into master.

⚠️ Please **never** commit directly on master as it would alter the process and mess up with versioning.

### Storyblok

Storyblok is a headless CMS meant to dynamically and easily organize website content with no need to deploy any version of a codebase.
