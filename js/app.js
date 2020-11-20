const addButton = document.getElementById('add');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('.total-calories');
let total = 0;



addButton.addEventListener('click', (event)=> {
    let mealName = foodName.value; //get the food name from the input field
    let mealCalories = parseInt(foodCalories.value); //get the calories from the input field
    total = total + mealCalories; //calculates the total calorie intake
    totalSpan.innerHTML = total;
    //clear the input fields
    foodName.value = '';
    foodCalories.value = '';

    console.log('Food:', typeof(mealName));
    console.log('Calories:', typeof(mealCalories));
    console.log('Total:', total);

    event.preventDefault();
});