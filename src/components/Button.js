import PropTypes from 'prop-types'

const Button = ({color,text}) => {
    
    return    <button style={{backgroundColor:color}}  className='btn '>{text}</button>
}

Button.propTypes ={//Fonksiyona verilen variablerın türleri belirliyor
    color : PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button