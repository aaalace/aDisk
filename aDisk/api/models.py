from django.db import models

class Users(models.Model):
    username = models.TextField(unique=True)
    email = models.EmailField(unique=True)
    password = models.TextField()