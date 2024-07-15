import PropTypes from 'prop-types'

function List(props){


    //fruits.sort((a , b) => a.name.localeCompare(b.name) ); // ALPHABETICAL 
    //fruits.sort((a , b) => b.name.localeCompare(a.name) ); // REVERSE ALPHABETICAL  
    //fruits.sort((a , b) => (a.calories - b.calories) ); // NUMERIC
    //fruits.sort((a , b) => (b.calories - a.calories) ); // REVERSE NUMERIC  
    
    const itemslist = props.items;
    const category = props.category

   

    const listitems = itemslist.map(items => <li key={items.id}>{items.name} : &nbsp;
                                                       <b>{items.calories}</b> </li>)

    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listitems}</ol>
    </>
    );

}

List.prototype = {
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number,
                                             fruit : PropTypes.string,
                                             calories : PropTypes.number }))
}

List.defaultProps = {
    category : "category",
    items:[]
}

export default List