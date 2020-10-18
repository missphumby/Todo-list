(function () {
    const todoList = document.querySelector('#todos');
    const btn = document.querySelector('.button');
    const myForm = document.querySelector('#todo-form');
    let todoInput = document.getElementById('addtodos');
    const feedback = document.querySelector('#feedback')
    console.log(todoList);
    console.log(todoInput);
    console.log(myForm);

    function addTodo() {
        value = todoInput.value;
        let itemList = document.createElement('div');
        itemList.innerHTML = `<div>
                              <input type="checkbox"></input> ${value}
                             <span class="remove-item">remove</span>
                             </div>`;
        itemList.classList.add('list-item');
        itemList.classList.add('list-item_container');
        todoList.appendChild(itemList);
        todoInput.value = "";

        const removeData = document.getElementsByClassName("remove-item");
        for (let x = 0; x < removeData.length; x++) {
            removeData[x].addEventListener("click", function () {
                console.log(removeData)
                const delTr = this.parentElement.parentElement;
                delTr.remove();
            })
        };

    };

    function countTodo() {
        const alltodos = document.getElementById('todos')
        const mystring = `You have ${alltodos.children.length} todos left`;
        feedback.innerHTML = mystring;
    };

    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
            
        if (todoInput.value === "") {
            feedback.innerHTML = "please enter a value";
            return false
        } else {
            addTodo();
            countTodo()
        }
    });



})();