import classNames from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Experiences() {
  return (
    <>
      <header className="header-nav">
        <div className="header-inner d-flex align-items-center">
          <a href="#" className="back-link">
            <img src="images/back.png" alt="" />
          </a>
          <a href="#" className="home-screen">
            <img src="images/icon-home.png" alt="" />
          </a>

          <div className="user d-flex align-items-center">
            <div className="avatar d-flex justify-content-center align-items-center">
              <img src="images/avatar.png" alt="" />
            </div>
            <a href="#" className="notificaiton-dropdwon">
              Johndoe.near
            </a>
          </div>

          <a href="#" className="notifications">
            <img src="images/notification.png" alt="" />
          </a>
          <a href="#" className="settings">
            <img src="images/settings.png" alt="" />
          </a>
        </div>
      </header>

      <main className="container-inner container-inner-scroll">
        <div className="searchbar-wrap d-flex align-items-center justify-content-between">
          <input
            type="text"
            className="form-control"
            id="searchbar"
            placeholder="Search experiences"
          />

          <a href="#">
            <img src="images/icon-filter.png" alt="" />
          </a>
        </div>

        <div className="scrollable-content">
          <div className="heading d-flex align-items-center justify-content-between">
            <h2>Recent Experiences</h2>
          </div>
          <div className="recent-categories">
            <div className="d-flex recent-categories-block">
              <div className="thumbnai-img">
                <img src="images/ex_1.png" alt="" />
              </div>

              <div className="d-flex flex-grow-1 align-items-center">
                <div className="flex-grow-1">
                  <h2>DeFi Swap</h2>
                  <span className="description">Swap your digital assets</span>
                  <span className="how-users">+200 users</span>
                </div>
                <a href="#">
                  <img src="images/icon-right-dark-md.png" alt="" />
                </a>
              </div>
            </div>
            <div className="d-flex recent-categories-block">
              <div className="thumbnai-img">
                <img src="images/ex_2.png" alt="" />
              </div>

              <div className="d-flex flex-grow-1 align-items-center">
                <div className="flex-grow-1">
                  <h2>Docu sign</h2>
                  <span className="description">
                    sign smart contracts seamlessly
                  </span>
                  <span className="how-users">+1K users</span>
                </div>
                <a href="#">
                  <img src="images/icon-right-dark-md.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="heading d-flex align-items-center justify-content-between">
            <h2>Recent Experiences</h2>
            <a href="#" className="see-all">
              See All
            </a>
          </div>

          <div className="d-flex flex-wrap">
            <div className="categories exchange d-flex flex-column justify-content-between">
              <div className="circle rounded-circle d-flex align-items-center justify-content-center">
                <img src="images/icon-exchanges.png" alt="" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <a className="cat-link" href="#">
                  Exchanges
                </a>
                <img src="images/icon-right-dark.png" alt="" />
              </div>
            </div>

            <div className="categories game d-flex flex-column justify-content-between">
              <div className="circle rounded-circle d-flex align-items-center justify-content-center">
                <img src="images/icon-games.png" alt="" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <a className="cat-link" href="#">
                  Exchanges
                </a>
                <img src="images/icon-right-dark.png" alt="" />
              </div>
            </div>

            <div className="categories marketplace d-flex flex-column justify-content-between">
              <div className="circle rounded-circle d-flex align-items-center justify-content-center">
                <img src="images/icon-market.png" alt="" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <a className="cat-link" href="#">
                  Marketplaces
                </a>
                <img src="images/icon-right-dark.png" alt="" />
              </div>
            </div>

            <div className="categories defi d-flex flex-column justify-content-between">
              <div className="circle rounded-circle d-flex align-items-center justify-content-center">
                <img src="images/icon-market.png" alt="" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <a className="cat-link" href="#">
                  Defi
                </a>
                <img src="images/icon-right-dark.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
