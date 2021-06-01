import React, {useEffect, useRef} from 'react'
import {createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')
//will mount a div div inside the portal whenever the modal is rendered
const Modal = ({children}) => {
    const elRef = useRef(null)
    if(!elRef.current){
        elRef.current = document.createElement('div')
    } 


    useEffect(() => {
        modalRoot.appendChild(elRef.current)
        //when unmouted, will clean up the div
        return () => modalRoot.removeChild(elRef.current)
    }, [])

    return  createPortal(<div>{children}</div>, elRef.current)
}

export default Modal 