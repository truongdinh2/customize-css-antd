import React, { useEffect, useState } from "react";
import PageTable from "./pageTable";
import './table.css';
import ToolTable from "./ToolTable";

export default function TableData() {
  const [dataApi, setDataApi] = useState(null);
  const [rowCovy, setRowCovy] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const upDate = () => {
      const api = "https://5fbb616ec09c200016d4067a.mockapi.io/kito";
      const results = fetch(api)
        .then(res => res.json())
        .then(data => { setDataApi(data); setLoading(true); })
        .catch(err => console.log(`Warning!!! Error fetching data!!! 
        Error ${err}`));
      return results;
    }
    upDate();
  }, [])
  const dataRender = (params) => {
    if (params !== undefined) {
      setRowCovy(params)
    }
  }
  // console.log(dataApi)
  return (
    <>
    <ToolTable/>
      {
        loading &&
        <>
          <table className="detailTable">
            <thead>
              <tr>
                <th>STT</th>
                <th>STT</th>
                <th>STT</th>
                <th>STT</th>
                <th>STT</th>
                <th>STT</th>
                <th>STT</th>
                <th>STT</th>
              </tr>
            </thead>
            <tbody>
              {rowCovy.map((inf, key) => {
                return (
                  <tr key={key}>
                    <td>
                      {key + 1}
                    </td>
                    <td>
                      {inf.nameStudent}
                    </td>
                    <td>
                      {inf.nameTeacher}
                    </td>
                    <td>
                      {inf.subject}
                    </td>
                    <td>
                      {inf.location}
                    </td>
                    <td>
                      {inf.phone_link}
                    </td>
                    <td>
                      {inf.cost}
                    </td>
                    <td>
                      {inf.desire}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <PageTable
            loading={loading}
            dataNum={dataApi}
            dataRender={dataRender}
          />
        </>
      }
    </>
  );
}

