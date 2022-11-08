import React from 'react';
import blog from '../../assets/blog.png'

const Blog = () => {
    return (
        <div className='lg:py-20 md:py-12 py-10'>
            <div className='service-head w-1/2 mx-auto'>
                <h2 className="font-specially md:text-4xl text-3xl  text-center font-bold text-[#0A5078]">Blog</h2>
                <div className='w-24 h-1 bg-[#FAB400] mx-auto mt-2'></div>
            </div>

             <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white ">
                <h3 className='text-[#0A5078] font-bold text-2xl'><span className='text-2xl font-extrabold text-[#F8AF23]' >1. </span> Difference between SQL and NoSQL?</h3>
                <h4 className='text-2xl font-bold mt-3 text-[#0A5078]  mt-3 underline'>Answer:</h4>
                <div className="diff-table mt-3 ">
                    <div className="grid grid-cols-2  ">
                        <div className="  border border-gray-300">
                            <div className="t-head bg-orange-100 py-3">
                                <h2 className='font-bold uppercase text-center'>SQL</h2>
                            </div>
                            <div className="cont p-3">
                            <p className='text-lg text-black'>1. Relational database management system (RDBMS)</p>
                            <p className='mt-3 text-lg text-black'>2. These databases have fixed or static or predefined schema.</p>
                            <p className='mt-3 text-lg text-black'>3. These databases are not suited for hierarchical data storage.</p>
                            <p className='mt-3 text-lg text-black'>4. These databases are best suited for complex queries & Vertically Scalable.</p>
                            <p className='mt-3 text-lg text-black'>5. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
                            </div>
                        </div>
                        <div className="border border-gray-300">
                            <div className="t-head bg-orange-100 py-3">
                                <h2 className='font-bold uppercase text-center'>NoSQL</h2>
                            </div>
                            <div className="cont p-3">
                            <p className='text-lg'>1. Non-relational or distributed database system.</p>
                            <p className='mt-3 text-lg text-black'>2. They have dynamic schema.</p>
                            <p className='mt-3 text-lg text-black'>3. These databases are best suited for hierarchical data storage.</p>
                            <p className='mt-3 text-lg text-black'>4. These databases are not so good for complex queries & Horizontally scalable</p>
                            <p className='mt-3 text-lg text-black'>5. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Blog End */}

             <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white ">
                <h3 className='text-[#0A5078] font-bold text-2xl'><span className='text-2xl font-extrabold text-[#F8AF23]' >2. </span> What is JWT, and how does it work?</h3>
                <h4 className='text-2xl font-bold mt-3 text-[#0A5078] underline'>Answer:</h4>
                <p className='text-lg mt-1 text-black'><strong>JWT</strong>, or <strong>JSON Web Token</strong>, is an open standard used to share security information between two parties — a client and a server. Each <strong>JWT</strong>,contains encoded <strong>JSON objects</strong>, including a set of claims. <strong>JWTs</strong>, are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p className='font-bold text-xl mt-4'>Working procedure:</p>
                <p className='text-lg text-black'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                <div className="blog-img w-2/3 mx-auto">
                    <img src={blog} alt="" />
                </div>
                <ol className='list-decimal mt-2 ml-6'>
                    <li><span className="text-lg text-black">User sign-in using username and password or google/facebook.</span></li>
                    <li><span className="text-lg text-black">Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</span></li>
                    <li><span className="text-lg text-black">User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</span></li>
                    <li><span className="text-lg text-black">Resource server then verifies the authenticity of the token using the secret salt/ public key.</span></li>
                </ol>
            </div>
            {/* Single Blog End */}

        </div>
    );
};

export default Blog;