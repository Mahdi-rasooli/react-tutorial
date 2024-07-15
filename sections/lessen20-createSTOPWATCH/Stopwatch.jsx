import React , {useState , useEffect , useRef} from 'react'

function Stopwatch() {


    const [isRunning , setIsRunning] = useState(false)
    const [elapsetime , setElapesTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)


    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapesTime(Date.now() - startTimeRef.current)
            } , 10)
        }

        return() => {
            clearInterval(intervalIdRef.current)
        }
        

    } , [isRunning]);


    function start(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsetime
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapesTime(0)
        setIsRunning(false)
    }

    function timeFormat(){

        let hours = Math.floor(elapsetime / (1000 * 60 * 60));

        let minutes = Math.floor(elapsetime / (1000 * 60) % 60);

        let seconds = Math.floor(elapsetime / (1000) % 60);

        let milliseconds = Math.floor((elapsetime % 1000) / 10);



        hours = String(hours).padStart(2, "0");

        minutes = String(minutes).padStart(2, "0");

        seconds = String(seconds).padStart(2, "0");

        milliseconds = String(milliseconds).padStart(2, "0");

        return(`${minutes}:${seconds}:${milliseconds}`)
    }



  return (
    <div className='stopwatch-container'>
        <div className='display'>{timeFormat()}</div>
        <div className='controls'>
            <button onClick={start} className='start-btn'>Start</button>
            <button onClick={stop} className='stop-btn'>Stop</button>
            <button onClick={reset} className='reset-btn'>Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch