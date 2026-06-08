import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

const WA = "https://wa.me/919885755669?text=Hello%20Apex%20Solutions%2C%20I%20am%20interested%20in%20knowing%20more%20about%20your%20insurance%20plans.%20Please%20guide%20me.";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a href={WA} target="_blank" rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant pulse-ring relative sm:bottom-6 sm:right-6"
        aria-label="WhatsApp">
        <MessageCircle className="relative z-10" />
      </a>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-navy-deep text-gold border border-gold/40 hover:bg-navy sm:bottom-6 sm:left-6"
          aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
