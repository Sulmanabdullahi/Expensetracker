
window.addEventListener("load", (event) => {
    // Input "Enter your Daily Expenses"
    const dailyExpense = prompt("Enter your Daily Expenses");

    // Grabbing element from index.html
    const dailyExpenseElement = document.getElementById("dailyExpense");

    // Set the content of the element
    dailyExpenseElement.innerHTML = `Daily Expenses: $${dailyExpense}`;

    // Food Expenses
    const food = prompt("Food Expenses");

    // Grabbing element from index.html
    const foodElement = document.getElementById("Food");

    // Set the content of the element
    foodElement.innerHTML = `Food Expenses: $${food}`;

    // Gas Expenses
    const gas = prompt("Gas Expenses");

    // Grabbing element from index.html
    const gasElement = document.getElementById("Gas");
    // Set the content of the element
    gasElement.innerHTML = `Gas Expenses: $${gas}`;

    // Calculate and display the sum of food and gas expenses
    const totalExpenses = parseFloat(food) + parseFloat(gas) + parseFloat(dailyExpense);
    const totalElement = document.getElementById("TotalExpenses");

    // Set the content of the element
    totalElement.innerHTML = `Total Expenses (Food + Gas + Daily Expenses): $${totalExpenses}`;
});

