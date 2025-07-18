import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>

             <div className='row p-3 m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O'/>
                    <br /><br />
                    <a href=''>Trach account opening</a>
                    <a href=''>Trach segment activation</a>
                    <a href=''>Intraday margin</a>
                    <br />
                    <a href=''>kite user manual</a>
                </div>
                 <div className='col-6'>
                 <h1 className='fs-3'>Featured</h1>
                 <ol>
                <li><a href=''>Current Takeovers and Delisting - January 2025</a></li>
                <li> <a href=''>Latest Intraday leverages - MIS & CO</a></li>
                 </ol>
                 </div>
            </div>
            </section>
        
    );
}

export default Hero;