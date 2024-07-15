/*function Button(){

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time`);
        }
        else{
            console.log('stop clicking me!')
        }
    }

    
    
    return(<>
              <h2>Hello</h2>
              //<button onClick={handleClick}>click me</button> 
              <button onClick={()=> handleClick('Bro')}>click me</button>
          </>
    );
}*/

function Button(){

    const handleClick =  (e) => e.target.textContent = "ouch😪"; 
    const handleClick2 = (e) => e.target.textContent = "why?🥱";
    const handleClick3 = (e) => e.target.style.display = "none";

    return(
          <>
              <h2>Hello</h2>
              <button onClick={(e) => handleClick(e)}>click me☺</button><br /><br />
              <button onDoubleClick={(e) => handleClick2(e)}>click me</button><br /><br />
              <button onClick={(e) => handleClick3(e)}>click me</button><br />
          </>
    );
}

export default Button