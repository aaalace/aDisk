from django.urls import path
from .views import SendResetView, CheckDBDependency, ResetPasswordView

urlpatterns = [
    path('send_reset', SendResetView.as_view()),
    path('check_dependency', CheckDBDependency.as_view()),
    path('reset', ResetPasswordView.as_view())
]
