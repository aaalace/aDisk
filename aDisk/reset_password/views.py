from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.contrib.auth.models import User
from user.serializers import UserSerializer
from django.utils.crypto import get_random_string
from .utils.make_letter import make_letter_text, make_letter_name
from .models import ResetPassword
from .serializers import ResetPasswordSerializer

class SendResetView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request, format=None):
        try:
            data = self.request.data
            to_email = data['email']
            locale = data['locale']

            user = User.objects.filter(email=to_email)

            if user.exists():
                user = User.objects.get(email=to_email)
                user_objects = UserSerializer(user)

                user_id = user_objects.data['id']
                token = get_random_string(8)

                try:
                    name = make_letter_name(locale)
                    from_email = 'aDiskStrg@gmail.com'
                    message = make_letter_text(user_id, token, locale)

                    send_mail(
                        name,
                        message=message,
                        from_email=from_email, 
                        recipient_list=[to_email]
                    )

                    ResetPassword.objects.create(user_id=user_id, token=token)

                    return Response({'success': 'Email Sent'})
                except Exception as e:
                    print(e)
                    return Response({"error": 'Невозможно выслать сообщение на указанную почту'})
            return Response({"error": "Email doesn't exists"})

        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class CheckDBDependency(APIView):
    permission_classes = (AllowAny, )

    def post(self, request, format=None):
        try:
            data = self.request.data
            user_id = data['user_id']
            token = data['token']

            dependency = ResetPassword.objects.filter(user_id=user_id, token=token)

            if dependency.exists():
                return Response({"success": "Link is avaliable"})

            return Response({"error": "Link is not avaliable anymore"})

        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class ResetPasswordView(APIView):
    permission_classes = (AllowAny, )

    def put(self, request, format=None):
        try:
            data = self.request.data

            user_id = data['id']
            new_password = data['new_password']
            rep_password = data['rep_password']
            token = data['token']

            dependency = ResetPassword.objects.filter(user_id=user_id).all()

            if dependency.exists():
                dependency = ResetPassword.objects.filter(user_id=user_id)
                for dep in dependency:
                    dep = ResetPasswordSerializer(dep)
                    dep_token = dep.data['token']
                    if new_password == rep_password:
                        if token == dep_token:
                            dependency.delete()
                            user = User.objects.get(id=user_id)
                            user.set_password(new_password)
                            user.save()
                            return Response({'success': 'Password changed'})
                        return Response({'error': 'You can not do it anymore'})
                    return Response({'error': 'Diffenrent passwords'})
            return Response({'error': 'Diffenrent passwords'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})