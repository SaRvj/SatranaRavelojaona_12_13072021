import PropTypes from 'prop-types' ;
/**
 * Genere un composant de statistiques
 * @param {*} props 
 * @param {string} props.img
 * @param {string} props.value 
 * @param {string} props.name
 * @returns {*} 
 */
export default function Stats(props) {

    return (
        <div className="stats">
            <div className="stats-icon">
                <img src={props.img} alt="img stats" />
            </div>
            <div className="stats-info">
                <p className="stats-value">{props.value}</p>
                <p className="stats-name">{props.name}</p>
            </div>
        </div>
    )

}

Stats.propTypes = {
    value : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}