import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const Sidebar = () => {

    const router = useRouter();
    // router path state
    const [currentPath, setCurrentPath] = useState('');

    // check route pathname
    useEffect(() => {
        setCurrentPath(router.pathname);
    }, [router.pathname])

    return ( 
        <>
             <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky">
                    <ul className="list-group nav flex-column">
                        <li className="list-group-item list-group-item-action">
                            <Link href="/">
                                <a className={ currentPath === '/' ? 'nav-link text-primary' : 'nav-link' }>
                                    <span className="material-icons align-middle mr-5">dashboard</span>
                                    <span className="fs-5 align-middle">DASHBOARD</span>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <Link href="/alerts">
                                <a className="nav-link" className={ currentPath.indexOf('/alerts') !== -1 ? 'nav-link text-primary' : 'nav-link' }>
                                    <span className="material-icons align-middle">campaign</span>
                                    <span className="fs-5 align-middle">ALERTS</span>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <Link href="/agents">
                                <a className={ currentPath.indexOf('/agents') !== -1 ? 'nav-link text-primary' : 'nav-link' }>
                                    <span className="material-icons align-middle">support_agent</span>
                                    <span className="fs-5 align-middle">AGENTS</span>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item list-group-item-action">
                            <Link href="/rules">
                                <a className={ currentPath.indexOf('/rules') !== -1 ? 'nav-link text-primary' : 'nav-link' }>
                                    <span className="material-icons align-middle">gavel</span>
                                    <span className="fs-5 align-middle">RULES</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
 
export default Sidebar;