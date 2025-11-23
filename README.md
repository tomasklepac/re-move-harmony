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
- `index.php` - landing page with hero, studio intro, and quick links to booking and team.
- `services.php` - catalog of massage, rehabilitation, and taping services with pricing.
- `reservation.php` - booking instructions and a CTA to the Reservio scheduling link.
- `contact.php` - contact actions, address, opening hours, and Google Maps embed.
- `team.php` - therapist bios and photos.
- `reviews.php` - client testimonials.
- `includes/` - shared `header.php`, `footer.php`, and meta tags.
- `assets/css/` - base and responsive stylesheets.
- `assets/js/main.js` - interactive behavior (e.g., burger menu).
- `assets/img/` - logos, gallery shots, service and team imagery.
