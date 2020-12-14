import { useState, useEffect } from 'react';
const Pagination = ({ totalItems, itemsPerPage, initialCurrentPage, onPageChange }) => {

    const [pages, setPages ] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect( () => {

        // init paginator
        getPaginationData();

    }, [totalItems, itemsPerPage]);


    /**
     * Initialize the paginator
     */
    const getPaginationData = () => {
        // upper rounded
        const totalPages = parseInt(Math.ceil(totalItems / itemsPerPage));

        setTotalPages(totalPages);
        setPages([...Array(totalPages).keys()]);
        setCurrentPage(currentPage ? currentPage : initialCurrentPage);
    }

    /**
     * Event page change
     * @param {*} pageIndex 
     */
    const onChangePage = pageIndex => {

        if(pageIndex > 0 && pageIndex <= totalPages){
            setCurrentPage(pageIndex);
            onPageChange(pageIndex);
        }
        
    }

    return (  
        <>
            {/************* Pagination Container  *************/}
            <div className="row">
                <div className="col-lg col-sm-12">
                    <p className="fs-6">Showing {itemsPerPage > totalItems ? totalItems : itemsPerPage } of {totalItems}</p>
                </div>
                <div className="col-lg col-sm-12">
                    <nav>
                        <ul className="pagination  pagination-sm float-end">
                            {/*  Previous Page Button  */}
                            <li 
                                className={ currentPage === 1 ? 'page-item disabled' : 'page-item' }
                                onClick={ () => onChangePage(currentPage - 1) }>
                                <a className="page-link"><span aria-hidden="true">Previous</span></a>
                            </li>
                            {/*  Pages Buttons  */}
                                {
                                    pages.map((value, pi) => (
                                        <li 
                                            key={pi}
                                            className={ pi + 1 === currentPage ? 'page-item active' : 'page-item' } 
                                            onClick={ () => onChangePage(pi + 1) }>
                                            <a className="page-link">{ pi + 1 }</a>
                                        </li>
                                    ))
                                }
                            {/*  Next Page Button  */}
                            <li 
                                className={ currentPage === totalPages ? 'page-item disabled' : 'page-item' }
                                onClick={ () => onChangePage(currentPage + 1) }>
                                <a className="page-link"><span aria-hidden="true">Next</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
           
        </>
    );
}
 
export default Pagination;