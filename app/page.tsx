"use client"

import { motion } from "framer-motion"

export default function Home() {

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200 min-h-screen">

      {/* ANIMATED STAR BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {Array.from({ length: 40 }).map((_, i) => (

          <motion.div
            key={i}
            initial={{
              y: "110vh",
              x: Math.random() * 1600,
              opacity: 0,
              scale: Math.random() * 1.2
            }}

            animate={{
              y: "-20vh",
              opacity: [0, 1, 1, 0],
              x: [
                Math.random() * 1600,
                Math.random() * 1600 + 50,
                Math.random() * 1600
              ]
            }}

            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}

            className="absolute"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 blur-md bg-white rounded-full w-3 h-3 opacity-70" />

              {/* Star */}
              <div className="w-2 h-2 bg-white rounded-full" />

            </div>

          </motion.div>

        ))}

      </div>



      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <motion.div
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="text-7xl mb-8"
        >
          💖
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-black text-rose-700 drop-shadow-lg"
        >
          Our Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-2xl max-w-4xl leading-relaxed text-rose-900 bg-white/40 backdrop-blur-md p-8 rounded-[40px] shadow-2xl"
        >
          Vishakha,
          <br /><br />
          Somewhere deep in my heart,
          I already know that one day
          you’re going to create the warmest,
          most beautiful home filled with love,
          laughter, tiny footsteps,
          and a future I’ll always cherish with you.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          src="/us1.jpg"
          className="w-80 h-80 object-cover rounded-full mt-16 border-[8px] border-white shadow-[0_0_80px_rgba(255,255,255,0.8)]"
        />

      </section>



      {/* MEMORIES */}
      <section className="px-6 py-24">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-black text-center text-rose-700 mb-20"
        >
          Our Memories
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {["/us1.jpg", "/us2.jpg", "/us3.jpg"].map((img, index) => (
            <motion.img
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 1 : -1
              }}
              src={img}
              className="rounded-[40px] h-[500px] w-full object-cover shadow-2xl border-4 border-white"
            />
          ))}

        </div>

      </section>



      {/* GIRL SECTION */}
      <section className="px-6 py-24 bg-white/30 backdrop-blur-xl rounded-t-[60px]">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-black text-center text-pink-700 mb-8"
        >
          If We Had A Daughter
        </motion.h2>

        <p className="text-center text-2xl text-rose-900 mb-20">
          She’d definitely inherit your beautiful smile and funny questions 
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* DRESS */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,105,180,0.3)]"
          >

            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3RVpJlPLitsx2zBsC4XmZKi531dfBp0lUD0fCgoaCCxUeWtJASJz2pOjO0OmDB3JqsRGyijDDMCaemTqBSqLb2JxURXco3jG9zkiT_ULQ"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-800">
                Floral Baby Dress
              </h3>

              <a
                href="https://www.inayahfashion.com/products/red-button-up-ruffle-top-with-floral-print-skirt-for-girls"
                target="_blank"
                className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                View Product
              </a>

            </div>

          </motion.div>



          {/* HEELS */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,105,180,0.3)]"
          >

            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzI7aJu5RfV2ySjwoDNaHcS-je7GwXbd1yE74CySgacOa8jaqT92ner4pzlcDuVcVlUf-KyFwgJq1VFZhFrYoJn121RuCRlA"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-800">
                Tiny Princess Heels
              </h3>

              <a
                href="https://www.amazon.in/Newborn-Princess-Bowknot-Infant-Photography/dp/B0GSRPKC16"
                target="_blank"
                className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                View Product
              </a>

            </div>

          </motion.div>



          {/* TOY */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,105,180,0.3)]"
          >

            <img
              src="https://images.meesho.com/images/products/238824507/sjl3y_512.webp?width=512"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-800">
                Cute Baby Toy
              </h3>

              <a
                href="https://www.meesho.com/"
                target="_blank"
                className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                View Product
              </a>

            </div>

          </motion.div>

        </div>

      </section>



      {/* BOY SECTION */}
      <section className="px-6 py-24">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-black text-center text-blue-700 mb-8"
        >
          If We Had A Son
        </motion.h2>

        <p className="text-center text-2xl text-blue-900 mb-20">
          He’d probably make a gf and love her more , but still I know you will love him more than me and I don't mind
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Tiny Gentleman Outfit",
              img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3KDGuQBx2mnicATAyIZczmSkVKXwc-dsWB2rFTQWA1WngnMgt-yThh3ucDqlDtWAsc4rMGcT512k1H1XOyj9h51bx6up1XoD7z9MbVeBWz7T29qa-iWbI",
              link: "https://www.amazon.in/s?k=baby+boy+outfit"
            },
            {
              title: "Little Explorer Shoes",
              img: "https://m.media-amazon.com/images/I/51z6xqGUL8L.jpg",
              link: "https://www.amazon.in/s?k=baby+boy+shoes"
            },
            {
              title: "Future Troublemaker Toys",
              img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdVR1NYG-quUdyzA9YCtiLdO4ziqYwCrff7rU4RU2KneW1qFZzaeKwvniTT91wYBUHQ_6OrD-ajXFBye-7uHQ6CvFQt60h",
              link: "https://www.amazon.in/s?k=baby+boy+toys"
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
            >

              <img
                src={item.img}
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
                >
                  View Product
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </section>



      {/* PREGNANCY SECTION */}
      <section className="px-6 py-24 bg-white/30 backdrop-blur-xl rounded-[60px] mx-6 mb-20">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-black text-center text-rose-700 mb-8"
        >
          Taking Care Of You
        </motion.h2>

        <p className="text-center text-2xl text-rose-900 mb-20">
          Because your comfort will always matter to me 💖
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,105,180,0.3)]"
          >

            <img
              src="https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-800">
                Maternity Wear
              </h3>

              <a
                href="https://www.firstcry.com/maternity-wear"
                target="_blank"
                className="inline-block mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                View Product
              </a>

            </div>

          </motion.div>



          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,105,180,0.3)]"
          >

            <img
              src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-800">
                Pregnancy Vitamins
              </h3>

              <a
                href="https://www.apollopharmacy.in/categories/vitamins-and-supplements"
                target="_blank"
                className="inline-block mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                View Product
              </a>

            </div>

          </motion.div>



          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,105,180,0.3)]"
          >

            <img
              src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-gray-800">
                Pregnancy Pillow
              </h3>

              <a
                href="https://www.amazon.in/s?k=pregnancy+pillow"
                target="_blank"
                className="inline-block mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                View Product
              </a>

            </div>

          </motion.div>

        </div>

      </section>



      {/* ENDING */}
      <section className="py-32 px-6 text-center">

        <motion.div
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="text-7xl mb-10"
        >
          💖
        </motion.div>

        <h2 className="text-6xl font-black text-rose-700">
          To Our Future, Vishakha
        </h2>

        <p className="mt-10 text-2xl max-w-4xl mx-auto leading-relaxed text-rose-900 bg-white/40 p-8 rounded-[40px] backdrop-blur-md shadow-xl">
          Every version of my future becomes beautiful
          the moment you’re in it.
        </p>

      </section>

    </main>
  )
}