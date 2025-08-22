# Movie Search App 🎬

A simple React-based Movie Search site that lets users explore popular and top-rated movies, search for movies by name, and see detailed information. Built as a learning project with React, React Router, and TMDB APIs.

---

## Features (Implemented)

- Home page displaying **popular movies**.
- Toggle button to switch between **popular** and **top-rated movies**.
- Search page to display **movies searched by the user**.
- Clean, responsive UI using Tailwind CSS.
- Navigation between pages with React Router.

---

## Planned Features / TODO

### 1. Core Improvements (UX Fixes)

- [ ] Remove the movies without posters.
- [ ] Handle long movie titles (truncate with ellipsis, tooltip on hover).
- [ ] Enable search by pressing `Enter` in input box.
- [ ] Highlight currently selected filter (popular/top-rated, relevance/rating).
- [ ] Add back button for navigation.

### 2. Feature Enhancements

- [ ] **Movie Detail Page:**
  - [ ] Option A: Own page (`/movie/:id`) showing movie details.
  - [ ] Option B: Redirect to IMDb page.
- [ ] **Favorites Section:**
  - [ ] Heart button to add/remove favorite movies.
  - [ ] `/favorites` page displaying saved movies.
- [ ] **Search Suggestions / Autocomplete:**
  - [ ] Show suggestions as user types.
  - [ ] Debounce API calls to avoid excessive requests.
- [ ] **Toggle Search Mode:**
  - [ ] Option to search by rating or relevance.

### 3. Optional Polish

- [ ] Loading skeletons while fetching movies.
- [ ] Responsive design tweaks for mobile and desktop.

---

## Tech Stack

- **React** for UI
- **React Router** for page navigation
- **Tailwind CSS** for styling
- **External Movie API**
- **LocalStorage** for saving favorites (planned)
