import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className = 'header'>
            <h1 >Task {title}</h1>
            <Button onClick={onAdd} color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propType = {
    title: PropTypes.string ,
}

// css in js
// const headerstyle ={
//     color : 'White',
//     backgroundColor : 'Grey'
// }

export default Header
