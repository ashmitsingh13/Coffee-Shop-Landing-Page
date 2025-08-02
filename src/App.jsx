import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main className='bg-[url("/src/assets/bg-slate.png")] bg-cover bg-center bg-no-repeat overflow-hidden w-full h-screen'>
      <section className="min-h-screen w-full ">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
            <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
              <div className="text-4xl font-bold text-[#f19509]">MOMINTO</div>
            </div>
          </nav> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            <div className="text-[#f1dabf] mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1 initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness:100,damping:10, delay:1}} className=" text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </motion.h1>
              <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness:100,damping:10, delay:1}} className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam explicabo quo error blanditiis, quasi eos excepturi
                    eius reiciendis odio ullam temporibus dolores reprehenderit
                    a laudantium natus
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
              initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring",stiffness:100,damping:10, delay:0.4}}
                src="/src/assets/black.png"
                alt="BlackCoffee"
                className=" relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring",stiffness:100,damping:10, delay:0.4}} className="h-[180px] w-[180px] absolute top-24 -right-16 border-[#f19509] border-[20px] rounded-full z-10"></motion.div>
              <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{type:"spring",stiffness:100,damping:10, delay:0.8}} className="absolute -top-20 left-[200px] z-[1]">
              <h1 className="text-[140px] scale-150 font-bold text-[#1a1f25]/40 leading-none">Blvck Tumbler</h1>
              </motion.div>
            </div>
            <div className="text-[#f1dabf] mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness:100,damping:10, delay:1}} className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">The Design,</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam explicabo quo error blanditiis, quasi eos excepturi
                    eius reiciendis odio ullam temporibus dolores reprehenderit
                    a laudantium natus
                  </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-gray-900/50"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
