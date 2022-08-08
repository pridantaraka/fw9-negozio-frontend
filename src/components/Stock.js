import React, { useState } from "react";

 function Stock() {
  const [checked, setChecked] = useState({ baru: true, bekas: false });

  const changeRadio = (e) => {
    setChecked(() => {
      return {
        baru: false,
        bekas: false,
        [e.target.value]: true
      };
    });
  };

  return (
    <>
    
      <label className="d-flex flex-row gap-2">
          <input
            type="radio"
            checked={checked.baru}
            value="baru"
            name="stock"
            onChange={changeRadio}
          />
          Baru
        </label>

        <label className="d-flex flex-row gap-2">
          <input
            type="radio"
            checked={checked.bekas}
            value="bekas"
            name="stock"
            onChange={changeRadio}
          />
          Bekas
        </label>
    
      
    </>
  );
}

export default Stock