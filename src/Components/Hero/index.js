import React, {useState, useEffect} from 'react'
import './Hero.css'
import pupu from '../Images/pupu.png'
import Spin from 'react-reveal/Spin';

const Hero = ({totalPuPu, totalSold}) => {
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
    const onKeyUpValue = (event) => {
        console.log(event.code)
        if(event.code === 'Enter' && event.target.value){
            setCounter(parseInt(counter) + parseInt(event.target.value))
           
        }
        
    }
    useEffect(() => {
        setTotal(counter * 2.50)
    }, [counter])
  return (
    <div>
        <div className="today-number">
            <h2>{`Total PUPUSAS: ${counter}`}</h2>
            <h2>{`Total Earned: $${total}`}</h2>
        </div>

        <div className="counter">
            <h3>Select # sold:</h3>
            <div className="btn-sold">
                <input className='num' type='number' min={'1'} max ={'25'} defaultValue={'1'} onKeyUp={onKeyUpValue} />
                <h2>Or</h2>
                <button onClick={() => setCounter(counter + 1)}>
                    <Spin spy= {counter}>
                        <img src={pupu} alt="" height={150}/>
                    </Spin>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero