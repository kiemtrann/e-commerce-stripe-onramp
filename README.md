<div align="center">
  <a href="https://e-commerce-stripe-onramp-mxiw.vercel.app/">
    <img src="https://res.cloudinary.com/dqsnc3tw8/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1690354617/Screen_Shot_2023-07-26_at_13.56.03_o8kifh.jpg?_s=public-apps" alt="GitHub Readme Tech Stack" />
  </a>
</div>

<div align="center">
  E-Commerce that Accepts USDC is a marketplace platform designed for selling products. It provides a user-friendly interface for creators and businesses to monetize their digital content by offering it for sale to a wider audience. Store empowers content creators to showcase their work and connect with potential buyers, while providing a seamless purchasing experience for customers.
  <p></p>
  <p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" target="_blank">
    <img alt="contributors" src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" />
  </a>
  <a href="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" target="_blank">
    <img alt="contributors" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://twitter.com/kiemTran_dev" target="_blank">
    <img alt="Twitter: kiemTran\_dev" src="https://img.shields.io/twitter/follow/kiemTran\_dev.svg?style=social" />
  </a>
</p>
</div>

<hr>

## 🐧 Demo
[Admin web](https://e-commerce-stripe-onramp-admin.vercel.app/)
- 
[Client web](https://e-commerce-stripe-onramp-client.vercel.app/category/7d90de6a-bcf2-4cad-87a1-873124efa9a6)
-
[Video demo](https://www.veed.io/embed/0afad1d8-0bc1-4ccb-bd4d-cc849897f806)
-
![Alt Text](https://res.cloudinary.com/drh6sa2x5/image/upload/v1692380400/Screencast_from_19-08-2023_00_34_25_zouo7e.gif)

![Alt Text](https://res.cloudinary.com/drh6sa2x5/image/upload/v1692775226/ezgif.com-video-to-gif_z2ofvp.gif)

<hr>

## ⚡ Getting Started

<p>Admin</p>
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/VanKiem-Tran/e-commerce-stripe-onramp.git
```

```shell
cd admin
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

<hr>
<p>E-commerce Store</p>
## MAKE SURE YOU HAVE ADMIN SETUP FIRST!
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/VanKiem-Tran/e-commerce-stripe-onramp.git
```

```shell
cd ecommerce-store
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_API_URL=
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |



<hr>

## 👉 Features

 - **User Interface (UI)**: The admin dashboard and web user will be built using Shadcn UI, providing a modern and intuitive user interface for easy navigation and management of the CMS.

 - **CMS, Admin, and API Functionality**: The admin dashboard will serve as a comprehensive solution by combining content management system (CMS), administrative tasks, and API generation capabilities in one platform.

 - **Multi-Vendor/Store Management**: With this CMS, you can efficiently manage multiple vendors or stores within a single interface. For example, you can have separate sections for a "Shoe store," "Laptop store," and "Suit store." Each store's data will be organized individually with dedicated API routes generated automatically.

 - **Category Management**: You can create, update, and delete categories to organize your products effectively. This feature allows for easy categorization of items based on their types or attributes.

 - **Product Management**: Easily handle product-related tasks such as creating new products, updating existing ones with details like name, description, price etc., as well as deleting products when necessary.

 - **Image Uploads & Customization**: Users can upload multiple images per product and change them whenever required to showcase different views or variants of the item.

 - **Filter Creation & Integration:**: Create custom filters such as "Color" or "Size" that align with your specific product attributes. These filters can then be seamlessly integrated into the product creation form for efficient matching during search queries.

 - **Comprehensive Search Functionality**: A powerful search feature allows users to explore through all categories along with their associated products' sizes/colors/billboards. The search results are presented with pagination for easy navigation.

 - **Featured Products**: Highlight specific products by marking them as "featured" so that they appear on the homepage or other prominent sections of your website, increasing their visibility to potential customers.

 - **Order Management**: Access and track all orders placed through the system, providing a comprehensive overview of sales and customer transactions.

 - **Revenue Analytics**: Visualize revenue data through graphs and charts, enabling you to analyze sales performance over time and make informed business decisions based on this information.

 - **Stripe Checkout Integration with USDC**: Seamlessly integrate with Stripe Checkout, a popular payment gateway, to enable smooth and secure online transactions for your customers. Users can easily make payments using various payment methods supported by Stripe.

 - **MySQL + Prisma + PlanetScale**: Utilize MySQL as the database management system along with Prisma ORM (Object-Relational Mapping) for efficient data modeling and querying capabilities. Leverage PlanetScale's distributed SQL database platform for scalability and high availability of your data storage infrastructure.

<hr>

## 🔧 Technologies Used

The project utilizes the following technologies and dependencies:

- **stripe/crypto** The Stripe fiat-to-crypto onramp enables individuals to securely purchase cryptocurrencies directly from your platform or Dapp at the time of checkout. The onramp is fully customizable and you can integrate it into your product or service. Stripe acts as the merchant of record for these onramp transactions and takes full liability for all fraud and disputes. Stripe also handles all regulatory requirements, know your customer (KYC) verifications, and sanctions screening. Customers have the option of saving payment methods, KYC data, and wallet information with Stripe, which makes the returning onramp experience much faster.

- **Next 13 (App Router)** The version 13 of Next.js, which includes the new App Router feature for client-side navigation within the application. This allows for smoother transitions between pages without full page reloads.

- **Tailwind CSS** A highly customizable CSS framework that offers utility classes for rapid UI development.

- **Prisma** An open-source database toolkit that simplifies database access with its type-safe query builder, schema migrations, and data modeling features.

- **TypeScript** A statically typed superset of JavaScript that helps catch errors during development and improves code maintainability.

- **MySQL** An open-source relational database management system used to store structured data efficiently.

- **@clerk/nextjs** Clerk is a user authentication and identity management solution. The "@clerk/nextjs" package provides integration with Next.js, allowing you to easily implement authentication features like login, logout, and role-based access control in your application.

- **recharts** Recharts is a charting library for React that offers a wide range of customizable charts such as line charts, bar charts, pie charts, etc. It allows you to visualize data in an interactive and visually appealing way.

- **zustand** Zustand is a state management library for React applications that offers a lightweight yet powerful alternative to Redux or MobX by leveraging hooks and functional programming concepts.

<hr>

## How Stripe fiat-to-crypto onramp is being used

In the Store website, the **Stripe fiat-to-crypto onramp** is utilized to facilitate the payment process and enable seamless transactions for purchasing digital content.

- Install the SDK and client library..

- Generate a crypto onramp session on your backend.

- Render the onramp UI on your website.

- View your integration’s usage on the Stripe Dashboard.

1. Install the SDK and client library

```sh
npm install --save @stripe/stripe-js @stripe/crypto
```

2. Create checkout modal Store

```sh
# checkout-modal.tsx
'use client';

import Modal from '@/components/ui/modal';
import React, { useState, useEffect } from 'react';
import { loadStripeOnramp } from '@stripe/crypto';

import {
	CryptoElements,
	OnrampElement,
} from './StripeCryptoElements';
import useCheckoutModal from '@/hooks/use-checkout-modal';

const stripeOnrampPromise = loadStripeOnramp(
	'YOUR_PRIVATE_KEY'
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

```

3. Create Stripe Crypto Elements
```
import React from 'react';

// ReactContext to simplify access of StripeOnramp object
const CryptoElementsContext = React.createContext(null);
CryptoElementsContext.displayName = 'CryptoElementsContext';

export const CryptoElements = ({ stripeOnramp, children }: any) => {
	const [ctx, setContext] = React.useState(() => ({
		onramp: null,
	}));

	React.useEffect(() => {
		let isMounted = true;

		Promise.resolve(stripeOnramp).then((onramp) => {
			if (onramp && isMounted) {
				setContext((ctx) => (ctx.onramp ? ctx : { onramp }));
			}
		});

		return () => {
			isMounted = false;
		};
	}, [stripeOnramp]);

	return (
		<CryptoElementsContext.Provider value={ctx as any}>
			{children}
		</CryptoElementsContext.Provider>
	);
};

export const useStripeOnramp = () => {
	const context = React.useContext(CryptoElementsContext) as any;
	return context?.onramp;
};

const useOnrampSessionListener = (type: any, session: any, callback: any) => {
	React.useEffect(() => {
		if (session && callback) {
			const listener = (e: { payload: any; }) => callback(e.payload);
			session.addEventListener(type, listener);
			return () => {
				session.removeEventListener(type, listener);
			};
		}
		return () => {};
	}, [session, callback, type]);
};

export const OnrampElement = ({
	clientSecret,
	appearance,
	onReady,
	onChange,
	...props
}: any) => {
	const stripeOnramp = useStripeOnramp();
	const onrampElementRef = React.useRef(null);
	const [session, setSession] = React.useState();

	const appearanceJSON = JSON.stringify(appearance);
	React.useEffect(() => {
		const containerRef = onrampElementRef.current as any;
		if (containerRef) {
			containerRef.innerHTML = '';

			if (clientSecret && stripeOnramp) {
				setSession(
					stripeOnramp
						.createSession({
							clientSecret,
							appearance: appearanceJSON ? JSON.parse(appearanceJSON) : {},
						})
						.mount(containerRef)
				);
			}
		}
	}, [appearanceJSON, clientSecret, stripeOnramp]);

	useOnrampSessionListener('onramp_ui_loaded', session, onReady);
	useOnrampSessionListener('onramp_session_updated', session, onChange);

	return <div {...props} ref={onrampElementRef}></div>;
};
```

4. Create Onramp Session on Admin
```
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

const stripe = new Stripe('YOUR_SECRECT_KEY', {
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
		'YOUR_API_KEY';
	const url = 'https://api.stripe.com/v1/crypto/onramp_sessions';

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
```

=> Example config USDC 

```
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
```

After running the script, the onramp renders the following:

 ![Alt Text](https://res.cloudinary.com/drh6sa2x5/image/upload/v1692775226/ezgif.com-video-to-gif_z2ofvp.gif)

5. View your integration's usage on the Stripe Dashboard: https://stripe.com/docs/crypto

After you’ve launched the Crypto Onramp, you can view customized usage reports in the Stripe Dashboard.

<hr>

## 🧑‍🤝‍🧑 Contribution 

Contributions to repository are welcome!

If you would like to contribute to the project, please follow these steps:

```sh
Fork the repository.

Create a new branch for your feature or bug fix: git checkout -b my-feature.

Make your changes and commit them: git commit -m "Add my feature".

Push to the branch: git push origin my-feature.

Open a pull request in the main repository.

Please ensure that your code follows the project's coding style and conventions.

Additionally, write clear commit messages and provide a detailed description in your pull request to facilitate the review process.
```

<hr>

## ©️ License 

The e-commerce project is licensed under the MIT License. You are free to use, modify, and distribute the codebase in accordance with the terms and conditions of the license.

<hr>

## ☎️ Contact  

If you have any questions, suggestions, or feedback regarding E-Commerce that Accepts USDC, feel free to contact us at `kiemtran.dev@gmail.com`. I appreciate your interest in the project and will get back to you as soon as possible.

Thank you for your interest in E-Commerce that Accepts USDC. I hope you find the platform useful for selling and monetizing your digital content. Happy selling!
