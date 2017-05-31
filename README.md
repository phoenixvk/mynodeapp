# mynodeapp

MEAN JS application demo and deployment
 
1.Create an account with Digital Ocean from https://m.do.co/c/9999319e5790.
2.Create droplet
3.Use one click app use docker 512MB with pre installed docker and systemd in VM
4.Digital Ocean provides 10USD credit that you can use VM for 2 months without any cost.
5.Create Virtutal Machine
6.If you already have SSH keys set up, you should see a file called id_rsa.pub. (If there’s a file ending in .pub, it’s very likely an SSH key.)
7.Put SSH key in digitalocean console
8.Now fire command    ssh root@YOUR_PUBLIC_IP of droplet
9.Add User and make user security however you want.
10.Add SSH security from sudo nano /etc/ssh/sshd_config
Some common tactics
Find PermitRootLogin yes and change it to PermitRootLogin no
Find #PasswordAuthentication yes and change it to PasswordAuthentication no
11. Finally restart SSH service : sudo systemctl reload sshd
 
12.
 
# Enable OpenSSH connections
 sudo ufw allow OpenSSH 	//FOR SSH
 
# Enable HTTP traffic 
sudo ufw allow http 		//FOR http
 
# Enable HTTPS traffic
 sudo ufw allow https 	           //FOR SSL
 
# Turn the firewall on 
sudo ufw enable		//enable ufw
 
13.Use   sudo ufw status
For checking ufw Status.
 
14.Install git using : sudo apt-get install git
 
15.Set up node js 
Use following commands
 
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs
16. Install MongoDB using following commands
 
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get install -y mongodb-org
sudo nano /etc/systemd/system/mongodb.service
Now paste this script
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target


6. Restart SystemCtl service and enable it.
sudo systemctl start mongodb
sudo systemctl status mongodb
 
17. Clone git project from https://github.com/phoenixvk/mynodeapp.git .
Using command
 
 git clone https://github.com/phoenixvk/mynodeapp.git 
 
18.Install Dependencies -- npm install 
 
19.Test using node server/server.js
 
20. Curl localhost:portno/api/products check output
21.Start Your App Using a Process Manager
22.Then install Pm2 Process manager (This don’t need docker but it works moreover like docker)-- sudo npm install -g pm2 
pm2 start
23.pm2 start server/server.js
24.to access it publically use ufw allow portno
 
 
