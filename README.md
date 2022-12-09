# Palmythology

A website revealing many things about the legends and myths of the mythologies around the world.

## Requirements

Make sure you meet all the following requirements below :

- `npm` (node package manager) must be set up
- `node` must be installed on your computer (works perfectly with `v.16.13.1`)
- Don't forget to `npm install` so you can update your dependencies via the `node_modules` folder

The following statements list the recommendations for the best possible experience :

- Optimal use if meant for `vscode` users
- `prettier`, `git blame` and `react` snippets are recommended

## Scripts

### `npm run start`

Automatically launches a local web server on your browers, allowing you to build and running the website, starting from the home page.

### `npm run prettier`

Runs `prettier` formatting and all the following extension files :

- typescript files `.tsx` and `.ts`
- javascript files `.js`
- styling files `.css`
  Note : `node_modules` files are of course ignored.

### `npm run fast`

Allows you to quickly push your diff to the remote. It performs `git` instrucions in that order :

- `git add .` -> adds all updated files of the current folder
- `git commit --amend` -> merge current staging into the previous commit (prompt will ask you to confirm)
- `git push --force-with-lease` -> force push to the remote without risking overwritting any modification

## External services

### Storyblok

CMS purpose. Coming soon!

### Cloudinary

Media storage purpose. Coming soon!
