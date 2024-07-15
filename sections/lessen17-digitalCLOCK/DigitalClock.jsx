import React ,{useState , useEffect} from 'react'

function DigitalClock() {


    const [clock , setClock] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setClock(new Date())
        } , 1000)


        return () => {
            clearInterval(IntervalId)
        }

    }, [])


    function formatTime(){

        let Hours = clock.getHours()
        const Minutes = clock.getMinutes()
        const Seconds = clock.getSeconds()

        const meridum = Hours >= 12 ? "PM" : "AM";

        Hours = Hours % 12 || 12

        return(
            `${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)} ${meridum} `
        )

    }

    function formatTime2(){
        let years = clock.getFullYear()
        const month = clock.getMonth()
        const days = clock.getDay()

        return(
            `${padZero(years)}:${padZero(days)}:${padZero(month)}`
        )
    }

    function padZero(number){
        return(number < 10 ? "0" : "") + number
    }






  return (
  <>
    <div className='digital-container'>
        <div className='clock'>
            <span>{formatTime()}</span>   
        </div>
    </div>
  </>
  )
}

export default DigitalClock