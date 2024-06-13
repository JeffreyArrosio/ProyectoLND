<?php
session_start();
ob_start();
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
$carritoV = $mysql->query("SELECT * from compra_video where id_usu =" . $_SESSION["id"]);
$carritoP = $mysql->query("SELECT * from compra_equipo where id_usu =" . $_SESSION["id"]);
$carritoC = $mysql->query("SELECT * from compra_compo where id_usu =" . $_SESSION["id"]);
include "../include/html.php";
?>

<body>
    <main class="container mt-3">
        <div id="factura">
        
        </div>
        <h1 id="total"></h1>
    </main>
    
    <script src="../js/carrito.js"></script>
    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    
</body>

</html>
<?php
$html = ob_get_clean();

require_once '../library/dompdf/autoload.inc.php';
use Dompdf\Dompdf;

$dompdf = new Dompdf();
$options = $dompdf->getOptions();
$options->set(array('isRemoteEnable' => true));
$dompdf->setOptions(($options));

$dompdf->loadHtml($html);
$dompdf->setPaper('letter');
$dompdf->render();
$dompdf->stream("factura.pdf", array("Attachment" => false));

?>