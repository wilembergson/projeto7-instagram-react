import "./Header.css"

export default function Header(){
    return (
        <header>
            <div class="barra-interna">
                
                <div class="barra-esquerda">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img className="logo" src="./arquivos/logo.png" alt=""/>
                </div>
                <input type="text" placeholder="Pesquisar" class="pesquisar"/>
                <div class="barra-direita">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
            <div class="barra-interna-2">
                <ion-icon name="logo-instagram"></ion-icon>
                <img class="logo" src="./arquivos/logo.png" alt=""/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </header>
    )
}