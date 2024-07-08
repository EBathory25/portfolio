import Lottie from 'react-lottie';




const LottieAnimation = ({animation}) =>{
    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData: animation,
        renderSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }
    }
    return(
        <div>
            <Lottie options={defaultOptions}
            height={200}
            width={200}
            />
        </div>
    )  
}


export default LottieAnimation
