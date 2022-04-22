import React, { useEffect } from 'react';

/* Framer Motion */
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { data } from '../../constants';

/* Components */
import { SubHeading, MenuItem } from '../../components';

/* Images */
import menu from '../../assets/images/menu.png';
import menu2 from '../../assets/images/menu2.png';

import './SpecialMenu.css';

const SpecialMenu = () => {

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  const fade = useAnimation();

  useEffect(() => {
    if (inView) {
      fade.start({
        opacity: 1,
      });
    }

    if (!inView) {
      fade.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div ref={ref} className="app__specialMenu-title">
          <SubHeading title="Your daily crumb of sweetness" />
          <h1 className="headtext__cormorant">
            <motion.span
              animate={fade}
            >
              O
            </motion.span>
            <motion.span
              animate={fade}
              transition={{ delay: 0.5 }}
            >
              u
            </motion.span>
            <motion.span
              animate={fade}
              transition={{ delay: 0.55 }}
            >
              r
            </motion.span>

            <motion.span
              className="ml-[10px]"
              animate={fade}
              transition={{ delay: 0.6 }}
            >
              M
            </motion.span>
            <motion.span
              animate={fade}
              transition={{ delay: 0.65 }}
            >
              e
            </motion.span>
            <motion.span
              animate={fade}
              transition={{ delay: 0.7 }}
            >
              n
            </motion.span>
            <motion.span
              animate={fade}
              transition={{ delay: 0.75 }}
            >
              u
            </motion.span>
          </h1>
        </div>

        {/* OG Cookies */}
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine  flex__center">
            <p className="app__specialMenu-menu_heading">OG Cookies</p>
            <div className="app__specialMenu_menu_items">
              {data.ogCookies.map((og, index) => (
                <MenuItem key={og.title + index} title={og.title} price={og.price} tags={og.tags} />
              ))}
            </div>
          </div>

          <div className="app__specialMenu-menu_img">
            <img src={menu} alt="menu__img" />
          </div>

          {/* Red Velvet Series */}
          <div className="app__specialMenu-menu_cocktails  flex__center">
            <p className="app__specialMenu-menu_heading">Red Velvet Series</p>
            <div className="app__specialMenu_menu_items">
              {data.redVelvet.map((rv, index) => (
                <MenuItem key={rv.title + index} title={rv.title} price={rv.price} tags={rv.tags} />
              ))}
            </div>
          </div>
        </div>
        <br /><br />
      </div>

      {/* ============================== */}

      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Your daily crumb of sweetness" />
          <h1 className="headtext__cormorant">
            <span>C</span>
            <span>a</span>
            <span>k</span>
            <span>e</span>
            <span>s</span>

            <span className="ml-[10px]">{"&"}</span>

            <span className="ml-[10px]">S</span>
            <span>p</span>
            <span>e</span>
            <span>c</span>
            <span>i</span>
            <span>a</span>
            <span>l</span>
          </h1>
        </div>

        {/* Cakes */}
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine  flex__center">
            <p className="app__specialMenu-menu_heading">Cakes</p>
            <div className="app__specialMenu_menu_items">
              {data.cakes.map((cake, index) => (
                <MenuItem key={cake.title + index} title={cake.title} price={cake.price} tags={cake.tags} />
              ))}
            </div>
          </div>

          <div className="app__specialMenu-menu_img">
            <img src={menu2} alt="menu__img" />
          </div>

          {/* Specials */}
          <div className="app__specialMenu-menu_cocktails  flex__center">
            <p className="app__specialMenu-menu_heading">Specials</p>
            <div className="app__specialMenu_menu_items">
              {data.specials.map((sp, index) => (
                <MenuItem key={sp.title + index} title={sp.title} price={sp.price} tags={sp.tags} />
              ))}
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </>
  )
};

export default SpecialMenu;
