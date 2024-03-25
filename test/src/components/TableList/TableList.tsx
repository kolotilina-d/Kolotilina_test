// компонент закомментирован, не удалось пока прокинуть пропсом массив


// import "./TableList.css";
// import TableItem from "../TableItem/TableItem";
// import { useEffect, useState } from "react";
// import { getData } from "../../utils/getData";

function TableList() {
  // interface IData {
  //   id?: number;
  //   name: string;
  //   type?: string;
  //   dimension?: string;
  //   residents?: [];
  //   url?: string;
  //   created?: string;
  // }
  // const [data, setData] = useState<IData[]>([]);
  // const [initialRows, setInitialRows] = useState<number>(0);
  // const sliceRows = data.slice(0, selectValue);

  // useEffect(() => {
  //   getData
  //     .then((res) => setData(res.data.results))
  //     .catch((err) => console.log(err));
  // }, []);
  // const arr = data;
  return (
    <ul className="tableList">
      {/* {data.map((item: any) => {
         return (
           <>
             <TableItem key={item.id} data={item} />
           </>
         );
       })} */}
    </ul>
  );
}

export default TableList;
