"use client"

import { motion } from "framer-motion"

export default function Home() {

  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 1400,
    duration: 12 + Math.random() * 15,
    delay: Math.random() * 5
  }))

  const hearts = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    x: Math.random() * 1400,
    duration: 14 + Math.random() * 10,
    delay: Math.random() * 8
  }))

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200 min-h-screen transform-gpu">

      {/* 🌌 BACKGROUND AURORA */}
      <div className="fixed inset-0 -z-20 overflow-hidden">

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-pink-300/40 blur-[140px] rounded-full top-[-200px] left-[-200px]"
        />

        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-rose-400/30 blur-[160px] rounded-full bottom-[-200px] right-[-200px]"
        />

      </div>

      {/* ✨ STARS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            initial={{ y: "110vh", x: s.x, opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "linear",
              delay: s.delay
            }}
            className="absolute"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
          </motion.div>
        ))}
      </div>

      {/* 💖 HEARTS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: "120vh", x: h.x, opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: h.duration,
              repeat: Infinity,
              ease: "linear",
              delay: h.delay
            }}
            className="absolute text-pink-400 text-xl"
          >
            💗
          </motion.div>
        ))}
      </div>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

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
          Somewhere deep in my heart, I already know that one day
          you’re going to create the warmest, most beautiful home
          filled with love, laughter, tiny footsteps, and a future
          I’ll always cherish with you.
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
          {["/us1.jpg", "/us2.jpg", "/us3.jpg"].map((img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 ? -1 : 1 }}
              src={img}
              className="rounded-[40px] h-[500px] w-full object-cover shadow-2xl border border-white hover:shadow-[0_30px_80px_rgba(255,105,180,0.4)] transition duration-700"
            />
          ))}
        </div>

      </section>

      {/* ================= GIRL ================= */}
      <section className="px-6 py-24 bg-white/30 backdrop-blur-xl rounded-t-[60px]">

        <h2 className="text-6xl font-black text-center text-pink-700 mb-8">
          If We Had A Daughter
        </h2>

        <p className="text-center text-2xl text-rose-900 mb-20">
          She’d inherit your smile and curiosity
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CLOTHES */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3RVpJlPLitsx2zBsC4XmZKi531dfBp0lUD0fCgoaCCxUeWtJASJz2pOjO0OmDB3JqsRGyijDDMCaemTqBSqLb2JxURXco3jG9zkiT_ULQ"
              className="h-80 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold">Floral Baby Dress</h3>
            </div>
          </div>

          {/* HEELS */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzI7aJu5RfV2ySjwoDNaHcS-je7GwXbd1yE74CySgacOa8jaqT92ner4pzlcDuVcVlUf-KyFwgJq1VFZhFrYoJn121RuCRlA"
              className="h-80 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold">Tiny Princess Heels</h3>
            </div>
          </div>

          {/* TOY */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.meesho.com/images/products/238824507/sjl3y_512.webp"
              className="h-80 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold">Cute Baby Toy</h3>
            </div>
          </div>

        </div>
      </section>

      {/* ================= BOY ================= */}
      <section className="px-6 py-24">

        <h2 className="text-6xl font-black text-center text-blue-700 mb-8">
          If We Had A Son
        </h2>

        <p className="text-center text-2xl text-blue-900 mb-20">
          He’d probably be your little troublemaker
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Tiny Gentleman Outfit",
              img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3KDGuQBx2mnicATAyIZczmSkVKXwc-dsWB2rFTQWA1WngnMgt-yThh3ucDqlDtWAsc4rMGcT512k1H1XOyj9h51bx6up1XoD7z9MbVeBWz7T29qa-iWbI"
            },
            {
              title: "Little Explorer Shoes",
              img: "https://m.media-amazon.com/images/I/51z6xqGUL8L.jpg"
            },
            {
              title: "Future Troublemaker Toys",
              img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdVR1NYG-quUdyzA9YCtiLdO4ziqYwCrff7rU4RU2KneW1qFZzaeKwvniTT91wYBUHQ_6OrD-ajXFBye-7uHQ6CvFQt60h"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
              <img src={item.img} className="h-80 w-full object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* ================= PREGNANCY ================= */}
      <section className="px-6 py-24 bg-white/30 backdrop-blur-xl rounded-[60px] mx-6 mb-20">

        <h2 className="text-6xl font-black text-center text-rose-700 mb-8">
          Taking Care Of You
        </h2>

        <p className="text-center text-2xl text-rose-900 mb-20">
          Because your comfort will always matter to me 💖
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg" className="h-80 w-full object-cover" />
            <div className="p-8"><h3 className="text-3xl font-bold">Maternity Wear</h3></div>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg" className="h-80 w-full object-cover" />
            <div className="p-8"><h3 className="text-3xl font-bold">Pregnancy Vitamins</h3></div>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg" className="h-80 w-full object-cover" />
            <div className="p-8"><h3 className="text-3xl font-bold">Pregnancy Pillow</h3></div>
          </div>

        </div>

      </section>

      {/* ================= END ================= */}
      <section className="py-32 px-6 text-center">

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