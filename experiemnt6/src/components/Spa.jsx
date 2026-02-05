import {BrowserRouter,Routes,Route,Link,useLocation,matchPath} from 'react-router-dom';
import Home from './home.jsx';
import Formc from './Form.jsx';
import { Container } from '@mui/material';

const SinglePageApp = ()=>{

    return(
        <BrowserRouter>
        <Container maxWidth='sm' component={'nav'} sx={{border:'2px solid red' ,textAlign:'center',mb:2}}>
       <nav>
        <Link to='/' >Home</Link> | {" "}
        <Link to='/form'>Form</Link>
       </nav>
       </Container>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/form" element={<Formc />} />
        </Routes>
        </BrowserRouter>
    )

}

export default SinglePageApp;