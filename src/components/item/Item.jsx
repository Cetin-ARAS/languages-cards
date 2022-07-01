import './Item.css';
import { useState } from 'react';

const Item = ({card}) => {
  const {name, img, options}=card;
  const [showLogo, setShowLogo] = useState(true);

  const handleClick =()=>{
    setShowLogo(!showLogo)
    setTimeout(show,3000)}

  const show=()=>{
    setShowLogo(true)
  
  }
  return (
    <div className='card' onClick={handleClick}>
      {showLogo ?(<div>
      <img className='card-logo' src={img} alt="" />
      <h3 className='card-title'>{name}</h3>
      </div>):(<ul className='list'>
        {options.map((element,index)=>{
          return <li key={index}>{element}</li> 
      
   
    
        })}
     </ul>)}

    </div>
  )
}

export default Item