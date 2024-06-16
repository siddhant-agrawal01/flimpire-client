# Movie Watchlist Application

## Project Overview

The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management is handled using Redux to ensure efficient and predictable state updates.

## Key Features

1. **Add Movies**
    - Users can add movies to their watchlist by providing details such as the movie title, description, release year, genre, and image URL.
    - Each movie has a unique identifier.
2. **Edit Movies**
    - Users can edit the details of movies already in their watchlist.
3. **Delete Movies**
    - Users can delete movies from their watchlist.
4. **Mark Movies as Watched/Unwatched**
    - Users can toggle the status of a movie between watched and unwatched.
5. **Rate and Review Movies**
    - Users can rate movies on a scale of 1 to 5 stars.
    - Users can provide a text review for each movie.
6. **State Management with Redux**
    - All state changes are managed using Redux.

## User Interface Design

### 1. Home Page

- Displays a list of movies in the watchlist.
- Buttons/links to add a new movie, edit or delete existing movies, and mark movies as watched/unwatched.

### 2. Add/Edit Movie Page

- Form for adding or editing movie details.
- Fields: Title, Description, Release Year, Genre, Image URL.
- Save and Cancel buttons.

### 3. Movie Details Page

- Displays movie details including title, description, release year, genre, watch status, rating, and reviews.
- Options to edit or delete the movie, mark it as watched/unwatched, and add/edit a rating and review.

## Technology Stack

- **Frontend:**
    - React.js for building the user interface.
    - Redux for state management.
    - Tailwind CSS for styling.
- **Backend:**
    - Node.js/Express for the server.
    - MongoDB for the database.

## Running the Project Locally

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd movie-watchlist-app
