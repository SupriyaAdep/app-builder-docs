---
sidebar_label: Deploy with Heroku
sidebar_position: 5
description: Deploy using Heroku
title: Deploy using docker
keywords: [heroku, guide]
sidebar_custom_props: { icon: "settings" }
draft: true
---

# Deploying With Heroku

Deploying on Heroku is very easy. You can leverage the Deploy to Heroku button here.

[![Deploy](https://www.herokucdn.com/deploy/button.svg "inline")](https://heroku.com/deploy?template=https://github.com/AgoraIO/app-builder-backend)

It will take you to a page where you can deploy the app on your heroku account. You can choose an app name (Heroku will generate one for you if you leave it blank) as well as enter your credentails.

You can read more about how to get all your credentials [here](/turn-key/guides/backend/Credentials)

You just need to click on the deploy app button and you are all set. Your backend will automatically be configured along with the database using the [Postgres Addon](https://elements.heroku.com/addons/heroku-postgresql)
