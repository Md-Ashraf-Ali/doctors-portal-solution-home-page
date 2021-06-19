import React from 'react';

const BlogPost = ({blog}) => {
    return (
        <div className='col-md-4'>
            <div className="container">
                <div style={{borderRadius:'5px'}} className="card p-3 shadow p-3 mb-5 bg-body rounded">
                    <div className="d-flex p-2">
                        <div>
                            <img src={blog.authorImg} alt="" />
                        </div>
                        <div className='pt-3 ps-4'>
                            <h5>{blog.author}</h5>
                            <small>{blog.date}</small>
                        </div>
                    </div>   
                    <div className='mt-4'>
                        <h3 style={{fontSize:'bold',marginBottom:'20px'}}>{blog.title}</h3>
                        <p>{blog.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;