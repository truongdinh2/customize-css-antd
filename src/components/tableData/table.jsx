import React, { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import MUIDataTable from "mui-datatables";

export default function TableData() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [dataApi,setDataApi] = useState(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      const upDate = () => {
        const api = "https://5fbb616ec09c200016d4067a.mockapi.io/kito";
        const results = fetch(api)
          .then(res => res.json())
          .then(data => {  setDataApi(data);setLoading(true); })
          .catch(err => console.log(`Warning!!! Error fetching data!!! 
        Error ${err}`));
        return results;
      }
      upDate();
  },[])

  // const columns = ["Name", "Title", "Location"];
  const columns = [
    {
      name: "nameStudent",
      label: "nameStudent",
     },
     {
      name: "nameTeacher",
      label: "nameTeacher",
     },
     {
      name: "subject",
      label: "subject",
     },
     {
      name: "phone_link",
      label: "phone_link",
     },
     {
      name: "cost",
      label: "cost",
     },
     {
      name: "location",
      label: "location",
     },
     {
      name: "desire",
      label: "desire",
     },
   ];
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,

    // tableBodyHeight,
    // tableBodyMaxHeight
  };
console.log(dataApi)
  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tableBodyHeight}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={(e) => setTableBodyHeight(e.target.value)}
        >
          <MenuItem value={""}>[blank]</MenuItem>
          <MenuItem value={"400px"}>400px</MenuItem>
          <MenuItem value={"800px"}>800px</MenuItem>
          <MenuItem value={"100%"}>100%</MenuItem>
        </Select>
      </FormControl>
      {loading &&
      <MUIDataTable
        title={"Bảng cho bạn lựa chọn"}
        data={dataApi}
        columns={columns}
        options={{
          selectableRowsHideCheckboxes:false
        }}
        
      />
      }
    </>
  );
}

