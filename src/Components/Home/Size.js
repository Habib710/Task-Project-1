import React from 'react';

const Size = ({data,mysizes}) => {
    const {id,title,name}=data;
    return (
        <div>
            <h2 className='size-css' onClick={()=>mysizes({id,title})} >{name}</h2>
            
        </div>
    );
};

export default Size;