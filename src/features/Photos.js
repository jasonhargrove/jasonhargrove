import { useEffect, useState } from 'react';
function randomBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function Photos() {
  const experimentalLandscape = [3,6,8,10,11,13,14,16,17,18,20,21];
  const max = 22;
  const posmax = 5;
  const rotatemax = 3;
  const path = '/collection/op15b/{x}.jpeg';
  const time = 2000;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(x => {
      setCount(count < max ? count + 1 : 0);
    }, time);
    return () => {
      clearTimeout(timeout);
    }
  }, [count]);
  useEffect(() => {
    for(let i = 0; i <= max; i++) {
      const img = new Image();
      img.src = path.replace(/{x}/, i);
    }
  }, []);
  const src = path.replace(/{x}/, count);
  const className = `jh-photos img-${count} img-pos-${randomBetween(0, posmax)}`
                  + ` img-orientation-${experimentalLandscape.includes(count) ? 'l' : 'p'}`
                  + ` img-rotate-${randomBetween(0, rotatemax)}`;
  return (
    <div className={className}>
      <a href={src} target="_blank" rel="noreferrer">
        <img src={src} alt='Photography by J.Hargrove' />
      </a>
    </div>
  );
}
