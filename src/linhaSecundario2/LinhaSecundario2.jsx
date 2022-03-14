import "./LinhaSecundario2.css"

export default function LinhaSecundario2(props){
    return(
        <div class="linha-secundario-2">
            <div class="ls2-1">
                <div>
                    <img class="imagem-secundario" src={props.imagem}/>
                </div>
                <div class="n-secundario">
                    <div class="n3-secundario">{props.nome}</div>
                    <div class="n4-secundario">Segue você</div>
                </div>
            </div>
            <div class="seguir">seguir</div>
        </div>
    )
}