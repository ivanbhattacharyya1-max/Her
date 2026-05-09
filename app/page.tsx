"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200 min-h-screen">

      {/* 🌌 BREATHING AURORA BACKGROUND (FIXED) */}
      <div className="fixed inset-0 -z-20 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity
          }}
          className="absolute w-[600px] h-[600px] bg-pink-300/40 blur-[140px] rounded-full top-[-200px] left-[-200px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity
          }}
          className="absolute w-[500px] h-[500px] bg-rose-400/30 blur-[160px] rounded-full bottom-[-200px] right-[-200px]"
        />

        <div className="absolute w-[400px] h-[400px] bg-purple-300/30 blur-[140px] rounded-full top-[40%] left-[60%] animate-pulse" />

        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* ✨ FIXED STAR SYSTEM */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110vh",
              x: Math.random() * 1600,
              opacity: 0
            }}
            animate={{
              y: "-20vh",
              x: [
                Math.random() * 1600,
                Math.random() * 1600,
                Math.random() * 1600
              ],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
            className="absolute will-change-transform"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-lg bg-white rounded-full w-2 h-2 opacity-60" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💖 FIXED HEART SYSTEM */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "120vh",
              x: Math.random() * 1200,
              opacity: 0
            }}
            animate={{
              y: "-20vh",
              x: [
                Math.random() * 1200,
                Math.random() * 1200,
                Math.random() * 1200
              ],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 18 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
            className="absolute text-pink-400 text-xl"
          >
            💗
          </motion.div>
        ))}
      </div>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl mb-8"
        >
          💖
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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

      {/* ================= MEMORIES ================= */}
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
              className="rounded-[40px] h-[500px] w-full object-cover shadow-2xl border border-white hover:shadow-[0_30px_80px_rgba(255,105,180,0.4)] transition duration-700"
            />
          ))}

        </div>

      </section>

      {/* ================= GIRL SECTION ================= */}
      <section className="px-6 py-24 bg-white/30 backdrop-blur-xl rounded-t-[60px]">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-black text-center text-pink-700 mb-8"
        >
          If We Had A Daughter
        </motion.h2>

        <p className="text-center text-2xl text-rose-900 mb-20">
          She’d inherit your beautiful smile and curiosity
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Floral Baby Dress",
              img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3RVpJlPLitsx2zBsC4XmZKi531dfBp0lUD0fCgoaCCxUeWtJASJz2pOjO0OmDB3JqsRGyijDDMCaemTqBSqLb2JxURXco3jG9zkiT_ULQ",
              link: "https://www.inayahfashion.com/products/red-button-up-ruffle-top-with-floral-print-skirt-for-girls"
            },
            {
              title: "Tiny Princess Heels",
              img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzI7aJu5RfV2ySjwoDNaHcS-je7GwXbd1yE74CySgacOa8jaqT92ner4pzlcDuVcVlUf-KyFwgJq1VFZhFrYoJn121RuCRlA",
              link: "https://www.amazon.in/Newborn-Princess-Bowknot-Infant-Photography/dp/B0GSRPKC16"
            },
            {
              title: "Cute Baby Toy",
              img: "https://images.meesho.com/images/products/238824507/sjl3y_512.webp?width=512",
              link: "https://www.meesho.com/"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img src={item.img} className="h-80 w-full object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full"
                >
                  View Product
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= BOY SECTION ================= */}
      <section className="px-6 py-24">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-black text-center text-blue-700 mb-8"
        >
          If We Had A Son
        </motion.h2>

        <p className="text-center text-2xl text-blue-900 mb-20">
          A little troublemaker with your heart
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Tiny Gentleman Outfit",
              img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3KDGuQBx2mnicATAyIZczmSkVKXwc-dsWB2rFTQWA1WngnMgt-yThh3ucDqlDtWAsc4rMGcT512k1H1XOyj9h51bx6up1XoD7z9MbVeBWz7T29qa-iWbI",
              link: "https://www.amazon.in/s?k=baby+boy+outfit"
            },
            {
              title: "Explorer Shoes",
              img: "https://m.media-amazon.com/images/I/51z6xqGUL8L.jpg",
              link: "https://www.amazon.in/s?k=baby+boy+shoes"
            },
            {
              title: "Troublemaker Toys",
              img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdVR1NYG-quUdyzA9YCtiLdO4ziqYwCrff7rU4RU2KneW1qFZzaeKwvniTT91wYBUHQ_6OrD-ajXFBye-7uHQ6CvFQt60h",
              link: "https://www.amazon.in/s?k=baby+boy+toys"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img src={item.img} className="h-80 w-full object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full"
                >
                  View Product
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= ENDING ================= */}
      <section className="py-32 px-6 text-center">

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl mb-10"
        >
          💖
        </motion.div>

        <h2 className="text-6xl font-black text-rose-700">
          To Our Future, Vishakha
        </h2>

        <p className="mt-10 text-2xl max-w-4xl mx-auto text-rose-900 bg-white/40 p-8 rounded-[40px] backdrop-blur-md shadow-xl">
          Every version of my future becomes beautiful the moment you’re in it.
        </p>

      </section>

    </main>
  )
}