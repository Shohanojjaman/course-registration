import PropTypes from 'prop-types';
const Carts = ({ selectedCourses, totalPrice, setTotalCredit: totalCredit, remainingCredit }) => {
  return (
    <div className="w-1/4 p-4 bg-white rounded-lg self-start space-y-4">
      <h4 className="text-theme text-xl font-bold">Credit Hour Remaining {remainingCredit} hr</h4>
      <hr className="bg-[#1C1Bj1B33]" />
      <h4 className="text-heading text-xl font-bold">Course Names</h4>
      <ol>
        {selectedCourses.map((course, index) => (
          <li key={index}>{course.title}</li>
        ))}
      </ol>
      <hr className="bg-[#1C1B1B33]" />
      <h6 className="text-[#1C1B1BCC] font-semibold text-base">Total Credit Hour : {totalCredit} </h6>
      <hr className="bg-[#1C1B1B33]" />
      <h6 className="text-[#1C1B1BCC] font-semibold text-base">Total Price : {totalPrice} USD</h6>
    </div>
  );
};
Carts.propTypes = {
  selectedCourses: PropTypes.array,
  totalPrice: PropTypes.number,
  setTotalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
};

export default Carts;
