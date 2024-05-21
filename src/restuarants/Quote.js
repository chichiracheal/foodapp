

import Text from "./Text";
export let Quote= ({quote, calfunc}) => {

    
    // logic can be here
    return(
        <div >
            <h1 className ="bg-dark" style={{color:"gold"}}>Inspirational quotes </h1>

            <table className="table table-striped text-info">
                <thead>
               
                <tr>
                    <th><h1 style={{color:"tomato"}}>Text</h1></th>
                    <th><h1 style={{color:"tomato"}}>Author</h1></th>
                    
                </tr>
                </thead>
                <tbody>
                   { quote.map(function(quote){
                        return (
                           <Text quote={quote}/>
                        )
                    })}
            
                
                </tbody>
            </table>
            <button className="btn btn-warning mb-3 text-center" onClick={()=>{calfunc(6)}}>Click Me</button>
        </div>
    )
}

