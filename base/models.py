from email.policy import default
from enum import unique
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class Team(models.Model):
    teamName = models.CharField(max_length=124,null=True)
    city = models.CharField(max_length=50,null=True)
    referalCode = models.CharField(max_length=10,null=True)
    def __str__(self):
        return '%s' % (self.teamName)
class Member(models.Model):
    isLeader = models.BooleanField(default=0,null=True)
    # id=models.OneToOneField(Team,primary_key=True,on_delete=models.CASCADE)
    name = models.CharField(max_length=124,null=True)
    email = models.EmailField(blank=True,null=True)
    phoneNumber = models.TextField(null=True,blank=True)
    gender = models.CharField(null=True,max_length=10)
    team = models.ForeignKey(Team,null=True,max_length=124,on_delete=models.CASCADE)
    def __str__(self):
        return '%s' % (self.name)