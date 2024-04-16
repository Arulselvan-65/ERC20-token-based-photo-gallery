


const Card = (props) =>{
    return(
        <div>
            <div className='bg-white border border-gray-300 p-2 h-auto w-80 rounded'>
                <img className='object-cover w-80 h-80 rounded' src={props.src}></img>
                <div className='h-auto mb-1'>
                    <div className='flex justify-between pr-1 pl-1 mt-3'>
                        <p className='text-lg font-roboto'>Prize</p>
                        <p className='text-lg'>{props.Prize} HAM</p>
                    </div>  
                    <button className='bg-blue-600 w-[100%] h-10 mt-3 rounded cursor-pointer text-white'>Buy Now</button>
                </div>
            </div>

        </div>
    )
}

export default Card;