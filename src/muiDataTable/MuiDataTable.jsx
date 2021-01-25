import { Chip, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import './muiDataTable.css';

const MuDataTable = () => {
    const [searchText, setSearchText] = useState('');
    const [responsive, setResponsive] = useState('standard');
    const [isInfor, setIsInfor] = useState(false);
    const handleSetForm = (params) => {
        console.log(params);
        setIsInfor(!isInfor)
        FormInfor()
    }
    const FormInfor = () => (
        <div className="boxShow">
            <div><h1> Infomation </h1></div>
            <div>How to "decode" your zodiac sign (this is cool!)
            This is completely shocking...
            It's actually kind of scary how accurate my results were!</div>
        </div>
    )
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
            name: "nameStudent",
            label: "nameStudent",
            options: {
                filter: true,
                viewColumns: true,
                draggable: true,
                searchable: true
            }
        },
        {
            label: "nameTeacher",
            name: "nameTeacher",
            options: {
                filter: false,
            }
        },
        {
            label: "subject",
            name: "subject",
            options: {
                filter: true,
            }
        },
        {
            label: "location",
            name: "location",
            options: {
                filter: true,
            }
        },
        {
            label: "cost",
            name: 'cost',
            options: {
                filter: true,
                // filterType: 'multiselect',
                // customBodyRenderLite: (dataIndex) => {
                //     let value = data[dataIndex][5];
                //     return value.map((val, key) => {
                //         return <Chip label={val} key={key} />;
                //     });
                // },
            }
        },

        {
            label: "phone_link",
            name: "phone_link",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex) => {
                    var NumberPhone = stateReducer.data[dataIndex].phone_link.toString();
                    // console.log(typeof(NumberPhone))
                    // var len = NumberPhone.length;
                    var NumberPhone1 = NumberPhone.replace(/\d(?=\d{4})/g, "*");
                    // console.log(stateReducer.data[dataIndex].id)
                    // console.log(NumberPhone.splice(len - 3,3,'***'))
                    return (
                        <div
                            style={{ margin: 'auto', textAlign: "center" }}
                            className="btnTable"
                            onClick={() => handleSetForm(stateReducer.data[dataIndex].id)
                                // var data1 = [...data];

                                // data1.unshift(["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000", ["hi"]]);
                                // setData(data1);
                            }>
                            {stateReducer.data === {} ? '' : NumberPhone1}
                        </div>
                    );
                }
            }
        },
        {
            label: "desire",
            name: "desire",
            options: {
                filter: true,
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
        responsive: 'standard',
        onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
        onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
        onChangePage: currentPage => console.log('currentPage: ', currentPage),
        caseSensitive: false,
        // onCellClick: (cellIndex, rowIndex) => {
        //     // console.log(cellIndex,'--', rowIndex);
        //     if (rowIndex.colIndex === 4) {

        //     }
        // },
        onTableChange: (action, state) => {
            // console.log(action);
            // console.dir(state);
        },
        // selectableRowsHeader:false,
        selectableRowsHideCheckboxes: true,
        // filterType: 'checkbox',
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
    console.log(responsive)
    const stateReducer = useSelector(state => state.dataSide);
    return (
        <>
            <div className="containerTable">
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={responsive}
                        // defaultValue={responsive}
                        style={{ width: '200px', marginBottom: '10px', marginRight: 10 }}
                        onChange={e => setResponsive(e.target.value)}>
                        <MenuItem value={'vertical'}>vertical</MenuItem>
                        <MenuItem value={'standard'}>standard</MenuItem>
                        <MenuItem value={'simple'}>simple</MenuItem>


                    </Select>
                </FormControl>
                {stateReducer.data === {} ? '' : <MUIDataTable title={'table'} data={stateReducer.data} columns={columns} options={options} />}
                {isInfor && <FormInfor />}
            </div>
            <div>
            </div>
        </>
    );

}
export default MuDataTable;