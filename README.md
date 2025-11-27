Re-Move Harmony Website
=======================

Short description: Marketing site for Re-Move Harmony, a massage and physiotherapy studio in Plzen, built with PHP, HTML/CSS, and a small amount of JS.

Overview
--------
- Static PHP site with shared header/footer includes for consistent navigation.
- Pages cover the home hero, detailed services with pricing, online booking via Reservio, contact details with Google Maps embed, team bios, and client reviews.
- Assets live in `assets/` (styles, scripts, imagery) and are ready for drop-in hosting on any PHP-capable host.
- External libraries: Google Fonts, Font Awesome CDN, Google Maps embed for the contact page.

Project structure
-----------------
- `public/` - webroot to deploy (point your hosting docroot sem):
  - `index.php`, `services.php`, `team.php`, `gallery.php`, `reservation.php`, `contact.php`, `reviews.php`
  - `includes/` - shared `header.php`, `footer.php`, `meta.php`
  - `assets/` - CSS/JS/fonts/images (logos, gallery, services, team)
  - `robots.txt`, `sitemap.xml`, `.htaccess`, `site.webmanifest`, `favicon.ico`
  - `data/` - placeholder JSON files (not currently used)
- Root (`README.md`, `.gitignore`, `.idea/`) holds meta and project files only.

Hosting tip: nastavte docroot na `public/`. Pokud musíte hostovat přímo v kořeni, ujistěte se, že je publikována právě složka `public/`, jinak bude CSS/JS/asset cesty rozbité.
