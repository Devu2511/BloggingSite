import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const PostCard = ({post}) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#' >
        <Card elevation={5} style={{display:"flex",color:"black",padding:20, backgroundImage:"url(https://images.unsplash.com/photo-1584009218873-a6d120f611b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80)"}}>
          <div style={{flex:1}}>
            <CardContent>
              <Typography component="h2"variant="h5" style={{fontFamily:"Montserrat", fontSize:35}}>
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitel1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitel1" style={{color:"Blue"}}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          
            
        </Card>

      </CardActionArea>
    </Grid>
  )
}

export default PostCard