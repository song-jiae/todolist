import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  toggleComplete,
  deleteTodo,
  startEdit,
  saveEdit,
  editingId,
  editingText,
  setEditingText,
  isDarkMode, // 다크 모드 전달
}) => {
  return (
    <ul className={`TodoList ${isDarkMode ? 'dark-mode' : ''}`}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleComplete(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          startEdit={startEdit}
          saveEdit={saveEdit}
          editingId={editingId}
          editingText={editingText}
          setEditingText={setEditingText}
          isDarkMode={isDarkMode} // 다크 모드 전달
        />
      ))}
    </ul>
  );
};

export default TodoList;
