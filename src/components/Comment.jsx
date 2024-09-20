import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/RafaelMMuniz.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Marcondes</strong>
              <time title="15 de abril às 15:12" dateTime="2024-04-15 15:12:45">Cerca de 1 hora atrás</time>
            </div>


            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}