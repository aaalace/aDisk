from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.http import FileResponse
from .models import UserProfile
from .serializers import UserProfileSerializer
from user.serializers import UserSerializer
from validate_email import validate_email
from rest_framework.permissions import AllowAny
from aDisk.settings import STATICFILES_DIRS
from .utils.compressor import compressor
from .utils.delete_file import delete_file

class GetUserProfileView(APIView):
    permission_classes = (AllowAny, )

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

            return Response({
                'profile': user_profile.data, 
                'username': str(username), 
                'user_id': user_id, 
                'email': email, 
                'date_joined': date_joined, 
            })
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class UpdateUserProfileView(APIView):

    def put(self, request, format=None):
        try:
            user = self.request.user
            data = self.request.data

            username = data['username']
            email = data['email']
            name = data['name']

            if validate_email(email):
                if User.objects.exclude(id=user.id).filter(email=email).exists():
                    return Response({'error': 'email_is_already_in_use'})
                if User.objects.exclude(id=user.id).filter(username=username).exists():
                    return Response({'error': 'user_already_exists'})
                else:
                    UserProfile.objects.filter(user=user).update(name=name)
                    User.objects.filter(id=user.id).update(username=username, email=email)
                    return Response({'success': 'Data updated'})
            return Response({'error': 'email_does_not_exists'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class GetUserAvatar(APIView):
    permission_classes = (AllowAny, )
    
    def get(self, request, path, format=None,):
        try:
            img = open(STATICFILES_DIRS[0] + '/images/' +  path, 'rb')
            response = FileResponse(img)
            return response
        except Exception as e:
            print(e)
            img = open(STATICFILES_DIRS[0] + '/images/default.jpg', 'rb')
            response = FileResponse(img)
            return response


class UpdateUserAvatar(APIView):
    
    def put(self, request, format=None,):
        try:
            data = self.request.data

            response = compressor(data['b64'], data['user_id'])
            if response['status']:
                UserProfile.objects.filter(user_id=data['user_id']).update(avatar=response['name'])
                return Response({'success': 'Avatar updated', 'path': response['name']})
            return Response({'error': 'Can not save this file'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class DeleteUserAvatar(APIView):
    
    def put(self, request, format=None,):
        try:
            data = self.request.data
            user_id = data['user_id']

            delete_file(user_id)

            UserProfile.objects.filter(user_id=user_id).update(avatar='default.jpg')
            return Response({'success': 'Avatar deleted'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})

