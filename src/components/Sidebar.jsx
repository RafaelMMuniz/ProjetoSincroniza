import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
  const handleClick = () => {
    const button = document.querySelector('aside footer a');
    button.textContent= 'Inscrito!';
  }

  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/rafaballerini.png"/>
        
        <strong>Rafaela Ballerini</strong>
        <span>Professora do curso</span>
      </div>

      <footer>
        <a href="#" onClick={handleClick}>
          <PencilLine size={20}/>
          Inscreva-se
        </a>
      </footer>
    </aside>
  );
}