import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const OnrampSessionResource = Stripe.StripeResource.extend({
	create: Stripe.StripeResource.method({
		method: 'POST',
		path: 'crypto/onramp_sessions',
	}),
});

const stripe = new Stripe('sk_test_51NXOHdARfU5KPLlVvSdDo9Y0zQXLkfS1vMj3AhYNU8A22W7rprb5YJTCDNfgaQeAl58yzZ8mMa3eBUD3EEWpdZiC00LD2YWcQA', {
  apiVersion: "2022-11-15"
});

export async function OPTIONS() {
	return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
	req: Request,
	{ params }: { params: { storeId: string } }
) {
	const { transaction_details } = await req.json();

	let clientSecret = '';

	const apiKey =
		'sk_test_51NXOHdARfU5KPLlVvSdDo9Y0zQXLkfS1vMj3AhYNU8A22W7rprb5YJTCDNfgaQeAl58yzZ8mMa3eBUD3EEWpdZiC00LD2YWcQA';
	const url = 'https://api.stripe.com/v1/crypto/onramp_sessions';

	const requestData = new URLSearchParams();
	requestData.append('customer_ip_address', '8.8.8.8');
	requestData.append(
		'wallet_addresses[solana]',
		'bufoH37MTiMTNAfBS4VEZ94dCEwMsmeSijD2vZRShuV'
	);
	requestData.append('destination_networks[]', 'solana');
	requestData.append('destination_currencies[]', 'usdc');
	requestData.append('destination_network', 'solana');
	requestData.append('destination_currency', 'usdc');
	requestData.append('destination_amount', '10');
	requestData.append(
		'wallet_addresses[ethereum]',
		'0xB00F0759DbeeF5E543Cc3E3B07A6442F5f3928a2'
	);
	requestData.append('destination_networks[]', 'ethereum');
	requestData.append('destination_currencies[]', 'usdc');
	requestData.append('destination_network', 'ethereum');
	requestData.append('destination_currency', 'usdc');
	requestData.append('destination_amount', '10');

	const headers = {
		Authorization: `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
		'Content-Type': 'application/x-www-form-urlencoded',
	};

	const requestOptions = {
		method: 'POST',
		headers: headers,
		body: requestData,
	};

	await fetch(url, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			clientSecret = data.client_secret;
		})
		.catch((error) => {
			console.error('Error creating onramp session:', error);
		});

	return NextResponse.json(
		{
			clientSecret: clientSecret,
		},
		{
			headers: corsHeaders,
		}
	);
}
