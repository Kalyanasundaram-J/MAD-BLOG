# MADBlog - Blog Posting Site

MADBlog is a web application for publishing and reading blog posts. It allows users to sign up, Sign in, create, view, and manage their own blogs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Project Screenshort](#project-screenshort)

## Introduction

MADBlog is a platform where users can express their thoughts and share their stories through blog posts. Users can sign up, sign in, and create their own blogs. The home page displays all the blogs created by various users. Each user also has a personal "My Blog" section that showcases their authored blogs. The admin has the ability to manage users and their content.

## Features

- User Authentication:
  - Sign Up: Users can create an account to access the platform.
  - Sign In: Registered users can Sign in to their accounts.
  - Sign Out: Users can securely Sign out of their accounts.

- Home Page:
  - Displays all blogs created by users.
  - Users can click on a blog to read the full post.

- My Blog Section:
  - Signed-in users can view and manage their authored blogs.

- Admin Panel:
  - Admin users have the ability to:
    - Delete inappropriate content.
    - Block users who violate community guidelines.

## Getting Started

To get started with MADBlog, follow these steps:

1. Clone the repository:
```bash
$ git clone https://github.com/Kalyanasundaram-J/MAD-BLOG.git
$ cd MAD-BLOG
```
2. Environment Variables
In this project, we use environment variables to manage configuration settings and sensitive information. To get started, follow these steps:
  1. **Create a `.env` File:**
  In the root directory of your project, create a file named `.env`. This file will contain your environment variables
  2. **Define Environment Variables:**
  Open the `.env` file and define your variables in the format `KEY=VALUE`. Copy the content from .env.example


3. Install dependencies:
```bash
$ npm install
```

4. Initialize the project:
```bash
$ npm run dev
```

5. Need to setup the <strong>mongo DB</strong> and assign the url for DB in the index.js file.

6. Open your web browser and navigate to http://localhost:8080 to access the application.

## Usage
1. Sign Up:
    - Click on "Sign Up" to create a new account.
2. Sign In:
    - Use your registered credentials to sign in.
3. Home Page:
    - Explore the list of blogs created by users.
    - Click on a blog to read the full post.
4. My Blog:
    - After logging in, navigate to the "My Blog" section to manage your authored blogs.

## Admin Panel
As an admin user, you have access to the admin panel:

1. Log in with your admin credentials.
2. Admin Actions:
    - Delete inappropriate content: Remove content that violates community guidelines.
    - Block users: Prevent users from accessing the platform due to policy violations.

## Contributing
We welcome contributions from the community! To contribute to MADBlog:

1. Fork the repository.

2. Create a new branch: git checkout -b feature/new-feature

3. Commit your changes: git commit -m "Add a new feature"

4. Push to the branch: git push origin feature/new-feature

5. Create a pull request.

## Tech Stack
<img src="https://avatars.githubusercontent.com/u/18269663?v=4" alt="Node.js" width="64" height="64">
<strong>Express.js</strong>
<img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="Mongo DB" width="64" height="64">

## License
This project is Not licensed.

## Support
For any questions or support, contact us at cdab256@gmail.com.

## Project Screenshort

1. ### Home
<br>
<a href="https://imgur.com/V59CYKD"><img src="https://i.imgur.com/V59CYKD.png" title="source: imgur.com" /></a>

2. ### SignUp
<br>
<a href="https://imgur.com/uCLGQ0y"><img src="https://i.imgur.com/uCLGQ0y.png" title="source: imgur.com" /></a>

3. ### SignIn
<br>
<a href="https://imgur.com/asTuoS0"><img src="https://i.imgur.com/asTuoS0.png" title="source: imgur.com" /></a>

4. ### My Blog
<br>
<a href="https://imgur.com/ivklikp"><img src="https://i.imgur.com/ivklikp.png" title="source: imgur.com" /></a>

5. ### Blog List (Admin Only)
<br>
<a href="https://imgur.com/MhK1804"><img src="https://i.imgur.com/MhK1804.png" title="source: imgur.com" /></a>

6. ### User List (Admin Only)
<br>
<a href="https://imgur.com/ULK7bqo"><img src="https://i.imgur.com/ULK7bqo.png" title="source: imgur.com" /></a>

