import './Danielv2.css'

const Danielv2 =()=> {
// Todos los datos
    const name:string = "Daniel Parra"
    const hobbie:string = "Leer"
    const readedPages:number = 45
    const isActive:boolean = true
    const currentBook:string = "La Peste"

  return (
    <div className='card-profile'>
        <h2 className='name'>{name}</h2>
        <h3 className='profession'>Su hobbie principal es {hobbie}</h3>

        <h4>El libro actual es {currentBook}</h4>

        <p>Páginas restantes para finalizar el libro: {245 - readedPages}</p>

        {isActive ? <span className='tag-state'>Está leyendo</span> : null}
    </div>
  )
}

export default Danielv2