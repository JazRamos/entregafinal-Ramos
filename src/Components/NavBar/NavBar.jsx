import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav class="navbar sticky-lg-top navbar-expand-lg bg-light">
            <div class="container-fluid justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="nav" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Home</a>
                        <a class="nav-link" href="#">Botón 2</a>
                        <a class="nav-link" href="#">Botón 3</a>
                    </div>
                </div>
            </div>
            <div className=" d-flex ">
                <CartWidget />
                <p className="  badge border border-light rounded-circle bg-danger p-1">2</p>
            </div>
        </nav>
    );
};
