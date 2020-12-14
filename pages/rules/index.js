import { useEffect, useState, useContext } from 'react';
import { useRouter } from "next/router";
// components
import Layout from '../../app/components/layout/Layout';
import Table from '../../app/components/layout/table/Table';
import Pagination from '../../app/components/layout/table/Pagination';
// state
import RuleContext from '../../app/context/rules/ruleContext';
import { SpinnerContext } from '../../app/context/spinner/spinnerContext';

const Rules = () => {

    const router = useRouter();

    // rules table columns
    const [columns, setColumns] = useState([
        { 
            title: '#',
            field: 'id'
        },
        { 
            title: 'Description',
            field: 'description'
        },
        { 
            title: 'Firedtimes',
            field: 'firedtimes'
        },
        { 
            title: 'Level',
            field: 'level'
        },
        { 
            title: 'Total Alerts',
            field: 'total_alerts'
        }
    ]);

    // alert context
    const { 
        rules,
        loading,
        totalItems,
        itemsPerPage, 
        currentPage,
        getRules,
        goToRuleDetail } = useContext(RuleContext);

    // spinner
    const { setShowSpinner } = useContext(SpinnerContext);

    // loading change
    useEffect(() => {
        setShowSpinner(loading);
    }, [loading]);


    // component init
    useEffect( () => {
        getRules();
    }, []);

    /**
     * Redirect to rule page
     * @param {*} data 
     */
    const redirectToDetail = (data) => {
        goToRuleDetail(data.id);
    }

    /**
     * Load more items from page
     * @param {*} pageIndex 
     */
    const loadMore = pageIndex => {
        getRules(pageIndex);
    }

    return (  
        <div>
            <Layout>
                <div className="container pt-2">
                    {/*** Header - Back button and title  ***/}
                    <div className="row pt-4 pb-2 mb-3 border-bottom">
                            <button type="button" className="btn btn-light col-1 pr-4">
                                <span className="material-icons fs-2 text-primary" onClick={() => router.back() }>arrow_back</span>
                            </button>
                            <span className="h1 col">Rule</span>
                    </div>
                
                    <div className="row">
                        {/*** Rules Table  ***/}
                        <Table 
                            data={rules} 
                            columns={columns}
                            totalItems={totalItems}
                            onRowClicked={redirectToDetail}/>
                    </div>
                    
                    <div className="row mt-3">
                        {/*** TTable Pagination  ***/}
                        <Pagination 
                            itemsPerPage={itemsPerPage}
                            totalItems={totalItems}
                            currentPage={currentPage}
                            onPageChange={loadMore}/>
                    </div>
                </div> 
            </Layout>    
        </div>
    );
}
 
export default Rules;