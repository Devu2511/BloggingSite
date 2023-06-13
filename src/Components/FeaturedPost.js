import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const FeaturedPost = () => {
  return (
    <Card elevation={5} style={{color:"black",backgroundImage:"url(https://images.unsplash.com/photo-1584009218873-a6d120f611b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80)",
                  padding:"35px 25px"}}>
        <CardContent>
            <Typography gutterBottom style={{fontFamily:"Montserrat",fontSize:40}}>Title for the Blog</Typography>
            <Typography varient="h5" style={{}}>
            Providing a platform for individuals to write and publish their blogs is a powerful and transformative endeavor.
            It opens up opportunities for people to share their stories, perspectives, and expertise with the world.
            </Typography>
        </CardContent>
        <CardActions>
            <Button>
                Read more..
            </Button>
        </CardActions>
    </Card>
  )
}

export default FeaturedPost