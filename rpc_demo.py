#!/usr/bin/env python3
# -*- encoding:utf-8 -*-
"""
Created on Thursday February 09 17:34:07 2023
@author: El
"""

import sys
import frida


device = frida.get_usb_device()
# for i in device.enumerate_processes():
#     print(i)

session = device.attach("demo")

with open("rpc_func.js") as f:
    script = session.create_script(f.read())
def on_message(message, data):
    print(message)
    print(data)


script.on("message", on_message)
script.load()
# rpc 远程调用方法
script.exports.callsecretfunction()
sys.stdin.read()
