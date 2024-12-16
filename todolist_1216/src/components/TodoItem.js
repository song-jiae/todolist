import React from 'react';

const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  startEdit,
  saveEdit,
  editingId,
  editingText,
  setEditingText,
  isDarkMode, // 다크 모드 전달
}) => {
  return (
    <li className={`TodoItem ${todo.completed ? 'completed' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      {editingId === todo.id ? (
        <input
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          className={`editInput ${isDarkMode ? 'dark-mode' : ''}`}
        />
      ) : (
        <span onClick={onToggle} className={`todoText ${isDarkMode ? 'dark-mode' : ''}`}>
          {todo.text}
        </span>
      )}
      <div className="buttonGroup">
        {editingId === todo.id ? (
          <button
            className={`saveButton ${isDarkMode ? 'dark-mode' : ''}`}
            onClick={() => saveEdit(todo.id)}
          >
            저장
          </button>
        ) : (
          <button
            className={`editButton ${isDarkMode ? 'dark-mode' : ''}`}
            onClick={() => startEdit(todo.id, todo.text)}
          >
            수정
          </button>
        )}
        <button
          className={`deleteButton ${isDarkMode ? 'dark-mode' : ''}`}
          onClick={onDelete}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
