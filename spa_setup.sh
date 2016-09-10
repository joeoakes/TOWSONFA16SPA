#!/bin/bash

sudo apt-get update

#--- install git if it is not installed ---
sudo dpkg-query -l git
if [ "$?" = "1" ]; then
  sudo apt-get install git
  if [ "$?" = "1" ]; then
    echo "Cannot install git" 1>&2
    exit 1
  fi
fi

#--- install brackets editor it is not installed ---
sudo dpkg-query -l brackets
if [ "$?" = "1" ]; then
  sudo add-apt-repository ppa:webupd8team/brackets
  sudo apt-get update
  sudo apt-get install brackets 
  if [ "$?" = "1" ]; then
    echo "Cannot install brackets" 1>&2
    exit 1
  fi
fi

#--- install nodejs if it is not installed ---
sudo dpkg-query -l nodejs
if [ "$?" = "1" ]; then
  sudo apt-get install -y nodejs
  if [ "$?" = "1" ]; then
    echo "Cannot install nodejs" 1>&2
    exit 1
  fi
fi

#--- install node package manager if it is not installed ---
sudo dpkg-query -l npm
if [ "$?" = "1" ]; then
  sudo apt-get install npm
  if [ "$?" = "1" ]; then
    echo "Cannot install npm" 1>&2
    exit 1
  fi
fi

#--- install express if it is not installed ---
sudo npm install -g express-generator
if [ "$?" = "1" ]; then
    echo "Cannot install express" 1>&2
    exit 1
fi

#--- install mongodb if it is not installed ---
sudo dpkg-query -l mongodb-org
if [ "$?" = "1" ]; then
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
  echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  sudo apt-get update
  sudo apt-get install -y mongodb-org
  if [ "$?" = "1" ]; then
    echo "Cannot install mongodb-org" 1>&2
    exit 1
  fi
fi

#--- create the mongo service file ----
sudo touch /lib/systemd/system/mongod.service
if [ "$?" = "1" ]; then
    echo "Cannot create the mongod.service file" 1>&2
    exit 1
else
    echo "[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target
Documentation=https://docs.mongodb.org/manual

[Service]
User=mongodb
Group=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target" >> /lib/systemd/system/mongod.service
fi

#--- update and start the mongo service file ----
sudo systemctl daemon-reload
if [ "$?" = "1" ]; then
    echo "Cannot reload the systemctl daemon" 1>&2
    exit 1
fi

#--- start the mongod service ---
sudo systemctl start mongod
if [ "$?" = "1" ]; then
    echo "Cannot start mongod" 1>&2
    exit 1
fi

sudo systemctl enable mongod
if [ "$?" = "1" ]; then
    echo "Cannot enable mongod" 1>&2
    exit 1
fi

sudo netstat -an | grep 27017
if [ "$?" = "1" ]; then
    echo "mongod is not running" 1>&2
    exit 1
else
   echo "mongod is running" 1>&2
fi

