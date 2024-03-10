'use client';

import { Banner, CustomSlider } from '@/components';
import { bannerData, iTechMiniBanne2, iTechMiniBanner } from '@/mock';
import { IPageParams } from '@/types';

import { Image } from '@nextui-org/react';

interface IHomePage extends IPageParams {}

export const HomePage = ({ lang }: IHomePage) => {
  return (
    <section className="container">
      <div className="flex w-full items-start gap-8">
        <CustomSlider
          showDots
          lang={lang}
          arrows={false}
          autoPlay={false}
          component={Banner}
          sliderData={bannerData}
          sliderClass="banner_slider"
          wrapperClass="w-full  cursor-pointeryar lg:w-3/4"
          items={{ monitor: 1, desktop: 1, tablet: 1, mobile: 1 }}
        />
        <div className="w-1/5 hidden lg:grid grid-rows-2 gap-5">
          <Image
            className="w-full h-full cursor-pointer object-cover  rounded-md"
            classNames={{
              img: 'h-full w-full',
            }}
            alt="banner-img-1"
            src={iTechMiniBanner.src}
          />
          <Image
            className="w-full h-full cursor-pointer object-cover rounded-md"
            alt="banner-img-2"
            src={iTechMiniBanne2.src}
          />
        </div>
      </div>
      <div>
        <h1 className="main__title mt-4">“iTech Academy” bu -</h1>
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odio! Provident
      nihil earum eius, sed iste libero quo tempore soluta quis. Doloremque optio veritatis quia
      iure! Placeat quidem laudantium quas voluptatem illum optio vero minima hic itaque voluptates.
      Repellat numquam vel ipsam sunt nostrum saepe cum delectus ea, dicta tenetur expedita eius
      eligendi fugit iste dolor deserunt quia maxime? Magnam enim laborum perferendis fugiat nemo
      tempore modi deleniti unde, delectus ex tempora assumenda dolores distinctio cumque quo,
      eligendi hic rem temporibus doloremque maxime quam. In, perspiciatis recusandae ipsum
      repellendus enim, quas voluptate minima ea quia, delectus tempora nemo. Iusto cumque alias
      cum, velit iure tempore! Odio corporis molestiae quaerat quidem sit unde aliquam ipsa fugit
      praesentium sint ducimus iusto tempora nostrum cum eligendi a suscipit possimus, veniam
      voluptatibus aut vitae recusandae temporibus fugiat? Eum suscipit explicabo saepe cum illum
      voluptatum eos, minima nemo! Vero dolore quam ullam, in nemo incidunt consequatur illo
      distinctio, voluptatibus laudantium necessitatibus obcaecati suscipit sit nostrum? Nulla
      cupiditate officiis illo adipisci recusandae perferendis, velit aliquid possimus vitae
      repellendus animi exercitationem nihil ut, eaque esse deserunt vel fugiat tenetur accusantium
      sit illum, ducimus voluptas commodi? Deleniti inventore dolore aliquam aliquid error est
      aspernatur sapiente. Quidem asperiores quasi natus a recusandae hic tempora cupiditate magnam
      possimus labore voluptas suscipit sunt cum at ipsa, sit dicta, ratione minus rerum animi
      commodi? Fugit ipsam natus, ipsa sit optio ea autem qui reiciendis alias iusto quibusdam
      dignissimos ut a id veniam aut modi animi voluptatem cum consequatur facilis, ullam enim? Nam,
      mollitia repellendus! Ut consectetur cupiditate itaque reprehenderit earum error sunt facere
      explicabo corrupti sint, aspernatur sed minus delectus officiis. Dolorum nemo reiciendis
      quidem, error veniam amet inventore, pariatur quisquam fuga dicta non odit atque esse ipsum
      ipsa, voluptates labore! Cupiditate molestiae vitae, vero provident accusantium assumenda iure
      at iusto nisi accusamus sed amet repellat. Maxime, officiis pariatur saepe alias molestias
      deserunt consectetur ducimus! Qui iste ad nulla modi omnis quasi. Saepe sint vel architecto
      quam asperiores, veniam, nesciunt minus consequatur rem omnis ipsam odio aspernatur illum
      tempore itaque. Suscipit maiores beatae molestias tempore mollitia dicta, nemo harum accusamus
      eligendi assumenda omnis placeat ut, quasi libero temporibus laudantium cupiditate praesentium
      quod dolore! Dolore voluptatem distinctio sed neque, quod repellendus, ad fuga earum sequi at
      odio quas quaerat aut id architecto animi veniam recusandae impedit doloremque. Fugiat
      provident praesentium quos eius architecto atque consequuntur sed dignissimos doloribus
      officiis! Sed, delectus totam fugiat voluptatem ducimus eligendi voluptate, praesentium
      recusandae, esse provident quasi aliquid corrupti illum eum nesciunt. Illum provident labore
      aperiam, adipisci consequuntur est tempore porro ullam reprehenderit, sequi incidunt officia
      debitis itaque quas, optio harum unde ipsum obcaecati quasi. Provident, ea delectus adipisci
      fugiat impedit temporibus velit, esse dolores necessitatibus voluptatum eos rerum ad
      doloremque soluta? Optio dicta fuga nisi, similique saepe quod aut delectus repudiandae est.
      Amet eum soluta voluptates itaque aperiam a, incidunt voluptatum. Unde delectus id atque ab
      sit facere quasi ducimus quod tenetur, iusto repellat amet accusamus eveniet rerum temporibus
      voluptatem expedita dolor, nobis voluptate explicabo corporis. Sequi quae architecto
      doloremque! Veritatis adipisci ullam pariatur? Quo corporis laboriosam perspiciatis excepturi,
      ipsam, eligendi, explicabo id dolore odio sit quod amet optio sint fugit nemo! Voluptatem odit
      quod repudiandae quae vitae reprehenderit labore similique deserunt officia ullam quam, rerum
      illum, voluptate maxime quaerat culpa nemo perferendis veniam voluptatibus blanditiis
      obcaecati impedit accusamus, mollitia delectus? Error deserunt deleniti dolore nihil,
      inventore aliquid tempore earum reprehenderit voluptatem quidem incidunt similique? Possimus
      optio, asperiores excepturi illo cum assumenda officiis quae modi tempore, repellat soluta
      voluptates nemo veniam? Suscipit nisi voluptate exercitationem a, rem accusamus, repellendus
      laborum rerum nemo aspernatur iste est libero commodi debitis sapiente tenetur iusto, ratione
      esse quo eos at vero. Ex voluptas ut mollitia obcaecati illum tenetur modi dolores, doloribus,
      labore id incidunt accusantium adipisci laudantium excepturi itaque delectus, natus eos hic.
      Consequatur, quos temporibus voluptates nam quo tenetur veritatis qui et nesciunt! Dicta earum
      asperiores, sed est consectetur sint magnam. Facere, quos? Rerum perferendis fugiat numquam
      vero nisi doloremque ad natus quaerat odio voluptatem beatae quasi, eaque sed, harum voluptate
      totam? Explicabo fuga deleniti eius, numquam inventore similique earum, error odit laudantium
      beatae, vero minus consectetur pariatur quidem eaque nulla libero doloremque aperiam. Odio
      natus voluptatibus repudiandae obcaecati. Dicta beatae fugiat dolor sapiente ipsam, ipsum et
      reprehenderit quas maxime consectetur. Aspernatur blanditiis, id atque non error dignissimos,
      officiis perferendis iste obcaecati itaque fugit debitis assumenda, possimus suscipit soluta
      ducimus ea. Sunt, neque esse quam eius fugit, beatae aspernatur illum non delectus repellendus
      debitis alias odit placeat! Eligendi magnam, eveniet a quas non dicta explicabo quos numquam,
      provident quaerat aut, nam ad! Porro ex magnam assumenda repellendus veritatis aperiam
      perspiciatis ullam molestias ut? Nobis ut dolorum reprehenderit! Sint ipsa aperiam nemo rem et
      expedita blanditiis optio ratione, nisi eaque in esse quae facilis illum ex veritatis alias
      doloremque delectus tenetur dignissimos eum! Enim repudiandae tenetur laudantium odio, totam
      eligendi labore ipsam quas, earum vitae accusamus deleniti ducimus illum nihil eum. Architecto
      assumenda iusto consequuntur dolorum, ab libero cupiditate illo vitae voluptatibus odit
      voluptatem fuga et error soluta tempore quod facere. Repudiandae eaque, quaerat blanditiis
      accusamus accusantium molestias suscipit fugit laborum ea dolore vero deserunt esse minus
      cumque itaque commodi dolores sed voluptates voluptas! Odit, quod. Perspiciatis consequatur
      delectus numquam fuga nesciunt ipsum magni, saepe voluptas doloribus porro amet eligendi
      laboriosam suscipit vero voluptatibus ex voluptatem dolor explicabo quo? Dolorum optio velit
      ipsum minus obcaecati molestias quod deleniti laudantium dicta illum ad soluta, maxime
      aspernatur facilis rerum iusto quisquam natus beatae amet. Excepturi debitis quam et incidunt
      iusto temporibus omnis ullam, quo cum quibusdam ipsa maxime harum sint saepe accusantium in
      sed distinctio! Totam commodi ad, non harum eligendi veritatis atque saepe voluptatibus
      repudiandae dolore facere quod fugiat suscipit neque error libero illum nesciunt, a quasi
      minus sequi aspernatur laborum porro qui? Dignissimos quaerat eveniet itaque maiores deleniti.
      Inventore eaque sunt hic est, quam maiores amet possimus porro explicabo rem laboriosam optio
      doloribus aperiam dolore, accusamus voluptatibus atque architecto consectetur iste expedita
      molestias ipsam quos soluta tenetur. Sunt iure voluptatibus fugit.
    </section>
  );
};
