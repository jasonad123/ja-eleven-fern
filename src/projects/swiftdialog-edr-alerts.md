---
title: swiftDialog EDR alerts
emoji: 🔒
date: 2024-10-10T21:17:00.000Z
summary: Using swiftDialog with an EDR solution to notify users whilst
  remediation is happening.
tags:
  - post
---
## The Opportunity

Through the course of my [macOS management](projects/macos-management-things/) work, I had a thought about the what a user may experience when our endpoint protection product encounters suspicious activity (threat, makes a detection, etc). What if there was a way to provide a "bold" response when something happens, appropriately scaled to the severity of the event, and would limit user interaction whilst remediation was going on?

### The examples

To the best of my knowledge, on macOS, there is a routine for Jamf Protect, the endpoint protection product

### The tools

In our case, we'd only really need two tools to make this happen - the notification product (swiftDialog) and the source of the endpoint detections/a way to deploy them.

**swiftDialog**

[swiftDialog](https://github.com/swiftDialog/swiftDialog), or just Dialog, is an amazing notification tool that no Mac admin should be without

**Crowdstrike** 

This organization uses Crowdstrike for next-gen antivirus and EDR and Crowdstrike provides us with two essential tools for making this work: Real-Time-Response (RTR) and Fusion SOAR.

The process

1. Prepare the scripts for each "threat severity level"
2. Test the scripts for the desired outcome
3. Upload to Crowdstrike as RTR scripts and make them available to Fusion
4. Use during RTR hands-on remediation (manual) and/or launch them on detection with Fusion (automatic)

Timeouts

To ensure that users don'
