import "./ShowTime.css";
const ShowTime = () => {
  return (
    <div>
      <svg className="progress" width="300" height="300">
        <circle
          className="progress__circle"
          cx="150"
          cy="150"
          r="140"
          fill="transparent"
          stroke="green"
          strokeWidth="20"
        ></circle>

        <text
          className="loading"
          fill="blue"
          x="150"
          y="150"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          Time
        </text>
      </svg>
    </div>
  );
};
const circumference = document
  .querySelector(".progress__circle")
  .getTotalLength();
console.log(circumference);
export default ShowTime;
