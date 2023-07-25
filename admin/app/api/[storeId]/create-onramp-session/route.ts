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

	// Create an OnrampSession with the order amount and currency
	const onrampSession = (await new OnrampSessionResource(stripe).create({
		transaction_details: {
			destination_currency: transaction_details['destination_currency'],
			destination_exchange_amount:
				transaction_details['destination_exchane_amount'],
			destination_network: transaction_details['destination_network'],
		},
		customer_ip_address: '8.8.8.8',
	})) as any;

	return NextResponse.json(
		{ clientSecret: onrampSession.client_secret },
		{
			headers: corsHeaders,
		}
	);
}
