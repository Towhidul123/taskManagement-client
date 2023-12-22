import { useContext, useState } from "react";
import { FormProvider, useForm, Controller } from "react-hook-form";
import Center from "./Center";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";

const TaskForm = ({ closeModal, control, handleSubmit }) => {

    const onSubmit = async (data) => {
        try {
            console.log("Submitting form with data:", data);
            const response = await fetch('http://localhost:5000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log("Response status:", response.status);

            const result = await response.json();

            if (result.success) {
                console.log('Task submitted successfully!');
                closeModal();
                window.location.reload();
            } else {
                console.error('Failed to submit task:', result.error);
            }
        } catch (error) {
            console.error('Error submitting task:', error);
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Title:
                    </label>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                id="title"
                                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                            />
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                        Description:
                    </label>
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <textarea
                                {...field}
                                id="description"
                                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                            />
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
                        Deadline:
                    </label>
                    <Controller
                        name="deadline"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="date"
                                id="deadline"
                                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                            />
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
                        Priority:
                    </label>
                    <Controller
                        name="priority"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select
                                {...field}
                                id="priority"
                                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                            >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        )}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};



const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>
        logOut()
            .then(() => console.log("User logged out"))
            .catch(error => console.log(error))



    const [open, setOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const methods = useForm(); // Create a single instance of useForm

    const Menus = [
        { title: "Add new task", src: "Chat", onClick: () => { console.log("Add new task clicked"); setModalOpen(true); } },
        { title: "Previous task", src: "Calendar" },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-52" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                {/* i am here */}
                <div className="flex gap-x-4 items-center">

                    <div className="  rounded-lg ">
                        <div className=" flex justify-center ">

                            <div className="dropdown dropdown-bottom  text-black">
                                <label tabIndex={0} className=" m-10">
                                    <img
                                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                                        alt="Image placeholder"
                                        src={user.photoURL}
                                    />
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><h2 className=""><FaUserAlt />{user.displayName}</h2></li>

                                    <Link to='/'>  <li><h2 className="">Home</h2></li></Link>
                                    <li><button className="  px-2 rounded-lg" onClick={handleLogOut}><FaSignOutAlt />Sign Out</button></li>
                                </ul>
                            </div>


                        </div>

                    </div>

                    <h1 className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        Task
                    </h1>
                </div>

                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li key={index}>
                            <button
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                                onClick={Menu.onClick}
                            >
                                <img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Task DashBoard</h1>
                <Center></Center>
            </div>



            <FormProvider {...methods}>
                {modalOpen && (
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
                        <div className="modal-box p-8 bg-white rounded shadow-lg">
                            <TaskForm closeModal={closeModal} control={methods.control} handleSubmit={methods.handleSubmit} />
                            <button className="btn" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </FormProvider>
        </div>
    );
};

export default Header;