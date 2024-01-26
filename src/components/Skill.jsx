import React from 'react'

const Skill = ({source, alt, title}) => (
<div className='flex flex-col text-center items-center'>
        <img src={source} alt={alt} title={title}/>
     <h2 className='text-2xl'>{title}</h2>   
</div>
        )


export default Skill