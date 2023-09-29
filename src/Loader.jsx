import './main.css';
import PropTypes from 'prop-types'
export default function Loader({children}){
    return(
        <div className='text-center pt-[5rem] text-LightCyan text-[1.5rem] tracking-[0.5rem] font-custom' ><h1>{children}</h1></div>
    )
}
Loader.propTypes={
    children:PropTypes.string.isRequired,
}