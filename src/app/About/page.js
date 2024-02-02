"use client";
import sliderImage from "@/assets/images/sliderAbout.png";
import rectangle from "@/assets/images/Rectangle.png";
import Image from "next/image";
import BarSection from "./barSection";
import { useState } from "react";
import BarSectionDetails from "./barSectionDetails";

function About() {
  const [selectedYear, setSelectedYear] = useState({
    year: 2012,
    image: rectangle,
    title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper."
  });

  const data = [
    { year: 2012, image: rectangle,title:"Lorem Ipsum", desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper."},
    { year: 2013, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
    { year: 2014, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
    { year: 2015, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
    { year: 2016, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
    { year: 2017, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
    { year: 2018, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
    { year: 2019, image: rectangle, title:"Lorem Ipsum",desc: "Lorem ipsum dolor sit amet consectetur. Ipsum tellus ante consectetur ac et sollicitudin nibh lorem. Amet praesent turpis quis pulvinar. Auctor porttitor sed augue consectetur massa leo ipsum ullamcorper." },
  ];

  const handleSelectedYear = (year) => {
    setSelectedYear(data.find((d) => d.year === year));
  };
  return (
    <>
      <section>
        <div className="container about_section1">
          <div className="col-lg-7">
            <div className="title">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="description">
              <p>
                dbqp Labs is an innovative IT company that helps entrepreneurs,
                small businesses, and start-ups reach their full potential with
                web applications and mobile apps
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about_section4 container">
          <div className="barSection">
            {data.map((data) => (
              <BarSection
              key={1}
                year={data.year}
                isActive={data.year === selectedYear.year}
                handleSelectedYear={handleSelectedYear}
              />
            ))}
          </div>
          <div className="description_section">
            <BarSectionDetails
              data={selectedYear}
              handleSelectedYear={handleSelectedYear}
            />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "rgba(245, 245, 231, 1)" }}>
        <div className="about_section2 container">
          <div className="row" style={{ gap: "5rem" }}>
            <div className="left_side col-lg-4 col-md-12 col-sm-12">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur. Erat diam lectus aliquam{" "}
              </p>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="right_side col-lg-7 col-md-12 col-sm-12">
              <div className="section">
                <div>
                  <div className="heading">Lorem Ipsum</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
                <div>
                  <div className="heading">Lorem Ipsum</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
              </div>
              <div className="section">
                <div>
                  <div className="heading">Lorem Ipsum</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
                <div>
                  <div className="heading">Lorem Ipsum</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about_section3 container">
          <div className="row">
            <div className="left_side col-lg-6">
              <h1>Lorem ipsum</h1>
              <p>
                dbqp Labs is an innovative IT company that helps entrepreneurs,
                small businesses, and start-ups reach their full potential with
                web applications and mobile apps
              </p>
              <button type="button" className="btn btn-lg contactBtn">
                Contact US
              </button>
            </div>
            <div className="right_side col-lg-6 ">
              <div className="Image_section"></div>
              {/* <Image src={rectangle} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
