import React from 'react';
import { Tilt } from "react-tilt";
const Whom = () => {
    return (
        <div>
            <h2 className="font-semibold text-4xl my-8 text-center">People who are using this</h2>
            <div className='justify-center  flex flex-wrap gap-10'>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">


                    <Tilt className='xs:w-[250px] w-full'>
                        <div className="relative flex w-[312px] flex-col rounded-xl  ">
                            <div className="relative  h-48 overflow-hidden rounded-xl ">
                                <img className="object-cover w-full h-full " src="Developer.jpg" alt="" />
                            </div>

                            <div>
                                <p className="block text-lg font-semibold text-center ">
                                    Developer
                                </p>
                            </div>

                            <div className="mt-auto">

                            </div>
                        </div>
                    </Tilt>

                    <Tilt className='xs:w-[250px] w-full'>
                        <div className="relative flex w-[312px] flex-col rounded-xl  ">
                            <div className="relative  h-48 overflow-hidden rounded-xl ">
                                <img className="object-cover w-full h-full " src="Banker.jpg" alt="" />
                            </div>

                            <div>
                                <p className="block text-lg font-semibold text-center ">
                                    Banker
                                </p>
                            </div>

                            <div className="mt-auto">

                            </div>
                        </div>
                    </Tilt>

                    <Tilt className='xs:w-[250px] w-full'>
                        <div className="relative flex w-[312px] flex-col rounded-xl  ">
                            <div className="relative  h-48 overflow-hidden rounded-xl ">
                                <img className="object-cover w-full h-full " src="Corporate.jpg" alt="" />
                            </div>

                            <div>
                                <p className="block text-lg font-semibold text-center ">
                                    Corporate
                                </p>
                            </div>

                            <div className="mt-auto">

                            </div>
                        </div>
                    </Tilt>

                    <Tilt className='xs:w-[250px] w-full'>
                        <div className="relative flex w-[312px] flex-col rounded-xl  ">
                            <div className="relative  h-48 overflow-hidden rounded-xl ">
                                <img className="object-cover w-full h-full " src="Designer.jpg" alt="" />
                            </div>

                            <div>
                                <p className="block text-lg font-semibold text-center ">
                                    Designer
                                </p>
                            </div>

                            <div className="mt-auto">

                            </div>
                        </div>
                    </Tilt>


                </div>


            </div>
        </div>
    );
};

export default Whom;