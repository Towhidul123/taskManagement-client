import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Draggable } from 'react-beautiful-dnd';
import toast, { Toaster } from 'react-hot-toast';

const Todo = ({ card, index, onCardDelete, onCardUpdate, columnIndex }) => {
    const { _id, title, description, deadline, priority } = card;

    const [updatedTask, setUpdatedTask] = useState({
        title,
        description,
        deadline,
        priority,
    });




    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                onCardDelete(_id);
                toast.success('Task deleted successfully!');
            }
        });
    };


    const handleUpdate = () => {
        Swal.fire({
            title: 'Update Task',
            html: `
            <input id="swal-input1" class="swal2-input" value="${title}">
            <textarea id="swal-input2" class="swal2-input">${description}</textarea>
            <input id="swal-input3" class="swal2-input" type="date" value="${deadline}">
            <select id="swal-input4" class="swal2-input">
              <option value="high" ${priority === 'high' && 'selected'}>High</option>
              <option value="medium" ${priority === 'medium' && 'selected'}>Medium</option>
              <option value="low" ${priority === 'low' && 'selected'}>Low</option>
            </select>
          `,
            showCancelButton: true,
            confirmButtonText: 'Update',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedTitle = document.getElementById('swal-input1').value;
                const updatedDescription = document.getElementById('swal-input2').value;
                const updatedDeadline = document.getElementById('swal-input3').value;
                const updatedPriority = document.getElementById('swal-input4').value;

                const updatedTaskData = {
                    title: updatedTitle,
                    description: updatedDescription,
                    deadline: updatedDeadline,
                    priority: updatedPriority,
                };

                setUpdatedTask(updatedTaskData);
                onCardUpdate(_id, updatedTaskData);
                toast.success('Task updated successfully!');
            }
        });
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />



            <Draggable draggableId={_id} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex justify-center items-center mt-5`}
                    >
                        <div className="flex flex-col text-gray-700 bg-blue-gray-100 shadow-md w-20 md:w-36 lg:w-[200px] rounded-xl bg-clip-border" data-aos="zoom-in">
                            <div className="flex items-center justify-center text-center">
                                <div className="relative flex w-20 md:w-36 lg:w-[200px] flex-col rounded-xl">
                                    <div className="">
                                        <h5 className="block text-center text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {title}
                                        </h5>
                                    </div>
                                    <div className="">{description}</div>
                                    <div className="">{deadline}</div>
                                    <div className="">{priority}</div>
                                    <div className="">
                                        <button
                                            onClick={handleDelete}
                                            className="select-none rounded-lg bg-pink-500 mt-2 py-3 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={handleUpdate}
                                            className="select-none rounded-lg bg-blue-500 mt-2 py-3 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>

        </>
    );
};

export default Todo;