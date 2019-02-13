from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    owner = models.ForeignKey(
        User, related_name="notes", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    positionX = models.IntegerField(default=16)
    positionY = models.IntegerField(default=16)
    color = models.CharField(max_length=12)
    content = models.TextField(max_length=500, blank=True)
    title = models.CharField(max_length=50)
