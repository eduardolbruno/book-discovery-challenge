# Book Discovery App Challenge with Next.js and Docker

## Overview

Welcome to the Book Discovery App coding challenge! This challenge is designed to evaluate your skills in typescript, nodejs development, focusing on backend API routes and frontend implementation, as well as your ability to containerize applications.

## Challenge Structure

This challenge is divided into three parts:

1. Backend Development
2. Frontend Development
3. Dockerization

## Getting Started

1. Fork this repository to your own GitHub account.

- Go to the repository page on GitHub
- Click the "Fork" button in the top-right corner
- Select your personal account as the destination for the fork


2. Clone your forked repository to your local machine:

```bash
git clone https://github.com/<username>/book-discovery-challenge.git
cd book-discovery-challenge
```

## Requirements

### Part 1: Backend Development

Create a Next.js application with API routes that interact with the Open Library API. Your backend should:

1. Implement an API route that searches for books using the Open Library Search API (https://openlibrary.org/dev/docs/api/search)
2. Implement an API route that fetches detailed information about a book using the Open Library Books API (https://openlibrary.org/dev/docs/api/books)
3. Implement basic caching of book data to reduce calls to the Open Library API
4. Create an API route for user's reading list (storing in memory is fine for this challenge)
5. Implement proper error handling and appropriate HTTP status codes

### Part 2: Frontend Development

Create frontend pages in your Next.js application that interface with your API routes. The frontend should have the following features:

1. A search page where users can search for books by title, author, or ISBN
2. A results page that displays the search results with pagination
3. A book details page that shows more information about a selected book
4. Ability for users to add books to their reading list
5. A page to view and manage the user's reading list
6. Include basic error handling and loading states

### Part 3: Dockerization

1. Create a Dockerfile for the Next.js application
2. Ensure that the application can run properly when containerized
3. Create a pull request:

## Focus Areas

Please pay special attention to the following aspects:

- Clean, well-organized code for both backend API routes and frontend components
- Proper state management in the frontend
- Efficient caching mechanism in the backend API routes
- Responsive design for the frontend
- Efficient Dockerfile (multi-stage build if appropriate)

## Getting Started

1. Clone this repository to your local machine
2. Set up a new Next.js project
3. For local development:
   - Use `npm run dev` or `yarn dev`
4. For Docker:
   - Build and run your Docker image

## API Information

- Open Library Search API: https://openlibrary.org/dev/docs/api/search
- Open Library Books API: https://openlibrary.org/dev/docs/api/books

Example search query: `http://openlibrary.org/search.json?q=the+lord+of+the+rings`

## Submission
When you've completed the challenge:

1. Commit your changes
2. Push your changes to your forked repository

- Go to your forked repository on GitHub
- Before creating a pull request
   - Ensure the base repository is the original challenge repository and the head repository is your fork
   - Add any additional comments or notes about your implementation
- Click "Create pull request" again to submit


## Evaluation Criteria

Your solution will be evaluated based on:

- Functionality: Does the app meet all the requirements for both backend and frontend?
- Code Quality: Is the code clean, well-organized, and easy to understand?
- API Design: Are the API routes well-structured?
- State Management: Is state managed effectively and appropriately in the frontend?
- Performance: Is the caching mechanism effective?
- UI/UX: Is the frontend interface intuitive and responsive?
- Error Handling: Are errors handled gracefully on both backend and frontend?
- Dockerization: Is the Dockerfile correctly configured?
- Bonus: Any additional features or improvements you add will be considered

