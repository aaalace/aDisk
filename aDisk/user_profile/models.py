from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, default='')
    avatar = models.CharField(max_length=100, default='default.jpg')

    def __str__(self):
        return self.name
    