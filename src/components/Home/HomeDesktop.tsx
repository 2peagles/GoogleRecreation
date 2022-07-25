import { Box, Button, Typography  } from '@mui/material';
import { BodyContainer, MyContainer } from '../../styles/Home';
import { Color } from '../../styles/theme';

export const HomeDesktop = () => {
  return (
    <MyContainer>
      <Box>
        <BodyContainer sx={{
          backgroundColor: Color.green,
         height:'80vh'
        }}>
          <Box sx={{
            width: '30%',
            paddingLeft: '100px',
            display:'inline-block',
          }} >
            <Typography  mb={2}>
              For all that you are.
            </Typography>
            <Typography variant='h3' mb={2}>
              Pixel 6a is joining the family
            </Typography>
            <Typography mb={2}>
              Preorder the Pixel 6a and get Pixel Buds-A-series for free.
              Plus get up tp $300 back with eligible phone trade in.
            </Typography>
            <Button variant='outlined'> Learn More </Button>
          </Box>
            <Box sx={{display:'inline-block', paddingLeft:'100px'}}>
              <img src='/Images/hero.png' alt='Pixel 6a with pixel 5a buds' height='700px' />
            </Box>
        
        </BodyContainer>
      <BodyContainer>
      <Typography variant='h3' component='h6'>
        Popular on the google store.
      </Typography>
      </BodyContainer>
        <BodyContainer sx={{
          backgroundColor: Color.secondary, 
          borderRadius: '2rem', 
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'left'
          }}>
          <Box sx={{
            width: '30%' ,
            paddingLeft:'100px'}} >
        <Typography variant='h3' mb={2}>
            Set your clocks: Google Pixel watch
        </Typography>
        <Button variant='outlined'> Learn More </Button>
        </Box>
      </BodyContainer>
      <BodyContainer sx={{
        backgroundColor: Color.secondary,
        borderRadius: '2rem',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'right'
      }}>
        <Box sx={{
          width: '30%',
          paddingRight: '150px'
        }} >
            <Typography variant='h3' mb={2}>
              The wait is on: Pixel 7 phones.
            </Typography>
          <Button variant='outlined'> Learn More </Button>
        </Box>
      </BodyContainer>
      <BodyContainer sx={{height:'30vh'}}>
        <Typography variant='h3'> Shop by category.</Typography>
      </BodyContainer>
        <BodyContainer sx={{height:'30vh'}}>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '2rem',
            width: '15vw',
            height:'15vh',
            margin:'15px',
          }} >
            <Button > camera </Button>
          </Box>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '2rem',
            width: '15vw',
            height: '15vh',
            margin: '15px',
          }} >
            <Button > Doorbells </Button>
          </Box>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '2rem',
            width: '15vw',
            height: '15vh',
            margin: '15px',
          }} >
            <Button > Displays </Button>
          </Box>    <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '2rem',
            width: '15vw',
            height: '15vh',
            margin: '15px',
          }} >
            <Button > Packages </Button>
          </Box>
        </BodyContainer>
        <BodyContainer sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '2rem',
            width: '50%',
            height: '100%',
            margin:'10px',
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            padding:'20px 20px 20px 0px'
          }} >
            <Box sx={{
              textAlign:'center',
              width:'25vw'
            }}>
            <Typography variant='subtitle1' mb={2}>
              Pixel Pass.
            </Typography>
            <Typography variant='h3' mb={2}>
              One price for all the things Pixel.
            </Typography>
            <Button variant='outlined'> Learn More </Button>
          </Box>
          </Box>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '2rem',
            width: '50%',
            height:'100%',
            margin: '10px',
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            padding: '20px 20px 20px 0px'
          }} >
            <Box sx={{
              textAlign: 'center',
              width: '25vw'
            }}>
            <Typography variant='subtitle1' mb={2}>
              Pixel Buds.
            </Typography>
            <Typography variant='h3' mb={2}>
              Great sound.
               All around.
            </Typography>
            <Button variant='outlined'> Explore earbuds </Button>
            </Box>
          </Box>
        </BodyContainer>
        <BodyContainer sx={{height:'40vh', marginTop:'15vh'}}>
          <Box sx={{textAlign:'center', width:'30vw'}}>
            <Typography variant='h3'>
              Putting sutainabliity to work
            </Typography>
            <Typography>
              We're commited to using recycled or renewable 
              material in all Pixel, Nest, and Fitbit hardware devices by 2025.
            </Typography>
            <Button variant='outlined'>Learn More </Button>
          </Box>
        </BodyContainer>
        <BodyContainer>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '5rem',
            width: '35vw',
            height: '85%',
            margin: '15px',
          }} >
          </Box>
          <Box>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '5rem',
            width: '15vw',
            height: '30vh',
            margin: '25px',
          }} >
          </Box>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '15rem',
            width: '15vw',
            height: '30vh',
            margin: '25px',
          }} >
          </Box>    
          </Box>
          <Box sx={{
            backgroundColor: Color.secondary,
            borderRadius: '10rem',
            width: '15vw',
            height: '80vh',
            margin: '15px',
          }} >
          </Box>
        </BodyContainer>
      <BodyContainer sx={{
        backgroundColor: Color.secondary,
        borderRadius: '2rem',
        height:'25vh',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          width: '100%',
          height:'100%',
          display:'flex',
          // display:'inline-block',
            alignItems: 'center',
            justifyContent: 'center'
        }} >
        <Box sx={{display:'inline-block'}}>
          <Button>Icon here </Button>
            <Button>Icon here </Button>
            <Button>Icon here </Button>
        </Box>
            <Box  sx={{display:'inline-block'}}>
          <Typography variant='h6'> Pixel is the official fan phone of the NBA. </Typography>
          <Typography variant='subtitle1' mb={2}>
            Discover all the ways fans everywhere show their love of the game with 
            Pixel phones. Watch now.
          </Typography>
          </Box>
    
          <Button variant='outlined'> Shop phones</Button>

        </Box>
      </BodyContainer>
        <BodyContainer sx={{ height: '40vh', marginTop: '15vh' }}>
          <Box sx={{ textAlign: 'center', width: '30vw' }}>
            <Button variant='outlined'>icon here </Button>
            <Typography>
              You're all set to receive the latest news and 
              offers from the Google Store.
            </Typography>
            <Button variant='outlined'>icon here </Button>
          </Box>
        </BodyContainer>
      </Box>
    </MyContainer>
  )
}
