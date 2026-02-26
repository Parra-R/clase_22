import './Perfil.css'

interface PerfilProps{
  nameUser:string;
  profession:string;
  completeModules:number;
  isActive:boolean
}

const Perfil =(props: PerfilProps)=> {

  return (
    <div className='card-profile'>
      <h2 className='name'>{props.nameUser}</h2>
      <p className='profession'>{props.profession}</p>
      <p>Modulos restantes: {10 - props.completeModules}</p>
      {props.isActive ? (<span className="tag-state">Está aktivo papi</span>) : <span className="tag-state-null">Desaktivado nen</span>}
    </div>
  )
}

export default Perfil