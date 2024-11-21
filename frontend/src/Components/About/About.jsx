import React from 'react';

const About = () => {
  // const listStyle = {listStyleImage: `url(${checkmark})`,Width:"1px" };
  const backgroundImage = 'https://www.neereventsmanagement.com/wp-content/themes/neer/module/images/parallax-img/eventBg.jpg';

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center w-full h-40' style={{ backgroundColor: "#ededed" }}>
        <h1 className='text-4xl w-9/12 font-semibold' style={{ color: '#0b6890' }}>About us</h1>
      </div>
      <div className='flex flex-col justify-center px-6 items-center w-full h-60' >
        <h1 className='w-2/3 flex justify-center text-2xl font-bold text-gray-500'>Welcome to Samsidhhi Event Management Agency</h1>
        <h1 className='w-2/3 flex justify-center text-px text-gray-500'>Samsidhhi Event Management is a full-service event management & consulting company.</h1>
      </div>
      <div className='flex flex-col justify-center items-center w-full h-80 shadow-x'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className='w-full h-full flex flex-col justify-center items-center opacity-90' style={{ backgroundColor: "#05878f" }}>
          <h1 className='w-8/9 flex justify-center items-center text-2xl font-semibold text-white'>Samsidhhi Event Management is a full-service event management & consulting company</h1>
          <div className='w-10/12 flex justify-center items-start mt-0.5'>
            <div className='w-1/4 flex flex-col justify-center items-center px-1 py-1'>
              <h1 className='w-full flex justify-center items-center text-white text-lg'>Who we are</h1>
              <p className='w-full flex items-center text-center text-slate-100 text-xs'>
                We’re passionate about organizing the events and making it meaningful and not just fun & exciting. We take complete responsibility of the events.
              </p>
            </div>
            <div className='w-1/4 flex flex-col justify-center items-center px-1 py-1'>
              <h1 className='w-full flex justify-center items-center text-white text-lg'>Why we are</h1>
              <p className='w-full flex items-center text-center text-slate-100 text-xs'>
                When you visit to our organized events for the first time, it transforms your life, and connects you to the people you always wanted to get to know and love.
              </p>
            </div>
            <div className='w-1/4 flex flex-col justify-center items-center px-1 py-1'>
              <h1 className='w-full flex justify-center items-center text-white text-lg'>Where you are</h1>
              <p className='w-full flex items-center text-center text-slate-100 text-xs'>
                Are you seeking something different? An event? We invite you to join the conversation our experts has been having for the past 4 years.
              </p>
            </div>
            <div className='w-1/4 flex flex-col justify-center items-center px-1 py-1'>
              <h1 className='w-full flex justify-center items-center text-white text-lg'>How it starts</h1>
              <p className='w-full flex items-center text-center text-slate-100 text-xs'>
                Our events are held every month, every day and every hour. It takes place everywhere, and nowhere, both at the same time. Don’t worry, you will find us.
              </p>
            </div>

          </div>

        </div>

      </div>
      <div className='flex flex-row justify-center items-center w-full h-96'>
        <div className='flex flex-col justify-center items-center text-center h-full w-1/2' style={{ backgroundColor: "#0f1123" }}>
          <h1 className='text-xl mb-2 text-left w-10/12 font-semibold text-white'>Try it Yourself</h1>
          <p className='text-left text-white text-sm w-10/12'>We plan and execute the event; taking responsibility for the creative, technical and logistical elements. This includes overall event design, brand building, marketing and communication strategy, audio-visual production, script writing, logistics, budgeting, negotiation and best client services. Our aim is to provide you the best resources needed to create memorable and amazing events.</p>
        </div>
        <div className='flex flex-col justify-center items-start text-center h-full w-1/2' >
          <img className="w-full h-full " src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Placeholder" />
        </div>
      </div>
      <div className='flex flex-row justify-center items-center w-full h-auto bg-gray-200'>
        <div className='flex flex-col justify-center items-start w-5/12 h-full  py-5'>
          <h1 className='text-base text-center mb-2 w-10/12 font-semibold ' >Samsidhhi Management Company, Corporate Event Tamluk</h1>
          <p className='w-10/12 text-xs text-center text-gray-400 font-normal '>When it comes to event management in your mind then Neer Event Management company is your answer. As a part of our highly passion driven and dedicated approach, we provide complete event management services inclusive of event design, team work, event production to make your event a big success.

            We provide complete Event Management services that have not been experienced in the industry at affordable rates. Our first priority is client’s satisfaction. We firstly focus on what the requirements are after that we involve our creative and innovative ideas to make the event a memorable one. Our commitment to success is shown through creative innovation and logistical strategy. Our experience and reputation for excellent customer service and returns on investment make us stand out for the competition.

            The mission of Neer Event Management is to provide the highest level of event planning services in India while maintaining extraordinary customer services.</p>
        </div>
        <div className='flex flex-col justify-center items-center w-5/12 h-full  py-5'>
          <h1 className='text-base text-left mb-2 w-10/12 font-semibold ' >Core Goal</h1>
          <ul className="list-disc list-inside p-4 rounded-md">
            <li className="mb-2 w-10/12 text-xs text-left text-gray-400 font-normal ">Our first Priority is customer’s satisfaction.</li>
            <li className="mb-2 w-10/12 text-xs text-left text-gray-400 font-normal ">Building Relationships.</li>
            <li className="mb-2 w-10/12 text-xs text-left text-gray-400 font-normal ">A fun yet powerful paintings surroundings, All work could be completed in an moral and honest way, The reputation of our enterprise and clients is of upmost significance..</li>
            <li className="mb-2 w-10/12 text-xs text-left text-gray-400 font-normal ">Our out of the field method permits for a extraordinary manner of wondering and in the end a unique enjoy for those attending activities managed via Neer Event Management</li>
            <li className="mb-2 w-10/12 text-xs text-left text-gray-400 font-normal ">Our systems and procedures had been created to make sure a professional service, assembly the very best widespread of labor every time.</li>
            <li className="mb-2 w-10/12 text-xs text-left text-gray-400 font-normal ">At Samsidhhi Event Management, we positioned your requirement first. We find out about your needs, we focus on your demanding situations, and we plan events to support your dreams.</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default About
