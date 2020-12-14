import styled from '@emotion/styled';

const Logo = styled.img`
    height: 2.4rem;
`;

const Header = () => {
    return ( 
        <>  
            {/* Header navbar container */}
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                {/* Logo */}
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" href="/">
                    <Logo src="/img/wazuh_logo.png" alt="Client side logo"/>Client-Side 
                </a>
                {/* Menu toggle mobile */}
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </header>
        </>
    );
    
}
 
export default Header;