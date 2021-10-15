import './aboutinfo.css';

export default function Aboutinfo() {
  return (
    <div className='about'>
      <img
        className='aboutImg'
        src='https://parkpeople.ca/custom/uploads/2017/12/8009894933_898f81b5ec_b.jpg'
        alt=''
      />
      <div className='aboutItem'>
        <span className='aboutTitle'>About</span>
      </div>
      <div className='aboutCon'>
        <p className='aboutText'>
          We're a teeny tiny company working on a big issue. Using art, symbols,
          and creative messaging, Our Mission is to help people communicate the
          need to take action on climate change. Our environment is very
          important to us because it is where we live and share resources with
          other species.{' '}
        </p>

        <h3 className='aboutMidTitle'>What is Climate Change?</h3>
        <p className='aboutText'>
          Climate is used to describe the long term patterns of rain, snow, hot,
          cold or humidity for a specific region or location. These patterns,
          which we often experience as seasonal changes, are typically repeated
          over decades and centuries, and are different from weather, which can
          change from day to day and week to week as fair weather and storms
          pass through. You can think of climate as the timing, duration and
          style of the seasons for a region; it is usually predictable and
          consistent, like the arrival of spring or fall conditions, or rainfall
          patterns for arid or tropical areas. You can think of weather as what
          is happening outside right now, or in the next few days. It's the
          usual ups and downs, fair weather or stormy, and is full of
          variability from natural causes.
        </p>
        <p className='aboutText'>
          Climate Change is used to describe the change in these long term
          patterns over time and recently to capture the idea they are human
          caused from our use of energy from fossil fuels like coal, oil and
          natural gas.{' '}
        </p>
        <p className='aboutText'>
          The gases that are produced by burning of these fuels (the same ones
          that come out of your car's tailpipe), are called greenhouse gases
          because once they're up in the sky they start warming the earth
          causing lasting shifts in seasonal variations and regional climate.
          It's also amplifying natural variability, leading to stronger storms,
          more intense heatwaves, stronger hurricanes and more record setting
          events in general. Of course there are natural forces that drive
          climate change, think of volcanic eruptions, which can have short term
          cooling effects, but these are often described as climate variability
          to keep them separate from human caused factors or Climate Change.
        </p>
      </div>
    </div>
  );
}
