from django.db import models


class Note(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    deleted = models.BooleanField(default=False)
    positionX = models.IntegerField(default=16)
    positionY = models.IntegerField(default=16)
    text = models.CharField(max_length=500, blank=True)
    title = models.CharField(max_length=50)
