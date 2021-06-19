import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import winson1 from '../../../images/winson1.png';

const blogData =[
    {
        title:'check at least a doctor in a year for your teeth',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi repellat veniam eligendi blanditiis nam eos. ',
        author:'Rashod Kobir',
        authorImg: winson1,
        date:'22 Aug 2018'
    },
    {
        title:'2 times of brush on a day can you keep healthy',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi repellat veniam eligendi blanditiis nam eos. ',
        author:'Dr. caudi',
        authorImg: winson1,
        date:'23 April 2019'
    },
    {
        title:'the tooth cancer is talking a challenge',
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A numquam voluptates cum magni at odit? ',
        author:'Dr. jhon mishel',
        authorImg: winson1,
        date:'23 April 2019'
    }
]

const Blogs = () => {
    return (
        <section className="blogs mb-5 mt-5">
            <div className="container text-center mt-4">
                <div className="section-header mb-5">
                    <h3>our blogs</h3>
                    <h1>From Our Blogs News</h1>
                </div>
                <div className="card-deck d-flex p-3">
                    {
                       blogData.map(blog=> <BlogPost blog  ={blog}></BlogPost>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Blogs;