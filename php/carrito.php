<?php
session_start();
if (!isset($_SESSION["id"])) {
    header("location:index.php");
    exit();
}
$mysql = new mysqli("localhost", "root", "majada", "proyecto3") or die("ERROR MASTODONICO");
$cliente = $mysql->query("SELECT * from usuarios where id =" . $_SESSION["id"]);
$cliente = $cliente->fetch_assoc();
if ($cliente["tipo"] != "cliente") {
    header("location:index.php");
    exit();
}
include "../include/html.php";
?>

<body>
    <main class="w-75 m-auto container mt-3">
        <div id="factura">

        </div>
        <h1 id="total"></h1>
        <div class="btn-group"id="borrar">
            <a href="index.php?carrito=1" ><button type="button"
                    class="btn btn-outline-success">Comprar</button></a>
            <a href="index.php" ><button type="button"
                    class="btn btn-outline-danger">Cancelar Compra</button></a>
        </div>
        <p class="mt-4"><a href="index.php"><button type="button" class="btn btn-outline-primary">Volver al
                    inicio</button></a></p>

    </main>
    <?php include "../include/pie.php" ?>
    <script src="../js/carrito.js"></script>
    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

</body>

</html>