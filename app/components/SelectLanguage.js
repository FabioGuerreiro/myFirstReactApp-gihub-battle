var React = require('react');
var PropTypes = require('prop-types');

const SelectLanguage = (props) => {
    var languages = ['All', 'JavaScript', 'TypeScript', 'CSS', 'Java', 'Python'];

    return(
        <ul className='languages'>
            {languages.map((lang) => {
                return (
                    <li
                        style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

module.exports = SelectLanguage;