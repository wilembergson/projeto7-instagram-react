export default function Postagem(props){
    return(
        <div class="postagem">
        <div class="postagem-barra-superior">
            <div class="direita">
                <div class="avatar-postagem">
                    <img class="borda-postagem" src="arquivos/stories_background.jpg"/>
                    <img class="foto-postagem" src={props.foto}/>
                </div>
                <div class="nome">{props.nome}</div>
            </div>
            <div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
        </div>

        <img src={props.fotoPostagem}/>
        <div class="postagem-barra-inferior">
            <div class="icones-postagem">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div class="curtidas-postagem">
                <img class="imagem-curtidas" src={props.quemCurtiu}/>
                <div class="texto-curtidas">curtido por <span>{props.quemCurtiuNome}</span> e <span>outras {props.numCurtidas} pessoas</span></div>
            </div>
            <div class="comentario">
                <ion-icon name="happy-outline"></ion-icon>
                <textarea class="barra-comentario" cols="30" rows="1"></textarea>
                <div class="publicar">Publicar</div>
            </div>
        </div>
    </div>
    )
}