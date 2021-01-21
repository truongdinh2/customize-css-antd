import { Button, Chip } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { Fragment, useState } from "react";
import CustomSearchRender from './search';

const MuDataTable = () => {
    const [searchText , setSearchText] = useState('')
    const [data, setData] = useState([
        ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000", ['nice', 'preferred']],
        ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000", ['grumpy', 'second-choice']],
        ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000", ['frequently-busy', 'leave-message']],
        ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000", ['in-person', 'nice']],
        ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000", ['preferred']],
        ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000", ['nice']],
        ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000", ['nice', 'preferred']],
        ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000", ['frequently-busy', 'leave-message']],
        ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000", ['frequently-busy', 'leave-message', 'nice']],
        ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000", ['grumpy', 'second-choice']],
        ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000", ['preferred']],
        ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000", ['preferred']],
        ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000", ['preferred']],
        ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000", ['preferred']],
        ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000", ['preferred']],
        ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000", ['preferred']],
        ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000", ['preferred']],
        ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000", ['preferred']],
        ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000", ['preferred']],
        ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000", ['preferred']],
        ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000", ['preferred']],
        ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000", ['preferred']],
        ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000", ['preferred']],
        ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000", ['preferred']],
        ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000", ['preferred']],
        ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000", ['preferred']],
        ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000", ['preferred']],
        ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000", ['preferred']],
        ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000", ['preferred']],
        ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000", ['preferred']]
    ])

    const columns = [
        // {
        //     name: "Delete",
        //     options: {
        //         filter: false,
        //         sort: false,
        //         empty: true,
        //         customBodyRenderLite: (dataIndex) => {
        //             return (
        //                 <Button 
        //                 onClick={() => {
        //                     var data1 = [...data].shift();
        //                     console.log([...data1])

        //                     const temp = [...data];

        //                     // removing the element using splice
        //                     temp.shift();
        //                     console.log(temp)
        //                     // updating the list
        //                     setData(temp);
        //                 }}
        //                 variant="contained" color="secondary">
        //                     Delete
        //                 </Button >

        //             );
        //         },
        //     }
        // },
        // {
        //     name: "Edit",
        //     options: {
        //         filter: false,
        //         sort: false,
        //         empty: true,
        //         customBodyRenderLite: (dataIndex, rowIndex) => {
        //             return (
        //                 <button
        //                     className="btnTable"
        //                     onClick={() => window.alert(`Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`)}>
        //                     Edit
        //                 </button>
        //             );
        //         }
        //     }
        // },
        {
            name: "Name",
            options: {
                filter: true,
                viewColumns: true,
                draggable: true,
                searchable: true
            }
        },
        {
            label: "Modified Title Label",
            name: "Title",
            options: {
                filter: true,
            }
        },
        {
            name: "Location",
            options: {
                filter: false,
            }
        },
        {
            name: "Age",
            options: {
                filter: true,
            }
        },
        {
            name: "Salary",
            options: {
                filter: true,
                
            }
        },
        {
            name: 'Tags',
            options: {
                filter: true,
                filterType: 'multiselect',
                customBodyRenderLite: (dataIndex) => {
                    // console.log(dataIndex)
                    let value = data[dataIndex][5];
                    // console.log(value)
                    return value.map((val, key) => {
                        return <Chip label={val} key={key} />;
                    });
                },
            }
        },


        // {
        //     name: "Add",
        //     options: {
        //         filter: false,
        //         sort: false,
        //         empty: true,
        //         customBodyRenderLite: (dataIndex) => {
        //             return (
        //                 <button
        //                     className="btnTable"
        //                     onClick={() => {
        //                         var data1 = [...data];

        //                         data1.unshift(["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000", ["hi"]]);
        //                         setData(data1);
        //                     }}>
        //                     Add
        //                 </button>
        //             );
        //         }
        //     }
        // },
    ];
    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'vertical',
        onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
        onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
        onChangePage: currentPage => console.log('currentPage: ', currentPage),
        caseSensitive: false,
        onCellClick: (cellIndex, rowIndex) => {
            console.log(cellIndex, rowIndex);
        },
        // confirmFilters: true, 

        // Calling the applyNewFilters parameter applies the selected filters to the table 
        // customFilterDialogFooter: (currentFilterList, applyNewFilters) => {
        //   return (
        //     <div style={{ marginTop: '40px' }}>
        //       <Button variant="contained" >Apply Filters</Button>
        //     </div>
        //   );
        // },
        // customSearchRender: (searchText, handleSearch, hideSearch, options) => {
        //     return (
        //         <CustomSearchRender
        //             searchText={searchText}
        //             onSearch={handleSearch}
        //             onHide={hideSearch}
        //             options={options}
        //         />
        //     );
        // },
        searchText: searchText,
        searchProps: {
            // onBlur: (e) => {
            //     console.log('onBlur!');
            // },
            // onKeyUp: (e) => {
            //     // console.log('onKeyUp!');
            //     console.log(e.key)
            // },
            onChange: (e) => {
                // console.log(e.target.value)
                let text = e.target.value;
                setSearchText(text)
            }
            
        },
        searchPlaceholder: 'Your Custom Search Placeholder',
        customSearch: (searchQuery, currentRow, columns) => {
            let isFound = false;
            currentRow.forEach(col => {
                if (col !== undefined) {
                    let text = searchQuery.toLowerCase()
                    if (col.toString().toLowerCase().indexOf(text) >= 0) {
                        isFound = true;
                    }
                }
            });
            return isFound;
        },
    };
    return (
        <Fragment>
            <MUIDataTable title={'ACME Employee list'} data={data} columns={columns} options={options} />
        </Fragment>
    );

}
export default MuDataTable;