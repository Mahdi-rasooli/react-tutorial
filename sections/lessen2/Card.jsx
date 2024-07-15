import profilepict from '../../assets/profile.jpg'

function Card(){
    
    return(
        <div className="card">
            <img className='card-img' src={profilepict} alt="profile pictrure" />
            <h2 className='card-title'>card demonstration</h2>
            <p className='card-text'>I am studying CS and working on react to learn this framework</p>
        </div>
    );
}


export default Card