from email.policy import default
from enum import unique
from unittest.util import _MAX_LENGTH
from django.db import models
from datetime import timedelta
import random
from django.utils import timezone

# Create your models here.
class Team(models.Model):
    teamName = models.CharField(max_length=124,null=True)
    city = models.CharField(max_length=50,null=True)
    previousPerformance=models.CharField(max_length=200,null=True)
    name = models.CharField(max_length=124,null=True)
    email = models.EmailField(blank=True,null=True,unique=True)
    phoneNumber = models.TextField(null=True,blank=True)
    gender = models.CharField(null=True,max_length=10)
    # otp = models.CharField(max_length=6,blank=True,null=True)
    # otp_created_at = models.DateTimeField(null=True, blank=True) 
    registration_successful= models.BooleanField(default=False)


    # def generate_otp(self):
    #     """Generates and saves a 6-digit OTP and the timestamp"""
    #     self.otp = str(random.randint(100000, 999999))
    #     self.otp_created_at = timezone.now()
    #     self.save()
    # def is_otp_valid(self):
    #     """Checks if the OTP is within the 5-minute validity window"""
    #     if self.otp_created_at:
    #         expiration_time = self.otp_created_at + timedelta(minutes=5)
    #         return timezone.now() <= expiration_time
    #     return False

    def __str__(self):
        return '%s' % (self.teamName)
# class Member(models.Model):
#     isLeader = models.BooleanField(default=0,null=True)
#     # id=models.OneToOneField(Team,primary_key=True,on_delete=models.CASCADE)
#     name = models.CharField(max_length=124,null=True)
#     email = models.EmailField(blank=True,null=True)
#     phoneNumber = models.TextField(null=True,blank=True)
#     gender = models.CharField(null=True,max_length=10)
#     team = models.ForeignKey(Team,null=True,max_length=124,on_delete=models.CASCADE)
#     def __str__(self):
#         return '%s' % (self.name)