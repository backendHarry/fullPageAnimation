const btns = document.querySelectorAll('.btn');
const btnArray = Array.from(btns);

const sections = document.querySelectorAll('section');
const sectionArray = Array.from(sections)



btnArray.forEach((btn) =>{
    btn.addEventListener('click', pageIn);
});

// to show animtaion for texts ...
let show = (status, index) =>{
    if(status === 'show'){
        sectionArray.forEach((section, i) =>{
            if(index === i){
                section.querySelector('h1').classList.add('show');
            }else{
                section.querySelector('h1').classList.remove('show');
            }
        });
    }
    
};

// function to highlight button to let users identify current page through current btn ...

let btnShow = (status, index) => {
    if(status === 'show'){
        btnArray.forEach((curBtn, i) =>{
            if(index === i){
                curBtn.classList.add('btnShow');
                console.log(curBtn)
            }else{
                curBtn.classList.remove('btnShow');
            }
        });
    }
};

// first section to have current class by default
sectionArray[0].classList.add('current');

// first page to show up by default 

show('show', 0);
btnShow('show', 0);


function pageIn (e) {
    let index = btnArray.indexOf(e.target);
    sectionArray.forEach((section, i) => {
        if(index === i){
            show('show', index);
            btnShow('show', index);
            section.scrollIntoView()
            section.classList.add('current');
        }
        else{
            section.classList.remove('current');
        }
    });
}

// using the current class in html to make me easily locate the curent section for other listeners

// for key presses .....

window.addEventListener('keydown', (e) =>{
    e.preventDefault();

    if(e.keyCode == '40'){

        sectionArray.forEach((section, i) => {

            if(section.classList.contains('current')){
                setTimeout(() =>{
                    if(section.nextElementSibling != null){

                        section.classList.remove('current');
                        
                        section.nextElementSibling.classList.add('current');
                        section.nextElementSibling.scrollIntoView();
                        show('show', i+1);
                        btnShow('show', i+1);
    
                    }
                }, 100) // ypu can choose to ignore the time , it doesnt mean ...
                
            }else { 
                show('hide', i+1);
                btnShow('hide', i+i);
            }
        });
    }

})

// for down press 


window.addEventListener('keydown', (e) =>{
    e.preventDefault();

    if(e.keyCode == '38'){

        sectionArray.forEach((section, i) => {

            if(section.classList.contains('current')){
                setTimeout(() => {
                    if(section.previousElementSibling != null){

                        section.classList.remove('current');
                        
                        section.previousElementSibling.classList.add('current');
                        section.previousElementSibling.scrollIntoView();
                        show('show', i-1);
                        btnShow('show', i-1);
                    }
                }, 100);
                 
            }else{
                show('hide', i-1);
                btnShow('hide', i-1);
            }
        });

    }

})

