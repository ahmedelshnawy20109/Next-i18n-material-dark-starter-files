import { useState } from "react";

import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from './headerOne.module.scss';
import Link from "next/link";
import { Drawer, Grid } from "@mui/material";
import UserDrawer from "../userDrawer/userDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import MobileNaveDrawer from "../MobileNaveDrawer/MobileNaveDrawer";

const HeaderOne = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  
  const [state2, setState2] = useState({
    right: false
  });

  
  const toggleDrawer2 = (anchor, open) => (event) => {
    setState2({ ...state2, [anchor]: open });
  };

  
  const cartDrawerContent = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer2(anchor, false)}
      onKeyDown={toggleDrawer2(anchor, false)}
    >
      content 2
    </div>
  );

  return (
    <header className={cls.navbar}>
      <Container maxWidth="xxl" className={cls.container}>
        <Link className={cls.logo} href="#">
          <img src="./imgs/brand.svg" alt="..." />
        </Link>
        <ul className={cls.courses}
          onMouseEnter={() => setNavDropdown(1)}
          onMouseLeave={() => setNavDropdown(0)}>
          <li className={cls.nav}>
            <span className={cls.navLink}>
              <div className={cls.inner}>
                <div className={cls.icon}>
                  <svg width="25" height="17" viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="1" fill="currentColor"></rect>
                    <rect y="8" width="15" height="1" fill="currentColor"></rect>
                    <rect y="16" width="20" height="1" fill="currentColor"></rect>
                  </svg>
                </div>
                <span>Courses</span>
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
            <UserDrawer />
          </li>
          <li className={cls.drawerItem}>
            <CartDrawer />
          </li>
          <li className={`${cls.drawerItem} ${cls.mobileNave}`}>
            <MobileNaveDrawer />
          </li>
        </ul>
      </Container>

    </header>
  );
}

export default HeaderOne