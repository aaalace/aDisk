from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('user_profile/', include('user_profile.urls')),
    path('reset_password/', include('reset_password.urls')),
]
