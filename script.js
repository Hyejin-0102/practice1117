const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value;
    if (todoText) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => {
            li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        };
        li.appendChild(checkbox);

        li.appendChild(document.createTextNode(todoText));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.className = 'deleteButton';
        deleteButton.onclick = () => {
            Swal.fire({
                title: '정말 삭제하시겠습니까?',
                text: "이 작업은 되돌릴 수 없습니다!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '삭제',
                cancelButtonText: '취소'
            }).then((result) => {
                if (result.isConfirmed) {
                    todoList.removeChild(li);
                    Swal.fire(
                        '삭제됨!',
                        '할 일이 삭제되었습니다.',
                        'success'
                    );
                }
            });
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
