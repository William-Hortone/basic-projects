import "./websites.css";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const Websites = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -windowHeight]);
  const s = useTransform(scrollYProgress, [0, 1], [0, windowHeight / 1]);
  const p = useTransform(scrollYProgress, [0, 1], [0, -windowHeight / 2]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   const element = elementRef.current;
  //   // const rightElement = rightElementRef.current;

  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     const elementOffsetTop = element.offsetTop;
  //     const elementHeight = element.offsetHeight;

  //     // const rightElementOffsetTop = rightElement.offsetTop;
  //     // const rightElementHeight = rightElement.offsetHeight;

  //     if (
  //       scrollTop >
  //       elementOffsetTop - window.innerHeight + elementHeight / 2
  //     ) {
  //       element.classList.add("animated");
  //     } else {
  //       element.classList.remove("animated");
  //     }
  //     // if (
  //     //   scrollTop >
  //     //   rightElementOffsetTop - window.innerHeight + rightElementHeight / 2
  //     // ) {
  //     //   rightElement.classList.add("animated");
  //     // } else {
  //     //   rightElement.classList.remove("animated");
  //     // }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div ref={container} className="important-web">
      <a
        className="important-web-section"
        href="https://www.williamhortone.com"
        target="blank"
      >
        <motion.div
          style={{ y: s }}
          className="container-contents first-container"
        >
          <div className="important-web-section-box">
            <img src={images.passport} alt="Slide 1" />
            <div className="web-section-desc">
              <h4>Renouvellement de passeport</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.passport} alt="Slide 1" />
            <div className="web-section-desc">
              <h4>Renouvellement de passeport</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.passport} alt="Slide 1" />
            <div className="web-section-desc">
              <h4>Renouvellement de passeport</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.passport} alt="Slide 1" />
            <div className="web-section-desc">
              <h4>Renouvellement de passeport</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.passport} alt="Slide 1" />
            <div className="web-section-desc">
              <h4>Renouvellement de passeport</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.passport} alt="Slide 1" />
            <div className="web-section-desc">
              <h4>Renouvellement de passeport</h4>
            </div>
          </div>
        </motion.div>
      </a>
      <a
        className="important-web-section"
        href="https://www.example.com/website2"
        target="blank"
      >
        <motion.div
          style={{ y: p }}
          className="container-contents second-content"
        >
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.anbg} alt="Slide 2" />
            <div className="web-section-desc">
              <h4>Agence nationnal des bourse du gabon</h4>
            </div>
          </div>
        </motion.div>
      </a>

      <a
        className="important-web-section"
        href="https://www.example.com/website3"
        target="blank"
      >
        <motion.div style={{ y }} className="container-contents content-three">
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
          <div className="important-web-section-box">
            <img src={images.flag} alt="Slide 3" />
            <div className="web-section-desc">
              <h4>Ambassade du Gabon en Chine</h4>
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default Websites;
