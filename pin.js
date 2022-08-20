function generatePin(){

    let pin=Math.round(Math.random()*10000) +''
    if(pin.length===4){

        const pinNumber= parseInt(pin)
        return pinNumber

    }
    else{
        return   generatePin()
    }}


    document.getElementById('generate-btn').addEventListener('click',function(){

        let pin2=generatePin()
        const generateID=document.getElementById('generate_fieldId')
        generateID.value=pin2
    })

    //with the help of event through the event delegation
//matchFieldId
   document.getElementById('btns_numberId').addEventListener('click', function(event){
     const anybtnString=event.target.innerText
     const inputField=document.getElementById('matchFieldId')
     const inputFieldString=inputField.value
    if(isNaN(anybtnString))     //all are string 
    {
    if(anybtnString==='C'){
        inputField.value=''

    }

    else if(anybtnString==='<')
    {
    const splitedString= inputFieldString.split('')
    splitedString.pop()
    const joinedString= splitedString.join('')
    inputField.value=joinedString
    }
    }
    else{
        const conCatstring=inputFieldString+anybtnString
        inputField.value=conCatstring
        
    }

   })

   //varify two input fields after clicking submit

   document.getElementById('submitbtn').addEventListener('click' , function(){
    
    const inputField1_check=document.getElementById('generate_fieldId')
    const inputField1_checkString=inputField1_check.value
    const inputField2_check=document.getElementById('matchFieldId')
    const inputField2_checkString=inputField2_check.value
    const success=document.getElementById('success')
    const fail =document.getElementById('fail')

    if (inputField1_checkString===inputField2_checkString){
        //we want to change the style only 

    success.style.display='block'
    fail.style.display='none'

    }
    else{
    fail.style.display='block'
    success.style.display='none'

    const tryobj=document.getElementById('try')
    const tryobjTextNum=parseInt(tryobj.innerText)
    const tryfinal=tryobjTextNum-1
    if(tryfinal===0){
        document.getElementById('submitbtn').disabled=true
        fail.style.display='none'

        const blocked=document.getElementById('blocked')
        blocked.style.display='block'

        
    }
    tryobj.innerText=tryfinal


        
    }
    



   })