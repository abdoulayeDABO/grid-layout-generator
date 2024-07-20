import GridContainer from "./components/GridContainer"
import { Navbar, Parameters } from "./sections"

function App() {

  return (
    <>
      <Navbar />
      <div className='px-5 py-10'>
        <Parameters />
        <GridContainer/>
      </div>
    </>
  )
}

export default App
