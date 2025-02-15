import PropTypes from 'prop-types';
export const Navbar = ({ setCategory, setCountry }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <h1><span className="badge bg-danger text-light">News Magazine</span></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => { setCategory("business") }} style={{ cursor: "pointer" }} >Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => { setCategory("technology") }} style={{ cursor: "pointer" }} >Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => { setCategory("sports") }} style={{ cursor: "pointer" }} >Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => { setCategory("science") }} style={{ cursor: "pointer" }} >Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => { setCategory("health") }} style={{ cursor: "pointer" }} >Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => { setCategory("entertainment") }} style={{ cursor: "pointer" }} >Entertainment</a>
                        </li>
                        <ul className="ms-">
                        <li className="nav-item dropdown " >
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Country
                            </a>
                            <ul className="dropdown-menu " style={{maxHeight:"200px", overflow:"auto"}}>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("in") }}>India</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ae") }}>United Arab Emirates</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ar") }}>Argentina</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("at") }}>Austria</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("au") }}>Australia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("be") }}>Belgium</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("bg") }}>Bulgaria</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("br") }}>Brazil</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ca") }}>Canada</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ch") }}>Switzerland</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("cn") }}>China</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("us") }}>United States of America</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("co") }}>Colombia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("cu") }}>Cuba</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("cz") }}>Czech Republic</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("de") }}>Germany</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("eg") }}>Egypt</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("fr") }}>France</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("gb") }}>United Kingdom</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("gr") }}>Greece</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("hk") }}>Hong Kong</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("hu") }}>Hungary</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("id") }}>Indonesia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ie") }}>Ireland</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("il") }}>Israel</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("it") }}>Italy</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("jp") }}>Japan</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("kr") }}>South Korea</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("lt") }}>Lithuania</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("lv") }}>Latvia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ma") }}>Morocco</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("mx") }}>Mexico</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("my") }}>Malaysia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ng") }}>Nigeria</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("nl") }}>Netherlands</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("no") }}>Norway</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("nz") }}>New Zealand</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ph") }}>Philippines</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("pl") }}>Poland</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("pt") }}>Portugal</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ro") }}>Romania</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("rs") }}>Serbia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ru") }}>Russia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("sa") }}>Saudi Arabia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("se") }}>Sweden</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("sg") }}>Singapore</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("si") }}>Slovenia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("sk") }}>Slovakia</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("th") }}>Thailand</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("tr") }}>Turkey</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("tw") }}>Taiwan</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ua") }}>Ukraine</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("ve") }}>Venezuela</a></li>
                                <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={() => { setCountry("za") }}>South Africa</a></li>

                            </ul>
                        </li>
                    </ul>
                        </ul>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    setCategory: PropTypes.func.isRequired,
    setCountry: PropTypes.func.isRequired,
}
export default Navbar