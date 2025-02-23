
  document.querySelector('#second_input').addEventListener('mouseover',function(){
      document.querySelector('#para_unique').innerHTML=
      `<div id="script_div">
        <p>by using vs code, you agree to its</p>
         <a class="script_anchor">license</a>
          <p>and</p> 
          <a class="script_anchor">privacy statement</a>
        </div>`
  })
  document.querySelector('#second_input').addEventListener('mouseout',function(){
      document.querySelector('#para_unique').innerHTML=" ";
     
  })

  document.querySelector('#replay').addEventListener('mouseover',function(){
    document.querySelector('#replay').style.border="1px solid white ";
   


  })
  document.querySelector('#replay').addEventListener('mouseout',function(){
    document.querySelector('#replay').style.border="none";
  })
