import Clients from '../components/Clients'
import AddClientModal from '../components/AddClientModal'
import Projects from '../components/Projects'
import AddProjectModal from '../components/AddProjectModal'

const Home = () => {
  return (
    <>
    <div className="container">
        <div className="d-flex w-50">

        <AddClientModal/>
        <AddProjectModal/>
        </div>
        <Projects/>
        <Clients/>
      </div>
    </>
  )
}

export default Home