import './styles.css';

import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load_post';
import { Button } from '../../components/Button';
import { Body } from '../../components/body';
import { About } from '../../components/about';
import { Certificates } from '../../components/certificates';
import { Contact } from '../../components/contact';

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 4,
    };

    async componentDidMount() {
      await this.loadPosts();
    }

    loadPosts = async () => {
      const { page, postsPerPage } = this.state;
      const postsAndPhotos = await loadPosts();
      this.setState({ 
        posts: postsAndPhotos.slice(page, postsPerPage), 
        allPosts: postsAndPhotos,
      });
    }

    loadMorePosts = () => {
      const  {
        page,
        postsPerPage,
        allPosts,
        posts
      } = this.state;
      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts);

      this.setState({ posts, page: nextPage });
    }

  render() {
    const {posts, page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section>
        <Body />
        <div className="content">
             <About />
              <div id="projeto" className="projects">
                <h1 className="text-project">Projetos</h1>
                <br></br>
                <p className="text-project">Recentemente, trabalhei em um mini projeto que me deu a chance de explorar algumas funcionalidades legais do React, como paginação e organização de código. Foi uma experiência super bacana e queria compartilhar um pouco sobre o que fiz! Organizar o código foi outra parte importante. Separei tudo em componentes React reutilizáveis, como a lista de itens, o controle de paginação e a barra de pesquisa. Isso ajudou a manter o código limpo e fácil de entender.</p>
                <br></br>
                <p className="text-project">Também usei hooks como useState e useEffect para gerenciar o estado e lidar com efeitos colaterais, o que deixou o código mais organizado e simples de testar. Esse projeto foi uma ótima oportunidade para aplicar o que aprendi com React e melhorar minhas habilidades na hora de estruturar o código. Estou animado para usar essas técnicas em projetos futuros!</p>
              <section className="container">
                < Posts posts= { posts } />
                <div class="button-container">
                  < Button 
                    text="Veja mais!"
                    onClick={this.loadMorePosts}
                    disabled={noMorePosts}
                  />
                </div>
              </section>
              </div>

            <Certificates />
            <Contact />
        </div>
      </section>
    );
  }
}

