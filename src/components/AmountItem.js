import React from "react";
import { Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement
} from "../redux/reducers/amountitem";

export const AmountItem = () => {
  const count = useSelector((state) => state.amountitem.value);
  const dispatch = useDispatch();
  
  return (
    <>
    <div className="d-flex gap-2 align-items-center">
       <Button className="bg-secondary rounded-circle fw-bold text-light" disabled={count<1} onClick={() => dispatch(decrement())}>-</Button>
       <p className='mx-2 counter-poin mb-0'>{count}</p>
       <Button className="border rounded-circle text-bold text-dark" disabled={count===10} onClick={() => dispatch(increment())}>+</Button>
    </div>
    </>
  );
};

export const AllPrice = () => {
  const count = useSelector((state) => state.amountitem.value);
  // const dispatch = useDispatch();
  const amount = 20;
  const priceitem = count * amount;
  
  return(
    <>
      <p className="fw-bold">${priceitem}</p>
    </>
  )
}
export const DeliverPrice = () =>{
  const count = useSelector((state) => state.amountitem.value);
  const amount = 20;
  const priceitem = count * amount;
  const deliver = 0.1 * priceitem;
  return(
    <>
      <p className="fw-bold">${deliver}</p>
    </>
  )
}
export const TotalPrice = () =>{
  const count = useSelector((state) => state.amountitem.value);
  const amount = 20;
  const priceitem = count * amount;
  const deliver = 0.1 * priceitem;
  const total = deliver + priceitem;
  return(
    <>
      <p className="fw-bold">${total}</p>
    </>
  )
}

export const ProductAmount = () =>{
  const count = useSelector((state) => state.amountitem.value);
  return (
    <>
      <span className='mx-3'>{count}</span>
    </>
  )
}

// export default AmountItem;
