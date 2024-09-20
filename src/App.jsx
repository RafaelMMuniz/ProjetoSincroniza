import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/rafaballerini.png',
      name: 'Rafaela Ballerini',
      role: 'Programadora Front-end'
    },
    content: [
      {type:'paragraph', content: 'Fala galeraa'},
      {type:'paragraph', content: 'Estou muito animada para anunciar o nosso curso de Front-End com React, que começa no dia 16 de outubro de 2024. Durante esse curso, vamos explorar tudo o que vocês precisam saber para se tornarem desenvolvedores front-end eficientes, utilizando uma das bibliotecas mais populares do mercado.'},
      {type:'paragraph', content: 'Vamos aprender desde os conceitos básicos do React, até tópicos mais avançados, como gerenciamento de estado, componentes reutilizáveis e integração com APIs. Ao longo do curso, vocês terão a oportunidade de colocar a mão na massa, desenvolver projetos práticos e entender como aplicar essas habilidades no mundo real.'},
      {type:'paragraph', content: 'Não se preocupem, o curso foi pensado tanto para quem está começando quanto para quem já tem alguma experiência com JavaScript e quer se aprofundar mais no React.'},
      {type:'paragraph', content: 'Espero ver todos vocês em breve para começarmos essa jornada juntos! 🚀'},
    ],
    publishedAt: new Date('2024-09-20T12:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}  
              />  
            )
          })}
        </main>
      </div>
    </div>
  )
}
