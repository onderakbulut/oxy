import './index.scss';

function Contact() {
    return (  
        <section className='contact'>
            <div className="contact__lines">
                <div className="contact__line -left"></div>
                <div className="contact__line -center"></div>
                <div className="contact__line -right"></div>
            </div>
            <div className="contact__title">Contact With Us</div>
            <div className="contact__subTitle">Let&apos;s do something <br />amazing together</div>
            <div className="contact__form">
                <div className="contact__form-group mb-10">
                    <input type="text" placeholder='Your Name' className='contact__form-input' />
                    <input type="text" placeholder='Email' className='contact__form-input' />
                </div>
                <div className="contact__form-group mb-[50px]">
                    <textarea placeholder='Message' className='contact__form-input' rows={3} />
                </div>
                <button className='contact__form-button'>Send</button>
            </div>
            <ul className="social">
                <li className='social__item'><a href="#"><img src="./social/facebook.svg" width={37} height={37} alt="" /></a></li>
                <li className='social__item'><a href="#"><img src="./social/twitter.svg" width={37} height={37} alt="" /></a></li>
                <li className='social__item'><a href="#"><img src="./social/behance.svg" width={37} height={37} alt="" /></a></li>
            </ul>
            <div className="copyright">
                © 2018
            </div>
        </section>
    );
}

export default Contact;