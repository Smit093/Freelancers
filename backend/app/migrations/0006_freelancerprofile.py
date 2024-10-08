# Generated by Django 5.0.1 on 2024-09-23 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_clients'),
    ]

    operations = [
        migrations.CreateModel(
            name='FreelancerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('display_name', models.CharField(max_length=50)),
                ('personal_description', models.TextField()),
                ('phone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='profile_pics/')),
                ('job_title', models.CharField(max_length=100)),
                ('experience', models.IntegerField()),
                ('professional_description', models.TextField()),
                ('skills', models.TextField()),
                ('company', models.CharField(max_length=100)),
                ('display_image', models.ImageField(blank=True, null=True, upload_to='display_images/')),
                ('basic_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('basic_features', models.TextField(blank=True)),
                ('standard_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('standard_features', models.TextField(blank=True)),
                ('premium_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('premium_features', models.TextField(blank=True)),
            ],
        ),
    ]
