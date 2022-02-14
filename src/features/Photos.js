import { useEffect, useState } from 'react';
export function Photos() {
	const max = 21;
	const path = '/collection/op15b/{x}.jpeg';
	const [count, setCount] = useState(0);
	useEffect(() => {
		setTimeout(x => {
			setCount(count < max ? count + 1 : 0);
		}, 2000)
	}, [count]);
	const src = path.replace(/{x}/, count);
  return (
  	<div className={`jh-photos img-${count}`}>
  	  <a href={src} target="_blank">
	  	  <img src={src} />
  	  </a>
  	</div>
  );
}
