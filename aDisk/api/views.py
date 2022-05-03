from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.contrib import auth
from django.contrib.auth.models import User
from .models import UserProfile

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):

    def get(self, request, format=None):
        try:
            isAuthenticated = User.is_authenticated

            if isAuthenticated:
                return Response({'isAuthenticated': 'success'})
            return Response({'isAuthenticated': 'error'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})
            

@method_decorator(csrf_protect, name='dispatch')
class SignUpView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request, format=None):
        try:
            data = self.request.data
            username = data['username']
            password = data['password']
            re_password = data['re_password']
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({'error': 'User already exists'})
                else:
                    if len(password) < 8:
                        return Response({'error': 'Password must be at least 8 characters'})
                    else:
                        user = User.objects.create_user(username=username, password=password)
                        user.save()

                        user = User.objects.get(id=user.id)
                        user_profile = UserProfile(user=user, first_name='', last_name='', user_id=user.id)
                        user_profile.save()

                        return Response({'success': 'User created'})

            return Response({'error': 'Passwords do not match'})
        except:
            return Response({'error': 'Something went wrong'})

@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request, format=None):
        try:
            data = self.request.data

            username = data['username']
            password = data['password']

            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return Response({'success': 'User authenticated', 'username': username})
            return Response({'error': 'User is not authenticated'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})

class LogoutView(APIView):
    
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'success': 'Logged out successfully'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (AllowAny, )

    def get(self, request, format=None):
        try:
            return Response(({'success': 'Cookie set'}))
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})