"use client";
import cardImage from "@/assets/images/Rectangle.png";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import test from "@/assets/images/test.jpg"

function Home() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <section style={{ backgroundColor: "rgba(0, 102, 73, 1)" }}>
        <div className="main_section1 container col-12">
          <div className="col-lg-8">
            <p className="title">
              Lorem ipsum dolor sit amet consectetur. Erat diam lectus aliquam
            </p>
          </div>
          <div className="image_section">
            <div className="image col-lg-4 col-md-4 col-sm-12"></div>
            <div className="description_section">
              <p className="title2 col-lg-10 col-md-10 col-sm-12">
                Lorem ipsum dolor sit amet consectetur. Faucibus mauris feugiat
                mi lorem lacus. Quam fringilla libero sapien quis.
              </p>
              <button type="button" className="btn btn-lg getTouchBtn">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "rgba(245, 245, 231, 1)" }}>
        <div className="main_section2 container">
          <div className="row" style={{ gap: "5rem" }}>
            <div className="left_side col-lg-4 col-md-12 col-sm-12">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur. Erat diam lectus aliquam{" "}
              </p>
              <button type="button" className="btn btn-lg contactBtn">
                Contact US
              </button>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="right_side col-lg-7 col-md-12 col-sm-12">
              <div className="section">
                <div>
                  <div className="heading">50 M+</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
                <div>
                  <div className="heading">70%</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
              </div>
              <div className="section">
                <div>
                  <div className="heading">1.5K</div>
                  <p className="descrption">
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                </div>
                <div>
                  <div className="heading">200+</div>
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
        <div className="main_section3 container">
          <div className="title">Lorem ipsum dolor sit amet</div>
          <div>
            <div className="card_section">
              {/* <div className="row"> */}
              <div className="card card_size">
                <div className="image_section"><Image src={test} alt="no image" /></div>
                <div className="card_description">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <a href="#">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card card_size">
                <div className="image_section"><Image src={test} alt="no image" /></div>
                <div className="card_description">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <a href="#">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card card_size">
                <div className="image_section"><Image src={test} alt="no image" /></div>
                <div className="card_description">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <a href="#">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card card_size">
                <div className="image_section"><Image src={test} alt="no image" /></div>
                <div className="card_description">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <a href="#">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card card_size">
                <div className="image_section"><Image src={test} alt="no image" /></div>
                <div className="card_description">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <a href="#">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card card_size">
                <div className="image_section"><Image src={test} alt="no image" /></div>
                <div className="card_description">
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <a href="#">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
          <div className="btnSection">
            <button type="button" className="btn btn-lg viewAllBtn">
              View All Projects
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="gallery_section">
          <div className="title">Our Clients</div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 200,
              },
              1441: {
                slidesPerView: 5,
                spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={cardImage} alt="no image" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="container main_section7">
          {/* <div className="title">Our Clients</div> */}
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="detailSection">
              <div className="coma">“</div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vel turpis mauris sem
                  metus nec et. Sapien tristique nibh in elementum rutrum nullam
                  netus vulputate justo. Morbi ultrices.”
                </p>
                <h4>John Doe</h4>
                <h6>CEO</h6>
              </div>
            </div>
            <div className="detailSection">
              <div className="coma">“</div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vel turpis mauris sem
                  metus nec et. Sapien tristique nibh in elementum rutrum nullam
                  netus vulputate justo. Morbi ultrices.”
                </p>
                <h4>John Doe</h4>
                <h6>CEO</h6>
              </div>
            </div>
            <div className="detailSection">
              <div className="coma">“</div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vel turpis mauris sem
                  metus nec et. Sapien tristique nibh in elementum rutrum nullam
                  netus vulputate justo. Morbi ultrices.”
                </p>
                <h4>John Doe</h4>
                <h6>CEO</h6>
              </div>
            </div>
          </div>
          <div className="image_gallery">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
              autoPlay={true}
              showNav={false}
            />
          </div>
        </div>
      </section>
      <section style={{ background: "rgba(245, 245, 231, 1)" }}>
        <div className="container main_section6">
          <div className="title">Lorem ipsum dolor</div>
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-4 col-sm-4 mb-4">
              <div className="icon"></div>
              <div className="description">
                <h1 className="heading">Lorem Ipsum</h1>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 mb-4">
              <div className="icon"></div>
              <div className="description">
                <h1 className="heading">Lorem Ipsum</h1>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 mb-4">
              <div className="icon"></div>
              <div className="description">
                <h1 className="heading">Lorem Ipsum</h1>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 mb-4">
              <div className="icon"></div>
              <div className="description">
                <h1 className="heading">Lorem Ipsum</h1>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 mb-4">
              <div className="icon"></div>
              <div className="description">
                <h1 className="heading">Lorem Ipsum</h1>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 mb-4">
              <div className="icon"></div>
              <div className="description">
                <h1 className="heading">Lorem Ipsum</h1>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(0, 102, 73)" }}
        >
          <div className="container main_section5">
            <div className="row">
              <div className="leftSide col-lg-6 col-sm-12">
                <p className="title">Lorem ipsum dolor</p>
                <div className="nameSection">
                  <div className="image_section">
                    <span></span>
                  </div>
                  <div className="name">
                    <h1>John Doe</h1>
                    <p>CEO</p>
                  </div>
                </div>
                <div className="nameSection">
                  <div className="image_section">
                    <span></span>
                  </div>
                  <div className="name">
                    <h1>John Doe</h1>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
              <div className="rightSide col-lg-6 col-sm-12">
                <form>
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Description"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="button" className="btn btn-lg sendBtn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="main_section4 container">
          <div className="title">Lorem ipsum dolor</div>
          <div className="card_section">
            {/* <div className="row"> */}
            <div className="card card_size">
              <Image src={cardImage} alt="no image" />
              <div className="card_description">
                <div className="date">Jan 19, 2023</div>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
                <a href="#">
                  Read More
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card card_size">
              <Image src={cardImage} alt="no image" />
              <div className="card_description">
                <div className="date">Jan 19, 2023</div>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
                <a href="#">
                  Read More
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card card_size">
              <Image src={cardImage} alt="no image" />
              <div className="card_description">
                <div className="date">Jan 19, 2023</div>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                  feugiat mi lorem lacus.
                </p>
                <a href="#">
                  Read More
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="start_section ">
            <p>
              Lorem ipsum dolor sit amet consectetur Vel
              <br /> augue suspendisse
            </p>
            <button type="button" className="btn btn-lg startBtn">
              Let’s Start
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
