import './filter.css'

export default function Filter({title,filtar}){

    return(
        <div className='filter-container form-check form-switch rounded-3 mx-2 my-1'>
            <input className='form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label className='form-check-label' htmlFor={title}>{title}</label>
        </div>
    )
}