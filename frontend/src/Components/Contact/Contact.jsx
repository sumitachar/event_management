import React, { useState } from 'react';
import './Style.css';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
// import { sendContactForm } from './contactActions'; // Adjust the import path accordingly

const Contact = () => {

    const dispatch = useDispatch();
    const contactState = useSelector((state) => state.contact);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        describe: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(sendContactForm(formData));
    };


    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center w-full h-40' style={{ backgroundColor: "#ededed" }}>
                <h1 className='text-4xl w-9/12 font-semibold' style={{ color: '#0b6890' }}>Contact us</h1>
            </div>
            <div className='eight flex flex-col justify-center items-center px-4 py-4 '>
                <h1>Contact Us</h1>
                <br />
                <p className='flex items-center  text-slate-600 text-xs'>All the information you will need is listed below, just click on the page you want to view and that's it.
                </p>
            </div>
            <br />
            <div className='flex flex-col justify-center items-center px-4 py-4 '>
                <h1 className='text-3xl text-gray-500 font-semibold font-serif'>Samsidhhi Event Management</h1>
                <br />
                <p className='flex text-center font-medium  text-slate-500 text-xs'>Planning for an event and need assistance?<br />
                    Then what you waiting for, Call us!<br />
                    Please feel free to contact us and make your event happen. If you come across any doubt call our experts for guidance and support.</p>

            </div>
            <br />
            <div className='flex flex-wrap justify-around items-center w-full'>
                <div className='flex flex-col justify-center items-center w-50 py-8'>
                    <div className='flex justify-center items-center' style={{ width: "4rem", height: "4rem", borderRadius: "2rem", backgroundColor: "#0b6890" }}>
                        <CallIcon sx={{ color: "white" }} fontSize="large" />
                    </div>
                    <br />
                    <a href="tel:8250083067" className="text-sky-600 hover:text-sky-600 dark:hover:text-gray-700 ms-5">
                        8250083067
                    </a>
                </div>
                <div className='flex flex-col justify-center items-center w-50 py-8'>
                    <div className='flex justify-center items-center' style={{ width: "4rem", height: "4rem", borderRadius: "2rem", backgroundColor: "#0b6890" }}>
                        <LocationOnIcon sx={{ color: "white" }} fontSize="large" />
                    </div>
                    <br />
                    <p className='text-sky-600 text-center hover:text-sky-600 dark:hover:text-gray-700 ms-5'>
                        Khanchi, NandaKumar, East Mednapore, 721643
                    </p>

                </div>
                <div className='flex flex-col justify-center items-center w-50 py-8'>
                    <div className='flex justify-center items-center' style={{ width: "4rem", height: "4rem", borderRadius: "2rem", backgroundColor: "#0b6890" }}>
                        <EmailIcon sx={{ color: "white" }} fontSize="large" />
                    </div>
                    <br />
                    <a href="mailto:ghoraisaikat2002@gmail.com" class="text-sky-600 hover:text-gray-900 dark:hover:text-gray-700 ms-5">
                        ghoraisaikat2002@gmail.com
                    </a>

                </div>

            </div>
            <div className='flex flex-col justify-center items-center w-10/12 h-auto my-3 bg-gray-300 rounded-md'>
                <h1 className='text-3xl text-gray-500 font-semibold font-serif my-4'>Contact Form</h1>
                <br />
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '90%', minWidth: "20inch" },
                        display: 'flex',
                        justifyContent: "space-around",
                        width: "90%",
                        flexWrap: 'wrap',
                        gap: 2,
                        marginBottom: "2rem"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='flex flex-col w-2/5 justify-start items-center'>
                        <TextField
                            required
                            id="outlined-required"
                            type='text'
                            name="name"
                            label="Name"
                            value={formData.name}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }, backgroundColor: "whitesmoke", borderRadius: "5px"
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            type='email'
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }, backgroundColor: "whitesmoke", borderRadius: "5px"
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            name="subject"
                            label="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }, backgroundColor: "whitesmoke", borderRadius: "5px"
                            }}
                        />
                    </div>
                    <div className='flex flex-col w-1/2 justify-start items-center'>
                        <TextField
                            id="outlined-multiline-static"
                            name="describe"
                            label="Describe"
                            multiline
                            rows={7}
                            value={formData.describe}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }, backgroundColor: "whitesmoke", borderRadius: "5px"
                            }}
                        />
                    </div>
                    <div className='w-full flex justify-end items-center'>
                        <Button type="submit" style={{ backgroundColor: "#02706b" }} variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </div>
                </Box>
                {/* {contactState.loading && <p>Sending...</p>} */}
                {/* {contactState.success && <p>Message sent successfully!</p>} */}
                {/* {contactState.error && <p>Error: {contactState.error}</p>} */}
            </div>
            <div className='w-full h-80 overflow-hidden relative pb-4'>
                <iframe title="Contact location" className='w-full h-full border-spacing-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14774.439821838138!2d87.89751525197605!3d22.216924590700877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02eb313d3f65fd%3A0xdbf6d4e363a1bc93!2sKhanchi%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718302674774!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Contact
