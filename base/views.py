from django.shortcuts import render, redirect
from .models import Team_data, Members_data
from django.contrib import messages

def index(request):
    return render(request,'base/addmember.html')
def rockodetails(request):
    # users_singles = Member.objects.all()
    teams = Team_data.objects.all()
    return render(request,'base/user_details.html',{'teams':teams})
def register(request):

    if request.method == 'POST':
        data = request.POST

        team_name = data.get('team_name')
        city = data.get('city')
        prev_link = data.get('prev_link')
        num_drummer = data.get('num_drummer')
        num_bassist = data.get('num_bassist')
        num_guitarist = data.get('num_guitarist')
        num_vocalist = data.get('num_vocalist')



        leaders_name = data.get('leaders_name')
        leaders_gender = data.get('leaders_gender')
        leaders_contact_number  = data.get('leaders_contact_number')
        leaders_email = data.get('leaders_email')
        leader_drummer = data.get('drummer')=="on"
        print(leader_drummer)
        leader_bassist = data.get('bassist')=="on"
        leader_guitarist = data.get('guitarist')=="on"
        leader_vocalist = data.get('vocalist')=="on"



        members_name = data.getlist('members_name')
        members_gender = data.getlist('members_gender')
        members_contact_number = data.getlist('members_contact_number')
        members_email = data.getlist('members_email')
        member_drummer = data.getlist('member_drummer')
        member_bassist = data.getlist('member_bassist')
        member_guitarist = data.getlist('member_guitarist')
        member_vocalist = data.getlist('member_vocalist')

        Number_of_Members = len(members_name)

        team=Team_data(
            team_name = team_name,
            city = city,
            prev_link = prev_link,
            num_drummer = num_drummer,
            num_bassist = num_bassist,
            num_guitarist = num_guitarist,
            num_vocalist = num_vocalist,

            leaders_name = leaders_name,
            leaders_gender = leaders_gender,
            leaders_contact_number  = leaders_contact_number,
            leaders_email = leaders_email,
            leader_drummer = leader_drummer,
            leader_bassist = leader_bassist,
            leader_guitarist = leader_guitarist,
            leader_vocalist = leader_vocalist
            )
            

        team.save()

        for i in range(Number_of_Members):
            member = Members_data(
                team_leader = team,
                members_name = members_name[i],
                members_gender = members_gender[i],
                members_contact_number = members_contact_number[i],
                members_email = members_email[i],
                member_drummer = member_drummer[i]=="on",
                member_bassist = member_bassist[i]=="on",
                member_guitarist = member_guitarist[i]=="on",
                member_vocalist = member_vocalist[i]=="on"
            )

            member.save()
        messages.success(request, "Your Registeration is Successful")

        return redirect('index')        
    return render(request, 'base/rocko.html')