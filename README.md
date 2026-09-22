# Laravel - Painting Catalog

<div align="center">

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#) [![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](#) [![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#) [![PHP](https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white)](#) [![Laravel](https://img.shields.io/badge/Laravel-%23FF2D20.svg?logo=laravel&logoColor=white)](#)

</div>

A web application for browsing a catalog of paintings built with Laravel and React. Initially project was built in the ~2025, this is an updated version.

## Features

- Browse featured paintings on the homepage
- View painting details (title, artist, year, style, location, description)
- Related paintings on each detail page
- Admin area with login: CRUD for paintings, artists, styles, locations

## Tech Stack

- **Backend:** Laravel 11, PHP 8.5
- **Frontend:** React 19, Vite, Tailwind CSS
- **Admin UI:** Blade + Bootstrap
- **Database:** SQLite

## Setup

Requires PHP 8.2+, Composer, Node.js 18+.

```bash
git clone https://github.com/cirsvi/laravel-painting-catalog.git
cd laravel-painting-catalog

cp .env.example .env
php artisan key:generate

composer install
# Create the SQLite database file:
#   Windows (PowerShell):  New-Item database/database.sqlite -ItemType File
#   macOS / Linux:         touch database/database.sqlite
php artisan migrate --seed

npm install
```

## Running

Two terminals:
```bash
npm run dev          # terminal 1 - Vite
php artisan serve    # terminal 2 - Laravel
```

Open `http://localhost:8000`

## Admin Access
- Login: `http://localhost:8000/login`
- Credentials: `test@example.com` / `password`

## Screenshots
### Homepage
![Homepage](docs/screenshots/catalog-homepage.png)

### Scrolling the catalog
![Scrolling the catalog](docs/screenshots/catalog-homepage-scroll.gif)

### Painting detail
![Painting detail](docs/screenshots/painting-details.png)

### Navigating to a related painting
![Related navigation](docs/screenshots/details-navigation.gif)

### Admin panel
![Admin panel](docs/screenshots/admin-paintings.png)

## Notes
- The app ships with an empty database (only a test user is seeded). Add paintings via the admin panel at `/login`.
- Painting images are served from `public/images/`.