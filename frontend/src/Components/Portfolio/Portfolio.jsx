import { Button } from '@mui/material'
import React from 'react'
import bgImg from '../../Assets/portfolio.jpg';
import portfolioImg1 from '../../Assets/PortfolioImg1.jpeg';
import portfolioImg2 from '../../Assets/PortfolioImg2.jpeg';
import portfolioImg3 from '../../Assets/PortfolioImg3.jpeg';
import portfolioImg4 from '../../Assets/PortfolioImg4.jpeg';
import portfolioImg5 from '../../Assets/PortfolioImg5.jpeg';
import portfolioImg6 from '../../Assets/PortfolioImg6.jpeg';
import portfolioImg7 from '../../Assets/PortfolioImg7.jpeg';

const Portfolio = () => {
    const portfolioImage=[portfolioImg1,portfolioImg2,portfolioImg3,portfolioImg4,portfolioImg5,portfolioImg6,portfolioImg7,
        "https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/12876490/pexels-photo-12876490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6332037/pexels-photo-6332037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4121047/pexels-photo-4121047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/9743193/pexels-photo-9743193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4993206/pexels-photo-4993206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/11733344/pexels-photo-11733344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1102388/pexels-photo-1102388.jpeg?auto=compress&cs=tinysrgb&w=800"]

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
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    width: '100%',
                    height: '400px'
                }}>
                    {/* <h1 className='w-8/9 flex justify-center items-center text-8xl font-bold text-gray-300 '>Portfolio</h1> */}
            </div>
            <div className='flex flex-row justify-center items-start w-full px-2 py-2'>
                <div className='w-3/5 flex flex-wrap justify-around py-4'>
                    {portfolioImage.map((item)=>{
                        return<>
                        <div className='w-40 h-40 flex justify-center items-center'>
                            <img className='w-full h-full rounded-lg border border-gray-300 shadow-md' src={item} alt={item}/>
                        </div>
                        </>
                    })}

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

export default Portfolio
