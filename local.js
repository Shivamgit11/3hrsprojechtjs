function saveToLocalStorage(event) {
    event.preventDefault();
    const expense = event.target.expensevalue.value;
    const description = event.target.descriptioncheck.value;
    const category = event.target.select.value;

    // localStorage.setItem('expense', expense);
    // localStorage.setItem('description', description);
    // localStorage.setItem('category', category);
    const obj = {
        expense,
        description,
        category
    }
    localStorage.setItem(obj.expense, JSON.stringify(obj))
    showDetailsOnScreen(obj)
}

function showDetailsOnScreen(user) {
    const parentNode = document.getElementById('ListofUsers');
    const childHtml = `<li id=${user.expense}> ${user.expense} 
    - ${user.description} - ${user.category} 
    <button onclick=deleteuser('${user.expense}')>Delete Expense</button>
    <button onclick='editexpenser('${user.expense}','${user.description}','${user.category}')>Edit Expenst</button>
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

// Edit Expensr
function editexpenser(expensevalue, description, category){

    document.getElementById('expensechecked').value  = expense;
    document.getElementById('descriptionchecked').value  = description;
    document.getElementById('selectchecked').value  = category;
    deleteuser(expensevalue);
    

}

function deleteuser(expensevalue) {
    console.log(expensevalue)
    localStorage.removeItem(expensevalue);
    removeExpensrfromScreen(expensevalue);
}
function removeExpensrfromScreen(expensevalue) {
    const parentNode = document.getElementById('ListofUsers');
    const childNodetobedeleted = document.getElementById(expensevalue);

    parentNode.removeChild(childNodetobedeleted);
}

