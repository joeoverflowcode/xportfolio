import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TypeWords({className, repeat}) {

  const defaultStyle = `p-1 ${className}`

  return (

    <div className={defaultStyle}>
    <TypeAnimation
                sequence={[
                  'Web Developer',
                  500,
                  'Programmer',
                  500,
                  'Full Stack Engineer',
                  500,
                ]}
                // wrapper=''
                speed={60}
                cursor={true}
                // style={textStyle}
                repeat={repeat}
                />
                </div>
  )
}

export default TypeWords