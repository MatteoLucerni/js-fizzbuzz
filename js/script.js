console.log('JS OK');

const target = document.getElementById('target');

for (let i = 1; i <= 100; i++){
    number = i;
    if(number % 5 !== 0 && number % 3 == 0){
        console.log(number = "Fizz");
        target.innerHTML += `<p class="paragraph bg-success">${number}</p>`;
    } else if(number % 5 == 0 && number % 3 !== 0){
        console.log(number = "Buzz");
        target.innerHTML += `<p class="paragraph bg-warning">${number}</p>`;
    } else if(number % 5 == 0 && number % 3 == 0){
        console.log(number = "FizzBuzz");
        target.innerHTML += `<p class="paragraph bg-danger">${number}</p>`;
    } else {
        console.log(number);
        target.innerHTML += `<p class="paragraph bg-primary">${number}</p>`;
    }
    
}