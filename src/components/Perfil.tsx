import './Perfil.css'

const Perfil =()=> {
// Todos los datos
    const nameUser:string = "José Luis Abalos"
    const profession:string = "Ladrón"
    const completeModules:number = 3
    const isActive:boolean = true

  return (
    <div className='card-profile'>
        <h2 className='name'>{nameUser}</h2>
        <p className='profession'>{profession}</p>

        <p>Módulos restantes para graduarse: {10 - completeModules}</p>

        {isActive ? <span className='tag-state'>En línea</span> : null}
    </div>
  )
}

export default Perfil