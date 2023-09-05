
    //form validation
    const uname = document.querySelector('.name') || null;
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    const submitBtn = document.querySelector('.submit-btn')
    


    if (uname == null){//means login page is open

    submitBtn.addEventListener('click',() => {
     fetch('/login-user',{
         method: 'post',
         headers: new Headers({'Content-Type': 'application.json'}),
         body: JSON.stringify({
         email: email.value,
         password: password.value    
         })
        
    })
         .then(res =>res.json())
         .then(data =>{
            validateData(data);
            })
        })
     

    
    } else {//means register page is open

        submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
        name: uname.value,
        email: email.value,
        password: password.value})
        
    })
        .then(res => res.json())
        .then(data => {
            validateData(data);
           
                })
            })
        }
const validateData = (data) => {
    if(data.name){
        alertBox(data);
    } else{
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/';

    }
    }
    const alertBox =(data) => {
        const alertContainer = document.querySelector('.alert-box');
        const alertMsg = document.querySelector('.alert');
        alertMsg.innerHTML = data;

        alertContainer.computedStyleMap.top ='5%';
        setTimeout(() => {
            alertContainer.computedStyleMap.top = null;
        }, 5000);

    }
            






    
 




    
