import './contactinfo.css';

export default function Contactinfo() {
  return (
    <div className='contact'>
      <img
        className='contactImg'
        src='https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2021/06/1140-climate-change-hero.jpg'
        alt=''
      />
      <div className='contactItem'>
        <span className='contactTitle'>Contact</span>
      </div>
      <div className='contactCon'>
        <p className='contactText'>
          Have a question about our website? Need assistance with your blog
          posts?
        </p>{' '}
        <p className='contactText'>
          {' '}
          We're here to help. Feel free to reach out by phone or email.
        </p>
      </div>
      <div class='grid-container'>
        <div class='grid-item'>
          Phone Support <p classname='contactGridTitle'>800-123-3456</p>
          <p classname='contactGridText'>
            911 Climate Change Customer Service is available by phone Monday
            through Friday, 9am - 5pm, EST.
          </p>
        </div>
        <div class='grid-item'>
          E-Mail
          <p classname='contactGridTitle'>
            Email us anytime at customerservice@911climatechange.com
          </p>
          <p classname='contactGridText'>
            For blog post inquiries, please remember to include your username in
            the e-mail. Thanks!
          </p>
        </div>
        <div class='grid-item'>
          BLOG{' '}
          <p classname='contactGridText'>
            Check out our blog for Climate Change news, sustainable living ideas
            & more. Leave a comment, message or share a post.
          </p>
        </div>
      </div>
    </div>
  );
}
