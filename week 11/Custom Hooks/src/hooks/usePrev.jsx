import { useRef, useEffect } from "react"
export function usePrevi(value){
    const ref =useRef()

    useEffect(()=>{
        ref.current=value
    },[value])

    return ref.current
} 