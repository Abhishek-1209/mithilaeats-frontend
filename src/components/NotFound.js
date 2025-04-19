import React from 'react'

const NotFound=()=>{
    return(
        <div>
            <div className='not-found-page'>
                <h1> 404- Page Not Found</h1>
                <p>The page you are looking doesn't exist</p>
                <a href='/' className='btn btn-primary'>Go home</a>
            </div>
        </div>
    );
};
export default NotFound;