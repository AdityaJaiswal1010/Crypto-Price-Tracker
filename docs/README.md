# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```
x
### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.





My Next.js App Setup and GitHub Deployment Guide

--------------------------------------------------
Step 1: Create a GitHub Repository
- Log in to your GitHub account.
- Click on "New Repository".
- Name your repository (e.g., "my-nextjs-app"), set its visibility (public/private), and create it.

Step 2: Prepare Your Local Next.js Project
- If you haven't created a Next.js app yet, run:
  npx create-next-app my-nextjs-app
- Navigate into your project folder:
  cd my-nextjs-app

Step 3: Initialize Git in Your Project
- Open your terminal in the project directory.
- Run:
  git init

Step 4: Create a .gitignore File
- In your project’s root directory, create a file named ".gitignore" and add:
  node_modules/
  .next/
  .env

Step 5: Stage and Commit Your Files
- Add all files to the Git index:
  git add .
- Commit your changes with a message:
  git commit -m "Initial commit of Next.js app"

Step 6: Add the Remote GitHub Repository
- Link your local repository to your GitHub repository:
  git remote add origin https://github.com/your-username/my-nextjs-app.git
  (Replace "your-username" with your GitHub username.)

Step 7: Push Your Code to GitHub
- Push your commits to GitHub (assuming your default branch is "main"):
  git push -u origin main

Step 8: Verify on GitHub
- Open your browser and navigate to your GitHub repository URL.
- Refresh the page to see your files uploaded.

--------------------------------------------------
Optional: Create a README.md for Your Repository

Below is a sample README content you can use for documenting your project:

--------------------------------------------------
# My Next.js App

This repository contains a full Next.js application with server-side rendering, dynamic routing, and API routes.

## Overview

Built with [Next.js](https://nextjs.org/), this project is designed as a robust starting point for web applications.

## Setup Instructions

### Prerequisites
- **Node.js**: Version 14 or later (download from https://nodejs.org/).
- **Git**: (download from https://git-scm.com/).

### Local Setup
1. **Clone the Repository**
