import Link from "next/link";
import React from "react";

import cls from "./priceOne.module.scss"

const PriceOne = () => {
    return (
        <div className={cls.price}>
            <div className={cls.cardBody}>
                <span className={cls.badgeContainer}>
                    <span class="badge badge-lg badge-purple badge-pill text-white text-uppercase fw-bold font-size-xs mx-auto">Most Popular</span>
                </span>
                <h4>Basic</h4>
                <h1>$599.95</h1>

                <p>Standard listing submission, active for 30 days.</p>

                <ul>
                    <li>One Listing</li>
                    <li>30 Days Availability</li>
                    <li>Standard Listing</li>
                    <li>Limited Support</li>
                </ul>

                <Link href="#">GET STARTED</Link>
            </div>
        </div>
    )
}

export default PriceOne