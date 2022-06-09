import os
from aDisk.settings import STATICFILES_DIRS

def delete_file(user_id):
    name = f'{user_id}.jpg'
    path_from_cwd = f'/images/{name}'
    file_location = STATICFILES_DIRS[0] + path_from_cwd
    os.remove(file_location)