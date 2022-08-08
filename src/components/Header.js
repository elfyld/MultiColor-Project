import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({ title}) => {
     return(
         <header className='header'> 
            <h1>{title}</h1> 
         
            

          
          
                </header>

     )


}
Header.defaultProps = {
    title: 'To Do LIST',
  }

  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header