import React from "react"
import styles from './styles'

import { 
Nav,
Hero,
Footer,
Skills,
About,
Contact } from "./components"

const App = () => 
(
  <div className='bg-primary w-full overflow-hidden'>
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
  <Nav />
    </div>
  </div>

  <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`w-full`}>
  <Hero/>
    </div>
  </div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
<div className={`${styles.boxWidth}`}>
  <About/>

<Skills />
<Contact />
  <Footer /> 
</div>
</div>

</div>
)

export default App
