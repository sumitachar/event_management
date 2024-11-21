import { Button } from '@mui/material'
import React from 'react'

const Service = () => {

    const backgroundImage = "https://images.pexels.com/photos/1024965/pexels-photo-1024965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const OurServices = [
        { name: "Caterers", image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Flower Decoration", image: "https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Weeding", image: "https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Birthday party", image: "https://images.pexels.com/photos/9714788/pexels-photo-9714788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "DJ night", image: "https://images.pexels.com/photos/3648641/pexels-photo-3648641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        // { name: "Pool party", image: "https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Mehendi", image: "https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Make-up & Hair", image: "https://images.pexels.com/photos/725462/pexels-photo-725462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Photography", image: "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
    ]

    const text = 'Samsidhhi Event Management company provides complete event management services in Tamluk, India from a pin to an aeroplane. You name it we have it.\nWe are specialized for corporate events, wedding planning, conferences & seminars, brand activation, fashion shows and much more.\nIf your events need to be properly managed and conceived and gives you positive results then Samsidhhi Event Management company is your answer.\nWe offers complete event planning & Event Services in Tamluk India,programming & production, entertainment & special event coordination, high-quality activities and event promotion. \nWe hope to be able to service you, when we do, we will make sure that in that special day you and your guests can enjoy a grand event leaving with nothing to do except enjoy yourself. We’ll take care of the rest. Our team is able to provide the best event management experience that includes:'
    const lines = text.split('\n');

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center w-full h-80 shadow-x'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    width: '100%',
                    height: '400px'
                }}>
                    <h1 className='w-8/9 flex justify-center items-center text-4xl font-semibold text-gray-200 '>OUR SERVICES</h1>
            </div>
            <div className='flex flex-row justify-center  w-full px-2 py-2'>
                <div className='flex flex-col justify-center item-start w-3/5'>
                    <div className='flex flex-col justify-center items-center px-8'>
                        <h1 className='text-start text-xl font-semibold text-gray-800 py-2'>Event Management Services in tamluk, India</h1>
                        <p className='text-start text-gray-400 text-xs font-semibold px-8 py-4 ' style={{ whiteSpace: 'pre-line' }}>
                            {lines.map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <p className='text-start text-gray-400 text-xs font-semibold px-8 py-4 '>
                            
                        </p>

                    </div>
                    <div className='flex flex-col justify-center items-center px-8'>
                        <h1 className='text-start text-2xl font-semibold py-4 text-gray-800 border-b-2 border-gray-500 mb-4 mx-2'>Our Services</h1>
                        <p className='text-gray-500 text-xs font-normal'>Samsidhhi Event Management offers complete event management services as mentioned below</p>
                        <div className='flex flex-wrap justify-around items-center mx-2 my-2 h-auto w-full'>
                            {OurServices.map((item) => {
                                return <>
                                    <div className='w-36 h-40 my-1 mx-1 overflow-hidden flex flex-wrap justify-center flex-col items-center bg-gray-300 '>
                                        <div className="w-full h-3/4 flex justify-center items-center">
                                            <img className="image-fit w-full h-full" src={item.image} alt="Placeholder" />
                                        </div>
                                        <h3 className='text-gray-700 h-1/4 text-sm items-center text-center overflow-hidden'>{item.name}</h3>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-start w-2/5 h-auto py-4'>
                    <div className='w-3/4 flex flex-col justify-center items-start bg-gray-200 px-2'>
                        <h1 className='text-start w-full text-xl font-semibold text-gray-800 pt-4 px-4 border-b-2 border-gray-500 mb-4'>Our services</h1>
                        <hr />
                        <ul className='list-disc list-inside p-4 rounded-md'>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Caterers</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Decor & Florists</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Weeding Planner</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Birthday Party</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Pool Party</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>DJ Night</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Make-up & Hair</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Mehendi</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Photography</a>
                            </li>
                            <li className='mb-2 px-2 w-full text-xs text-left font-normal '>
                                <a href='/' className='text-blue-400 '>Flower Decoration</a>
                            </li>
                        </ul>
                        {/* <h1 className='text-start text-xl font-semibold text-gray-800 pt-4 px-4 '>Our services</h1> */}
                        <div className='flex w-full justify-center py-4'>
                            <Button variant="contained" style={{ backgroundColor: "#02706b" }}>Book Now</Button>
                        </div>
                        <div className='flex w-full justify-center py-4'>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Service
