import React from 'react'



function Pokedex() {
  return (
    <>
    <div class="container" >
  
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Ability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>bulbasaur</td>
      <td>
        <ul>
           <li>ovdergrow</li> 
           <li>chlorophyll</li> 
            
        </ul>
      </td>
    </tr>
  
   
  </tbody>
</table>

 
</div>
    </>
  )
}

export default Pokedex