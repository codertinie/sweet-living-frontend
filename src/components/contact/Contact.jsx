import img from '../../poster.png'
import './contact.css'

const Contact = () => {
    return (
      <div className='cont'>
        <div className='cont1'>
          <img src={img} alt="real_estate_poster" />
        </div>
        <div className='cont2'>
            <h1 id='heading'>Get in touch</h1>
            <p>We'd love to hear from you.Our friendly team is always here to chat</p>
            <form action="#" id='contact_form'>
              <label htmlFor='name' className='label1'>Name</label> <br/>
              <input type="text" id='name' name='Name' placeholder='Enter your name'/><br/>
              <label htmlFor='email' className='label1'>Email</label> <br/>
              <input type="text" id='email' name='Email' placeholder='Enter your email'/><br/>
              <label htmlFor='number' className='label1'>Phone number</label> <br/>
              <input type="number" id='number' name='Number' placeholder='Enter your number'/><br/>
              <label htmlFor='text' className='label1'>How can we help?</label> <br/>
              <textarea type="text-area" id='text' name='Text' placeholder='Tell us about the project' rows='5' cols='57'/><br />
              <h4 id='hd4'>Service required</h4> 
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <label htmlFor="vehicle1" className='label2'> Buy house</label><br/>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
              <label htmlFor="vehicle2" className='label2'> Rent house</label><br/>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
              <label htmlFor="vehicle3" className='label2'> Sell house</label><br/> <br />
              <input type="submit" value="Get Started" id='submit'/>
            </form>
        </div>
      </div>
    )}
  
export default Contact;