import { Post } from "./post"
import "./global.css"
import { Header } from "./components/Header"

function App() {

  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis sed vitae sit dicta! Sunt, nemo quam itaque debitis asperiores, corporis repellat sit sint, enim consequuntur natus inventore soluta voluptatem."
      />
      <Post
        author="Gabriel Fernandes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis sed vitae sit dicta! Sunt, nemo quam itaque debitis asperiores, corporis repellat sit sint, enim consequuntur natus inventore soluta voluptatem."
      />
    </div>
  )
}

export default App
