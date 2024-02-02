function BarSection({year, isActive, handleSelectedYear}) {
  return (
    <>
      <div className={`selected ${isActive ? 'active' : ''}`} onClick={() => handleSelectedYear(year)}>
        <span className="outerSpan" >
          <span className="innerSpan"></span>
        </span>
        <div className="year">{year}</div>
      </div>
    </>
  );
}

export default BarSection;
