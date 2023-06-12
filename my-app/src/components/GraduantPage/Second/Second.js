import React from "react";
import "./_Second.scss";
import Story from "./Story";

function Second() {
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="title">
              <h4>hekayələr</h4>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="row">
              <div className="col-lg-2">
                <div className="category">
                  <p>Hamısı</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="category">
                  <p>Biznes Həlləri</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="category">
                  <p>Digital Marketinq</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="category">
                  <p>Dizayn</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="category">
                  <p>IT və Kiber Təhlükəsizlik</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="category">
                  <p>Proqramlaşdırma</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 p-5 text-center">
            <div className="row">
              <Story
                image="/images/farid.jpg"
                fullname="Fərid Məmmədov"
                company="Code Academy"
              />
              <Story
                image="/images/arif.jpg"
                fullname="Arif Muradov"
                company="Code Academy"
              />

              <Story
                image="/images/agasef.jpeg"
                fullname="Ağasəf Məmmədli"
                company="Xalq Bank"
              />
              <Story
                image="/images/aynure.jpeg"
                fullname="Aynurə Mahmudova"
                company="Morpho reklam agentliyi"
              />
              <Story
                image="/images/gulsum.jpg"
                fullname="Gülsüm Məmmədova"
                company="Pasha Bank"
              />
              <Story
                image="/images/konul.jpg"
                fullname="Könül Həsənova"
                company="Bolt (Tallin)"
              />

              <Story
                image="/images/qurban.jpg"
                fullname="Qurban Şahinoğlu"
                company="Pasha Bank"
              />
              <Story
                image="/images/bahaddin.jpeg"
                fullname="Bahaddin Məmmədli"
                company="Havas Azerbaijan"
              />
              <Story
                image="/images/ramil.jpg"
                fullname="Ramil Əyyubov"
                company="Guavapay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;
