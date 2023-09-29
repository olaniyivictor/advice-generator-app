import './main.css';
import PropTypes from 'prop-types'
export default function Errormessage({children}){
    return(
        <div><p className='text-center pt-[5rem] text-LightCyan text-[1.5rem] tracking-[0.5rem] font-custom'>{children}</p></div>
    )
}
Errormessage.propTypes={
    children:PropTypes.string.isRequired
}