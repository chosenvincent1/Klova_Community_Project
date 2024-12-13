// Select all buttons with specific classes (e.g., .button1 and .button2)
const buttons1 = document.querySelectorAll('.show');
const buttons2 = document.querySelectorAll('.hide');
const questionBody = document.querySelectorAll('.questionBody');

// Iterate over each button1 and add a click event listener
buttons1.forEach((button1, index) => {
    button1.addEventListener('click', () => {
        button1.style.display = 'none';
        if (buttons2[index]) {
            const button2 = buttons2[index];
            buttons2[index].style.display = 'flex';    
            questionBody[index].style.display = 'flex'   
         }
    });
});

// Iterate over each button2 and add a click event listener
buttons2.forEach((button2, index) => {
    button2.addEventListener('click', () => {
        button2.style.display = 'none';
        if (buttons1[index]) {
            const button1 = buttons1[index];
            buttons1[index].style.display = 'flex';    
            questionBody[index].style.display = 'none';  
          }
    });
});
