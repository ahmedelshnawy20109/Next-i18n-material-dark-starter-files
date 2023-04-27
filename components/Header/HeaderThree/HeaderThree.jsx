import { useState } from "react";

import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import Link from "next/link";
import { Drawer, Grid } from "@mui/material";
import UserDrawer from "../UserDrawer/UserDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import MobileNaveDrawer from "../MobileNaveDrawer/MobileNaveDrawer";

import cls from './headerThree.module.scss';
import TopBar from "./TopBar";

const HeaderThree = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');


  const [state2, setState2] = useState({
    right: false
  });



  return (
    <header className={cls.navbar}>
      <Container maxWidth="xl" className={cls.topContainer}>
        <TopBar />
      </Container>
      <Container maxWidth="xl" className={cls.container}>
        <Link className={cls.logo} href="#">
          <img src="./imgs/brand.svg" alt="..." />
        </Link>
        <ul className={cls.courses}
          onMouseEnter={() => setNavDropdown(1)}
          onMouseLeave={() => setNavDropdown(0)}>
          <li className={cls.nav}>
            <span className={cls.navLink}>
              <div className={cls.inner}>
                <span>Courses</span>
                <div className={cls.icon}>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.84016 0.540385L9.5126 0.210545C9.40951 0.107536 9.27235 0.0507876 9.12577 0.0507876C8.97926 0.0507876 8.84194 0.107536 8.73885 0.210545L5.00224 3.94732L1.26131 0.206399C1.15838 0.10339 1.02107 0.0467224 0.87456 0.0467224C0.728055 0.0467224 0.590655 0.10339 0.487646 0.206399L0.160001 0.534206C-0.0533338 0.747379 -0.0533338 1.09462 0.160001 1.30779L4.61402 5.77783C4.71695 5.88075 4.8541 5.95327 5.00191 5.95327H5.00362C5.1502 5.95327 5.28736 5.88067 5.39029 5.77783L9.84016 1.3199C9.94325 1.21698 9.99984 1.07567 10 0.929169C10 0.782582 9.94325 0.643231 9.84016 0.540385Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </span>
            {navDropdown === 1 && (
              <div className={cls.linkDropdown}>
                <ul>
                  <li>Thin and Light Laptops</li>
                  <li>Gaming Laptops</li>
                  <li>Budget Laptops</li>
                  <li>Business Laptops</li>
                  <li>Apple</li>
                  <li>HP</li>
                  <li>Lenovo</li>
                  <li>Acer</li>
                  <li>Dell</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className={cls.links}>
          <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>


            <li
              className={`${cls.link} ${cls.maxWidth}`}

              onMouseEnter={() => setNavDropdown(2)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                Home{" "}
                <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 2 && (
                <div className={`${cls.linkDropdown2} ${cls.maxWidth}`}>
                  <Grid container spacing={5}>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v1.jpg" alt="..." />
                        <h6>Home v1</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v2.jpg" alt="..." />
                        <h6>Home v2</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v3.jpg" alt="..." />
                        <h6>Home v3</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v4.jpg" alt="..." />
                        <h6>Home v4</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v5.jpg" alt="..." />
                        <h6>Home v5</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v6.jpg" alt="..." />
                        <h6>Home v6</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v7.jpg" alt="..." />
                        <h6>Home v7</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v8.jpg" alt="..." />
                        <h6>Home v8</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v9.jpg" alt="..." />
                        <h6>Home v9</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v10.jpg" alt="..." />
                        <h6>Home v10</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v11.jpg" alt="..." />
                        <h6>Home v11</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v12.jpg" alt="..." />
                        <h6>Home v12</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v13.jpg" alt="..." />
                        <h6>Home v13</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v14.jpg" alt="..." />
                        <h6>Home v14</h6>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link class={cls.item} href="./index.html" target="_blank">
                        <img src="./imgs/menu/home-v15.jpg" alt="..." />
                        <h6>Home v15</h6>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              )}
            </li>

            <li
              className={cls.link}

              onMouseEnter={() => setNavDropdown(3)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                Courses <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 3 && (
                <div className={cls.linkDropdown2}>
                  <Grid container>
                    <Grid item md={4}>
                      <h5 class="dropdown-header">
                        Courses List
                      </h5>

                      <a class="dropdown-item" href="./course-list-v1.html">
                        Courses List v1
                      </a>
                      <a class="dropdown-item" href="./course-list-v2.html">
                        Courses List v2
                      </a>
                      <a class="dropdown-item" href="./course-list-v3.html">
                        Courses List v3
                      </a>
                      <a class="dropdown-item" href="./course-list-v4.html">
                        Courses List v4
                      </a>
                      <a class="dropdown-item" href="./course-list-v5.html">
                        Courses List v5
                      </a>
                      <a class="dropdown-item mb-5" href="./course-list-v6.html">
                        Courses List v6
                      </a>
                    </Grid>
                    <Grid item md={4}>
                      <h5 class="dropdown-header">
                        Courses Single
                      </h5>

                      <a class="dropdown-item" href="./course-single-v1.html">
                        Courses Single v1
                      </a>
                      <a class="dropdown-item" href="./course-single-v2.html">
                        Courses Single v2
                      </a>
                      <a class="dropdown-item" href="./course-single-v3.html">
                        Courses Single v3
                      </a>
                      <a class="dropdown-item" href="./course-single-v4.html">
                        Courses Single v4
                      </a>
                      <a class="dropdown-item mb-5" href="./course-single-v5.html">
                        Courses Single v5
                      </a>
                    </Grid>
                    <Grid item md={4}>
                      <h5 class="dropdown-header">
                        Lesson Single
                      </h5>

                      <a class="dropdown-item" href="./lesson-single-v1.html">
                        Lesson Single v1
                      </a>
                      <a class="dropdown-item mb-5" href="./lesson-single-v2.html">
                        Lesson Single v2
                      </a>

                      <h5 class="dropdown-header">
                        Instructors
                      </h5>

                      <a class="dropdown-item" href="./instructors-list-v1.html">
                        Instructors List v1
                      </a>
                      <a class="dropdown-item" href="./instructors-list-v2.html">
                        Instructors List v2
                      </a>
                      <a class="dropdown-item mb-5 mb-lg-0" href="./instructors-single.html">
                        Instructors Single
                      </a>
                    </Grid>
                  </Grid>
                </div>
              )}
            </li>

            <li
              className={cls.link}

              onMouseEnter={() => setNavDropdown(4)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                Pages <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 4 && (
                <div className={cls.linkDropdown2}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Grid container>
                        <Grid item lg={6} xs={12}>
                          <a class="dropdown-item" href="./event-list.html">
                            Event List
                          </a>
                          <a class="dropdown-item" href="./event-single.html">
                            Event Single
                          </a>
                          <a class="dropdown-item" href="./gallery.html">
                            Gallery
                          </a>
                          <a class="dropdown-item mb-5 mb-lg-0" href="./pricing.html">
                            Pricing
                          </a>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                          <a class="dropdown-item" href="./about-v1.html">
                            About v1
                          </a>
                          <a class="dropdown-item" href="./about-v2.html">
                            About v2
                          </a>
                          <a class="dropdown-item" href="./contact-us.html">
                            Contact us
                          </a>
                          <a class="dropdown-item mb-5 mb-lg-0" href="./terms-of-service.html">
                            Terms of Service
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container>
                        <Grid item lg={6} xs={12}>
                          <a class="dropdown-item" href="./faq.html">
                            FAQ
                          </a>
                          <a class="dropdown-item" href="./login.html">
                            Login
                          </a>
                          <a class="dropdown-item" href="./register.html">
                            Register
                          </a>
                          <a class="dropdown-item mb-5 mb-lg-0" href="./become-instructor.html">
                            Become an Instructor
                          </a>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                          <a class="dropdown-item" href="./coming-soon.html">
                            Coming Soon
                          </a>
                          <a class="dropdown-item mb-5 mb-lg-0" href="./404.html">
                            404
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              )}
            </li>

            <li
              className={cls.link}

              onMouseEnter={() => setNavDropdown(5)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                Blog <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 5 && (
                <div className={`${cls.linkDropdown2} ${cls.auto}`}>
                  <a class="dropdown-item" href="./event-list.html">
                    Event List
                  </a>
                  <a class="dropdown-item" href="./event-single.html">
                    Event Single
                  </a>
                  <a class="dropdown-item" href="./gallery.html">
                    Gallery
                  </a>
                  <a class="dropdown-item mb-5 mb-lg-0" href="./pricing.html">
                    Pricing
                  </a>
                </div>
              )}
            </li>

            <li
              className={cls.link}

              onMouseEnter={() => setNavDropdown(6)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                Shop <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 6 && (
                <div className={`${cls.linkDropdown2} ${cls.auto}`}>
                  <a class="dropdown-item" href="./event-list.html">
                    Event List
                  </a>
                  <a class="dropdown-item" href="./event-single.html">
                    Event Single
                  </a>
                  <a class="dropdown-item" href="./gallery.html">
                    Gallery
                  </a>
                  <a class="dropdown-item mb-5 mb-lg-0" href="./pricing.html">
                    Pricing
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
        <ul className={cls.drawers}>
          <li className={cls.drawerItem}>
            <CartDrawer />
          </li>
          <li className={cls.drawerItem}>
            <UserDrawer /> Login/Register
          </li>
          <li className={`${cls.drawerItem} ${cls.mobileNave}`}>
            <MobileNaveDrawer />
          </li>
        </ul>
      </Container>

    </header>
  );
}

export default HeaderThree