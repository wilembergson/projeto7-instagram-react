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

                <div class="postagem">
                    <div class="postagem-barra-superior">
                        <div class="direita">
                            <div class="avatar-postagem">
                                <img class="borda-postagem" src="arquivos/stories_background.jpg"/>
                                <img class="foto-postagem" src="arquivos/icone-4.jpeg"/>
                            </div>
                            <div class="nome">meowed</div>
                        </div>
                        <div>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                    </div>

                    <img src="arquivos/postagem-1.jpg"/>
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
                            <img class="imagem-curtidas" src="arquivos/icone-6.jpeg"/>
                            <div class="texto-curtidas">curtido por <span>respondeai</span> e <span>outras 101.523 pessoas</span></div>
                        </div>
                        <div class="comentario">
                            <ion-icon name="happy-outline"></ion-icon>
                            <textarea class="barra-comentario" cols="30" rows="1"></textarea>
                            <div class="publicar">Publicar</div>
                        </div>
                    </div>
                </div>

                <div class="postagem">
                    <div class="postagem-barra-superior">
                        <div class="direita">
                            <div class="avatar-postagem">
                                <img class="borda-postagem" src="arquivos/stories_background.jpg"/>
                                <img class="foto-postagem" src="arquivos/icone-3.png"/>
                            </div>
                            <div class="nome">barked</div>
                        </div>
                        <div>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                    </div>

                    <img src="arquivos/postagem-3.png"/>
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
                            <img class="imagem-curtidas" src="arquivos/icone-1.jpg"/>
                            <div class="texto-curtidas">curtido por <span>adorable_animals</span> e <span>outras 99.159 pessoas</span></div>
                        </div>
                        <div class="comentario">
                            <ion-icon name="happy-outline"></ion-icon>
                            <textarea class="barra-comentario" cols="30" rows="1"></textarea>
                            <div class="publicar">Publicar</div>
                        </div>
                    </div>
                </div>

                <div class="postagem">
                    <div class="postagem-barra-superior">
                        <div class="direita">
                            <div class="avatar-postagem">
                                <img class="borda-postagem" src="arquivos/stories_background.jpg"/>
                                <img class="foto-postagem" src="arquivos/icone-4.jpeg"/>
                            </div>
                            <div class="nome">meowed</div>
                        </div>
                        <div>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                    </div>

                    <img src="arquivos/postagem-2.png"/>
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
                            <img class="imagem-curtidas" src="arquivos/icone-6.jpeg"/>
                            <div class="texto-curtidas">curtido por <span>respondeai</span> e <span>outras 101.523 pessoas</span></div>
                        </div>
                        <div class="comentario">
                            <ion-icon name="happy-outline"></ion-icon>
                            <textarea class="barra-comentario" cols="30" rows="1"></textarea>
                            <div class="publicar">Publicar</div>
                        </div>
                    </div>
                </div>
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