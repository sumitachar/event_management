import { Fragment, useEffect, useState } from 'react';
import company_logo from '../../Assets/logo1.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation} from 'react-router-dom';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Box, Button, IconButton, InputAdornment, Modal, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { clearState, loginUser, signUpUser } from '../../Redux/userReducer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Customize the primary color
    },
    secondary: {
      main: '#dc004e', // Customize the secondary color
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#388e3c',
    },
    warning: {
      main: '#fbc02d',
    },
  },
});

const CustomModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "#79797980"
}));

const style = {
  '& .MuiTextField-root': { m: 1, },
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: " 50%",
  bgcolor: '#ffffff52',
  borderRadius: "4px",
  // border: '2px solid #000',
  boxShadow: 24,
  backdropFilter: "blur(10px)",
  p: 4,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const dispatch = useDispatch();
  const [signUpButton, setSignUpButton] = useState(false)
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Our Services', href: '/service', current: false },
    { name: 'Portfolio', href: '/portfolio', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
  ])
  const [signUpDetails, setSignUpDetails] = useState({ username: "", email: "", password: "", image: null })
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" })
  const [loginError, setLoginError] = useState("")
  const [activeLogin, setActiveLogin] = useState(false)
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
  const signUpStatus = useSelector((state) => state.user.signUpStatus);
  const loginStatus = useSelector((state) => state.user.loginStatus);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);

 

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (signUpStatus === 'succeeded') {
      // alert('Sign-up successful');
      setSignUpButton(false);
      dispatch(clearState());
    }
    if (loginStatus === 'succeeded') {
      // alert('Login successful');
      setActiveLogin(true)
      handleClose();
      dispatch(clearState());
      setLoginError("")

      window.location.reload();
    }
    if(token && user){
      setActiveLogin(true)
    }
    if (error) {
      console.log("Login error:", error); // Log the error to check its structure
      setLoginError(typeof error === 'string' ? error : JSON.stringify(error));
    }
  }, [signUpStatus, loginStatus, error, user, dispatch]);

  useEffect(() => {
    let tempErrors = { username: '', email: '', password: '' };
    setErrors(tempErrors);
  }, [signUpButton])


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fullURL = `${window.location.origin}${location.pathname}`;
    const pathSegment = fullURL.split('/')[3];
    const ActiveNavigation = navigation.map((item) => {
      if (item.href === `/${pathSegment}`) {
        return { name: item.name, href: item.href, current: true };
      } else {
        return { name: item.name, href: item.href, current: false };
      }
    });
    setNavigation(ActiveNavigation);
  }, [location]);

  const validate = () => {
    let tempErrors = { username: '', email: '', password: '' };
    let isValid = true;

    if (!signUpDetails.username) {
      tempErrors.username = 'Name is required';
      isValid = false;
    }

    if (!signUpDetails.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if ((!/\S+@\S+\.\S+/.test(signUpDetails.email))) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!signUpDetails.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (signUpDetails.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginDetails.email && loginDetails.password) {
      dispatch(loginUser(loginDetails));
    } else {
      setLoginError("Please fill in all details");
    }
  };

  const handleSignUpChange = (e) => {
    const { name, value, files } = e.target;
    setSignUpDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append('username', signUpDetails.username);
      formData.append('email', signUpDetails.email);
      formData.append('password', signUpDetails.password);
      if (signUpDetails.image) {
        formData.append('image', signUpDetails.image);
      }
      dispatch(signUpUser(formData));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setActiveLogin(false)
    dispatch(clearState());
  };

  // if (!user) {
  //   return <div>Loading...</div>;
  // }


  return (
    <>
      <Disclosure as="nav" className="bg-orange-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                { /* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5 " />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6 text-gray-700" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  {/* Logo portion */}
                  <div className="flex min-w-20 object-cover items-center">
                    <img
                      className="h-10 w-full object-cover"
                      src={company_logo}
                      alt="Samsidhhi"
                    />
                  </div>

                  {/* Subject Items */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-slate-950 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        {activeLogin && user.image ?
                          <div className='h-8 w-8 rounded-full bg-gray-800 text-gray-200 hover:text-white flex justify-center items-center'>
                            <img src={`http://localhost:4001/${user?.image}`} alt="Profile" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                          </div> :
                          <AccountCircleIcon
                            className="h-8 w-8 rounded-full bg-gray-800 text-gray-200 hover:text-white" />
                        }
                      </MenuButton>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {activeLogin ? <>
                          <MenuItem>
                            {({ focus }) => (
                              <a
                                href="#"
                                className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Your Profile
                              </a>
                            )}
                          </MenuItem>

                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                onClick={() => { setActiveLogin(false); handleLogout() }}
                              >
                                LogOut
                              </a>
                            )}
                          </MenuItem>
                        </>
                          :
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                onClick={handleOpen}
                              >
                                Login
                              </a>
                            )}
                          </MenuItem>}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <ThemeProvider theme={theme}>
        <CustomModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {signUpButton ?
              <Fragment>
                <Typography variant="h5" sx={{ textAlign: "center" }}>Sign Up</Typography>
                <TextField
                  error={Boolean(errors.name)}
                  required
                  helperText={errors.name}
                  id="outlined-required"
                  label="Name"
                  type="text"
                  value={signUpDetails.username}
                  onChange={(event) => {
                    setSignUpDetails((prevSignUpDetails) => ({
                      ...prevSignUpDetails,
                      username: event.target.value,
                    }))
                  }}
                />
                <TextField
                  error={Boolean(errors.email)}
                  required
                  helperText={errors.email}
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  value={signUpDetails.email}
                  onChange={(event) => {
                    setSignUpDetails((prevSignUpDetails) => ({
                      ...prevSignUpDetails,
                      email: event.target.value,
                    }))
                  }}
                />
                <TextField
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  required
                  label="Password"
                  id="outlined-password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={signUpDetails.password}
                  onChange={(event) => {
                    setSignUpDetails((prevSignUpDetails) => ({
                      ...prevSignUpDetails,
                      password: event.target.value,
                    }))
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className='w-full flex justify-center items-center'>
                  <input type="file" name="image" accept="image/*" onChange={handleSignUpChange} />
                </div>
                <br />
                <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
                <Typography sx={{ textAlign: "center", paddingTop: 2 }}>Already have an account?<Button sx={{ textTransform: "none" }} onClick={() => setSignUpButton(false)}>Login here</Button></Typography>
              </Fragment>
              :
              <Fragment>
                <Typography variant="h5" sx={{ textAlign: "center" }}>Login</Typography>
                {loginError && <Typography color="error" sx={{ textAlign: "center" }}>{loginError}</Typography>}
                <TextField
                  error={Boolean(loginError)}
                  required
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  value={loginDetails.email}
                  onChange={(event) => {
                    setLoginDetails((prevLoginDetails) => ({
                      ...prevLoginDetails,
                      email: event.target.value,
                    }))
                  }}
                />
                <TextField
                  error={Boolean(loginError)}
                  required
                  id="outlined-password-input"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={loginDetails.password}
                  onChange={(event) => {
                    setLoginDetails((prevLoginDetails) => ({
                      ...prevLoginDetails,
                      password: event.target.value,
                    }))
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
                <Typography sx={{ textAlign: "center", paddingTop: 2 }}>Don't have an account?<Button sx={{ textTransform: "none" }} onClick={() => setSignUpButton(true)}>Sign Up here</Button></Typography>
              </Fragment>}
          </Box>
        </CustomModal>
      </ThemeProvider>
    </>
  )
}
