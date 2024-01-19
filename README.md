# Blogging Platform REST API

Welcome to the Blogging Platform REST API! This API provides endpoints for managing blog posts, comments, user authentication, and related operations.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [API Documentation](#api-documentation)
   - [Authentication](#authentication)
   - [Users](#users)
   - [Posts](#posts)
   - [Comments](#comments)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

This REST API is designed to power a blogging platform with features such as user authentication, blog post management, and commenting. It is built using Node.js, Express.js, MySQL, and JWT for authentication.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MySQL database server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VitthalGund/Blogging-Platform-REST-API/.git
   ```

2. Install dependencies:

   ```bash
   cd blogging-platform-api
   npm install
   ```

3. Set up your MySQL database:
   - Create a new database (`blog` for example) and update the `config/db.js` file with your database credentials.

4. Run database migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The API will be available at `http://localhost:3500/api`.

## API Documentation

### Authentication

#### Register

**Endpoint:**

```
POST /api/auth/register
```

**Description:**

Register a new user account.

**Request:**

```json
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "User has been created."
}
```

#### Login

**Endpoint:**

```
POST /api/auth/login
```

**Description:**

Authenticate a user and generate a JSON Web Token (JWT) for subsequent requests.

**Request:**

```json
{
  "username": "exampleUser",
  "password": "password123"
}
```

**Response:**

```json
{
  "id": 1,
  "username": "exampleUser",
  "email": "user@example.com",
  "img": "user_avatar.jpg",
  "token": "eyJhbGciOiJIUzI1NiIsIn... (JWT Token)"
}
```

#### Logout

**Endpoint:**

```
POST /api/auth/logout
```

**Description:**

Log out the currently authenticated user.

**Response:**

```json
{
  "message": "User has been logged out."
}
```

### Users

#### Get User Profile

**Endpoint:**

```
GET /api/users/profile
```

**Description:**

Get the profile details of the authenticated user.

**Response:**

```json
{
  "id": 1,
  "username": "exampleUser",
  "email": "user@example.com",
  "img": "user_avatar.jpg"
}
```

### Posts

#### Get All Posts

**Endpoint:**

```
GET /api/posts
```

**Description:**

Get a list of all blog posts.

**Response:**

```json
[
  {
    "id": 1,
    "username": "exampleUser",
    "title": "Sample Post",
    "desc": "This is a sample blog post.",
    "img": "post_image.jpg",
    "cat": "technology",
    "date": "2024-01-20"
  },
  // ... other posts
]
```

#### Get Post Details

**Endpoint:**

```
GET /api/posts/:id/details
```

**Description:**

Get details of a specific blog post, including comments.

**Response:**

```json
{
  "id": 1,
  "username": "exampleUser",
  "title": "Sample Post",
  "desc": "This is a sample blog post.",
  "img": "post_image.jpg",
  "userImg": "user_avatar.jpg",
  "cat": "technology",
  "date": "2024-01-20",
  "comments": [
    {
      "id": 1,
      "content": "Great post!",
      "date": "2024-01-20",
      "user_id": 2,
      "username": "otherUser",
      "userImg": "other_user_avatar.jpg"
    },
    // ... other comments
  ]
}
```

#### Create Post

**Endpoint:**

```
POST /api/posts
```

**Description:**

Create a new blog post.

**Request:**

```json
{
  "title": "New Post",
  "desc": "This is a new blog post.",
  "img": "new_post_image.jpg",
  "cat": "travel",
  "date": "2024-01-20"
}
```

**Response:**

```json
{
  "message": "Post has been created."
}
```

#### Update Post

**Endpoint:**

```
PUT /api/posts/:id
```

**Description:**

Update an existing blog post.

**Request:**

```json
{
  "title": "Updated Post",
  "desc": "This post has been updated.",
  "img": "updated_post_image.jpg",
  "cat": "food"
}
```

**Response:**

```json
{
  "message":

 "Post has been updated."
}
```

#### Delete Post

**Endpoint:**

```
DELETE /api/posts/:id
```

**Description:**

Delete a blog post.

**Response:**

```json
{
  "message": "Post has been deleted."
}
```

### Comments

#### Get All Comments for a Post

**Endpoint:**

```
GET /api/posts/:id/comments
```

**Description:**

Get all comments for a specific blog post.

**Response:**

```json
[
  {
    "id": 1,
    "content": "Great post!",
    "date": "2024-01-20",
    "user_id": 2,
    "username": "otherUser",
    "userImg": "other_user_avatar.jpg"
  },
  // ... other comments
]
```

#### Add Comment to a Post

**Endpoint:**

```
POST /api/posts/:id/comments
```

**Description:**

Add a new comment to a specific blog post.

**Request:**

```json
{
  "content": "This is a great post!"
}
```

**Response:**

```json
{
  "message": "Comment has been added."
}
```

#### Update Comment

**Endpoint:**

```
PUT /api/posts/:id/comments/:commentId
```

**Description:**

Update an existing comment for a specific blog post.

**Request:**

```json
{
  "content": "Updated comment."
}
```

**Response:**

```json
{
  "message": "Comment has been updated."
}
```

#### Delete Comment

**Endpoint:**

```
DELETE /api/posts/:id/comments/:commentId
```

**Description:**

Delete a specific comment for a specific blog post.

**Response:**

```json
{
  "message": "Comment has been deleted."
}
```

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
