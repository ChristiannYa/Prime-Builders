const LayeredCurvesSvg = () => {
  return (
    <div className="absolute-top-left w-full -mt-[1px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 50"
    >
      <g fill="var(--color-secondary)">
        <path
          d="M500 40.7C358 34 0 4 0 4V0h1000v42.7c-216 11.3-358 4.6-500-2Z"
          opacity=".3"
        ></path>
        <path
          d="M500 32.7C358 26 0 4 0 4V0h1000v31.7c-216 11.3-358 7.6-500 1Z"
          opacity=".5"
        ></path>
        <path d="M500 25.7C358 19 0 4 0 4V0h1000v20.7C784 32 642 31.3 500 25.7Z"></path>
      </g>
    </svg>
    </div>
  );
};

export default LayeredCurvesSvg;
