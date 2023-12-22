import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoColumn from './TodoColumn';

const Center = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards(); // Fetch initial data
      }, []);
    
      const fetchCards = () => {
        fetch('http://localhost:5000/todo')
          .then((res) => res.json())
          .then((data) => {
            const cardsWithColumnIndex = data.map((card) => ({
              ...card,
              columnIndex: 0,
            }));
            setCards(cardsWithColumnIndex);
          })
          .catch((error) => console.error('Error fetching data:', error));
      };
    
      const moveCard = (result) => {
        if (!result.destination) {
          return;
        }
      
        const updatedCards = [...cards];
        const [removedCard] = updatedCards.splice(result.source.index, 1);
        removedCard.columnIndex = parseInt(result.destination.droppableId, 10); // Parse droppableId to an integer
        updatedCards.splice(result.destination.index, 0, removedCard);
      
        setCards(updatedCards);
      };
    
      const handleDelete = (_id) => {
        fetch(`http://localhost:5000/todo/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // Fetch updated data after deletion
              fetchCards();
            }
          });
      };
    
      const handleUpdate = (_id, updatedTask) => {
        fetch(`http://localhost:5000/todo/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              // Fetch updated data after update
              fetchCards();
            }
          });
      };



    return (
        <DragDropContext onDragEnd={moveCard}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">
                <Droppable droppableId="0" type="COLUMN">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="grid grid-cols-1">
                            <h2>todo</h2>
                            <TodoColumn
                                cards={cards.filter((card) => card.columnIndex === 0)}
                                onCardDelete={handleDelete}
                                onCardUpdate={handleUpdate}
                                columnIndex={0}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="1" type="COLUMN">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="grid grid-cols-1">
                            <h2>on going</h2>
                            <TodoColumn
                                cards={cards.filter((card) => card.columnIndex === 1)}
                                onCardDelete={handleDelete}
                                onCardUpdate={handleUpdate}
                                columnIndex={1}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="2" type="COLUMN">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="grid grid-cols-1">
                            <h2>completed</h2>
                            <TodoColumn
                                cards={cards.filter((card) => card.columnIndex === 2)}
                                onCardDelete={handleDelete}
                                onCardUpdate={handleUpdate}
                                columnIndex={2}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default Center;