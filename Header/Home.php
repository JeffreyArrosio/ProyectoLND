<?php
session_start();
include "../include/html.php";
?>

<body>
    <?php include '../include/cabeza.php'; ?>
    <main class="w-75 m-auto container">
    <?php  include '../include/cookies.php';?>
        <h1 class="display-1 mb-5">Bienvenido a <strong>VIDEOWEBOS.com</strong></h1>
        <p class="h2">Descubre una amplia gama de videojuegos, consolas y componentes para llevar tu experiencia
            de juego al siguiente nivel. Ofrecemos las últimas novedades y los mejores productos del mercado, todo en un
            solo lugar.</p>
        <ul class="h2">
            <li>Nuevas Llegadas: Los juegos más esperados y recién lanzados.</li>
            <li>Ofertas Especiales: Aprovecha nuestras promociones y descuentos exclusivos.</li>
            <li>Top Ventas: Los productos más populares entre nuestra comunidad de gamers.</li>
        </ul>
    </main>
    <?php include "../include/pie.php" ?>
    <script src="../js/cookies.js"></script>
</body>
</html>