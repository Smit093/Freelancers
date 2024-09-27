from rest_framework.serializers import ModelSerializer
from ..models import Freelancers,Clients,FreelancerProfile,Contact
from rest_framework import serializers

class FreelancersSerializer(ModelSerializer):
    class Meta:
        model = Freelancers
        fields=('id','category','name','email','gender','password')

class ClientsSerializer(ModelSerializer):
    class Meta:
        model = Clients
        fields=('id','name','email','gender','password')

class FreelancerProfileSerializer(ModelSerializer):
    class Meta:
        model = FreelancerProfile
        fields = ('first_name', 'last_name', 'personal_description', 'professional_description','phone', 'email',
            'profile_pic', 'job_title', 'experience', 'skills', 'company',
            'display_image', 'basic_price', 'basic_features', 'standard_price',
            'standard_features', 'premium_price', 'premium_features')

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'created_at']