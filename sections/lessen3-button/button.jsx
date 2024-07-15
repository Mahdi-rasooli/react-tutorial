//import styles from './button.module.css'

function Button(){

    const styles = {
        backgroundcolor: "hsl(200, 100%, 50%)",
        color: "white",
        borderradius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        border: "none"
    }

    return(

        // /// module approach : first way that needs importing   it is better for indivisual component <button className={styles.button}>click me</button>
        // /// inline approach : second way with do not impoerting  it is better for small styling   below
        <button style={styles}>click me</button>

    );
}
export default Button