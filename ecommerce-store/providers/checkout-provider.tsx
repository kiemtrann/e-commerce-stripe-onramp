'use client';

import { useEffect, useState } from 'react';

import CheckoutModal from '@/components/checkout-modal';

const CheckoutProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<CheckoutModal />
		</>
	);
};

export default CheckoutProvider;
