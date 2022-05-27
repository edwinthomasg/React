import React from "react";

function Fragment(){
    let items = []
    return(<React.Fragment>
        {
            items.map(item => {
                <React.Fragment key={item.id}>
                    <p>{item.value}</p>
                </React.Fragment>
            })
        }
        <h1>Hello</h1>
        <p>Welcome you all...</p>
    </React.Fragment>)
}

export default Fragment

/**Instead of React.Fragment we can use it like
 * <></>
 * we can pass key to React.Fragment when you render
 * list of elements
 * But in that empty tag we cant pass key to it
 */