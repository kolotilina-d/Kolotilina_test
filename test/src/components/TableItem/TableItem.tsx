// компонент закомментирован, не удалось пока прокинуть пропсом массив данных


import "./TableItem.css";

function TableItem({ data }: { data: any }) {
  return (
    <li className="tableItem__list">
      {/* <div className="tableItem">{data.id}</div>
      <div className="tableItem">{data.name}</div>
      <div className="tableItem">{data.type}</div>
      <div className="tableItem">{data.dimension}</div>
      <div className="tableItem">{data.residents}</div>
      <div className="tableItem">{data.url}</div>
      <div className="tableItem">{data.created}</div> */}
    </li>
  );
}

export default TableItem;
