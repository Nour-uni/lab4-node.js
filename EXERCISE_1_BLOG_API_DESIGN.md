# Exercise 1: Blog API Design

## Posts

**GET /api/posts**
- Retrieves a list of all blog posts (supports pagination).
- **Safe**: Yes
- **Idempotent**: Yes

**GET /api/posts/:postId**
- Retrieves a single blog post by its ID.
- **Safe**: Yes
- **Idempotent**: Yes

**POST /api/posts**
- Creates a new blog post.
- **Safe**: No
- **Idempotent**: No

**PUT /api/posts/:postId**
- Replaces an entire blog post.
- **Safe**: No
- **Idempotent**: Yes

**DELETE /api/posts/:postId**
- Deletes a blog post by its ID.
- **Safe**: No
- **Idempotent**: Yes

## Comments

**GET /api/posts/:postId/comments**
- Retrieves all comments for a specific post.
- **Safe**: Yes
- **Idempotent**: Yes

**POST /api/posts/:postId/comments**
- Creates a new comment on a specific post.
- **Safe**: No
- **Idempotent**: No

**DELETE /api/posts/:postId/comments/:commentId**
- Deletes a specific comment from a post.
- **Safe**: No
- **Idempotent**: Yes

## Interactions (Likes)

**POST /api/posts/:postId/likes**
- Likes a specific post.
- **Safe**: No
- **Idempotent**: Yes (usually implemented nicely so re-liking doesn't create duplicate likes)

**DELETE /api/posts/:postId/likes**
- Unlikes a specific post.
- **Safe**: No
- **Idempotent**: Yes

## Users (Follows)

**POST /api/users/:userId/followers**
- Follows a specific user.
- **Safe**: No
- **Idempotent**: Yes

**DELETE /api/users/:userId/followers**
- Unfollows a specific user.
- **Safe**: No
- **Idempotent**: Yes
