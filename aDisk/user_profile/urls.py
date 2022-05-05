from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView

urlpatterns = [
    path('get_user_profile', GetUserProfileView.as_view()),
    path('update_user_profile', UpdateUserProfileView.as_view()),
]
