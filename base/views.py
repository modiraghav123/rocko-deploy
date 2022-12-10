from django.shortcuts import render
from django.http import HttpResponse
from phonenumbers import PhoneNumber
from .models import Team

def index(request):
    return render(request, 'base/rocko.html')

def basic_form(request):
    return render(request, 'base/forms.html')

def saveform(request):
    if request.method=="POST":

        print(request.POST)
        
        teamName=request.POST.get('teamName')
        city=request.POST.get('city')
        previousPerformance=request.POST.get('performance')
        name=request.POST.get('name')
        email=request.POST.get('email')
        phone=request.POST.get('phoneNumber')
        gender=request.POST.get('gender')
        # referal=request.POST.get('referal')
        team=Team(teamName=teamName,city=city,referalCode="referal",previousPerformance=previousPerformance, name=name,email=email,phoneNumber=phone,gender=gender)
        team.save()
        return render(request,'base/success.html')
        # leader=Member(isLeader=1,name=name,email=email,phoneNumber=phone,gender=gender,team=team)
        
        # leader.save()

        # noOfMembers = request.POST.get('no_of_members')
        # for i in range(0,int(noOfMembers)):
        #     name=request.POST.get(f"name_{i}")
        #     email=request.POST.get(f"email_{i}")
        #     phone=request.POST.get(f"phone_{i}")
        #     gender=request.POST.get(f"gender_{i}")
        #     member=Member(isLeader=0,name=name,email=email,phoneNumber=phone,gender=gender,team=team)
        #     member.save()



    return render(request, 'base/registration.html')
# def success(request):
#     return render(request,'base/success.html')

