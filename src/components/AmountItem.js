import React from "react";
import { Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement
} from "../redux/reducers/amountitem";

const AmountItem = () => {
  const count = useSelector((state) => state.amountitem.value);
  const dispatch = useDispatch();
  const amount = 20000;
  const priceitem = count * amount;

  return (
    <>
    <div className="d-flex gap-2 align-items-center">
       <Button className="bg-secondary rounded-circle fw-bold text-light" disabled={count<1} onClick={() => dispatch(decrement())}>-</Button>
       <p>{count}</p>
       <Button className="border rounded-circle text-bold text-dark" disabled={count===10} onClick={() => dispatch(increment())}>+</Button>
       <p className="fw-bold">Rp.{priceitem}</p>
    </div>
    </>
  );
};

export default AmountItem;
