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

**Install apache2**

**Install wireshark**

Start with updating the system.

1.) apt-get update

2.) apt-get install hostapd dnsmasq wireshark apache2


Also if you can make a website on your own, which uses forms, I would recommend you to do on your own, anyways, I've created some files for this practical, which can be downloaded and you can follow the practical. 


### Steps to follow:
**Enable monitor mode in wireless adapter**

**Configure apache2 server**

**Stop network manager**

**Flush Ip Tables**

**Start dnsmasq with configuration(provided in resources)**

**Start hostapd in background (config in resources)**

**That's all**


### Detailed Instructions

1. Enabling Monitor Mode:
    
    #Disable the interface
    
    ifconfig interface-name(wlan0) down    
    
    #Changing the mode from managed to monitor(all cards don't support this, in my case I'll be using AR9271)
    
    iwconfig interface-name mode monitor
    
    #Enabling the interface
    
    ifconfig interface-name up
    
2. Configuring apache2 server:
    
    Place the html index files in /var/www/html/
    
    #Starting the apache server, so that website can be accessed by local looback address for now
    
    systemctl start apache2
    
3. Stop the network manager:

    #Make sure you are not connected to any WiFi network:
    
    systemctl stop network-manager






### Note for users.
> The scripts file is not actually required. No Javascript is used for checking the password. This has been done, so that it would be easy to analyse the packets.

> Works only for http, for websites using https, and hsts we need to create fake ssl certificate, which we won't be trying here.
