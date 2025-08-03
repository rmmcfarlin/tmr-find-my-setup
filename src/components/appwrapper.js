import tmrLogo from '../assets/tmr-logos/logo-flex-dark.png'


const AppWrapper = ({children}) => {

    return(
        <div className="app-body">
            <div className="app-card-main">
                <img src={tmrLogo} style={{width: "256px"}} id="tmr-logo"></img>
                {children}
            </div>
        </div>
    )
}

export default AppWrapper