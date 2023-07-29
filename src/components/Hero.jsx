import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo}
            alt='sumz_logo'
            className='w-28 object-contain'/>
            <button
            type='button'onClick={()=> window.open('https://github.com/Kishanth12')}
            className='black_btn'>
                Git Hub
            </button>
        </nav>
        <h1 className='head_text'>Summarize Articles With <br className='max-md:hidden'/>
        <span className='orange_gradient'>openAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simply your reading with Summize,an open-source article summarizer that transforms lengthy articles into clear and concice summaries
        </h2>

    </header>
  )
}

export default Hero