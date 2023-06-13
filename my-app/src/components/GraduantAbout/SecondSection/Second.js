import React from "react";
import './_Second.scss';
import Left from "./Left";

function Second(){
    return(
        <section id="second">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2>
                        Kiçik müsahibə və ya həyat hekayəs
                    </h2>
                </div>
                <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
               answer="İxtisasım – Sənayenin Təşkili və İdarə edilməsidir. 6 ildir ekstrim idman növləri üzrə xilasedici mütəxəssis kimi fəalliyyət göstərirdim. Hələ də hobbi kimi davam etdirirəm."
                question="Tədrisə qədər peşəniz"
                />
                     <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
               answer="     Ətraf mühitdə yaxınlarımın məsləhəti və təklifi ilə Code Academy-ni seçmək qərarına gəldim. Əlavə olaraq təhsildə keyfiyyətə önəm verdiklərini bildiyim üçün müraciət etdim."
                question=" Code Academy-ni seçməkdə qərarınıza təsir edən amillər hansılar olub?"
                />
                           <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
               answer=" Məzun olduqdan sonra pandemiya səbəbli çətinliklərin yaranmasıyla bağlı iş imkanları azalsada Code Academy-də aldığım təhsilin mənə yaratdığı üstünlüklər nəticəsində iş tapmağım o qədərdə çətin olmadı."
                question=" Məzun olduqdan sonra yeni iş imkanları və karyera fürsətləri haqqında nə deyə bilərsiniz?"
                />
                     <Left 
                image="https://code.edu.az/wp-content/uploads/elementor/thumbs/sep-line-pay4h4cd32a9vtdz9i6ps4iyobet29ugektausv76m.png"
               answer=" Code Academy ailəsinin peşəkarlığı və keçirilən təhsilin yüksək səviyyədə olmasının nəticəsində gələcək iş həyatında bir çox üstünlüklərə sahib ola bilərlər. Təbii ki, Code ailəsinin səyləri ilə bərabər tələbələrin üzərinə düşən vəzifələri və tapşırıqları vaxtı vaxtında yerinə yetirmələri əldə ediləcək uğurun təminatının bir hissəsidir."
                question=" Code Academy-də yeni tələbə olanlara və ya gələcəkdə tələbə olmaq istəyənlərə hansı tövsiyələri edərdin?"
                />
            </div>
        </div>
    </section>
    )
}

export default Second;