const todolist = [];
        renderTodolist();

        function renderTodolist(){ //rander = to display something on the page
            
            let todolistHTML ='';

            for(let i=0 ;i<todolist.length ;i++){
                const todoobj = todolist[i];
                //  const name= todolist.name;
                  //const duedate= todoobj.duedate;
                const { name, duedate } = todoobj;
                const html = `
                <div>${name}</div> 
                 <div>${duedate}</div>
                <button onclick="
                    todolist.splice(${i},1);
                    renderTodolist();
                " class="delete-button">Delete</button>  
                `; // generate the html through javascript
                // delete => .splice() will delete, and rendotodolist() it will load and display in page
                // div element don't have default styling 
                todolistHTML += html;
            }

            document.querySelector('.js-todolist')
               .innerHTML = todolistHTML;
        }

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