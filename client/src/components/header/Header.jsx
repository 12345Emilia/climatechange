import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        {/* <span className='headerTitleSm'>React & Node</span> */}
        <span className='headerTitleLg'>911 Climate Change</span>
      </div>
      <img
        className='headerImg'
        src='https://static1.squarespace.com/static/59a706d4f5e2319b70240ef9/t/5a7a3f018165f5e5566ca3e6/1517961006265/AdobeStock_54132491.jpeg'
        alt=''
      />
    </div>
  );
}
