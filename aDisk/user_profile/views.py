from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import UserProfileSerializer

class GetUserProfileView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'username': username})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})

class UpdateUserProfileView(APIView):
    permission_classes = (IsAuthenticated, )

    def put(self, request, format=None):
        try:
            user = self.request.user
            data = self.request.data

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            first_name = data['first_name']
            last_name = data['last_name']
            prev_first_name = user_profile.data['first_name']
            prev_last_name = user_profile.data['last_name']

            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'prev_data': {'first_name': prev_first_name, 'last_name': prev_last_name}})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})
