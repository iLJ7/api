#!/usr/bin/env python3

import os, time, requests
while True:

    hostname = "54.216.247.155" #example
    response = os.system("ping -c 1 " + hostname)

    #and then check the response...
    if response == 0:
        print(hostname, 'is up!')
    else:
        print(hostname, 'is down!')

    time.sleep(1)