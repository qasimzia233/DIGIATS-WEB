import React,{useEffect,useState} from 'react'
import './Scroll.css'

const Scroll = (showBelow) => {

        
           const [show, setShow] = useState(showBelow ? false:true)
            const handleScroll=()=>{
                if (window.pageYOffset>showBelow) {
                    if(!show) setShow(true)
                }
                else{
                    if (show) {
                        setShow(false)
                    }
                }
           
            }
        
        useEffect(() => {
            if (showBelow) {
                window.addEventListener('scroll',handleScroll)
                return () => {
                    window.removeEventListener('scroll',handleScroll)
                }
            }
            
        })
        const handleClick = () => {
            window['scrollTo']({top:0,behavior:'smooth'})
        }
    return (
        <div id='scroll-btn' onClick={handleClick}>
            {show ?  <a className="btn btn-warning p-5 m-5"></a> : ''}
        </div>
    )
}

export default Scroll
