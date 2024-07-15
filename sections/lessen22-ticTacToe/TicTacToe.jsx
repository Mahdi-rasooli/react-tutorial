/*import React, { useRef, useState } from 'react'
import cross from './Assets/cross.png'
import circle from './Assets/circle.png'

function TicTacToe() {


    const [box , setBox] = useState(["","","",
                                     "","","",
                                     "","","" ])
    const [isplaying , setIsPlaying] = useState(false)
    const [count , setCount] = useState(0)
    const titleRef = useRef(null)


    const box_array = [1,2,3,4,5,6,7,8,9]


    function toggle(index){
        if(isplaying){
            return;
        }
        if(box[index]===""){
            const newbox = [...b]
            if(newbox[index] = count % 2 === 0){
                newbox[index] = "X"
            }
            else{
                newbox[index] = "O"
            }
            setBox(newbox)
            setCount(c => c + 1)
            wincondition(newbox)
        }
    }





    function wincondition(){
        if (box[0] === box[1] && box[1] === box[2] && box[2] !== "") {
            console.log('win')
            win(box);
        } else if (box[3] === box[4] && box[4] === box[5] && box[5] !== "") {
            win(box);
            console.log('win')
        } else if (box[6] === box[7] && box[7] === box[8] && box[8] !== "") {
            win(box);
            console.log('win')
        }
        else if (box[0] === box[3] && box[3] === box[6] && box[6] !== "") {
            win(box);
            console.log('win')
        } else if (box[1] === box[4] && box[4] === box[7] && box[7] !== "") {
            win(box);
            console.log('win')
        } else if (box[2] === box[5] && box[5] === box[8] && box[8] !== "") {
            win(box);
            console.log('win')
        }
        else if (box[0] === box[4] && box[4] === box[8] && box[8] !== "") {
            win(box);
            console.log('win')
        } else if (box[2] === box[4] && box[4] === box[6] && box[6] !== "") {
            win(box);
            console.log('win')
        }
    }


    function win(winner){
        setIsPlaying(true)
        if(winner[0] === 'X'){
            titleRef.current.target.innerHTML = `Congragulation <img src='${cross}'> you are the winner🎉`
        }
        else{
            titleRef.current.innerHTML = `Congragulation <img src='${circle}'> you are the winner🎁`
        }
    }


    function reset(){
        setIsPlaying(false)
        setBox(["", "", "", "", "", "", "", "", ""])
        titleRef.current.innerHTML = 'Welcome to Tic Tac Toe game'
        box_array.forEach((index) => {
            const ref = box_array[index - 1];
            ref.innerHTML = "";
        });
    }


    
    


  return (
    <div className='tictactoe'>
        <h1 className='title' ref={titleRef}>Welcome to Tic Tac Toe game</h1>
        <div className='play-board'>
            <div className='row1'>
                <div className='column'  onClick={(event) => {toggle(event,0)}}></div>
                <div className='column'  onClick={(event) => {toggle(event,1)}}></div>
                <div className='column'  onClick={(event) => {toggle(event,2)}}></div>
            </div>
            <div className='row2'>
                <div className='column'  onClick={(event) => {toggle(event,3)}}></div>
                <div className='column'  onClick={(event) => {toggle(event,4)}}></div>
                <div className='column'  onClick={(event) => {toggle(event,5)}}></div>
            </div>
            <div className='row3'>
                <div className='column'  onClick={(event) => {toggle(event,6)}}></div>
                <div className='column'  onClick={(event) => {toggle(event,7)}}></div>
                <div className='column'  onClick={(event) => {toggle(event,8)}}></div>
            </div>
        </div>

        <button className='reset-btn' onClick={reset}>Reset</button>

    </div>
  )
}

export default TicTacToe*/




import React, { useRef, useState } from 'react'
import cross from './Assets/cross.png'
import circle from './Assets/circle.png'

function TicTacToe() {

    let box =["","","",
              "","","",
              "","",""]

    
    const [isplaying , setIsPlaying] = useState(false)
    const [count , setCount] = useState(0)
    const titleRef = useRef(null)
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)

    const box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]


    function toggle(event,index){
        if(isplaying){
            return 0;
        }
        if(count%2===0){
            event.target.innerHTML = `<img src='${cross}'>`
            box[index] = 'X'
            setCount(c => c + 1)
        }
        else{
            event.target.innerHTML = `<img src='${circle}'>`
            box[index] = 'O'
            setCount(c => c + 1)
        }
        console.log("ok")
        wincondition()
        console.log("error")


        /*const updatedBox = [...box]; // Create a copy of the box array
        if (count % 2 === 0) {
            event.target.innerHTML = `<img src='${cross}'>`
            updatedBox[index] = 'X';
        } else {
            event.target.innerHTML = `<img src='${circle}'>`
            updatedBox[index] = 'O';
        }
        setCount(count + 1);
        wincondition(updatedBox)*/
    }





    function wincondition(){
        console.log("1")
        if (box[0]===box[1] && box[1]===box[2] && box[2]!== "") {
            win(box);
            console.log("win")
        } else if (box[3] === box[4] && box[4] === box[5] && box[5] !== "") {
            win(box);
            console.log('win')
        } else if (box[6] === box[7] && box[7] === box[8] && box[8] !== "") {
            win(box);
            console.log('win')
        }
        else if (box[0] === box[3] && box[3] === box[6] && box[6] !== "") {
            win(box);
            console.log('win')
        } else if (box[1] === box[4] && box[4] === box[7] && box[7] !== "") {
            win(box);
            console.log('win')
        } else if (box[2] === box[5] && box[5] === box[8] && box[8] !== "") {
            win(box);
            console.log('win')
        }
        else if (box[0] === box[4] && box[4] === box[8] && box[8] !== "") {
            win(box);
            console.log('win')
        } else if (box[2] === box[4] && box[4] === box[6] && box[6] !== "") {
            win(box);
            console.log('win')
        }
        else if (!box.includes("")) {
            setIsPlaying(true);
            titleRef.current.innerHTML = `It's a draw!`;
        }
    }


    function win(winner){
        setIsPlaying(true)
        if(winner === 'X'){
            titleRef.current.innerHTML = `Congragulation <img src='${cross}'> you are the winner🎉`
        }
        else
        {
            titleRef.current.innerHTML = `Congragulation <img src='${circle}'> you are the winner🎉`
        }
    }


    function reset(){
        setIsPlaying(false)
        setCount(0)
        box =["","","","","","","","",""]
        titleRef.current.innerHTML = 'Welcome to Tic Tac Toe game'
        box_array.map((event) =>  event.current.innerHTML="")
    }


    
    


  return (
    <div className='tictactoe'>
        <h1 className='title' ref={titleRef}>Welcome to Tic Tac Toe game</h1>
        <div className='play-board'>
            <div className='row1'>
                <div className='column' ref={box1} onClick={(event) => {toggle(event,0)}}></div>
                <div className='column' ref={box2} onClick={(event) => {toggle(event,1)}}></div>
                <div className='column' ref={box3} onClick={(event) => {toggle(event,2)}}></div>
            </div>
            <div className='row2'>
                <div className='column' ref={box4} onClick={(event) => {toggle(event,3)}}></div>
                <div className='column' ref={box5} onClick={(event) => {toggle(event,4)}}></div>
                <div className='column' ref={box6} onClick={(event) => {toggle(event,5)}}></div>
            </div>
            <div className='row3'>
                <div className='column' ref={box7} onClick={(event) => {toggle(event,6)}}></div>
                <div className='column' ref={box8} onClick={(event) => {toggle(event,7)}}></div>
                <div className='column' ref={box9} onClick={(event) => {toggle(event,8)}}></div>
            </div>

        </div>

        <button className='reset-btn' onClick={reset}>Reset</button>

    </div>
  )
}

export default TicTacToe