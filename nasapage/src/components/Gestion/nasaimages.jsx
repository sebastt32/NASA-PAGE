import React from 'react';
import '../styles/nasasearching.css'

const Nasaimages = ({valor}) => {
    return (
        <div className='nasasearching'>
          <>
          {valor.collection.items[0].data[0].title}
          {valor.collection.items[0].data[0].description}
          {valor.collection.items[0].data[0].location}
          {valor.collection.items[0].data[0].photographer}
          <img alt='imgapi' src={valor.collection.items[0].links[0].href}></img>
          </> 
          <>
          {valor.collection.items[1].data[0].title}
          {valor.collection.items[1].data[0].description}
          {valor.collection.items[1].data[0].location}
          {valor.collection.items[1].data[0].photographer}
          <img alt='imgapi' src={valor.collection.items[1].links[0].href}></img>
          </> 
          <>
          {valor.collection.items[2].data[0].title}
          {valor.collection.items[2].data[0].description}
          {valor.collection.items[2].data[0].location}
          {valor.collection.items[2].data[0].photographer}
          <img alt='imgapi' src={valor.collection.items[2].links[0].href}></img>
          </> 
          <>
          {valor.collection.items[3].data[0].title}
          {valor.collection.items[3].data[0].description}
          {valor.collection.items[3].data[0].location}
          {valor.collection.items[3].data[0].photographer}
          <img alt='imgapi' src={valor.collection.items[3].links[0].href}></img>
          </> 
          <>
          {valor.collection.items[4].data[0].title}
          {valor.collection.items[4].data[0].description}
          {valor.collection.items[4].data[0].location}
          {valor.collection.items[4].data[0].photographer}
          <img alt='imgapi' src={valor.collection.items[4].links[0].href}></img>
          </> 
          <>
          {valor.collection.items[5].data[0].title}
          {valor.collection.items[5].data[0].description}
          {valor.collection.items[5].data[0].location}
          {valor.collection.items[5].data[0].photographer}
          <img alt='imgapi' src={valor.collection.items[5].links[0].href}></img>
          </>  
        </div>
    );
}

export default Nasaimages;
