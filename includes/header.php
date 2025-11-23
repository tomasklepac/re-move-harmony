<!-- includes/header.php -->
<!DOCTYPE html>
<html lang="cs">
<head>
    <?php include 'includes/meta.php'; ?>
</head>
<body>
<?php $currentPage = basename($_SERVER['PHP_SELF'], '.php'); ?>
<header class="navbar">
    <div class="container nav-container">
        <a href="index.php" class="logo" aria-label="Re-Move Harmony logo">
            <img src="assets/img/logo/logo_clear_modre.png" alt="Re-Move Harmony Logo">
        </a>
        <nav class="nav-menu">
            <a href="index.php" class="<?php echo $currentPage === 'index' ? 'active' : ''; ?>">Domů</a>
            <a href="services.php" class="<?php echo $currentPage === 'services' ? 'active' : ''; ?>">Služby</a>
            <a href="team.php" class="<?php echo $currentPage === 'team' ? 'active' : ''; ?>">Tým</a>
            <a href="gallery.php" class="<?php echo $currentPage === 'gallery' ? 'active' : ''; ?>">Fotogalerie</a>
            <a href="reservation.php" class="<?php echo $currentPage === 'reservation' ? 'active' : ''; ?>">Rezervace</a>
            <a href="contact.php" class="<?php echo $currentPage === 'contact' ? 'active' : ''; ?>">Kontakt</a>
        </nav>
        <div class="burger" id="burger" aria-label="Menu">
            <span></span><span></span><span></span>
        </div>
    </div>
</header>
