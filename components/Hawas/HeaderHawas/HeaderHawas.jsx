import { useState } from "react";

import Container from "@mui/material/Container";

import { i18n, useTranslation } from "next-i18next";

import cls from './headerHawas.module.scss';
import Link from "next/link";
import { Grid } from "@mui/material";
import UserDrawer from "../../Header/UserDrawer/UserDrawer";
import TopBar from "./TopBar";
import MobileNaveDrawer from "../../Header/MobileNaveDrawer/MobileNaveDrawer";

const HeaderHawas = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation("common");


  return (
    <header className={`${cls.navbar} ${cls[i18n.language]}`}>
      <Container maxWidth="xl" className={cls.topContainer}>
        <TopBar />
      </Container>
      <Container maxWidth="xl" className={cls.container}>
        <Link className={cls.logo} href="#">
          <img src="./imgs/hawas/hawaslogofinal1.png" alt="..." />
        </Link>

        <div className={cls.links}>
          <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>


            <li
              className={`${cls.link} ${cls.maxWidth}`}

              onMouseEnter={() => setNavDropdown(1)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                برامجنا{" "}
                <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 1 && (
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
            >
              <span>
                {" "}
                المدونة

              </span>
            </li>

            <li
              className={cls.link}
            >
              <span>
                {" "}
                قناة حواس
              </span>
            </li>

            <li
              className={cls.link}
            >
              <span>
                {" "}
                من نحن
              </span>
            </li>

            <li
              className={cls.link}

              onMouseEnter={() => setNavDropdown(6)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                {" "}
                اتصل بنا
              </span>
            </li>
          </ul>
        </div>
        <ul className={cls.drawers}>
          <li className={cls.drawerItem}>
            <UserDrawer />
          </li>
          <li className={`${cls.drawerItem} ${cls.mobileNave}`}>
            <MobileNaveDrawer />
          </li>
        </ul>
      </Container>

    </header>
  );
}

export default HeaderHawas