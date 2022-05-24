import './skills.css'

const Skills = () => {
  return (
    <div id="skills" className='inner'>
        <div className='header'>
            <h1 className='header'>Skills</h1>
        </div>
        <div className='container'>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src='https://cdn.svgporn.com/logos/html-5.svg' className='skill-icon'></img>
                    </div>
                    <h3>HTML 5</h3>
                     </div>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src='https://cdn.svgporn.com/logos/css-3.svg' className='skill-icon'></img>
                    </div>
                    <h3>CSS</h3>
                     </div>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src='https://cdn.svgporn.com/logos/javascript.svg' className='skill-icon'></img>
                    </div>
                    <h3>JAVA SCRIPT</h3>
                     </div>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src='https://cdn.svgporn.com/logos/react.svg' className='skill-icon'></img>
                    </div>
                    <h3>REACT</h3>
                     </div>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src='https://cdn.svgporn.com/logos/nodejs.svg' className='skill-icon'></img>
                    </div>
                    <h3>NODE JS</h3>
                     </div>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src='https://cdn.svgporn.com/logos/mongodb.svg' className='skill-icon'></img>
                    </div>
                    <h3>MONGO DB</h3>
                     </div>
            </div>
        </div>

    </div>
  )
}

export default Skills