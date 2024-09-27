from rest_framework.routers import DefaultRouter
from app.api.urls import freelancers_router,clients_router,freelancer_profile_router,contact_router
from django.urls import path,include

router = DefaultRouter()

#Freelancers
router.registry.extend(freelancers_router.registry)

#Clients
router.registry.extend(clients_router.registry)

#Freelancer Profile
router.registry.extend(freelancer_profile_router.registry)

router.registry.extend(contact_router.registry)

urlpatterns =[
    path('',include(router.urls))
]