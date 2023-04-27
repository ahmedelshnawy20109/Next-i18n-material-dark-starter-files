import React from "react";

import cls from "./topBar.module.scss"
const TopBar = () => {
    return (
        <div className={cls.topBar}>
            <ul className={cls.nav}>
                <li className={cls.item}>
                    <span>
                        (56) 123 456 789
                    </span>
                </li>
                <li className={cls.item}>
                    <span>milhealth@hotmail.com</span>
                </li>
            </ul>

            <ul className={cls.nav}>
                <li className={cls.item}>
                    <a href="#" class="nav-link p-0 text-white">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li className={cls.item}>
                    <a href="#" class="nav-link p-0 text-white">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li className={cls.item}>
                    <a href="#" class="nav-link p-0 text-white">
                        <i class="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default TopBar