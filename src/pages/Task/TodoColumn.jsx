import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from './Todo';

const TodoColumn = ({ cards, onCardDelete, onCardUpdate, columnIndex }) => {
    return (
      <Droppable droppableId={columnIndex.toString()} type="COLUMN">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Draggable key={card._id} draggableId={card._id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Todo
                      key={card._id}
                      card={card}
                      onCardDelete={() => onCardDelete(card._id)}
                      onCardUpdate={onCardUpdate}
                      index={index}
                      columnIndex={columnIndex}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

export default TodoColumn;