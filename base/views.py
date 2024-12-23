from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Team
from django.core.mail import send_mail
from django.db import IntegrityError
from django.contrib import messages 
from django.utils import timezone

def registration(request):
    return render(request, 'base/registration.html')

def index(request):
    return render(request, 'base/index.html')

def basic_form(request):
    return render(request, 'base/forms.html')

def success(request):
    return render(request, 'base/success.html')


def saveform(request):
    if request.method == "POST":
        email = request.POST.get('email')
        print(email)
        if Team.objects.filter(email=email).exists():
         team = Team.objects.filter(email=email).first()
         team.teamName = request.POST.get('teamName')
         team.city = request.POST.get('city')
         team.previousPerformance = request.POST.get('performance')
         team.email = request.POST.get('email')
         team.name = request.POST.get('name')
         team.phoneNumber = request.POST.get('phoneNumber')
         team.gender = request.POST.get('gender')

         team.save()
         return render(request, 'base/success.html')
    return render(request, 'base/registration.html')

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

def send_otp(request):
    if request.method == "POST":
        email = request.POST.get('email')
        try:
            team, created = Team.objects.get_or_create(email=email)
            if team.otp and team.is_otp_valid():
            # If OTP exists and is valid, do not generate a new OTP or send email
             return JsonResponse({"status": "success", "message": "OTP already sent and valid!"})
            # Generate OTP and send email
            if created:
             team.generate_otp()
             print(f"Generated OTP: {team.otp} for email: {email}")
             send_mail(
                'Your OTP Code',
                f'Your OTP is {team.otp}',
                'sristi.alcheringa@gmail.com',  # Replace with your email
                [email],
                fail_silently=False,
             )
             team.save()
             return JsonResponse({"status": "success", "message": "OTP sent successfully!"})
             
            else:
                team.generate_otp()  
                team.save() 
                
                send_mail(
                    'Your OTP Code',
                    f'Your OTP is {team.otp}',
                    'sristi.alcheringa@gmail.com',  
                    [email],
                    fail_silently=False,
                )
           
            return JsonResponse({"status": "success", "message": "OTP sent successfully!"})
        
        except IntegrityError:
            return JsonResponse({"status": "error", "message": "Error creating a unique entry for this email."})
        except Exception as e:
            print(f"Unexpected error: {e}")
            return JsonResponse({"status": "error", "message": "An unexpected error occurred."})
    return JsonResponse({"status": "error", "message": "Invalid request"})
def verify_otp(request):
    if request.method == "POST":
        email = request.POST.get('email')
        otp_input = request.POST.get('otp')
        try:
            team = Team.objects.get(email=email)
            # Check if OTP matches and is within validity window
            if team.is_otp_valid() and team.otp == otp_input:
                team.registration_successful = True
                team.otp = None  # Clear OTP after successful verification
                team.otp_created_at = None  
                # Clear OTP timestamp
                team.save()
                return JsonResponse({"status": "success", "message": "OTP verified successfully!"})
            else:
                return JsonResponse({"status": "error", "message": "Invalid or expired OTP."})
        except Team.DoesNotExist:
            return JsonResponse({"status": "error", "message": "No team found for this email."})
    return JsonResponse({"status": "error", "message": "Invalid request"})
def register(request):
    if request.method == "POST":
        email = request.POST.get('email')
        
        try:
            # Fetch team if OTP verification and registration were successful
            team = Team.objects.get(email=email, registration_successful=True)
            
            # Update team information from request data
            team.teamName = request.POST.get('teamName') or team.teamName
            team.city = request.POST.get('city') or team.city
            team.previousPerformance = request.POST.get('performance') or team.previousPerformance
            team.name = request.POST.get('name') or team.name
            team.phoneNumber = request.POST.get('phoneNumber') or team.phoneNumber
            team.gender = request.POST.get('gender') or team.gender
            
            team.save()  
            messages.success(request, "Registration completed successfully!")
            return redirect('success')
        
        except Team.DoesNotExist:
        
            return JsonResponse({"status": "error", "message": "Please verify OTP before registering."})
    return JsonResponse({"status": "error", "message": "Invalid request"})

def rockodetails(request):
    # users_singles = Member.objects.all()
    teams = Team.objects.all()
    return render(request,'base/user_details.html',{'teams':teams})

