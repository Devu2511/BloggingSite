import Container from '@mui/material/Container';

import './App.css';
import Header from './Components/Header';
import { Grid, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import FeaturedPost from './Components/FeaturedPost';
import { featuredPosts, sidebar } from './Data/Data';
import PostCard from './Components/PostCard';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
      <ThemeProvider theme={lightTheme}>
        <Container >
        <Header/>
        <FeaturedPost/>
        <br />
        <Grid container spacing={2}>
          {featuredPosts.map((post) => {
            return (
              <PostCard post={post} key={post.title} />
            );
          })}
        </Grid>
        <Grid container spacing={5} style={{marginTop:3}}>
          <Main title="Title 1"/>
          <Sidebar 
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
          />
        </Grid>


        </Container>

      </ThemeProvider>
  );
}

export default App;
