import React from 'react';

const AddComment= ({addComment, nextID}) => {

    return (
        <div>
            <label>
                Автор:<br/>
                <input id="author" type="text"/>
            </label>
            <br/>
            <label>
                Комментарий:<br/>
                <textarea id="text" rows="4" cols="50"></textarea>
            </label>
            <br/>
            <button
                onClick={ev => {
                    let author = document.getElementById('author'),
                        text = document.getElementById('text');
                        if (author.value === ''||text.value ===''){
                            alert('Заполните все поля')
                        } else {
                            addComment(author.value, text.value, nextID);
                            author.value = '';
                            text.value = '';
                        }
                }}
            >Добавить коммент</button>
        </div>
    )
}

export default AddComment;