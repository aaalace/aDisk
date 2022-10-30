from aDisk.settings import STATICFILES_DIRS
from rest_framework.views import APIView
from rest_framework.response import Response
import os
from datetime import datetime
from base64 import b64decode, b64encode
from PIL import Image
from django.http import FileResponse
import codecs
from user_profile.models import UserProfile


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
                return Response({'success': 'Folder created', 'data': {'type': 'folder', 'format': 'folder', 'name': f"{dt}#0#{folder_name}"}})
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
                try:
                    im = Image.open(completeName)
                    item = {'type': 'image', 'format': name.split('.')[-1], 'name': file_name}
                except IOError:
                    if completeName.count('.') > 0:
                        item = {'type': 'file', 'format': name.split('.')[-1], 'name': file_name}
                    else:
                        item = {'type': 'folder', 'format': 'folder', 'name': file_name}
                return Response({'success': 'File created', 'data': item})
            except FileExistsError:
                return Response({'error': 'File exists'})
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'})


class GetFiles(APIView):
    
    def get(self, request, user_id, place, format=None):

        try:
            if place == 'files':
                place = 'private'
            if place == 'recent':
                place = 'private'

            folder_dir = STATICFILES_DIRS[0] + f'/{user_id}/{place}'
            dataset = os.listdir(folder_dir)

            data = {
                'folders': [],
                'files': []
            }

            for el in dataset:
                try:
                    im = Image.open(os.path.join(folder_dir, el))
                    item = {'type': 'image', 'format': el.split('.')[-1], 'name': el}
                    data['files'].append(item)
                except IOError:
                    if f'{folder_dir} + {el}'.count('.') > 0:
                        item = {'type': 'file', 'format': el.split('.')[-1], 'name': el}
                        data['files'].append(item)
                    else:
                        item = {'type': 'folder', 'format': 'folder', 'name': el}
                        data['folders'].append(item)
            return Response({'success': 'Files got', 'data': data})
        except Exception as e:
            return Response({'error': 'File not got'})


class GetImagePreview(APIView):
    
    def get(self, request, user_id, place, pic_dt, pic_size, pic_name, format=None):

        try:
            if place == 'files':
                place = 'private'
            if place == 'recent':
                place = 'private'
            img = open(STATICFILES_DIRS[0] + f'/{user_id}/{place}/{pic_dt}' + "#" + f'{pic_size}' + "#" + f'{pic_name}', 'rb')
            response = FileResponse(img)
            return response
        except Exception as e:
            print(e)
            return FileResponse('')