import React, { useState } from 'react';
import {DragDropContext} from "react-beautiful-dnd"

export default function KanbanBoard(){

    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

   return(

    <DragDropContext>
        <h2 className='text-center'>Progress Board</h2>

        <div className='flex justify-between items-center flex-row' >

        </div>

    </DragDropContext>


   );
}