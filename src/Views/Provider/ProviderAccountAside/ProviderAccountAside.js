import React from "react";
import { NavLink } from "react-router-dom";

const ProviderAccountAside = () => {
  return (
    <>
      <aside className="sticky mb30 bgGrey pt30 pb30 width75 mobWidth100 tabWidth100 tabLgWidth100">
        <div className="noUl taskAside pl30 pr30">
          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active "
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/provider/profile/list-my-services"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            List My Services
          </NavLink>

          <NavLink
            to="/provider/profile/transactions"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Transactions
          </NavLink>
          <NavLink
            to="/provider/profile/notifications"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Notifications
          </NavLink>
          <NavLink
            to="/provider/profile/referral"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Referral Bonus
          </NavLink>
          <NavLink
            to="/provider/profile/referral"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Account Setting
          </NavLink>
          <NavLink
            to="/provider/profile/edit-profile"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Edit Profile
          </NavLink>

          <NavLink
            to="/provider/profile/busniess-profile"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Business Profile
          </NavLink>
          <NavLink
            to="/provider/profile/billing-details"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Payment & Billing Details
          </NavLink>
          <NavLink
            to="/provider/membership"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Membership Plan
          </NavLink>
          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Switch to Customer
          </NavLink>
          <NavLink
            to="/provider/profile/change-password"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Change Password
          </NavLink>
          <NavLink
            to="#"
            className="mb10 position-relative colorBlack fs16 d-block"
            activeClassName="active"
          >
            Log out
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default ProviderAccountAside;
