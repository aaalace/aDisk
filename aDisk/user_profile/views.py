from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import UserProfileSerializer
from user.serializers import UserSerializer

class GetUserProfileView(APIView):

    def get(self, request, format=None):
        try:
            user = self.request.user

            user_model = User.objects.get(id=user.id)
            user_objects = UserSerializer(user_model)

            user_id = user_objects.data['id']
            username = user_objects.data['username']
            email = user_objects.data['email']
            date_joined = user_objects.data['date_joined'].split('T')[0]

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'username': str(username), 'user_id': user_id, 'email': email, 'date_joined': date_joined})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class UpdateUserProfileView(APIView):

    def put(self, request, format=None):
        try:
            user = self.request.user
            data = self.request.data

            first_name = data['first_name']
            last_name = data['last_name']

            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})
