from django.urls import path
from .views import CreateNewFolder, UploadNewFile, GetFiles, GetImagePreview

urlpatterns = [
    path('create_new_folder', CreateNewFolder.as_view()),
    path('upload_new_file', UploadNewFile.as_view()),
    path('get_files/<user_id>/<place>', GetFiles.as_view()),
    path('get_img_preview/<user_id>/<place>/<pic_dt>/<pic_size>/<pic_name>', GetImagePreview.as_view()),
]
