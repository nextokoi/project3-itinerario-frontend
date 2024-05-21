import React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Divider from '@mui/material/Divider';

import XIcon from '@mui/icons-material/X';
import AdbIcon from '@mui/icons-material/Adb';


function Footer() {
    // Your links structure might look something like this
    const footerLinks = {
        'Why Book': ['How to book', 'Payment methods', 'Traveling costs', 'Discount coupons'],
        'About Us': ['Who we are', 'Commitments', 'Our stores', 'Our brands'],
        'Contact': ['Support center', 'Contact', 'Ethical channel', 'Returns and warranties'],
        // 'Other': ['Replay', 'Black Friday', 'Cyber Monday', 'PcDays'],
        'Newsletter': ['Community', 'Our Blogs', 'Trending News', 'Technolohgy',],
        // Add more sections as needed
    };

    return (
        <Box component="footer" sx={{ height: 900, backgroundColor: '#006A60', color: '#fff', py: 8, mt: 2 }}>
            <Container maxWidth="lg">
                <Grid container spacing={25} pl={2}>
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <Grid item xs={12} sm={6} md={3} key={section}>
                            <Typography mb={3} variant="h6" color="inherit" gutterBottom>
                                {section}
                            </Typography>
                            {links.map(link => (
                                <Typography key={link} my={2} variant="body2" color="inherit">
                                    <Link href="#" color="inherit" underline="none">
                                        {link}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>
                    ))}

                </Grid>

                <Divider color={"white"} sx={{ my: 12 }}></Divider>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 15, gap: 11 }}>
                    <Link href="#" color="inherit"><InstagramIcon /></Link>
                    <Link href="#" color="inherit"><TwitterIcon /></Link>
                    <Link href="#" color="inherit"><YouTubeIcon /></Link>
                    <Link href="#" color="inherit"><GitHubIcon /></Link>
                    <Link href="#" color="inherit"><XIcon /></Link>
                    <Link href="#" color="inherit"><InstagramIcon /></Link>
                    <Link href="#" color="inherit"><AdbIcon /></Link>
                    <Link href="#" color="inherit"><WhatsAppIcon /></Link>

                </Box>

                <Divider color={"white"} sx={{ my: 12, mx: 10 }}></Divider>

                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

                    <Typography mt={1} mb={2} variant='subtitle2'>Itinero S.A. Mar Azul Boulevard, No. 58,
                        35009 - Las Palmas de Gran Canaria
                        Las Palmas, Spain -  </Typography>

                    <Typography variant='subtitle2' >CIF: B351295382 - CNMV oficially registered</Typography>

                </Box>
            </Container>
        </Box>)
}

export default Footer