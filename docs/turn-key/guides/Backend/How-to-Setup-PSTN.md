---
sidebar_label: How to setup PSTN
sidebar_position: 6
description: How to setup PSTN
title: How to setup PSTN
keywords: [pstn, guide]
sidebar_custom_props: { icon: "settings" }
---

# How to Setup PSTN

## Step 1 Sign Up for Turbobridge

You can sign up for a Turbobridge account [here](https://account.turbobridge.com/signup.html?plan=172&createBridgeFlag=0&allowAPIAccessFlag=1).

## Step 2 Login to Dashboard

Go to turbobridge.com and login with your credentials as an Account Administrator. You can access your Account ID from the dashboard

<image alt="PSTN1" className="guide-img" lightImageSrc="guides-be/PSTN1.png" darkImageSrc="guides-be/PSTN1.png" />

## Step 3 Enter Your Credentials

You can enter your credentials in your Console:

<image alt="PSTN2" className="guide-img" lightImageSrc="guides-be/PSTN2.png" darkImageSrc="guides-be/PSTN2.png" />

## Step 4 Change PSTN Number (Optional)

By default, your application will default to using `(800) 309-2350` as the PSTN Number. You can change it to any number supported by Turbobridge.

USA Numbers: https://www.turbobridge.com/local_toll.html

International Numbers (Extra charges may apply): https://www.turbobridge.com/international.html

You can change this by setting the following credential: `PSTN_NUMBER`
