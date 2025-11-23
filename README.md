Re-Move Harmony Website
=======================

Short description: Marketing site for Re-Move Harmony, a massage and physiotherapy studio in Plzen, built with PHP, HTML/CSS, and a small amount of JS.

Overview
--------
- Static PHP site with shared header/footer includes for consistent navigation.
- Pages cover the home hero, detailed services with pricing, online booking flow via Reservio, contact details with Google Maps embed, team bios, and client reviews.
- Assets live in `assets/` (styles, scripts, imagery) and are ready for drop-in hosting on Apache/XAMPP or any PHP-capable host.
- External libraries: Google Fonts, Font Awesome CDN, Google Maps embed for the contact page.

Quick start
-----------
1. Ensure PHP (or XAMPP/WAMP) is installed.
2. Place the project in your web root, e.g. `C:\xampp\htdocs\re-move-harmony`.
3. Serve locally with `php -S 127.0.0.1:8000` from the project root, or start Apache in XAMPP.
4. Open `http://127.0.0.1:8000/index.php` (or `http://localhost/re-move-harmony/` when using Apache).

Project structure
-----------------
- `index.php` – landing page with hero, studio intro, and quick links to booking and team.
- `services.php` – catalog of massage, rehabilitation, and taping services with pricing.
- `reservation.php` – booking instructions and a CTA to the Reservio scheduling link.
- `contact.php` – contact actions, address, opening hours, and Google Maps embed.
- `team.php` – therapist bios and photos.
- `reviews.php` – client testimonials.
- `includes/` – shared `header.php`, `footer.php`, and meta tags.
- `assets/css/` – base and responsive stylesheets.
- `assets/js/main.js` – interactive behavior (e.g., burger menu).
- `assets/img/` – logos, gallery shots, service and team imagery.

Deployment
----------
- Copy the repository contents to your PHP-capable hosting or keep it in `htdocs` for XAMPP/WAMP.
- If creating the GitHub repository, use this description: "Marketing website for Re-Move Harmony massage and physiotherapy studio in Plzen."
