# Wireshark_Practical
Use of wireshark to trace the content of packets andtry to retrive paswoord from a website using HTTP encryption

## Captive Portal
We'll be creating a HTTP website, similar to a Captive Portal, and creating another fake access point to capture the password, which could be achieved by SQL, but why not use wireshark.

This project is for eductaional purposes, do not use this in real world scenario (use this only for CN!).

## What are Captive Portal??

Ever visited Starbucks? Railway station(rail-wire WiFi)? or even your college WiFi uses captive portals! Before accessing the internet, you have to authenticate yourself, that is what we are going to do here.

## Requirements?

Any Linux Distro with which you are familiar with. I'm using Kali Linux, debian based Linux distibution. 
**Install hostapd**
**Install dnsmasq**
**Install wireshark**

Also if you can make a website on your own, which uses forms, I would recommend you to do on your own, anyways, I've created some files for this practical, which can be downloaded and you can follow the practical. 


### Steps to follow:
**Enable monitor mode in wireless adapter**

**Configure apache2 server**

**Stop network manager**

**Flush Ip Tables**

**Start dnsmasq with configuration(provided in resources)**

**Start hostapd in background (config in resources)**

**That's all**






### Note for users.
> The scripts file is not actually required. No Javascript is used for checking the password. This has been done, so that it would be easy to analyse the packets.

> Works only for http, for websites using https, and hsts we need to create fake ssl certificate, which we won't be trying here.
