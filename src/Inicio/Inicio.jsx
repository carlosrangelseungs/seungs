import  Header       from  '../header/Header'
import  Slyder       from  '../slyder/Slyder'
//import  Cat          from  '../cat/Cat'
import  Acordion     from  '../acordion/Acordion'
import  Planes       from   '../planes/Planes'
import  Descargaapp  from   '../descargaapp/Descargaapp'
import  Convivencia  from   '../convivevencia/Convivencia'
import  Footer       from   '../Piepagina/Footer'



const Inicio = () => {
  return (
    <div>
      <Header/>
      <Slyder/>
     
      <Acordion/>
      <Planes/>
      <Descargaapp/>
      <Convivencia/>
      <Footer/>
    </div>
  )
}

export default Inicio