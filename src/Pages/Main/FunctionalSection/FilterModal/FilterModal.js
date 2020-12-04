import React, { useEffect, useState } from "react";
import { filterModules } from "../../../../dataSource/usere";
import "./FilterModal.scss";

function FilterModal({ openModal }) {
  const [filterTypes, setFiterTypes] = useState([]);

  useEffect(() => {
    let res = filterModules();
    setFiterTypes([...res]);
  }, []);

  const setChecks = (id) => {
    setFiterTypes(
      filterTypes.map((i) => {
        if (i.id === id) i.isActive = !i.isActive;
        return i;
      })
    );
  };

  return (
    <div className={!openModal ? "filter" : "filter openFilter"}>
      <div className="selects">
        <div>
          <select className='select' defaultValue='0'>
              <option value="0">Kursni tanlang</option>
          </select>
        </div>
        <div>
          <select className='select' defaultValue='0'>
              <option value="0">Modulni tanlang</option>
          </select>
        </div>
        <div>
          <select className='select' defaultValue='0'>
              <option value="0">Darsni tanlang</option>
          </select>
        </div>
      </div>
      <div className="checks">
        {filterTypes.map((i) => (
          <div className="checkboxFilter" key={i.id}>
            <div className="d-flex pt-2 mr-2">
              <label
                onClick={() => setChecks(i.id)}
                className="labelWrap"
                style={i.isActive ? { borderColor: "#00B533" } : {}}
              >
                {i.isActive && <div className="labelBg" />}
              </label>
            </div>
            <div>{i.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterModal;
