import React from "react";
import "./_ClipBoard.scss";

function ClipBoard() {
  return (
    <section id="clipboard">
      <div class="col-12">
        <div class="clipboard_background">
          <div className="clipboard_text">
            <h4 class="clipboard_text_h2">
              Code Academy həm arzuladığınız sahəni əlçatan edir, <br />
              həm də gələcək karyera inkişafınız üçün lazımı bilik və
              bacarıqları formalaşdırır.
            </h4>
            <div className="counts">
                <div className="count">
                   <span>
                    3000
                   </span>
                    <p> Tələbə</p>
                </div>
                <div className="count">
                   <span>
                   427
                   </span>
                    <p>   karyerasını <br/>yaxşılaşdırıb</p>
                </div>
                <div className="count">
                   <span>
                   95
                   </span>
                    <p>   rəhbər <br/>vəzifələrdə işləyir</p>
                </div>
                <div className="count">
                   <span>
                   43
                   </span>
                    <p>   vəzifəsi artıb</p>
                </div>
            </div>
          </div>
        </div>
        <div class="background-overlay"></div>
      </div>
      
    </section>
  );
}

export default ClipBoard;
