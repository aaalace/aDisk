from django.shortcuts import render
from rest_framework import generics
from .serializer import UsersSerializer
from .models import Users

class UsersView(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
