import gh from '../assets/gh.png' 

const Footer = () =>{
    return(
        <footer className="flex gap-3 justify-center items-center bg-green-300 pt-5 pb-5 w-screen h-1/6">
            <a href='https://github.com/bryanalay/TODO' target='_blank'>
            <img className='w-8 ' src={gh} ></img>
            </a>
            <div className="">/bryanalay</div>
        </footer>
    )
}

export {Footer}