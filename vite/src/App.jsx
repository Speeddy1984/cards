import './App.css'
import Cards from './components/Cards/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const content = `Some quick example text to build on the card title and make up the bulk of the card's content.`
  const content2 = `With supporting text below as a natural lead-in to additional content.`
  return (
    <>
      <Cards title='Card title' button='Go somewhere' content={content}>
        <img src="https://avatars.mds.yandex.net/get-pdb/2833210/ce06923d-06df-4339-a283-0d2df302ff07/s1200?webp=false" className="card-img card bg-dark text-white" alt="Card image"></img>
      </Cards>
      <Cards title='Special title treatment' button='Go somewhere' content={content2}>
      </Cards>
    </>
  )
}

export default App
