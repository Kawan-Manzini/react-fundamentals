import { Post } from "./post"
import "./global.css"
import styles from "./app.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Siderbar"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis sed vitae sit dicta! Sunt, nemo quam itaque debitis asperiores, corporis repellat sit sint, enim consequuntur natus inventore soluta voluptatem."
          />
          <Post
            author="Gabriel Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis sed vitae sit dicta! Sunt, nemo quam itaque debitis asperiores, corporis repellat sit sint, enim consequuntur natus inventore soluta voluptatem."
          />
        </main>
      </div>

    </div>
  )
}

export default App
