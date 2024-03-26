import { useState } from "react";
import "./MainTable.css";
import { useEffect } from "react";
import { getData } from "../../utils/getData";
// import TableList from "../TableList/TableList";

const MainTable = () => {
  const [selectValue, setSelectValue] = useState<string>("10");

  interface IData {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: [];
    url: string;
    created: string;
  }
  const [data, setData] = useState<IData[]>([]);

  let stringAsNumber: string = selectValue;
  let number: number = Number(stringAsNumber);
  let sliceRows = data.slice(0, number);

  useEffect(() => {
    getData
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, [data]);

  let sortType: string = "abc";

  function toggleHandleSort() {
    // TODO: добиться переотрисовки данных сразу после сортировки 
    function compareByProperty(a: IData, b: IData): number {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    if (sortType === "abc") {
      data.sort(compareByProperty);
      sortType = "rev";
      console.log(data, 'abc')
    } else {
      data.sort(compareByProperty).reverse();
      sortType = "abc";
      console.log(data, 'rev')
    }
    setData(data);
  }
  return (
    <div className="table">
      <header className="table__title">
        <ul className="title__list">
          <li className="title__item">id</li>
          <button className="title__sort">
            {/* TODO: сгенерировать массив с ключами и в список вставить их пропсами */}
            <li
              className="title__item title__item_sort"
              onClick={() => toggleHandleSort()}
            >
              name
            </li>
          </button>
          <li className="title__item">type</li>
          <li className="title__item">dimension</li>
          <li className="title__item">residents</li>
          <li className="title__item">url</li>
          <li className="title__item">created</li>
        </ul>
      </header>
      <div className="table__list">
        <ul className="tableList">
          {sliceRows.map((data: any) => {
            return (
              <>
                <li className="tableItem__list" key={data.id}>
                  <div className="tableItem">{data.id}</div>
                  <div className="tableItem">{data.name}</div>
                  <div className="tableItem">{data.type}</div>
                  <div className="tableItem">{data.dimension}</div>
                  <div className="tableItem">{data.residents}</div>
                  <div className="tableItem">{data.url}</div>
                  <div className="tableItem">{data.created}</div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="table__pagination">
        {/* передать пропсом значение общего количества строк */}
        <p className="info__quantity">1-10 of </p>
        <p className="info__rows-per-page">
          Rows per page:
          <select
            className="info__select"
            id="mySelect"
            onChange={(event) => setSelectValue(event.target.value)}
          >
            <option value="5" id="5">
              5
            </option>
            <option selected value="10" id="10">
              10
            </option>
            <option value="20" id="20">
              20
            </option>
            <option value="30" id="30">
              30
            </option>
            <option value="40" id="40">
              40
            </option>
            <option value="50" id="50">
              50
            </option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default MainTable;
