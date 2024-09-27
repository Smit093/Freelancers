from django.contrib import admin
from .models import Freelancers,Clients,FreelancerProfile,Contact
# Register your models here.

admin.site.register(Freelancers)
admin.site.register(Clients)
admin.site.register(FreelancerProfile)
admin.site.register(Contact)