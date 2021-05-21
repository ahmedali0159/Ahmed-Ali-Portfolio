import React from 'react'
import blogs from '../Data/blogs';
import styled from 'styled-components';
import Title from '../components/Title';
import {MainLayout, InnerLayout} from '../Styles/Layout';


function Blog() {
    return (
     <MainLayout>
            <BlogStyled>
             <Title title={'Blogs'} span={'Blogs'} />
             <InnerLayout className={'blog'}>
            {
                blogs.map((blog) => {
                    return <div key={blog.id} className={'blog-item'}>
                        <div className="image">
                            <img src={blog.img} alt="" />
                        </div>
                        <div className="title-blog">
                        <a href={blog.link}>
                            {blog.title}
                        </a>
                        </div>
                    </div>
                })
            }
            </InnerLayout>
        </BlogStyled>
     </MainLayout>
    )
}

const BlogStyled = styled.div `
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
       
       .blog-item{
        background-color: var(--background-dark-grey);
        padding: 1rem 1rem;
       }
        .image{
            width:100%;
            height: 90%;
            transition: All .4s ease-in-out;
            padding-bottom: .5rem ;
            img{
                width: 100%;
                object-fit: cover;
                &:hover{
                    cursor:pointer:
                    transform: scale(1.5);
                }
            }

        }
        .title-blog{
            a{
                font-size: 1.2rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: All .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }

`;

export default Blog
