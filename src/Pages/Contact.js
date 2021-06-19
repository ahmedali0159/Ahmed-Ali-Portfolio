import React from 'react'
import emailjs from 'emailjs-com';
import {MainLayout, InnerLayout} from '../Styles/Layout';
import styled from 'styled-components';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/ContactItem';

function Contact() {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_2tezezm', 'template_7byks2j', e.target, "user_t43nGAbGQsJPrqZVYQs9N")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
       <MainLayout>
         <Title title={'Contact'} span={'Contact Me'}/>
         <ContactStyled>
         <InnerLayout className="contact-section">
            <div className="left-content">
                <div className="contact-title">
                    <h4>Get In Touch</h4>
                </div>
                <form onSubmit={sendEmail}  className="form">
                    <div className="form-field">
                        <label htmlFor="name" >Enter Your Name*</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email" >Enter Your Email*</label>
                        <input type="text" id="email" name="user_email" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="subject" >Enter Your Subject*</label>
                        <input type="text" id="subject"  name="subject"/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="">Enter Your Message*</label>
                        <textarea name="message" id="textarea" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-field f-btn">
                    
                      <input className="pointer" type="submit" value="send"  />
                      
                    </div>
                </form>
            </div>
            <div className="right-content">
                <ContactItem title={'Phone'} icon={phone} contact1={'+8801752976802'} />
                <ContactItem title={'Email'} icon={email} contact1={'ahmedali69325@gmail.com'}/>
                <ContactItem title={'Address'} icon={location} contact1={'GM Bari, House No: 21 Uttar Badda-1212'} contact2={'Dhaka,Bangladesh'} />
            </div>
         </InnerLayout>
         </ContactStyled>
       </MainLayout>
    )
}

const ContactStyled = styled.div `
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
      
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-btn{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width:502px){
                width: 70%;
            }
             
        }
        .contact-title{
            h4{
                color: var(--white-color);
                font-size: 1.8rem;
                padding: 1rem 0;
            }
        }
        .form{
            width: 100%;
           @media screen and (max-width:500px){
               width:100%;
           }
          
            .form-field{
                margin-top: 2rem;
                width: 100%;
                position: relative;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
                .pointer{
                    cursor: pointer;
                }
            }
        }
    }

`;
export default Contact

