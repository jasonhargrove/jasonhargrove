import { useEffect, useState } from 'react';
function randomBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function Photos() {
  const experimentalLandscape = [3,6,8,10,11,13,14,16,17,18,20,21];
  const max = 21;
  const posmax = 5;
  const path = '/collection/op15b/{x}.jpeg';
  const time = 2000;
  const [count, setCount] = useState(0);  useEffect(() => {
    setTimeout(x => {
      setCount(count < max ? count + 1 : 0);
    }, time);
  }, [count]);
  const src = path.replace(/{x}/, count);
  const className = `jh-photos img-${count} img-pos-${randomBetween(0,posmax)}`
                  + ` img-orientation-${experimentalLandscape.includes(count) ? 'l' : 'p'}`;
  return (
    <div className={className}>
      <a href={src} target="_blank" rel="noreferrer">
        <img src={src} alt='Photography by J.Hargrove' />
      </a>
    </div>
  );
}
