import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/82601868?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Panza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="20 de Outubro às 19:24" dateTime='2022-10-20'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>

                <p>Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉{' '}<a href="">jane.design/doctorcare </a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href=""> #rocketseat</a> </p>{' '}


            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea
                    placeholder="Deixe seu comentario"
                />

                <footer>
                    <button type='subimit'>Comentário</button>
                </footer>


            </form>

        </article>
    )
}