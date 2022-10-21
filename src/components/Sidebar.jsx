import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=50">

            </img>


            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/82601868?v=4" alt="" />

                <strong>Pedro Panza</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}