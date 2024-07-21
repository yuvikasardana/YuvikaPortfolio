//parent for the components
import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';



const Layout=()=>{
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Adjust scroll position if necessary
      // You can customize this logic to fit your needs
      window.scrollTo(0, 0);
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return(
        <div className="App">
        <Sidebar/>
        <div className='page'>
            {/* <span className='tags top-tags'>&lt;body&gt;</span> */}
          
          
              <Outlet/> {/*sort of a placeholder for the routing*/}
          
          
          
            {/* <span className="tags bottom-tags"> */}
             {/* &lt;/body&gt; 
             <br/> */}
            {/* <span className="bottom-tag-html"> &lt;/html&gt; </span>  */}
          {/* </span> */}
        </div>
        </div>
    )
}

export default Layout