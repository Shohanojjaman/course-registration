import React from 'react';

const Cart = () => {
  return (
    <div className="w-1/4 p-4 bg-white rounded-lg self-start space-y-4">
      <h4 className="text-theme text-xl font-bold">Credit Hour Remaining hr</h4>
      <hr className="bg-[#1C1B1B33]" />
      <h4 className="text-heading text-xl font-bold">Course Name</h4>
      <hr className="bg-[#1C1B1B33]" />
      <h6 className="text-[#1C1B1BCC] font-semibold text-base">Total Credit Hour : </h6>
      <hr className="bg-[#1C1B1B33]" />
      <h6 className="text-[#1C1B1BCC] font-semibold text-base">Total Price : USD</h6>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
