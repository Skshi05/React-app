import React from 'react'

function Display(props) {
  return (
    <div>
     
      
        <div className="taxi">
        taxi:{props.taxi}
        </div>
        
        
        <div className='food'>
            food:<br/>
            </div>
           <div className="sushi">
           sushi:{props.food}
           </div>
           
          
                
            
            <div className='apple'>
                apple:<br/>
                <div className="honey">
                Honeycrisp:{props.apple}
                </div>
                    
              
                <br/>
                <div className="fuji">
                Fuji:{props.fuji}
                </div>
                   
               
            </div>
        </div>
      
    
  )
}

export default Display
