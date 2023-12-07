from django.db import models

class Team_data(models.Model):
    team_name = models.CharField(max_length=255,null=True)
    city = models.CharField(max_length=105)
    prev_link = models.CharField(max_length=511)
    num_drummer = models.IntegerField()
    num_bassist = models.IntegerField()
    num_guitarist = models.IntegerField()
    num_vocalist = models.IntegerField()

    GENDER = (
        ('female','female'),
        ('male','male'),
        ('others','others')
    )

    leaders_name = models.CharField(max_length=255)
    leaders_gender = models.CharField( max_length=6,choices=GENDER)
    leaders_contact_number  = models.CharField(max_length = 11)
    leaders_email = models.EmailField( max_length=255)
    leader_drummer = models.BooleanField()
    leader_bassist = models.BooleanField()
    leader_guitarist = models.BooleanField()
    leader_vocalist = models.BooleanField()

    def _str_(self):
        return self.leaders_name
    

class Members_data(models.Model):

    team_leader = models.ForeignKey('Team_data', on_delete=models.CASCADE)

    GENDER = (
        ('female','Female'),
        ('male','Male'),
        ('others','Others')
    )

    members_name = models.CharField(max_length=255)
    members_gender = models.CharField( max_length=6,choices=GENDER)
    members_contact_number = models.CharField(max_length = 11)
    members_email = models.EmailField( max_length=255)
    member_drummer = models.BooleanField()
    member_bassist = models.BooleanField()
    member_guitarist = models.BooleanField()
    member_vocalist = models.BooleanField()

    def _str_(self):
        return self.members_name