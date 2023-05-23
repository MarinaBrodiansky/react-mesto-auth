import Logo from '../images/logo.svg';

function Header({children}) {
    return(        
        <header className="header">
            <img
             src={Logo}
             alt="Логотип Место"
             className="header__logo"
            />
            {children}
        </header>
        
    )
};

export default Header;