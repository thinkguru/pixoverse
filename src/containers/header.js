import { Web3Button } from '@web3modal/react'
import logo from '../images/logoFinal.png'
import { useWeb3ModalTheme } from '@web3modal/react'

const Navigation = () => {
    const { theme, setTheme } = useWeb3ModalTheme()
    setTheme({
        themeMode: 'dark',
        themeVariables: {
            '--w3m-font-family': 'Roboto, sans-serif',
            '--w3m-accent-color': '#05a0b3'
            // ...
        }
    })
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="logo" /></a>
                <button aria-controls="navbarScroll" type="button" aria-label="Toggle navigation"
                    className="navbar-toggler collapsed">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end navbar-collapse collapse" id="navbarScroll">
                    <div className=" my-2 my-lg-0 navbar-nav navbar-nav-scroll" style={{maxHeight:'100px'}}>
                        {/*<a className="active nav-link" href="/">Overview</a>*/}
                        {/*<a className="nav-link" href="/dashboard">Dashboard</a>*/}
                        {/*<a className="nav-link" href="/staking">Staking</a>*/}
                        {/*<a className="nav-link" href="/rewards">Rewards</a> */}
                        <Web3Button balance="show" icon="show"/>
                    </div>

                </div>
                </div>
            </nav>
    )
}
export default Navigation;