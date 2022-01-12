README
===============

## ABOUT

### About this repository

Intended for beginners! Hi :)

This GitHub repo `jasonhargrove/jasonhargrove` is marked as "special" by GitHub. They consume the `README.md` content in the root directory, and display it on my profile. <https://github.com/jasonhargrove>

I'm also using this repo to develop the app served as my home page. <https://jasonhargrove.com>

### About this app

The app for the home page is powered by React. The project is low priority but I'd like to bring more of my private code to it for demos and presentation. Currently working on a project called Mainstream which offers tools for content creators. Some of these will be used here in the future, for general purposes, but also to present my photography and NFT arts. The production app is continuously deployed with AWS Amplify.

See below to run the app locally. See it on the web at <https://jasonhargrove.com>

### About the build lab

The `buildlab` is used to develop build features, and to perform some build tasks by the deployment people and robots.

## GETTING STARTED

### Installation

```
git clone git@github.com:jasonhargrove/jasonhargrove.git
```

```
cd jasonhargrove
```

Node canvas has some dependencies.

> Linux

```
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
```

> OSX

```
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```
https://www.npmjs.com/package/canvas


```
npm i
```

### Run the app for front-end development

The front end workflow is based on `create-react-app`. Learn more here <https://create-react-app.dev>

Start the dev server:

```
npm start
```

The hotloader will watch `src` files for changes, and you'll see your changes in the brower at:

<http://localhost:54321>

Watch the console for more helpful info. Enjoy!


### Run the lab for build-tool development

The developer flow is powered by Nodemon, which watches for changes as I write code. It uses Babel to allow for more advanced JavaScript tools.

```
npm run lab
```

Lab modules are controlled within the code itself. Uncomment or comment as needed, the console will indicate the status.

#### Run only the content job

To see content changes during development, after changing the root `README`, run this job:

```
npm run prebuild-content
```

This will copy the root `README` into the public directory, to be consumed by the app and presented on the home site. (The root file is used by GitHub to display that content on my GitHub profile.)

#### Run the custom pre-build script manually

This copies the content, and also creates the GitHub contributions image. It will do other tasks in the future. Each of these items happens together here:

```
npm run prebuild
```

Assets will be generated in the `public` directory.

#### Run the full create-react-app build (including the custom pre-build tools)

```
npm run build
```

The pre-build files will appear in `public` and then all production assets will appear in `build`.

### Deploy your fork to production

After you've forked this, changed it, how do you get it on the Internet?

The setup is easy and you can get free services for a year.

1. Signup <https://aws.amazon.com>
2. Navigate to AWS Amplify in the services listings
3. Create a new Amplify project
4. Create a front-end, and follow the prompts to connect to GitHub
5. Connect to the fork of this repo

The robot workers will build and deploy the app. An address will be provided to you, and you can create CNAME DNS entries on your custom domain to use that instead.

Bots will redeploy the app when you push commits up to GitHub, or on demand. Cool!
