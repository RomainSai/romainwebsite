var magenta = document.querySelector('#magenta');
            
            magenta.addEventListener('click', () => {
                document.body.style.backgroundColor = 'magenta';
                document.body.style.color = 'blue'
                                 });

function addInvertedControl(){
  someControl('invmode', ['Inverted mode', 'Normal mode'], 'inverted');
}