function PopUp(){
        document.getElementById('popup1').style.display="none"; 
}

setTimeout(function Alert() { alert("Ce site en vaut vraiment la peine ..."); }, 10000);

var magenta = document.querySelector('#magenta');
            
            magenta.addEventListener('click', () => {
                document.body.style.backgroundColor = 'magenta';
                document.body.style.color = 'blue'
                                 });