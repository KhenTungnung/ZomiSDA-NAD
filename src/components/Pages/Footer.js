import React from 'react'
import {Button} from "../Button";
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`
const FooterSubs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`
const Footerlinks = styled.div`
    width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`
const Footerlinkswrapper = styled.div`
    display: flex;
`
const Footerlinkitems = styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  
  &:hover{
    color: #e9e9e9;
    transition: 0.3s ease-out;
  }
`
const SocialMedia = styled.section`
    max-width: 1000px;
  width:100%;
`
const Socialmediawrap = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  width:90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
`
const Footerlogo = styled.div`
`
const Sociallogo = styled.link`
    color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-self: center;
  margin-bottom: 16px;
`
const Websiterights = styled.small`
    color: #fff;
  margin-bottom: 16px;
`
const Socialicons = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
const SocialiconslinkFacebook = styled.link`
`
const Footer = () => {
    return(
        <FooterContainer>
            <FooterSubs>
                <p className='footer-subscription-heading'>
                    Join the Adventure
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </FooterSubs>
            <Footerlinks>
                <Footerlinkswrapper>
                    <Footerlinkitems>
                        <h2>About US</h2>
                        {/**<Link to='/about'> About</Link>
                        <Link to='/contact'> Contact </Link>*/}
                    </Footerlinkitems>
                </Footerlinkswrapper>
            </Footerlinks>
            <SocialMedia>
                <Socialmediawrap>
                    <Footerlogo>
                        <Sociallogo>
                            TRVL <i className='fab fa-typo3'/>
                        </Sociallogo>
                    </Footerlogo>
                    <Websiterights>TRVL @ 2020</Websiterights>
                    <Socialicons>
                        <SocialiconslinkFacebook to='/' target='_blank' aria-label='Facebook'>

                        </SocialiconslinkFacebook>
                    </Socialicons>
                </Socialmediawrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer