from rest_framework import serializers
from .models import ResetPassword

class ResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResetPassword
        fields = ('id', 'user_id', 'token')