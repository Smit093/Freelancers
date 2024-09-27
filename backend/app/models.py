from django.db import models

class Freelancers(models.Model):
    CATEGORY_CHOICES = [
        ('Programming & Tech', 'Programming & Tech'),
        ('Graphics & Design', 'Graphics & Design'),
        ('Digital Marketing', 'Digital Marketing'),
        ('Writing & Translation', 'Writing & Translation'),
        ('Video & Animation', 'Video & Animation'),
        ('Music & Audio', 'Music & Audio'),
        ('Business', 'Business'),
        ('AI Services', 'AI Services')
    ]

    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=50)
    gender = models.CharField(max_length=20)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)

    def __str__(self):
        return f"Name: {self.name}"
    
class Clients(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=50)
    gender = models.CharField(max_length=20)

    def __str__(self):
        return f"Name: {self.name}"


class FreelancerProfile(models.Model):
    # Personal Info
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    personal_description = models.TextField()
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    # Professional Info
    job_title = models.CharField(max_length=100)
    experience = models.IntegerField()
    professional_description = models.TextField()
    skills = models.TextField()
    company = models.CharField(max_length=100)
    display_image = models.ImageField(upload_to='display_images/', blank=True, null=True)

    # Pricing info
    basic_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    basic_features = models.TextField(blank=True)
    standard_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    standard_features = models.TextField(blank=True)
    premium_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    premium_features = models.TextField(blank=True)

    def _str_(self):
        return self.display_name
    

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
