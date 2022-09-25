const pollElement = document.querySelector('.poll');

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        let lang = Number(prompt(`${this.question}\n${this.options}`));
        // const ans = poll.answers;
        // let storedResult = [];
        // if(lang < 4){
        //     storedResult.push(++ans[lang]);
        // }
        // else{
        //     alert('Wrong choice, choose between 0-3')
        // }
        // poll.displayResults(storedResult)
    },
    displayResults(type){
        if(typeof(type)===String){
            console.log(`Poll results are ${this.answers}`)
        }
        else{
            console.log(type);
        }
    }
} 

pollElement.addEventListener('click', poll.registerNewAnswer);