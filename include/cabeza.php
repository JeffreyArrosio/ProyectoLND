<?php
$mysql = new mysqli("localhost", "root", "majada", "proyecto3") or die("ERROR MASTODONICO");
$cons = $mysql->query("SELECT * FROM plataformas");
?>
<header class="p-3 text-bg-dark">
    <?php
    if (isset($_SESSION["id"])) {
        ?>
        <div class="offcanvas offcanvas-end " id="carro">
            <div class="offcanvas-header">
                <h1 class="offcanvas-title">Su carrito</h1>
                <button type="button" class="btn-close bg-danger" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                <table id="lista" class="table table-dark text-center table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Aumentar</th>
                            <th>Reducir</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoTabla">
                    </tbody>
                </table>
                <div class="btn-group-vertical">
                    <a href="../php/carrito.php" class="btn btn-outline-success">Confirmar
                        carrito</a>
                    <a href="" id="borrar" class="btn btn-outline-danger">Borrar carrito</a>
                    <a href="" id="descargar" class="btn btn-outline-secondary">Descargar
                        carrito</a>
                    <a href="" id="cargarEquipo" class="btn btn-outline-primary">Cargar
                        carrito desde tu equipo</a>
                    <input type="file" id="archivo">
                    <pre id="contenido"></pre>
                </div>
            </div>
        </div>
        <?php
    }
    ?>
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="../php/index.php"><img src="../imagenes/videowebo.png" alt="switch" width=50 height=50></a>
            <span class="display-5"><a class="text-decoration-none text-light"
                    href="../php/index.php">IDEOWEBOS</a></span>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="../Header/Home.php" class="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="../Header/Features.php" class="nav-link px-2 text-white">Features</a></li>
                <li><a href="../Header/Pricing.php" class="nav-link px-2 text-white">Pricing</a></li>
                <li><a href="../Header/FAQ.php" class="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="../Header/About.php" class="nav-link px-2 text-white">About</a></li>
                <li><img src="../imagenes/luna.png" alt="" id="oscuro" width=40 height=40></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                    aria-label="Search">
            </form>
            <?php
            if (isset($_SESSION["id"])) {
                $usu = $mysql->query("SELECT * from usuarios where id =" . $_SESSION["id"]);
                $usu = $usu->fetch_assoc();
                ?>
                <div class="text-end">
                    <?php
                    if ($usu["tipo"] != "cliente") {
                        ?>
                        <a href="../php/admin.php"><button type="button" class="btn btn-outline-light me-2"><?php
                        echo $usu["nombre"] . " (Zona " . $usu["tipo"] . ")";
                        ?></button></a>
                        <a href="../php/logout.php" class="btn btn-danger"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-power" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1z" />
                                    <path
                                        d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                </svg></a>
                        <?php
                    } else {
                        ?>
                        <div class="dropdown" data-bs-theme="dark">
                            <button type="button" class="btn  btn-outline-success  dropdown-toggle text-decoration-none"
                                data-bs-toggle="dropdown" aria-expanded="false"><?php echo $usu["nombre"] ?></button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item btn" data-bs-toggle="offcanvas" data-bs-target="#carro">Carrito
                                        <span class="badge bg-success" id="numero"></span></button></li>
                                <li class="d-grid gap-2">
                                    <a class="text-decoration-none text-light" href="../php/logout.php"><button type="button"
                                            class="btn btn-danger "><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                                <path d="M7.5 1v7h1V1z" />
                                                <path
                                                    d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                            </svg></a>
                                </li>

                            </ul>
                        </div>
                        <?php
                    }
                    ?>
                </div>
                <?php
            } else {
                ?>
                <div class="text-end">
                    <a href="../php/login.php"><button type="button" class="btn btn-outline-light me-2">Login</button></a>
                    <a href="../php/registro.php"><button type="button" class="btn btn-success">Sign-up</button></a>
                </div>
                <?php
            }
            ?>
        </div>
    </div>
</header>
<nav class="navbar navbar-expand-lg bg-body-tertiary  mb-3" data-bs-theme="dark" aria-label="Eleventh navbar example">
    <div class="container-fluid ">
        <a class="navbar-brand" href="../php/index.php">HOME</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="../php/consolas.php">Plataformas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../php/componentes.php">Componentes</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="../php/juegos.php" data-bs-toggle="dropdown"
                        aria-expanded="false">Videojuegos</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="../php/juegos.php">Todas</a></li>
                        <?php
                        while ($li = $cons->fetch_assoc()) {
                            ?>
                            <li><a class="dropdown-item"
                                    href="../php/juegos.php?plataforma=<?php echo $li["nombre"] ?>"><?php echo $li["nombre"] ?></a>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>