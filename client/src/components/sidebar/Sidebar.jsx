// import {axiosInstance} from '../../config';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axiosInstance.get('/categories');
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT</span>
        <img
          className='sidebarImg'
          src='https://parkpeople.ca/custom/uploads/2017/12/8009894933_898f81b5ec_b.jpg'
          alt=''
        />
        <h2 className='sidebarTitle2'>Welcome to 911 Climate Change!</h2>
        <p className='sidebarText'>
          Our environment is very important to us because it is where we live
          and share resources with other species.
        </p>
        <p className='sidebarText'>
          Built to capture the imagination, this blog site is a great place to
          get “Short stories about your earth.” The mission of our blog is very
          simple and is guided by the phrase “Think beyond your everyday world”.
        </p>
      </div>
      {/* <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i
            className='topIcon fab fa-facebook-square'
            onClick={(event) =>
              window.open('https://www.facebook.com', '_blank')
            }></i>
          <i
            className='topIcon fab fa-twitter-square'
            onClick={(event) =>
              window.open('https://www.twitter.com', '_blank')
            }></i>
          <i
            className='topIcon fab fa-pinterest-square'
            onClick={(event) =>
              window.open('https://www.pinterest.com', '_blank')
            }></i>
          <i
            className='topIcon fab fa-instagram-square'
            onClick={(event) =>
              window.open('https://www.instagram.com', '_blank')
            }></i>
        </div>
      </div>
    </div>
  );
}
