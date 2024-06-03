const setActive = ({ isActive }) =>(isActive ? "active" : "");
function Nav(){
    return <nav>
            <NavLink to="/" className={setActive}>Paris</NavLink>
            <NavLink to="/about" className={setActive}>A propos</NavLink>
            <NavLink to="/sightseeings/eiffel" className={setActive}>Tour Eiffel</NavLink>
            <NavLink to="/sightseeings/other_sightseeings" className={setActive}>Visites touristiques</NavLink>
            <NavLink to="/photo" className={setActive}>Photo</NavLink>
        </nav>;
}