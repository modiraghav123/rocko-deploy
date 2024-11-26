import requests
import random
from django.conf import settings

def send_otp_to_phone(phone_number):
      try:
        otp= random.randInt(1000,9999)
        print(f'Sending OTP {otp} to {phone_number}')
        url=f'https://your-sms-api.com/send?phone={phone_number}&otp={otp}'
        response=requests.get(url)
        

        if response.status_code == 200:
            return otp
        else:
            print(f'Failed to send OTP: {response.text}')
            return None

      

      except Exception as e:
         print(f'Error sending OTP: {str(e)}')
         return None
