from django.db import models


# Create your models here.
class Message(models.Model):
    message = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
