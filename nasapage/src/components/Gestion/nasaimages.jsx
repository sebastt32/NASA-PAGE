import React from 'react';
import '../styles/nasasearching.css'

const Nasaimages = ({valor}) => {
    return (
        
        <div >

           {valor.collection.metadata.total_hits !== 0?
            <div className='nasasearching'>
           <div  className='boxes'>
           <h1 className='title'>{valor.collection.items[0].data[0].title}</h1>
           {valor.collection.items[0].data[0].description}
           {valor.collection.items[0].data[0].location}
           {valor.collection.items[0].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[0].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[1].data[0].title}</h1>
           {valor.collection.items[1].data[0].description}
           {valor.collection.items[1].data[0].location}
           {valor.collection.items[1].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[1].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[2].data[0].title}</h1>
           {valor.collection.items[2].data[0].description}
           {valor.collection.items[2].data[0].location}
           {valor.collection.items[2].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[2].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[3].data[0].title}</h1>
           {valor.collection.items[3].data[0].description}
           {valor.collection.items[3].data[0].location}
           {valor.collection.items[3].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[3].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[4].data[0].title}</h1>
           {valor.collection.items[4].data[0].description}
           {valor.collection.items[4].data[0].location}
           {valor.collection.items[4].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[4].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[5].data[0].title}</h1>
           {valor.collection.items[5].data[0].description}
           {valor.collection.items[5].data[0].location}
           {valor.collection.items[5].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[5].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[6].data[0].title}</h1>
           {valor.collection.items[6].data[0].description}
           {valor.collection.items[6].data[0].location}
           {valor.collection.items[6].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[6].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[7].data[0].title}</h1>
           {valor.collection.items[7].data[0].description}
           {valor.collection.items[7].data[0].location}
           {valor.collection.items[7].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[7].links[0].href}></img>
           </div>  
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[8].data[0].title}</h1>
           {valor.collection.items[8].data[0].description}
           {valor.collection.items[8].data[0].location}
           {valor.collection.items[8].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[8].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[9].data[0].title}</h1>
           {valor.collection.items[9].data[0].description}
           {valor.collection.items[9].data[0].location}
           {valor.collection.items[9].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[9].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[10].data[0].title}</h1>
           {valor.collection.items[10].data[0].description}
           {valor.collection.items[10].data[0].location}
           {valor.collection.items[10].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[10].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[11].data[0].title}</h1>
           {valor.collection.items[11].data[0].description}
           {valor.collection.items[11].data[0].location}
           {valor.collection.items[11].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[11].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[12].data[0].title}</h1>
           {valor.collection.items[12].data[0].description}
           {valor.collection.items[12].data[0].location}
           {valor.collection.items[12].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[12].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[13].data[0].title}</h1>
           {valor.collection.items[13].data[0].description}
           {valor.collection.items[13].data[0].location}
           {valor.collection.items[13].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[13].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[14].data[0].title}</h1>
           {valor.collection.items[14].data[0].description}
           {valor.collection.items[14].data[0].location}
           {valor.collection.items[14].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[14].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[15].data[0].title}</h1>
           {valor.collection.items[15].data[0].description}
           {valor.collection.items[15].data[0].location}
           {valor.collection.items[15].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[15].links[0].href}></img>
           </div> 
           <div className='boxes'>
           <h1 className='title'>{valor.collection.items[16].data[0].title}</h1>
           {valor.collection.items[16].data[0].description}
           {valor.collection.items[16].data[0].location}
           {valor.collection.items[16].data[0].photographer}
           <img alt='imgapi' className='imgapi' src={valor.collection.items[16].links[0].href}></img>
           </div> 
           </div> 
           :<p className='noinfo'>No hay informacion</p>}

        
        </div>
    );
}

export default Nasaimages;
