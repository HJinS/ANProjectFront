import React, { DependencyList, EffectCallback, useEffect, useRef } from 'react';

function useDidMountEffect(effect: EffectCallback, deps?: DependencyList){
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) effect();
		else didMount.current = true;
	}, deps);
};

export default useDidMountEffect;
