from aDisk.settings import STATICFILES_DIRS
from rest_framework.views import APIView
from rest_framework.response import Response
import os
from datetime import datetime
from base64 import b64decode, b64encode

def create_user_folder(user_id):
    user_dir = STATICFILES_DIRS[0] + f'/{user_id}'
    os.mkdir(user_dir)
    os.mkdir(user_dir + '/private')
    os.mkdir(user_dir + '/shared')
    os.mkdir(user_dir + '/deleted')


def current_datetime():
    now = datetime.now()
    date_string = now.strftime("%d-%m-%Y_%H-%M-%S")
    return date_string


class CreateNewFolder(APIView):
    
    def post(self, request, format=None,):
        try:
            data = self.request.data
            
            user_id = data['user_id']
            folder_place = data['folder_place']
            folder_name = data['folder_name']

            dt = current_datetime()

            folder_dir = STATICFILES_DIRS[0] + f'/{user_id}/{folder_place}/{dt}#0#{folder_name}'
            try:
                os.mkdir(folder_dir)
                return Response({'success': 'Folder created'})
            except FileExistsError:
                return Response({'error': 'Folder exists'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class UploadNewFile(APIView):
    
    def post(self, request, format=None,):
        try:
            data = self.request.data
            
            user_id = data['user_id']
            folder_place = data['folder_place']
            name = data['name']
            b64 = data['b64']

            dt = current_datetime()      

            try:
                content = b64.split(',')[1]
                content = b64decode(content)

                file_size = len(content)
                file_dir = STATICFILES_DIRS[0] + f'/{user_id}/{folder_place}'
                file_name = f'{dt}#{str(file_size)}#{name}'
                completeName = os.path.join(file_dir, file_name)

                file = open(completeName, "wb")
                file.write(content)
                file.close()
                return Response({'success': 'Folder created'})
            except FileExistsError:
                return Response({'error': 'Folder exists'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})
