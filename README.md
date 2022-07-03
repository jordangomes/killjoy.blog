# killjoy.blog

killjoy is a blog run by [Jordan Gomes](https://jordangomes.com) to document my many trials and tribulations navigating the world of IT. the website has been put together with [SvelteKit](https://kit.svelte.dev/) and [MDsveX](https://github.com/pngwn/MDsveX)

![alt](./static/img/banner.jpg)
## project structure

| folder            | purpose                                                                         |
| ----------------- | ------------------------------------------------------------------------------- |
| /src              | project source code                                                             |
| /src/components   | reusable svelte components                                                      |
| /src/routes       | web index                                                                       |
| /src/routes/posts | blog index (all .md and svx here show up on home page and posts page)           |
| /src/templates    | page templates                                                                  |
| /static/          | static content index                                                            |
| /static/img/      | image folder blog posts should have their own folders here based on their slugs |
| /static/css       | static css imports                                                              |
| /static/js        | static javascript imports                                                       |

## development
How to work on this project - feel free to submit pr's or issues
1. clone the project to your computer
2. run `yarn install` to install the dependencies
3. to run a local development copy run `yarn dev`


## deployment
Only I can deploy to the official blog domain but if you fork this you'll need to edit  [./static/CNAME](./static/CNAME) and [./gh-pages.js](./gh-pages.js) to match your details.

to deploy run `yarn build` and `yarn deploy`