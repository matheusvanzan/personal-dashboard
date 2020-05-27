import imaplib
import email
from email.header import decode_header
import webbrowser
import os

# account credentials
username = "vanzan2015@gmail.com"
password = "jhaviikuanqemnnd"

# create an IMAP4 class with SSL 
imap = imaplib.IMAP4_SSL("imap.gmail.com")
# authenticate
imap.login(username, password)

# create an IMAP4 class with SSL 
imap = imaplib.IMAP4_SSL("imap.gmail.com")
# authenticate
imap.login(username, password)

status, messages = imap.select("INBOX")
# number of top emails to fetch
N = 1
# total number of emails
messages = int(messages[0])

for i in range(messages, messages-N, -1):
    # fetch the email message by ID
    res, msg = imap.fetch(str(i), "(RFC822)")
    
    print(res)
    print(len(msg))
    
    # parse a bytes email into a message object
    # msg_email = email.message_from_bytes(msg)
    # print(msg_email)
    # decode the email subject
    # subject = decode_header(msg_email["Subject"])
    # print(subject)