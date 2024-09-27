from rest_framework.viewsets import ModelViewSet
from ..models import Freelancers,Clients,FreelancerProfile
from .serializers import FreelancersSerializer,ClientsSerializer,FreelancerProfileSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from ..models import Contact
from .serializers import ContactSerializer

class FreelancersViewSet(ModelViewSet):
    queryset = Freelancers.objects.all()
    serializer_class = FreelancersSerializer

class ClientsViewSet(ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer

class FreelancerProfileViewSet(ModelViewSet):
    queryset=FreelancerProfile.objects.all()
    serializer_class=FreelancerProfileSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response({"message": "Thank you for contacting us!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save()