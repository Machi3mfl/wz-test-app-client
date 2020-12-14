import { useEffect, useState } from "react";
import Link from 'next/link';
// helpers
import { GetPropertyValue } from '../../../../utils/helpers';

/**
 * 
 * Table component with pagination and filtering
 * 
 */
const Table = ({ columns, data, totalItems, title, onRowClicked }) => {
    
    // state all page items
    const [allData, setAllData] = useState(data);
    // state 
    const [displayedData, setDisplayedData] = useState(data);
    // state search input
    const [search, setSearch] = useState('');
    

    // effect props data change
    useEffect( () => {
        // save all data
        setAllData(data);
    }, [data]);


    // effect search input change
    useEffect( () => {

        if(search === ''){
            setDisplayedData(allData);
        }else{
            let exist = filterTableByString(search);
            setDisplayedData(exist);
        }

        
    }, [search, allData])



    /**
     * Event row clicked
     * @param {*} item item data
     * @param {*} index row index
     */
    const clickRow = (item, index) => {
        onRowClicked(item, index);
    }

    /**
     * Event when input value change
     * 
     * @param {*} e input native event
     */
    const onInputChange = e => {
        setSearch(e.target.value);
    }

    /**
     * 
     *  Search string in object array
     * 
     * @param {*} stringSearch 
     */
    const filterTableByString = stringSearch => {
        let exist = allData.filter(
            item => {
                /* check for all keys of object */
                let keys = Object.keys(item);

                for(let i = 0; i < keys.length; i++){
                    let value = item[keys[i]].toString();
                    if(value.toUpperCase().indexOf(stringSearch.toUpperCase()) !== -1) return true;
                }
                        
                return false
            });
        
        return exist;
    }

    return (  

        <>
            {/************+  Header Table container ************************/}
            <div className="mt-4 p-0 flex-md-nowrap p-0">
                {/* Table Title */}
                <div className="row mb-2">
                    {
                        title ? 
                            <div className="col">
                                <h3>{title}</h3>
                            </div> : null
                    }
                </div>
                {/*  Search Input */}
                <div className="input-group mb-3">
                    <span className="input-group-text bg-0">
                        <span className="material-icons fs-3 align-middle">search</span>
                        Search in table
                    </span>
                    <input 
                        className="form-control" 
                        type="text" 
                        aria-label="Search"
                        id="search_table" 
                        onChange={onInputChange} 
                        value={search}
                        />
                </div>
            </div>
            {/* Table container */}
            <div className="table-responsive table-container">
 
                    {/* Data Table  */}
                    <table className="table table-hover table-bordered border-primary ">
                        {/* Table Dynamic Header */}
                        <thead className="bg-primary text-white">
                            <tr>
                                { 
                                    columns.map( item => (
                                        <th key={item.field}>{item.title}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        {/* Table Dynamic Body */}
                        <tbody>
                        {
                            displayedData.length > 0 ?
                            displayedData.map( (row,x) => (
                              
                                    <tr key={x} onClick={() => clickRow(row,x)} role="button"> 
                                        { 
                                            columns.map( (col,i) => (
                                                <td key={i}>
                                                    { col.link ? 
                                                        <Link href={`${col.link}/${GetPropertyValue(row,col.field)}`}>{GetPropertyValue(row,col.field)}</Link>
                                                        : (GetPropertyValue(row,col.field))     
                                                    }
                                                                
                                                </td> 
                                            ))
                                        }
                                    </tr>
                               
                            )) : null
                        }
                        </tbody>
                    </table>
        
            </div>
        </>
    );
}
 
export default Table;