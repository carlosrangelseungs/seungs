import  Header       from  '../header/Header'
import  Slyder from  '../slyder/Slyder'
import ListadoProducto from './ListadoProducto'
import  Footer from '../Piepagina/Footer'


const Productos = () => {
  return (
    <div> 
      <Header/>
      <Slyder/> 
      <ListadoProducto/>
      <Footer/>
    </div>
  )
}

export default Productos