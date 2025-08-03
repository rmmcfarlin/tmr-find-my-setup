import PowerAmplifiers from '../assets/icons/category-icons/Power-Amplifiers-icon.png'
import Preamplifiers from '../assets/icons/category-icons/Preamplifiers-icon.png'
import IntegratedAmplifiers from '../assets/icons/category-icons/Integrated-Amplifiers-icon.png'
import Speakers from '../assets/icons/category-icons/Speakers-icon.png'
import Subwoofers from '../assets/icons/category-icons/Subwoofers-icon.png'
import Streamers from '../assets/icons/category-icons/Streamers-icon.png'
import DACs from '../assets/icons/category-icons/DACs-icon.png'


const ComponentSelection = ({selectComponent, componentSelection}) => {

    const options = ["Power Amplifiers", "Preamplifiers", "Integrated Amplifiers", "Speakers", "Subwoofers", "Streamers", "DACs"]
    const iconNames = [PowerAmplifiers, Preamplifiers, IntegratedAmplifiers, Speakers, Subwoofers, Streamers, DACs]

    const getComponentButtonClass = (value) => {

        let className = "component-button"
        if (value === componentSelection) {
            className += " active"
        }
        return className
    }

    return (
        <div className="component-buttons-container">
        {options.map((option, index) => {
            return (
                    <button className={getComponentButtonClass(option)} onClick={() => selectComponent(option)} key={index}>
                <img src={iconNames[index]} className="component-button-icon"></img>
                <p>{option}</p>
                </button>           
            )
        })
        }
       </div>
    )
}

export default ComponentSelection