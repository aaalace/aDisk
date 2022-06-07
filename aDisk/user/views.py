from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.contrib import auth
from django.contrib.auth.models import User
from user_profile.models import UserProfile
from .serializers import UserSerializer
from validate_email import validate_email
from django.middleware.csrf import get_token


class CheckAuthenticatedView(APIView):

    def get(self, request, format=None):
        try:
            user = self.request.user

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

            email = data['email']
            username = data['username']
            password = data['password']
            re_password = data['re_password']
            
            if validate_email(email):
                if password == re_password:
                    if User.objects.filter(username=username).exists():
                        return Response({'error': 'user_already_exists'})
                    elif User.objects.filter(email=email).exists():
                        return Response({'error': 'email_is_already_in_use'})
                    else:
                        if len(password) < 8:
                            return Response({'error': 'password_characters'})
                        else:
                            user = User.objects.create_user(email=email, username=username, password=password)

                            user = User.objects.get(id=user.id)

                            UserProfile.objects.create(user=user, name='', user_id=user.id)
                            return Response({'success': 'User created'})
                return Response({'error': 'passwords_do_not_match'})
            return Response({'error': 'email_does_not_exists'})
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
                return Response({'success': 'User authenticated'})
            return Response({'error': 'user_not_authenticated'})
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
            return JsonResponse({'csrfToken': get_token(request)})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class DeleteAccountView(APIView):

    def delete(self, request, format=None):
        try:
            user = self.request.user
            User.objects.filter(id=user.id).delete()
            return Response(({'success': 'User deleted'}))
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class GetUsersView(APIView):
    permission_classes = (AllowAny, )

    def get(self, request, format=None):
        try:
            users = User.objects.all()
            users = UserSerializer(users, many=True)
            return Response(users.data)
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})

            
class ChangePasswordView(APIView):

    def put(self, request, format=None):
        try:
            data = self.request.data

            user_id = data['id']
            new_password = data['new_password']
            rep_password = data['rep_password']

            if new_password == rep_password:
                user = User.objects.get(id=user_id)
                user.set_password(new_password)
                user.save()
                return Response({'success': 'Password changed'})
            return Response({'error': 'Diffenrent passwords'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})
