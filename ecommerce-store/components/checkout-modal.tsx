'use client';

import Modal from '@/components/ui/modal';
import React, { useState, useEffect } from 'react';
import { loadStripeOnramp } from '@stripe/crypto';

import {
	CryptoElements,
	OnrampElement,
} from './StripeCryptoElements';
import useCheckoutModal from '@/hooks/use-checkout-modal';

// Make sure to call loadStripeOnramp outside of a component’s render to avoid
// recreating the StripeOnramp object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripeOnrampPromise = loadStripeOnramp(
	'pk_test_51NXOHdARfU5KPLlVkKLfC8cLyGoElI4ruwGVRhpKLb49CYPRicAYBj1fPT6VFlQHK8US7tYKhxYqKdErqdY6iNFA00jHYWcJhr'
);


const CheckoutModal = () => {
	const checkoutwModal = useCheckoutModal();
	const [clientSecret, setClientSecret] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		// Fetches an onramp session and captures the client secret
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-onramp-session`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				transaction_details: {
					destination_currency: 'usdc',
					destination_exchange_amount: '13.37',
					destination_network: 'ethereum',
				},
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, []);

	const onChange = React.useCallback(({ session }: any) => {
		setMessage(`OnrampSession is now in ${session.status} state.`);
	}, []);

	return (
		<Modal open={checkoutwModal.isOpen} onClose={checkoutwModal.onClose}>
			<div className='flex flex-col justify-center items-center'>
				<CryptoElements stripeOnramp={stripeOnrampPromise}>
					{clientSecret && (
						<OnrampElement
							id="onramp-element"
							clientSecret={clientSecret}
							appearance={{ theme: 'light' }}
							onChange={onChange}
							className="w-[28vw] m-4"
						/>
					)}
				</CryptoElements>
				{message && <div id="onramp-message">{message}</div>}
			</div>
		</Modal>
	);
};

export default CheckoutModal;
