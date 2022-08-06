import React, { useState } from "react";

 function Gender() {
  const [checked, setChecked] = useState({ laki: true, perempuan: false });

  const changeRadio = (e) => {
    setChecked(() => {
      return {
        laki: false,
        perempuan: false,
        [e.target.value]: true
      };
    });
  };

  return (
    <>
    
      <label className="d-flex flex-row gap-2">
          <input
            type="radio"
            checked={checked.laki}
            value="laki"
            name="gender"
            onChange={changeRadio}
          />
          Laki-laki
        </label>

        <label className="d-flex flex-row gap-2">
          <input
            type="radio"
            checked={checked.perempuan}
            value="perempuan"
            name="gender"
            onChange={changeRadio}
          />
          Perempuan
        </label>
    
      
    </>
  );
}

export default Gender