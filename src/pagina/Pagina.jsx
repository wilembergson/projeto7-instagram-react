import Postagem from "../postagem/Postagem"
import Story from "../story/Story"
import "./Pagina.css"

export default function Pagina(){
    return(
    <div class="pagina">
        <div class="conteudo">
            <div class="lado-principal">
                <div class="stories">
                    <Story imagem="arquivos/icone-1.jpg" nome="9gag"/>
                    <Story imagem="arquivos/icone-4.jpeg" nome="meowed"/>
                    <Story imagem="arquivos/icone-3.png" nome="barked"/>
                    <Story imagem="arquivos/icone-2.jpeg" nome="nathanwpyle..."/>
                    <Story imagem="arquivos/icone-5.png" nome="wawawiwac..."/>
                    <Story imagem="arquivos/icone-6.jpeg" nome="respondeai"/>
                    <Story imagem="arquivos/icone-7.png" nome="filomoderna"/>
                    <Story imagem="arquivos/icone-8.jpeg" nome="memeriago."/>
                    <ion-icon class="seta-stories" name="chevron-forward-outline"></ion-icon>
                </div>

                <Postagem 
                    foto="arquivos/icone-4.jpeg" 
                    nome="meowed"
                    fotoPostagem="arquivos/postagem-1.jpg"
                    quemCurtiu="arquivos/icone-6.jpeg"
                    quemCurtiuNome="respondeai"
                    numCurtidas="101.523"
                />

                <Postagem 
                    foto="arquivos/icone-3.png" 
                    nome="barked"
                    fotoPostagem="arquivos/postagem-3.png"
                    quemCurtiu="arquivos/icone-1.jpg"
                    quemCurtiuNome="adorable_animals"
                    numCurtidas="99.159"
                />

                <Postagem 
                    foto="arquivos/icone-4.jpeg" 
                    nome="meowed"
                    fotoPostagem="arquivos/postagem-2.png"
                    quemCurtiu="arquivos/icone-6.jpeg"
                    quemCurtiuNome="respondeai"
                    numCurtidas="81.112"
                />
            </div>
            <div class="lado-secundario">
                <div class="sidebar">
                    <div class="linha1-secundario">
                        <img class="i1-secundario" src="arquivos/secundario-1.jpg"/>
                        <div>
                            <div class="n1-secundario">catanacomics</div>
                            <div class="n2-secundario">Catana</div>
                        </div>
                    </div>
                    <div class="linha-secundario">
                        <div class="sujestoes">Sujestões para você</div>
                        <div class="ver-tudo">Ver tudo</div>
                    </div>
                    <div class="linha-secundario-2">
                        <div class="ls2-1">
                            <div>
                                <img class="imagem-secundario" src="arquivos/secundario-2.jpeg"/>
                            </div>
                            <div class="n-secundario">
                                <div class="n3-secundario">bad.vibes.memes</div>
                                <div class="n4-secundario">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">seguir</div>
                    </div>
                    <div class="linha-secundario-2">
                        <div class="ls2-1">
                            <div>
                                <img class="imagem-secundario" src="arquivos/secundario-3.jpg"/>
                            </div>
                            <div class="n-secundario">
                                <div class="n3-secundario">chibidart</div>
                                <div class="n4-secundario">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">seguir</div>
                    </div>
                    <div class="linha-secundario-2">
                        <div class="ls2-1">
                            <div>
                                <img class="imagem-secundario" src="arquivos/secundario-4.jpg"/>
                            </div>
                            <div class="n-secundario">
                                <div class="n3-secundario">razoesparaacreditar</div>
                                <div class="n4-secundario">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">seguir</div>
                    </div>
                    <div class="linha-secundario-2">
                        <div class="ls2-1">
                            <div>
                                <img class="imagem-secundario" src="arquivos/secundario-5.jpg"/>
                            </div>
                            <div class="n-secundario">
                                <div class="n3-secundario">adorable_animals</div>
                                <div class="n4-secundario">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">seguir</div>
                    </div>
                    <div class="linha-secundario-2">
                        <div class="ls2-1">
                            <div>
                                <img class="imagem-secundario" src="arquivos/secundario-6.jpeg"/>
                            </div>
                            <div class="n-secundario">
                                <div class="n3-secundario">smallcutecats</div>
                                <div class="n4-secundario">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">seguir</div>
                    </div>

                    <div class="topicos-secundario">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div>
                    <div class="topicos-2-secundario">© 2021 INSTAGRAM DO FACEBOOK</div>
                </div>
            </div>
        </div>
    </div>
    )
}