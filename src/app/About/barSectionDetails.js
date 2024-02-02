import Image from "next/image";

function BarSectionDetails({ data }) {
  return (
    <>
      <div className="row barSectionDetails">
        <div className="col-lg-5">
          <div className="barImage_section"></div>
          {/* <Image src={data.image}/> */}
        </div>
        <div className="col-lg-6 detail_section">
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
      </div>
    </>
  );
}

export default BarSectionDetails;
