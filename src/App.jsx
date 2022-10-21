
import { Header } from './components/Header';
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './Global.css'


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        <Post
          author="pedro"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fuga odio recusandae optio, quo aliquid adipisci commodi, quis similique aperiam debitis aliquam sed repudiandae voluptates temporibus voluptatibus deserunt eos magnam!lore"
        />
        <Post
          author="henrique"
          content="um texto legal"
        />
      </main>


      </div>

     
     

    </div>

  )
}





