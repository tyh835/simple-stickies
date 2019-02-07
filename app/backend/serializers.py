from rest_framework import serializers
from backend.models import Note


class NoteSerializer(serializers.ModelSerializer):
    """Notes Model Serializer"""
    class Meta:
        model = Note
        fields = '__all__'
