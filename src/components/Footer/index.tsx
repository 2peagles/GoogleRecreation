import { Typography, Grid, List, ListItemText} from '@mui/material';
import React from 'react';
import {FooterIconContainer, FooterList, FooterContainer, FooterIcons} from '../../styles/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



export default function Footer() {
  return (
    <>
      <FooterContainer sx={{
        p: { xs: 4, md: 7 },
        fontSize: { xs: '12px', md: '14px' }
}}>
      <Grid container sx={{
        width: '85vw',
        minHeight: '120vh',
        marginTop: '20px',
        display: 'flex ',
        alignItems: 'right',
        justifyContent: 'right',
}}>
        <Grid item md={12} >
            <Typography variant='body2' sx={{ m: 2 }}>
            Pre-order Pixel 5a and get Pixel Buds-A-Series for free, 
            starting on July 21,2022 at 10:00am PT ending on July 27, 2022 at 11:59pm PT.
            One Pixel Buds-A-Series per Pixel 6a purchase.Offer avaailable only for US residents 
            aged 18 years or older with US shipping addresses. All products must be added to your 
            shopping cart to recieve the bundle offer. If you return the Pixel 6a without the Pixel-Buds 
            A-Series, you may be charged $99 (MSRP of Pixel Buds A-Series). Except for eligible phone trade-in ,
            offer cannot be combined with any promotional codes, or with other bundles offers running at the same 
            time.It's non-transferable, and it isn't valid for cash or a cash equivalent.Purchase must
            be made on Google Store US. Available only while supplies last.Void where prohibited.</Typography>
            <Typography variant='body2' sx={{ m: 2 }}>
              Pre-order Pixel 6a and get up to $300 back with eligible phone trade-in. Starting on July 21, 2022 at 10:00am PT
               and ending on July 27, 2022 at 11:59pm PT. Trade-in values vary based on condition, year, and configuration of 
               your eligible device, and are subject to change upon inspection. Credit card refund available only on a card used 
               to purchase the Pixel phone. Phone trade-in credit will be issued as a refund back on the credit card used for the 
               phone purchase at Google Store or in the form of Store Credit if the purchased phone has already been returned. 
               Refund is based on (and paid after) phone received matching the description provided at time of estimate and will
                be issued to form of payment used for order. Phones sent for trade-in must be received within 30 days of initiation
                 of trade-in process, provided the purchased device has not been returned during that time.
            </Typography>
            <Typography variant='body2' sx={{ m: 2 }}>
                Additional trade-in terms are located here:
                Link
            </Typography>
            <Typography variant='body2' sx={{ m: 2 }}>
                Additional store credit terms are located here:
                Link
            </Typography>
            <Typography variant='body2' sx={{ m: 2 }}>
              Pixel 7 and Pixel 7 Pro devices have not been authorized as required by the rules of the Federal Communications 
              Commission or other regulators. These devices may not be sold or otherwise distributed until required legal 
              authorizations have been obtained.
            </Typography>
            <Typography variant='body2' sx={{m:2}}>
              Available only in the US. Includes YouTube Premium, Google Play Pass, and Google One. Does not include carrier 
              service plan. Monthly subscription price varies by plan. Monthly subscription price varies by plan. Upgrades may 
              change monthly price. If you cancel during the 24-month cycle, you will be required to pay the remaining value of 
              your Pixel device at a non-discounted price, and your access to bundled services will terminate. Device protection
               includes an additional year of coverage for mechanical breakdown (in addition to the one-year manufacturer 
               warranty), and up to two claims of accidental coverage for two years. Claim coverage subject to deductible(s). 
               See g.co/pixelpass/tos for full terms.
            </Typography>
            <Typography variant='body2' sx={{m:2}}>
              Here's what you will pay for Pixel Pass: You'll be required to finance your Pixel Pass purchase with 0% APR 
              Google Store Financing. The full cost of your Pixel and Preferred Care is spread out over 24 monthly payments. 
              The Google services included in Pixel Pass will be charged to your Google Store Financing account each month. 
              Your Pixel Pass subscription will appear as two separate transactions every month on your Google Store Financing
               account. From $45/month: $648.68 at 0% APR with 24 equal monthly payments = $27.03/month plus Pixel Pass 
               services (Google One 200 GB) = $17.97/month for a Total monthly payment = $45/month. Adjusted for taxes and
                shipping.
            </Typography>
      </Grid>
      <Grid sx={{display:'flex', alignItems:'right', justifyContent:'right', mt:10, mb:7}} item md={12}>
      <List sx={{mr:7}}>
              <ListItemText>
                <Typography lineHeight={3} variant='body2' >Place an order</Typography>
        </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Shipping options</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Tracking a package </Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Country avaliability</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Repairs</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Installation</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Ideas + info</Typography>
          </ListItemText>
      </List>
        <List>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Help Center</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Contact Us </Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Financing</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Device Recycling</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Sustainbility</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Gift returns</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Refurbished</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Trade-in</Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Pixel for Business </Typography>
          </ListItemText>
          <ListItemText>
                <Typography lineHeight={3} variant='body2'>Locations</Typography>
          </ListItemText>
        </List>
      </Grid>
     </Grid>
   </FooterContainer>
      <Grid item md={12}>
        <FooterIconContainer>
          <Grid item xs={12}>
            <FooterIcons >
              <InstagramIcon sx={{ mr: 2 }} />
              <TwitterIcon sx={{ mr: 2 }} />
              <FacebookIcon sx={{ mr: 2 }} />
              <YouTubeIcon sx={{ mr: 2 }} />
            </FooterIcons >
          </Grid>
          <Grid item xs={12} >
            <FooterList >
              <ListItemText primary="United States" />
            </FooterList>
            <FooterList >
              <ListItemText primary="Privacy" />
            </FooterList>
            <FooterList>
              <ListItemText primary="Google Nest Commitment to Privacy " />
            </FooterList>
            <FooterList>
              <ListItemText primary="Sales Terms" />
            </FooterList>
            <FooterList>
              <ListItemText primary="Terms of Service" />
            </FooterList>
            <FooterList>
              <ListItemText primary="Careers" />
            </FooterList>
          </Grid>
        </FooterIconContainer>
        </Grid>
   </>
  )
}
