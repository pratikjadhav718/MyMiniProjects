import "./todoitem.css"
function TodoItem({tod}){
    return(
        tod.map(e => 
            <div className="item_div">
                <div className="div_1">
                    <p className="item_list1">{e}</p>
                </div>
                
                <div className="div_2" className="spinner">

                </div>
            </div>
            )
    )
    //return (<div>{tod}</div>)
}

export {TodoItem};