const todolist = [];
        renderTodolist();

        function renderTodolist(){ //rander = to display something on the page
            
            let todolistHTML ='';

            todolist.forEach((todoobj,index)=>{
                    const { name, duedate } = todoobj;
                    const html = `
                    <div>${name}</div> 
                     <div>${duedate}</div>
                    <button class="delete-button js-delete-button">Delete</button>  
                    `;
                    todolistHTML += html;
            })
            
            document.querySelector('.js-todolist')
               .innerHTML = todolistHTML;
            document.querySelectorAll('.js-delete-button')
                .forEach((deletebutton, index) =>{
                    deletebutton.addEventListener('click', () =>{
                        todolist.splice(index,1);
                        renderTodolist();
                    });
                });
        }

        document.querySelector('.js-add-todo-button').addEventListener('click',() =>{
            addtodo();
        });

        function addtodo() {
            const inputelement = document.querySelector('.js-name-input');
            const name = inputelement.value;  

            const dateInput = document.querySelector('.js-due-date-input');
            const duedate = dateInput.value; // it get the date and save it in duedate


            todolist.push({name, duedate}); // it will add the name to todolist array ['apple', 'mango'] 
            // here name: name => can be written as name, it is called shorthand property
            console.log(todolist); 
            inputelement.value = ''; // when we add it, reset text in the text box.
            dateInput.value = ''; 

            renderTodolist();
        }