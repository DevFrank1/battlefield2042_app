import '../navbar/navbar.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, ListItemButton, ListItemIcon } from '@mui/material';


const Navbar = () => {

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 350, }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key='Home' secondaryAction={
                    <IconButton edge='end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </IconButton>
                }>
                    <ListItemButton>
                        <ListItemIcon>
                            <svg width="156" height="30" viewBox="0 0 156 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M140.422 1H133.867V29.8685H140.504C144.545 29.8685 145.535 28.0132 145.535 24.7959V6.07162C145.535 2.93753 144.504 1 140.422 1ZM141.699 24.8375C141.699 25.7448 141.369 26.2401 140.337 26.2401H137.702V4.61291H140.297C141.327 4.61291 141.699 5.06755 141.699 6.05711V24.8375ZM107.43 1H116.923V4.62936H111.265V13.4957H116.923V17.0429H109.992V26.2401H116.923V29.8694H106.157V17.0429H107.43V1V1ZM97.8995 1H101.734V29.8685H97.8995V1V1ZM84.1279 1H93.6211V4.62936H87.9633V13.4957H93.6211V17.0429H87.9633V29.8685H84.1279V1ZM69.8359 1H79.3291V4.62936H73.6713V13.4957H79.3291V17.0429H73.6713V26.2401H79.3291V29.8694H69.8359V1ZM66.9291 29.8685H56.1629V13.4957H57.4359V1H61.2713V13.4957H59.9983V26.2391H66.9291V29.8685ZM43.1516 1H54.4546V4.62936H50.7208V13.4957H49.353L49.1934 29.8685H45.6124V13.4957H46.8854V4.62936H43.1516V1ZM29.3055 1H40.6085V4.62936H36.8747V29.8685H33.0403V4.62936H29.3065V1H29.3055ZM19.4979 1L14.7281 29.8685H18.6041L19.6188 22.6417H25.5156L26.5303 29.8685H30.4063L29.2126 22.6417H27.9396L24.3635 1H19.4979ZM20.117 19.0945L21.9307 6.17319L23.7444 19.0945H20.117ZM10.6886 15.2272C11.9674 14.5685 12.5033 13.4551 12.5033 11.7217V5.5367C12.5033 2.56705 11.5543 1 7.55451 1H1V29.8685H7.80117C11.7604 29.8685 12.6677 27.93 12.6677 24.9603V18.816C12.6677 17.0429 12.0912 15.8879 10.6886 15.2272ZM4.83539 4.62936H7.43069C8.58566 4.62936 8.75011 5.24747 8.75011 6.48466V11.4344C8.75011 12.7122 8.58566 13.4957 7.3891 13.4957H4.83539V4.62936V4.62936ZM8.83233 24.8791C8.83233 25.7854 8.50247 26.2401 7.51195 26.2401H4.83539V17.0429H7.43069C8.50344 17.0429 8.8333 17.6194 8.8333 18.5693V24.8791H8.83233ZM145.535 1H146.509V1.207H146.146V2.22462H145.898V1.207H145.534V1H145.535ZM147.846 1V2.22462H147.615V1.26021L147.372 2.22462H147.134L146.891 1.26021V2.22462H146.661V1H147.03L147.254 1.83576L147.472 1H147.846ZM131.47 29.8685H120.704V13.4957H121.977V1H125.812V13.4957H124.539V26.2391H131.47V29.8685V29.8685ZM154.998 29.8685H153.942L151.22 27.1706C151.049 27.0004 151 26.9346 150.854 26.9346H150.61C150.44 26.9346 150.359 27.0236 150.359 27.1948V28.5597C150.367 28.7387 150.448 28.8112 150.619 28.8112H151.358V29.8675H150.619C149.766 29.8675 149.311 29.4777 149.311 28.5597V27.1948C149.311 26.3416 149.701 25.887 150.611 25.887H150.79C151.204 25.887 151.464 25.9276 151.676 26.1385L153.944 28.3807V25.886H155V28.6003H154.358C154.293 28.6003 154.26 28.6816 154.317 28.7387L155 29.4216V29.8685H154.998ZM150.61 21.508C149.757 21.508 149.31 21.1182 149.31 20.2002V18.9079C149.31 18.0547 149.7 17.6078 150.61 17.6078H153.69C154.608 17.6078 154.998 18.0547 154.998 18.9079V20.2002C154.998 21.1182 154.543 21.508 153.69 21.508H150.61V21.508ZM153.69 20.4517C153.861 20.4517 153.942 20.3782 153.942 20.2002V18.9079C153.942 18.7453 153.868 18.6564 153.69 18.6564H150.61C150.44 18.6564 150.359 18.7453 150.359 18.9079V20.2002C150.359 20.3791 150.448 20.4517 150.61 20.4517H153.69ZM154.186 13.2529H153.129L149.31 10.409V9.36048H153.129V9.94571C153.129 10.0028 153.21 10.0347 153.268 9.98633L153.95 9.36048H154.999V10.409H154.186V13.2529H154.186ZM153.129 11.9442V10.409H151.074L153.129 11.9442ZM154.998 4.98146H153.942L151.22 2.28362C151.049 2.11338 151 2.0476 150.854 2.0476H150.61C150.44 2.0476 150.359 2.13659 150.359 2.30781V3.67268C150.367 3.85164 150.448 3.92419 150.619 3.92419H151.358V4.98049H150.619C149.766 4.98049 149.311 4.59066 149.311 3.67268V2.30781C149.311 1.45464 149.701 1 150.611 1H150.79C151.204 1 151.464 1.04063 151.676 1.2515L153.944 3.49373V1H155V3.71428H154.358C154.293 3.71428 154.26 3.79553 154.317 3.8526L155 4.53553V4.98146H154.998Z" fill="#26FFDF" />
                            </svg>
                        </ListItemIcon>
                    </ListItemButton>

                </ListItem>
                <Divider />
                <ListItem button key='ABOUT' >
                    <ListItemText primary='ABOUT' />
                </ListItem>
                <Divider />
                <ListItem button key='WORLD OF 2042' alignItems='center'>
                    <ListItemText primary='WORLD OF 2042' />
                </ListItem>
                <Divider />
                <ListItem button key='NEWS AND MEDIA'>
                    <ListItemText primary='NEWS AND MEDIA' />
                </ListItem>
                <Divider />
                <ListItem button key='COMMUNITY'>
                    <ListItemText primary='COMMUNITY' />
                </ListItem>
                <Divider />
                <ListItem button key='BATTLEFIELD PORTAL'>
                    <ListItemText primary='BATTLEFIELD PORTAL' />
                </ListItem>
            </List>
        </Box>
    );
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <div className='navbar-drawer-icon'>
                    <div>
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <button onClick={toggleDrawer(anchor, true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </button>
                                <Drawer
                                    PaperProps={{
                                        sx: {
                                            background: "black",
                                            color: 'white',
                                        }
                                    }}
                                    containerClassName='show-drawer'
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <img src='\images\logo.svg' alt='logo' />
            </div>
            <div className='navbar-links'>
                <a>ABOUT</a>
                <a>WORLD OF 2042</a>
                <a>NEWS AND MEDIA</a>
                <a>COMMUNITY</a>
                <a>BATTLEFIELD PORTAL</a>
            </div>
            <div className='navbar-btn'>
                <button type='button'>Buy Now</button>
            </div>
        </div>
    )
}

export default Navbar
