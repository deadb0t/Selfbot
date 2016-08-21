# Selfbot
A Selfbot for Discord
<br>
<h3>What is this?</h3>
Discord's mobile client is a bit lacking on server moderation so this adds some more functionality there.<br>

<h2>Setup</h2>
I will be showing how to set it up on an Android device, using Termux.<br>
<h3>What you will need:</h3>
A Computer<br>
An Android Phone<br>
Some way to transfer files between the two<br>
<h3>Getting your token</h3>
<b>WARNING: DO NOT SHARE YOUR TOKEN WITH ANYONE. IT WILL ALLOW PEOPLE TO SEND MESSAGES, DELETE SERVERS, AND HAVE ALMOST FULL ACCOUNT CONTROL</b><br>
Open your Discord client on your computer.<br>
If you are on Windows press: `Ctrl + Shift + I`<br>
If you are on Mac OS press: `Command + Shift + I`<br>
You should see the Electron inspector appear on the side of the screen.<br>
<img src="http://i.imgur.com/ojUepNj.png"><br>
You are going to want to click the `»` then click `Application`.<br>
You will see somthing like this:<br>
<img src="http://i.imgur.com/DQqct6i.png">
Click `Local Storage`, then `https://discordapp.com`. There should be a list.<br>
You want to get your token.<br>
<img src="http://i.imgur.com/oafsCTe.png"><br>
Copy this over to your Android device in any way you want.

<h3>Woah Termux!</h3>
Termux is a terminal emulator for android. You want to go [here](https://play.google.com/store/apps/details?id=com.termux&hl=en) to get it.<br>
Download and install Termux, and open it.<br><br>
<b>Installing Dependencies</b><br>
Run the following commands:<br>
`apt update` to update the package list.<br>
`apt install git` to install the git client.<br>
`apt install nano` to install the nano editor.<br>
`apt install nodejs` to install Node.JS.<br>
`npm install abalabahaha/eris` to install Eris.<br><br>
<b>Installing the Selfbot</b><br>
`git clone https://github.com/SplitPixl/Selfbot/` to clone this repo.<br>
You now have this repo cloned into Termux.<br>
`cd Selfbot` to move into the Selfbot folder.<br>
`nano config.json` to edit the config<br>
Remember that token you copied earlier? Paste it in the config next to`"token":`<br>
<img src="http://i.imgur.com/d3YiQVf.png"><br>
Don't forget to put it in quotes.<br>
You can also change the command prefix to whatever you want.
Now to exit, push `Volume Up + X`, then `y`, then `y` again to exit Nano.<br>
<br>
Now after all this, you should be ready to test your selfbot.<br>
Run the command: `node selfbot.js` to start it. If everything has gone well, you should see<br>
`Ready As: username`<br>
If you see this, go into Discord and type `>+help`. You should see the help menu appear.<br>

