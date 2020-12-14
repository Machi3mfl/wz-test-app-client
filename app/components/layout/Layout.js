import React, { Fragment, useContext } from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
// components
import Sidebar from './Sidebar';
import Header from './Header';
// animations 
import { motion } from 'framer-motion';
// spinner
import Spinner from '../ui/spinner/Spinner';
import { SpinnerContext } from '../../../app/context/spinner/spinnerContext';

const Layout = props => {

    // spinner context
    const  { showSpinner } = useContext(SpinnerContext);

    return (  
        <Fragment>
            {/* Global style */}
             <Global 
                styles={css`
                    :root {
                        --bs-primary: #00a9e5;
                    }

                    body {
                        font-size: .875rem;
                        font-family: 'Lato' sans-serif;
                    }

                    .feather {
                        width: 16px;
                        height: 16px;
                        vertical-align: text-bottom;
                    }

                    /*
                    * Sidebar
                    */

                    .sidebar {
                        position: fixed;
                        top: 0;
                        /* rtl:raw:
                        right: 0;
                        */
                        bottom: 0;
                        /* rtl:remove */
                        left: 0;
                        z-index: 100; /* Behind the navbar */
                        padding: 60px 0 0; /* Height of navbar */
                        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
                    }

                    @media (max-width: 767.98px) {
                        .sidebar {
                            top: 5rem;
                        }
                    }

                    .sidebar-sticky {
                        position: relative;
                        top: 0;
                        height: calc(100vh - 48px);
                        padding-top: .5rem;
                        overflow-x: hidden;
                        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
                    }

                    .sidebar .nav-link {
                        font-weight: 500;
                        color: #333;
                    }

                    .sidebar .nav-link .feather {
                        margin-right: 4px;
                        color: #727272;
                    }

                    .sidebar .nav-link.active {
                        color: #007bff;
                    }

                    .sidebar .nav-link:hover .feather,
                    .sidebar .nav-link.active .feather {
                        color: inherit;
                    }

                    .sidebar-heading {
                        font-size: .75rem;
                        text-transform: uppercase;
                    }

                    /*
                    * Navbar
                    */

                    .navbar-brand {
                        padding-top: .75rem;
                        padding-bottom: .75rem;
                        font-size: 1rem;
                        background-color: rgba(0, 0, 0, .25);
                        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
                    }

                    .navbar .navbar-toggler {
                        top: .25rem;
                        right: 1rem;
                    }

                    .navbar .form-control {
                        padding: .75rem 1rem;
                        border-width: 0;
                        border-radius: 0;
                    }

                    .form-control-dark {
                        color: #fff;
                        background-color: rgba(255, 255, 255, .1);
                        border-color: rgba(255, 255, 255, .1);
                    }

                    .form-control-dark:focus {
                        border-color: transparent;
                        box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
                    }

                    .bd-placeholder-img {
                        font-size: 1.125rem;
                        text-anchor: middle;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                    }

                    text.text-shadow {
                        text-shadow: 2px 1px 3px #000000;
                    }

                    @media (min-width: 768px) {
                        .bd-placeholder-img-lg {
                        font-size: 3.5rem;
                        }
                    }
                    /* Progress Bar */
                    .progress {
                        position: relative;
                        height: 10px;
                        display: block;
                        width: 100%;
                        background-color: #3182f9;
                        border-radius: 2px;
                        background-clip: padding-box;
                        overflow: hidden; 
                    }

                    .progress .indeterminate {
                        background-color: #0d6efd; 
                    }
                    
                    .progress .indeterminate:before {
                        content: '';
                        position: absolute;
                        background-color: inherit;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        will-change: left, right;
                        -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
                                animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }
                        .progress .indeterminate:after {
                        content: '';
                        position: absolute;
                        background-color: inherit;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        will-change: left, right;
                        -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
                                animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
                        -webkit-animation-delay: 1.15s;
                                animation-delay: 1.15s; }

                    @-webkit-keyframes indeterminate {
                    0% {
                        left: -35%;
                        right: 100%; }
                    60% {
                        left: 100%;
                        right: -90%; }
                    100% {
                        left: 100%;
                        right: -90%; } }
                    @keyframes indeterminate {
                    0% {
                        left: -35%;
                        right: 100%; }
                    60% {
                        left: 100%;
                        right: -90%; }
                    100% {
                        left: 100%;
                        right: -90%; } }
                    @-webkit-keyframes indeterminate-short {
                    0% {
                        left: -200%;
                        right: 100%; }
                    60% {
                        left: 107%;
                        right: -8%; }
                    100% {
                        left: 107%;
                        right: -8%; } }
                    @keyframes indeterminate-short {
                    0% {
                        left: -200%;
                        right: 100%; }
                    60% {
                        left: 107%;
                        right: -8%; }
                    100% {
                        left: 107%;
                        right: -8%; } }

                                    `} />

            <Head>
                <title>Client Side</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />      
                {/* Bootstrap */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossOrigin="anonymous"></script>
                <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
            </Head>
            {/*  Header */}
            <Header />
            {/* Loading spinner */}
            { showSpinner ? <Spinner /> : null }
            {/*  Main Container */}
            <div className="container-fluid">
                
                <div className="row">
                    {/*  Sidebar */}
                    <Sidebar />
                    {/* enter animation */}
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: .6,
                                delay: .4
                            }
                        },
                        }}>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 h-100"> 
                            { props.children }      
                        </main>
                    </motion.div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Layout;