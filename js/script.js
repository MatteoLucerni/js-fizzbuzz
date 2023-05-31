console.log('JS OK');

const target = document.getElementById('target');

let paragraph = '';

for (let i = 1; i <= 100; i++){
    number = i;
    if(number % 5 !== 0 && number % 3 == 0){
        console.log(number = "Fizz");
        paragraph += `<p class="paragraph bg-marius text-danger">${number}</p>`;
    } else if(number % 5 == 0 && number % 3 !== 0){
        console.log(number = "Buzz");
        paragraph += `<p class="paragraph bg-marcoB text-info">${number}</p>`;
    } else if(number % 5 == 0 && number % 3 == 0){
        console.log(number = "FizzBuzz");
        paragraph += `<p class="paragraph bg-marcoL text-warning">${number}</p>`;
    } else {
        console.log(number);
        paragraph += `<p class="paragraph bg-primary">${number}</p>`;
    }
}

target.innerHTML = paragraph;