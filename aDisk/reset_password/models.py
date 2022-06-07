from django.db import models

class ResetPassword(models.Model):
    user_id = models.IntegerField()
    token = models.CharField(max_length=8)

    def __str__(self):
        return self.token
    