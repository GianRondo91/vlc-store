import React from "react";

function ItemListContainer() {
    const [count, setClickCount] = React.useState(0);

    function handleClick() {
        setClickCount(count + 1)
    }
    return(
        <div>
           {count} 
        </div>
    );
}

export default ItemListContainer;