import "./Story.css"

export default function Story(props){
    return (
        <div class="storie-imagens">
            <div>
                <img class="borda-storie" src="arquivos/stories_background.jpg"/>
                <img class="imagem-storie" src={props.imagem}/>
            </div>
            <div class="nome-storie">{props.nome}</div>
        </div>
    )
}