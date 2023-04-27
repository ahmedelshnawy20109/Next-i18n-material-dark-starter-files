import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import image1 from "../../../public/imgs/photos/photo-23.jpg";
import image2 from "../../../public/imgs/photos/photo-24.jpg";
import image3 from "../../../public/imgs/photos/photo-25.jpg";
import image4 from "../../../public/imgs/photos/photo-26.jpg";
import image5 from "../../../public/imgs/photos/photo-27.jpg";
import image6 from "../../../public/imgs/photos/photo-28.jpg";
import image7 from "../../../public/imgs/photos/photo-29.jpg";
import image8 from "../../../public/imgs/photos/photo-30.jpg";

import "yet-another-react-lightbox/styles.css";
import cls from "./galleryTwo.module.scss"
import { Container, Grid } from "@mui/material";

const GalleryTwo = () => {
    const [open, setOpen] = useState(false)
    return (
        <section className={cls.gallery}>
            <Container maxWidth="xl">
                <div class="text-center mb-md-8 mb-5 text-capitalize">
                    <h1 class="font-lora fw-bold mb-1">Gallery</h1>
                    <p class="font-size-lg">Discover your perfect program in our courses.</p>
                </div>
                <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                        <a onClick={() => setOpen(true)} style={{margin: "32px 0"}}>
                            <img src="./imgs/photos/photo-23.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a onClick={() => setOpen(true)}>
                            <img src="./imgs/photos/photo-24.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <a onClick={() => setOpen(true)} style={{margin: "0 0 32px 0"}}>
                            <img src="./imgs/photos/photo-25.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a onClick={() => setOpen(true)}  style={{margin: "0 0 32px 0"}}>
                            <img src="./imgs/photos/photo-26.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <a onClick={() => setOpen(true)}  style={{margin: "32px 0"}}>
                            <img src="./imgs/photos/photo-27.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a onClick={() => setOpen(true)}>
                            <img src="./imgs/photos/photo-28.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <a onClick={() => setOpen(true)}  style={{margin: "0 0 32px 0"}}>
                            <img src="./imgs/photos/photo-29.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a onClick={() => setOpen(true)}  style={{margin: "0 0 32px 0"}}>
                            <img src="./imgs/photos/photo-30.jpg" class="img-fluid" alt="..." />

                            <div className={cls.meta}>
                                <div className={cls.icon}>
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3272 10.8975H20.6028V16.5998H14.8105V19.4059H20.6028V25.1982H23.3272V19.4059H29.1113V16.5998H23.3272V10.8975Z" fill="currentColor"></path>
                                        <path d="M21.9604 0C11.9957 0 3.91267 8.07486 3.91267 18.0478C3.91267 22.4411 5.48346 26.4662 8.09327 29.5996L0.509281 37.11C-0.16976 37.789 -0.16976 38.8117 0.509281 39.4907C1.18832 40.1698 2.21097 40.1698 2.89001 39.4907L10.4413 31.9395C13.5665 34.5329 17.5753 36.0873 21.9522 36.0873C31.917 36.0873 40 28.0125 40 18.0396C40 8.06668 31.9251 0 21.9604 0ZM21.9604 32.7739C13.8283 32.7739 7.23424 26.1799 7.23424 18.0478C7.23424 9.91563 13.8283 3.32157 21.9604 3.32157C30.0926 3.32157 36.6866 9.91563 36.6866 18.0478C36.6866 26.1799 30.0926 32.7739 21.9604 32.7739Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </Grid>
                </Grid>

            </Container>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[image1, image2, image3, image4, image5, image6, image7, image8]}
            />
        </section>
    )
}

export default GalleryTwo;