from rest_framework.routers import DefaultRouter
from .views import FreelancersViewSet,ClientsViewSet,FreelancerProfileViewSet

freelancers_router = DefaultRouter()
freelancers_router.register(r'Freelancers',FreelancersViewSet)

clients_router = DefaultRouter()
clients_router.register(r'Clients',ClientsViewSet)

freelancer_profile_router = DefaultRouter()
freelancer_profile_router.register(r'FreelancerProfile',FreelancerProfileViewSet)

from .views import ContactViewSet

contact_router = DefaultRouter()
contact_router.register(r'contact', ContactViewSet, basename='contact')
