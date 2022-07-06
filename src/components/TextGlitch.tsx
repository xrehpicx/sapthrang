import { motion, MotionStyle } from "framer-motion";
import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

export function TextGlitch({
  text,
  className,
  interval,
  style,
  cycletime,
}: {
  text: string;
  className?: string;
  interval?: number;
  style?: MotionStyle;
  cycletime?: number;
}) {
  const { result, dencrypt } = useDencrypt({ interval: interval || 10 });

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const interv = setInterval(() => {
      dencrypt("x");
      timeout = setTimeout(() => dencrypt(text), interval || 10);
    }, cycletime || 1500);
    return () => {
      clearInterval(interv);
      timeout && clearTimeout(timeout);
    };
  }, [dencrypt, text, interval, cycletime]);
  return (
    <motion.p style={style} className={className}>
      {result || text}
    </motion.p>
  );
}
