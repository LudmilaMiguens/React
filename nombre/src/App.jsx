import { NombreContext } from '../contex/context'
import { NombreProvider } from '../contex/context'
import { ModificarNombre } from '../componentes/mostrarNombre'
import { NombreModificado } from '../componentes/modificarNombre'
function App() {

  return (
    <>
    <NombreProvider>
      <div>
        <ModificarNombre />
        <NombreModificado />
      </div>
    </NombreProvider>


   
    
    </>
  )
}

export default App
