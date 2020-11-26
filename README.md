<p align="center"> 
  <img src="https://github.com/aline-borges/lemonenergy-test/blob/master/src/images/logo-readme.png?raw=true">
</p>
##

<p align="center"> 
  <img src="https://github.com/aline-borges/lemonenergy-test/blob/master/src/images/github-users-screen.png?raw=true">
</p>

This application is a technical Frontend task from Lemon Energia, which brings cards with information from Github users.The goal is to find and fix as many bugs as possible, delivering an application close to the ideal.

<h2 align="center">The Problem</h1>
It is available for the developer, an application with many bugs such as:
###
- Logic errors;     :question:
- Failing tests;    :skull:
- Misuse of React and browser APIs. There are no bugs in using any other dependencies;       :thumbsdown:
- Visual bugs;      :scream:

<h2 align="center">The Application</h1>
### 
The application has two pages. 

<h4 align="center">Intro</h1>
##
The first (/intro) should be read carefully, as it contains the last instructions for your test! 

<h4 align="center">Assignment</h1>
##
The test starts on the second page (/assignment).
- When the user accesses the /assignment page, the application should request a list of 50 users and their data via the GitHub APIs and we present a list of cards, each containing a single user's information. While the request is not completed, a loading bar should appear at the top of the screen and increase its width indicating the progress of the request.
- When the user scrolls the list up to its lower limit (end of the list - 800px), a new request is started automatically and when complete, the list of cards must be updated with the new users.
- When used on desktops, if the user hovers over a card, there is a visual change on the card that indicates the user's action. Check the design on Figma.
- If the user clicks on any card, an alert message should appear and wait for confirmation.
-- If canceled, continue to the page;
-- If confirmed, redirect to the clicked user’s GitHub profile;

<h2 align="center">Quick Start</h1>
### 

1. Clone this repo

```
$ git clone ...
```

2. Remove `.github/` folder and create a new repo in your Github's account.
:stop_sign: :loudspeaker: **DON'T FORK OR OPEN PULL REQUESTS IN THIS REPO**

```
$ cd <DIRECTORY> && rm -rf .github
$ git remote add origin <REPO_URL>
$ git push -u origin master
```

3. Install the dependencies

```
$ npm install
```

4. Duplicate `.env.example` e and rename it to `.env`

```
$ cp ./.env.example ./.env
```

5. Fill `.env` file with your GitHub's login and [personal access token](https://github.com/settings/tokens)

<h2 align="center">Available Scripts</h1>

- npm start: starts development mode
- npm test: starts tests and watch files
- npm run lint: runs ESLint verification and fix bugs