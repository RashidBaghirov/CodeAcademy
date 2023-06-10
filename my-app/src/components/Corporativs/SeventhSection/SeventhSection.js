import React from "react";
import "./_SeventhSection.scss";

function SeventhSection() {
  return (
    <section id="Contact">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="textsContact">
                    <div className="title">
                        <h2 className="upper">
                            korporativ əməkdaşlıq
                        </h2>
                        <h2 className="bottom">
                            burada
                        </h2>
                    </div>
                    <div className="text">
                        <p>
                            Code Academy məzunların işə götürülməsi və ya şirkətinizin kadrlarının sıfırdan yetişdirilməsi və ixtisaslaşdırılmasını istəyirsinizsə bizə müraciət edin.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <form action="">

                        <input className="name" type="text" name="" id="" placeholder="Ad" />
                    <input className="surname" type="text" name="" id="" placeholder="Soyad" /><br />

                    <select className="prefics" name="" id="">
                        <option value="">010</option>
                        <option value="">050</option>
                        <option value="">051</option>
                        <option value="">055</option>
                        <option value="">060</option>
                        <option value="">070</option>
                        <option value="">077</option>
                        <option value="">099</option>

                    </select>
                   <input className="number" type="number" name="" id="" placeholder="XXX-XX-XX"  /><br />
                   <input className="email" type="email" name="" id="" placeholder="Email" /><br />
                   <input className="company" type="text" name="" id="" placeholder="İşlədiyiniz şirkət"  /><br />
                   <input className="vezife" type="text" name="" id="" placeholder="Vəzifə"  /><br/>


                   <select className="count" name="" id="">
                    <option value="">Şirkətinizdəki işçi sayı</option>
                    <option value="">1-10</option>
                    <option value="">11-50</option>
                    <option value="">51-100</option>
                    <option value="">101-250</option>
                    <option value="">250+</option>

                   </select><br />

                   <textarea className="textArea" name="" id="" cols="48" rows="4"></textarea>

                   <button type="submit">
                    Müraciət edin
                   </button>
                </form>
            </div>
        </div>
    </div>
</section>
  );
}

export default SeventhSection;
