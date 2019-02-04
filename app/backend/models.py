from django.db import models


class Note(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    positionX = models.IntegerField(default=16)
    positionY = models.IntegerField(default=16)
    content = models.CharField(max_length=500, blank=True)
    title = models.CharField(max_length=50)
